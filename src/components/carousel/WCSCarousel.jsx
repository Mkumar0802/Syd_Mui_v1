// src/components/carousel/WCSCarousel.jsx
import React, { useRef, useState, useEffect, useCallback, memo } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Container } from "@mui/material";
import ArrowButton from "../buttons/NavigationLR";

import CSCard from "../cards/CSCard/CSCard";

const WCSCarousel = memo(function WCSCarousel({
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

  const scrollToIndex = useCallback((index) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const clamped = Math.max(0, Math.min(index, lastIndex));

    const left =
      clamped === lastIndex
        ? Math.max(0, track.scrollWidth - track.clientWidth)
        : Math.round(clamped * slideWidthPx);

    track.scrollTo({ left, behavior: "smooth" });
    setCurrentIndex(clamped);
  }, [lastIndex, slideWidthPx]);

  const handleNext = useCallback(() => scrollToIndex(currentIndex + 1), [currentIndex, scrollToIndex]);
  const handlePrev = useCallback(() => scrollToIndex(currentIndex - 1), [currentIndex, scrollToIndex]);

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
  }, [handlePrev, handleNext]);

  const slideWidthPct = `${100 / visibleCount}%`;

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        pt: 0,

        mt: "0 !important",
      }}
    >

      <Container maxWidth={false} disableGutters>
        {/* HEADER */}
        {(title || description) && (
          <Box sx={{ mb: 4, textAlign: { xs: "center", md: "left" } }}>
            {title && (
              <Typography
                sx={{
                  fontFamily: '"Microsoft JhengHei UI", sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: "24px", md: "32px" },
                  mb: 1.5,
                  color: "#000000",
                }}
              >
                {title}
              </Typography>
            )}
            {description && (
              <Typography
                sx={{
                  fontFamily: '"Segoe UI", sans-serif',
                  fontSize: { xs: "15px", md: "17px" },
                  lineHeight: 1.6,
                  color: "#000000",
                  maxWidth: "800px",
                  mx: { xs: "auto", md: 0 },
                }}
              >
                {description}
              </Typography>
            )}
          </Box>
        )}

        {/* TRACK */}
        <Box
          ref={trackRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            gap: { xs: 2.5, md: 3 },
            pb: 2,
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
                alignItems: "stretch",
              }}
            >
              <CSCard
                image={item.image}
                title={item.h3 || item.title}
                description={item.body || item.description}
                ctaLabel={item.ctaLabel}
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
          ))}
        </Box>

        {/* BOTTOM NAVIGATION */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <ArrowButton
              direction="left"
              onClick={handlePrev}
              sx={{
                bgcolor: "#8A38F5",
                color: "white",
                "&:hover": { bgcolor: "#7a2ee3" },
              }}
            />

            <ArrowButton
              direction="right"
              onClick={handleNext}
              sx={{
                bgcolor: "#8A38F5",
                color: "white",
                "&:hover": { bgcolor: "#7a2ee3" },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
});

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

export default WCSCarousel;