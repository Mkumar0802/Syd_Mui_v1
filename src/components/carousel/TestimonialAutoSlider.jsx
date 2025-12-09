import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import ArrowButton from "../buttons/NavigationLR";
import TestimonialCardBCVC from "../cards/TestimonialCardBCVC/TestimonialCardBCVC";

/**
 * TestimonialAutoSlider
 * - One card per slide + small preview
 * - Autoplays every 3s, loops to start
 * - Pauses on hover, restarts on manual interaction
 */
export default function TestimonialAutoSlider({ items = [], title = "Client Testimonials", preview = 0.1, autoplayMs = 3000 }) {
    const trackRef = useRef(null);
    const autoplayRef = useRef(null);
    const userInteractedRef = useRef(false);
    const [visibleCount, setVisibleCount] = useState(1 + preview); // e.g. 1.1
    const [slideWidthPx, setSlideWidthPx] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(Math.max(0, items.length - 1));
    const [isHovering, setIsHovering] = useState(false);

    // Keep visibleCount fixed (one card + preview) across breakpoints,
    // but recompute slideWidthPx when container resizes.
    const updateLayout = useCallback(() => {
        const vc = 1 + Number(preview || 0); // ensure numeric
        setVisibleCount(vc);

        if (trackRef.current) {
            const trackW = trackRef.current.clientWidth;
            const slidePx = trackW / vc;
            setSlideWidthPx(slidePx);

            const visibleFull = Math.floor(vc); // should be 1
            const computedLast = Math.max(0, items.length - visibleFull);
            setLastIndex(computedLast);
            setCurrentIndex((prev) => Math.min(prev, computedLast));
        }
    }, [items.length, preview]);

    useEffect(() => {
        updateLayout();
        window.addEventListener("resize", updateLayout);
        return () => window.removeEventListener("resize", updateLayout);
    }, [updateLayout]);

    // Scroll logic: left position for given leftmost index
    const scrollToIndex = useCallback(
        (index) => {
            if (!trackRef.current || slideWidthPx <= 0) return;
            const track = trackRef.current;
            const clamped = Math.max(0, Math.min(index, lastIndex));

            const left =
                clamped === lastIndex ? Math.max(0, track.scrollWidth - track.clientWidth) : Math.round(clamped * slideWidthPx);

            track.scrollTo({ left, behavior: "smooth" });
            setCurrentIndex(clamped);
        },
        [slideWidthPx, lastIndex]
    );

    const next = useCallback(() => {
        if (currentIndex >= lastIndex) scrollToIndex(0); // loop
        else scrollToIndex(currentIndex + 1);
    }, [currentIndex, lastIndex, scrollToIndex]);

    const prev = useCallback(() => {
        if (currentIndex <= 0) scrollToIndex(lastIndex);
        else scrollToIndex(currentIndex - 1);
    }, [currentIndex, lastIndex, scrollToIndex]);

    // Track manual scroll -> update currentIndex and mark interaction
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        let raf = null;
        const onScroll = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                if (slideWidthPx <= 0) return;
                const idx = Math.round(el.scrollLeft / slideWidthPx);
                const clamped = Math.max(0, Math.min(idx, lastIndex));
                setCurrentIndex(clamped);
                userInteractedRef.current = true;
                // restart autoplay when user interacts is handled by restartAutoplay()
            });
        };
        el.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            el.removeEventListener("scroll", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [slideWidthPx, lastIndex]);

    // Autoplay control
    const clearAutoplay = useCallback(() => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    }, []);

    const startAutoplay = useCallback(() => {
        clearAutoplay();
        // don't start autoplay when hovering
        if (isHovering) return;
        autoplayRef.current = setInterval(() => {
            next();
        }, Math.max(500, autoplayMs));
    }, [next, autoplayMs, clearAutoplay, isHovering]);

    // Restart autoplay after a manual interaction
    const restartAutoplay = useCallback(() => {
        userInteractedRef.current = true;
        clearAutoplay();
        // small delay before restarting so UX feels natural
        setTimeout(() => {
            startAutoplay();
        }, 800);
    }, [clearAutoplay, startAutoplay]);

    // Start autoplay initially
    useEffect(() => {
        startAutoplay();
        return () => clearAutoplay();
    }, [startAutoplay, clearAutoplay]);

    // Pause on hover
    useEffect(() => {
        if (isHovering) clearAutoplay();
        else startAutoplay();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isHovering]);

    // slide width percentage used for flex-basis
    const slideWidthPct = `${100 / visibleCount}%`;

    return (
        <Box sx={{ width: "100%", py: { xs: 3, md: 5 } }}>
            <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center", mb: 3 }}>
                {title}
            </Typography>

            {/* TRACK */}
            <Box
                ref={trackRef}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                sx={{
                    display: "flex",
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                    gap: 3,
                    px: 2,
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {items.map((it, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            flex: `0 0 ${slideWidthPct}`,
                            scrollSnapAlign: "start",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <TestimonialCardBCVC
                            logoSrc={it.logoSrc}
                            quote={it.quote}
                            badgeText={it.badgeText}
                            company={it.company}
                            width="100%"     // card should accept fluid width
                            height={283}
                        />
                    </Box>
                ))}
            </Box>

            {/* CONTROLS */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
                <ArrowButton
                    direction="left"
                    onClick={() => {
                        prev();
                        restartAutoplay();
                    }}
                    disabled={items.length <= 1}
                />
                <ArrowButton
                    direction="right"
                    onClick={() => {
                        next();
                        restartAutoplay();
                    }}
                    disabled={items.length <= 1}
                />
            </Box>

            {/* DOTS */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1.3, mt: 2 }}>
                {Array.from({ length: Math.max(1, lastIndex + 1) }).map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => {
                            scrollToIndex(i);
                            restartAutoplay();
                        }}
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            bgcolor: currentIndex === i ? "primary.main" : "#ccc",
                            cursor: "pointer",
                            transition: "0.15s",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}

TestimonialAutoSlider.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string,
    preview: PropTypes.number, // fraction of preview (0.1 = 10%)
    autoplayMs: PropTypes.number,
};
