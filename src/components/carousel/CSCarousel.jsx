// src/components/carousel/CSCarousel.jsx
import React, { useRef, useState, useEffect, useCallback, memo } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import CSCard from "../cards/CSCard/CSCard";
import ArrowButton from "../buttons/NavigationLR";
import ButtonPE from "../buttons/ButtonPE";

const CSCarousel = memo(function CSCarousel({
  items = [],
  title,
  description,
  containerWidth = "lg",
}) {
  const trackRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(3.35);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [slideWidthPx, setSlideWidthPx] = useState(0);

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

      const visibleFull = Math.floor(visible);
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

    let left;
    if (clamped === lastIndex) {
      left = Math.max(0, track.scrollWidth - track.clientWidth);
    } else {
      left = Math.round(clamped * slideWidthPx);
    }

    track.scrollTo({ left, behavior: "smooth" });
    setCurrentIndex(clamped);
  }, [lastIndex, slideWidthPx]);

  const handleNext = useCallback(() => scrollToIndex(currentIndex + 1), [currentIndex, scrollToIndex]);
  const handlePrev = useCallback(() => scrollToIndex(currentIndex - 1), [currentIndex, scrollToIndex]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf = null;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollLeft = el.scrollLeft;
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
    <Box component="section" sx={{ width: "100%", position: "relative" }}>

      {title && (
        <Typography
          sx={{
            color: "#000000",
            textAlign: { xs: "center", sm: "left" },
            fontFamily: '"Microsoft JhengHei UI", sans-serif',
            fontWeight: 500,
            fontSize: {
              xs: "24px",
              sm: "28px",
              md: "32px",
            },
            lineHeight: 1.2,
            mb: 1.5,
          }}>
          {title}
        </Typography>
      )}

      {/* DESCRIPTION */}
      {description && (
        <Typography
          sx={{
            mb: 4,
            fontFamily: '"Segoe UI", sans-serif',
            fontWeight: 400,
            fontSize: { xs: "15px", md: "17px" },
            lineHeight: 1.6,
            color: "#000000",
            maxWidth: "800px",
            textAlign: { xs: "center", sm: "left" },
            mx: { xs: "auto", sm: 0 },
          }}
        >
          {Array.isArray(description) ? description.join(" ") : description}
        </Typography>
      )}

      {/* TRACK AREA - with padding for card shadows/borders */}
      <Box
        ref={trackRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          gap: { xs: 2, md: 3 },
          pb: 2, // space for shadows if any
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {items.map((it) => (
          <Box
            key={it.id}
            sx={{
              flex: `0 0 ${slideWidthPct}`,
              scrollSnapAlign: "start",
              display: "flex",
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

      {/* Bottom Controls */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          mt: 4,
          gap: 3
        }}
      >
        <ButtonPE
          label="Explore what we do"
          onClick={() => console.log("Explore CTA clicked")}
          sx={{ width: { xs: "100%", sm: "auto" } }}
        />

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <ArrowButton
            direction="left"
            onClick={handlePrev}
            sx={{
              bgcolor: "#8A38F5",
              color: "white",
              "&:hover": { bgcolor: "#7a2ee3" }
            }}
          />

          <ArrowButton
            direction="right"
            onClick={handleNext}
            sx={{
              bgcolor: "#8A38F5",
              color: "white",
              "&:hover": { bgcolor: "#7a2ee3" }
            }}
          />
        </Box>
      </Box>

    </Box>
  );
});

CSCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default CSCarousel;
