// src/components/hero/HeroWithDots.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack, Button } from "@mui/material";
import SXContainer from "../layout/SXContainer";

/**
 * HeroWithDots - hero section with left-aligned content, gradient overlay and optional overlay image.
 *
 * Props:
 *  - background: url string for the hero photo
 *  - overlayImage: optional decorative image (like HeroBanner.overlayImage)
 *  - eyebrow: small uppercase label (string)
 *  - title: string or array of strings (each array item renders as its own line)
 *  - caption: optional paragraph below title
 *  - contentWidth: width for the left content column (string or object)
 *  - showDots: true|false to show decorative dots (keeps API from original)
 *  - buttons: optional array of { label, onClick, variant } - variant forwarded to MUI Button
 */
export default function HeroWithDots({
  background,
  overlayImage,
  eyebrow = "WHY CHOOSE US",
  title = ["Why Business", "Choose SYD"],
  caption = "",
  contentWidth = { xs: "92%", sm: "86%", md: "480px" },
  showDots = true,
  buttons = [],
}) {
  // Normalize title to array of lines
  const titleLines = Array.isArray(title) ? title : String(title).split("\n");

  return (
    <Box
      component="section"
      aria-label="Hero - trusted by brands"
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 420, sm: 480, md: 520 },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundImage: background ? `url(${background})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient overlay to match HeroBanner */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.75) 10%, rgba(0,0,0,0.0) 60%)",
          zIndex: 2,
        }}
      />

      {/* Optional overlay image (centered, non-interactive) */}
      {overlayImage && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${overlayImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            pointerEvents: "none",
            zIndex: 3,
            opacity: { xs: 0.5, md: 0.9 },
          }}
        />
      )}

      {/* Optional decorative dots on the far right */}
      {showDots && (
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            right: { xs: -20, sm: 8, md: 32 },
            top: { xs: 40, sm: 60, md: 80 },
            width: { xs: 80, sm: 120, md: 160 },
            height: "auto",
            zIndex: 4,
            opacity: 0.24,
            // replace with your SVG or background image for dots if you prefer
            background:
              "radial-gradient(circle at 10% 10%, rgba(255,255,255,0.14) 0, rgba(255,255,255,0.0) 20%)",
            backgroundSize: "12px 12px",
            backgroundRepeat: "repeat",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Left content column (sits above overlays) */}
      <SXContainer
        maxWidth="xl"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 5,
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Box sx={{ width: contentWidth }}>
          {/* Eyebrow */}
          {eyebrow && (
            <Typography
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontFamily: `"Microsoft JhengHei UI", "Segoe UI", sans-serif`,
                fontWeight: 700,
                fontSize: { xs: "12px", sm: "13px", md: "14px" },
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                mb: { xs: 1, sm: 1.25 },
              }}
            >
              {eyebrow}
            </Typography>
          )}

          {/* Title lines */}
          <Stack spacing={0} sx={{ mb: caption ? 2 : 3 }}>
            {titleLines.map((line, i) => (
              <Typography
                key={i}
                sx={{
                  color: "#FFFFFF",
                  fontFamily: `"Microsoft JhengHei UI", "Segoe UI", sans-serif`,
                  fontWeight: 700,
                  fontSize: {
                    xs: "28px",
                    sm: "36px",
                    md: "48px",
                    lg: "56px",
                  },
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  // Prevent overflow on narrow devices
                  wordBreak: "break-word",
                }}
              >
                {line}
              </Typography>
            ))}
          </Stack>

          {/* Caption */}
          {caption && (
            <Typography
              sx={{
                color: "rgba(255,255,255,0.92)",
                mb: 3,
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                lineHeight: 1.6,
                maxWidth: { xs: "100%", md: "85%" },
              }}
            >
              {caption}
            </Typography>
          )}

          {/* Buttons */}
          {buttons.length > 0 && (
            <Stack direction="row" spacing={2} flexWrap="wrap">
              {buttons.map((b, idx) => (
                <Button
                  key={idx}
                  variant={b.variant || "contained"}
                  onClick={b.onClick || (() => {})}
                  sx={{
                    minWidth: 120,
                    mt: { xs: 0.5, sm: 0 },
                  }}
                >
                  {b.label}
                </Button>
              ))}
            </Stack>
          )}
        </Box>
      </SXContainer>
    </Box>
  );
}

HeroWithDots.propTypes = {
  background: PropTypes.string,
  overlayImage: PropTypes.string,
  eyebrow: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  caption: PropTypes.string,
  contentWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  showDots: PropTypes.bool,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      onClick: PropTypes.func,
      variant: PropTypes.oneOf(["text", "contained", "outlined"]),
    })
  ),
};
