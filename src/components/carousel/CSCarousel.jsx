// src/components/carousel/CSCarousel.jsx
import React, { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Box, Container, Typography } from "@mui/material";
import CSCard from "../cards/CSCard/CSCard"; // adjust path if necessary
import ArrowButton from "../buttons/NavigationLR"; // adjust path if necessary
import ButtonPE from "../buttons/ButtonPE";

/**
 * CSCarousel (one-card paging)
 *
 * Shows N full cards + 35% preview of the next (responsive).
 * Arrow buttons advance by one card (not by a full viewport).
 *
 * When the leftmost index reaches the lastIndex, the carousel snaps to the end
 * so the final card is fully visible.
 *
 * Gesture ID: data-gesture="16S" applied to arrows.
 */
export default function CSCarousel({
  items = [],
  title,
  description,
  containerWidth = "lg",
}) {
  const trackRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(3.35); // decimal visible cards (3 full + 0.35 preview)
  const [currentIndex, setCurrentIndex] = useState(0); // leftmost visible card index
  const [lastIndex, setLastIndex] = useState(0); // maximum leftmost index allowed (so final card(s) fully visible)
  const [slideWidthPx, setSlideWidthPx] = useState(0); // one slide width in px

  // Compute responsive visibleCount and slide width
  const updateLayout = useCallback(() => {
    const w = window.innerWidth;
    let visible = 3.35;
    if (w < 600) visible = 1.35;
    else if (w < 960) visible = 2.35;
    else visible = 3.35;
    setVisibleCount(visible);

    if (trackRef.current) {
      const trackClientWidth = trackRef.current.clientWidth;
      const slidePx = trackClientWidth / visible;
      setSlideWidthPx(slidePx);

      // Use number of fully visible cards for the last index calculation
      const visibleFull = Math.floor(visible); // e.g. 3 for 3.35
      const computedLast = Math.max(0, items.length - visibleFull);
      setLastIndex(computedLast);

      // clamp currentIndex
      setCurrentIndex((prev) => Math.min(prev, computedLast));
    }
  }, [items.length]);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  // scroll to a specific index (leftmost card index)
  const scrollToIndex = (index) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const clamped = Math.max(0, Math.min(index, lastIndex));

    let left;
    // If we're moving to the final allowed index, align to the very end so last card(s) fully visible
    if (clamped === lastIndex) {
      // scrollWidth - clientWidth is the right-most scroll position
      left = Math.max(0, track.scrollWidth - track.clientWidth);
    } else {
      left = Math.round(clamped * slideWidthPx);
    }

    track.scrollTo({ left, behavior: "smooth" });
    setCurrentIndex(clamped);
  };

  // next/prev move by 1 card
  const handleNext = () => {
    scrollToIndex(currentIndex + 1);
  };
  const handlePrev = () => {
    scrollToIndex(currentIndex - 1);
  };

  // keep currentIndex in sync while user scrolls manually
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = null;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollLeft = el.scrollLeft;
        // compute nearest index by dividing by slideWidthPx
        if (slideWidthPx > 0) {
          const idx = Math.round(scrollLeft / slideWidthPx);
          const clamped = Math.max(0, Math.min(idx, lastIndex));
          setCurrentIndex(clamped);
        }
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [slideWidthPx, lastIndex]);

  // keyboard controls
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // slide width percentage for flex basis (keeps preview)
  const slideWidthPct = `${100 / visibleCount}%`;

  return (
    <Box component="section" sx={{ width: "100%", position: "relative", py: { xs: 4, md: 6 } }}>
     
        {title && (
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
            {description}
          </Typography>
        )}

        {/* TRACK */}
        <Box
          ref={trackRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            gap: 3,
            px: 0,
            "&::-webkit-scrollbar": { height: 8, display: "none" },
          }}
        >
          {items.map((it) => (
            <Box
              key={it.id}
              sx={{
                flex: `0 0 ${slideWidthPct}`,
                scrollSnapAlign: "start",
                display: "flex",
                p: 0,
                boxSizing: "border-box",
                alignItems: "stretch",
              }}
            >
              <CSCard
                image={it.image}
                title={it.title}
                description={it.description}
                ctaLabel={it.ctaLabel}
                onCta={it.onCta}
                sx={{ width: "100%" }}
              />
            </Box>
          ))}
        </Box>

        {/* Controls: Explore on the LEFT, Arrows on the RIGHT */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 3 }}>
          {/* Left: Explore CTA */}
          <Box>
            <ButtonPE label="Explore what we do" onClick={() => console.log("Explore CTA clicked")} />
          </Box>

          {/* Right: Arrow buttons */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <ArrowButton
              direction="left"
              onClick={handlePrev}
              sx={{ bgcolor: currentIndex === 0 ? "#8A38F5" : "#8A38F5" }}
              disabled={currentIndex === 0}
              data-gesture="16S"
            />

            <ArrowButton
              direction="right"
              onClick={handleNext}
              sx={{ bgcolor: currentIndex >= lastIndex ? "#8A38F5" : "#8A38F5" }}
              disabled={currentIndex >= lastIndex}
              data-gesture="16S"
            />
          </Box>
        </Box>

        {/* Dots (represent leftmost index positions) */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 2 }}>
          {Array.from({ length: Math.max(1, lastIndex + 1) }).map((_, idx) => (
            <Box
              key={idx}
              onClick={() => scrollToIndex(idx)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: currentIndex === idx ? "primary.main" : "divider",
                cursor: "pointer",
              }}
              role="button"
              tabIndex={0}
              aria-label={`Go to position ${idx + 1}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") scrollToIndex(idx);
              }}
            />
          ))}
        </Box>
   
    </Box>
  );
}

CSCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
