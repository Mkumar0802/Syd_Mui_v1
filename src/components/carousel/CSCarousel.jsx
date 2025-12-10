// src/components/carousel/CSCarousel.jsx
import React, { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import CSCard from "../cards/CSCard/CSCard";
import ArrowButton from "../buttons/NavigationLR";
import ButtonPE from "../buttons/ButtonPE";

export default function CSCarousel({
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

  const scrollToIndex = (index) => {
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
  };

  const handleNext = () => scrollToIndex(currentIndex + 1);
  const handlePrev = () => scrollToIndex(currentIndex - 1);

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
  });

  const slideWidthPct = `${100 / visibleCount}%`;

  return (
    <Box component="section" sx={{ width: "100%", position: "relative"}}>

      {title && (
        <Typography
          sx={{
            color: "#000000",
            textAlign: { xs: "center", sm: "left" },
            wordBreak: "break-word",
            fontFamily: `"Microsoft JhengHei UI", sans-serif`,
            fontWeight: 500,
            fontSize: {
              xs: "28px",
              sm: "28px",
              md: "32px",
              lg: "32px",
            },
            lineHeight: "100%",
            letterSpacing: "0px",
          }}>
          {title}
        </Typography>
      )}

      {/* DESCRIPTION */}
      {description && (
        Array.isArray(description) ? (
          <Box sx={{ mb: 3, mt: 1 }}>
            {description.map((line, i) => (
              <Typography key={i} sx={{ color: "text.primary", mb: i < description.length - 1 ? 0.5 : 0 }}>
                {line}
              </Typography>
            ))}
          </Box>
        ) : (
          <Typography
            sx={{

              mb: 3,
              fontFamily: `"Segoe UI", sans-serif`,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: { xs: "14px", sm: "15px", md: "17px" },
              lineHeight: { xs: "20px", sm: "21px", md: "29px" },
              letterSpacing: "0%",
              whiteSpace: "pre-line",
              color: "#000000ff",

            }}
          >
            {description}
          </Typography>

        )
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

      {/* Bottom Controls */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: { xs: 2, md: 4 } }}>
        <Box>
          <ButtonPE label="Explore what we do" onClick={() => console.log("Explore CTA clicked")} />
        </Box>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <ArrowButton
            direction="left"
            onClick={handlePrev}
            data-gesture="16S"
            sx={{
              bgcolor: "#8A38F5",
              opacity: 1,
            }}
          />

          <ArrowButton
            direction="right"
            onClick={handleNext}
            data-gesture="16S"
            sx={{
              bgcolor: "#8A38F5",
              opacity: 1,
            }}
          />
        </Box>

      </Box>

    </Box>
  );
}

CSCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
