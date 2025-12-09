// src/components/carousel/WCSCarousel.jsx
import React, { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Container } from "@mui/material";
import ArrowButton from "../buttons/NavigationLR";

import CSCard from "../cards/CSCard/CSCard";

export default function WCSCarousel({
  items = [],
  title,
  description,
  containerWidth = "lg",
}) {
  const trackRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(2.35);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [slideWidthPx, setSlideWidthPx] = useState(0);

  const updateLayout = useCallback(() => {
    const w = window.innerWidth;
    const vc = w < 600 ? 1.35 : 2.35;
    setVisibleCount(vc);

    if (trackRef.current) {
      const trackW = trackRef.current.clientWidth;
      const slidePx = trackW / vc;
      setSlideWidthPx(slidePx);

      const visibleFull = Math.floor(vc);
      const computedLast = Math.max(0, items.length - visibleFull);
      setLastIndex(computedLast);
      setCurrentIndex((prev) => Math.min(prev, computedLast));
    }
  }, [items.length]);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  const scrollToIndex = (index) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const clamped = Math.max(0, Math.min(index, lastIndex));

    const left =
      clamped === lastIndex
        ? Math.max(0, track.scrollWidth - track.clientWidth)
        : Math.round(clamped * slideWidthPx);

    track.scrollTo({ left, behavior: "smooth" });
    setCurrentIndex(clamped);
  };

  const handleNext = () => scrollToIndex(currentIndex + 1);
  const handlePrev = () => scrollToIndex(currentIndex - 1);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let rafId = null;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (slideWidthPx <= 0) return;
        const idx = Math.round(el.scrollLeft / slideWidthPx);
        const clamped = Math.max(0, Math.min(idx, lastIndex));
        setCurrentIndex(clamped);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [slideWidthPx, lastIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIndex, lastIndex, slideWidthPx]);

  const slideWidthPct = `${100 / visibleCount}%`;

  return (
    <Box component="section" sx={{ width: "100%", pt: 0, pb: { xs: 4, md: 6, mt: "0 !important" } }}>
      <Container maxWidth={containerWidth} disableGutters>
        {/* HEADER */}
        <Box sx={{ mb: 3 }}>
          {title && (
            <Typography sx={{ fontWeight: 700, fontSize: "28px", mb: 1 }}>{title}</Typography>
          )}
          {description && (
            <Typography sx={{ fontSize: "14px", color: "text.secondary" }}>
              {description}
            </Typography>
          )}
        </Box>

        {/* TRACK */}
        <Box
          ref={trackRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            gap: 3,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                flex: `0 0 ${slideWidthPct}`,
                scrollSnapAlign: "start",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                boxSizing: "border-box",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <CSCard
                  image={item.image}
                  title={item.h3 || item.title}
                  description={item.body || item.description}
                  ctaLabel={item.ctaLabel || "Learn more"}
                  onCta={() => {
                    if (typeof item.onClick === "function") {
                      item.onClick(item);
                    } else if (item.href) {
                      window.open(item.href, "_blank", "noopener");
                    } else {
                      console.log("CSCard CTA clicked:", item.id ?? item.title);
                    }
                  }}
                  sx={{ width: "100%" }}
                />
              </Box>
            </Box>
          ))}
        </Box>

        {/* BOTTOM CONTROLS - Dots centered, navigation on right */}
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
          position: "relative" // Added for absolute centering
        }}>
          {/* DOTS - Centered absolutely */}
          <Box sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1.5
          }}>
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
                  transition: "background-color 0.2s ease",
                  "&:hover": {
                    bgcolor: currentIndex === idx ? "primary.dark" : "action.hover",
                  },
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") scrollToIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </Box>

          {/* NAVIGATION BUTTONS - Right side */}
          <Box sx={{ display: "flex", gap: 2, ml: "auto" }}>
            <ArrowButton
              direction="left"
              onClick={handlePrev}
              data-gesture="16S"
              disabled={currentIndex === 0}
              sx={{
                bgcolor: "#8A38F5",
                opacity: currentIndex === 0 ? 0.32 : 1,
              }}
            />
            <ArrowButton
              direction="right"
              onClick={handleNext}
              data-gesture="16S"
              disabled={currentIndex >= lastIndex}
              sx={{
                bgcolor: "#8A38F5",
                opacity: currentIndex >= lastIndex ? 0.32 : 1,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

WCSCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

WCSCarousel.defaultProps = {
  items: [],
  title: undefined,
  description: undefined,
  containerWidth: "lg",
};