// src/components/hero/HeroWithDots.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack, Button } from "@mui/material";
import SXContainer from "../layout/SXContainer";

export default function HeroWithDots({
  background,
  overlayImage,
  eyebrow = "",
  title = [],
  caption = "",
  buttons = [],
}) {
  const titleLines = Array.isArray(title)
    ? title
    : String(title).split("\n");

  const captionLines = Array.isArray(caption)
    ? caption
    : String(caption).split("\n");

  return (
    <Box
      component="section"
      aria-label="Hero section"
      sx={{
        width: "100%",
        position: "relative",
        minHeight: { xs: "80vh", sm: "85vh", md: "90vh", lg: "100vh" },
        display: "flex",
        alignItems: "center",
        backgroundImage: background ? `url(${background})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      {/* Optional overlay image */}
      {overlayImage && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${overlayImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            pointerEvents: "none",
            zIndex: 2,
            opacity: { xs: 0.5, md: 0.9 },
          }}
        />
      )}

      <SXContainer
        maxWidth="xl"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          position: "relative",
          zIndex: 3,
          px: 0,
        }}
      >
        <Box
          sx={{
            width: { xs: "92%", sm: "86%", md: "621px" },
            mx: { xs: "auto", md: 0 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {/* Eyebrow / Label */}
          {eyebrow && (
            <Typography
              sx={{
                color: "#ffffffcc",
                mb: { xs: 1.5, sm: 2 },
                textTransform: "uppercase",
                letterSpacing: "1.4px",
                fontWeight: 600,
                fontSize: { xs: "12px", sm: "13px" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {eyebrow}
            </Typography>
          )}

          {/* Title */}
          <Stack spacing={0} sx={{ mb: { xs: 2, sm: 3 } }}>
            {titleLines.map((line, idx) => (
              <Typography
                key={idx}
                sx={{
                  color: "#FFFFFF",
                  fontFamily: `"Microsoft JhengHei UI", sans-serif`,
                  fontWeight: 600,
                  fontSize: {
                    xs: line.length > 20 ? "24px" : "28px", // Scale down if line is too long
                    sm: "36px",
                    md: "48px",
                    lg: "56px",
                  },
                  lineHeight: { xs: "1.2", sm: "1.1", md: "100%" },
                  wordBreak: "break-word",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                {line}
              </Typography>
            ))}
          </Stack>

          {/* Caption */}
          {caption && (
            <Stack sx={{ mb: { xs: 2, sm: 3 } }}>
              {captionLines.map((line, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    color: "rgba(255,255,255,0.92)",
                    maxWidth: "520px",
                    mx: { xs: "auto", sm: 0 },
                    fontFamily: `"Segoe UI", sans-serif`,
                    fontWeight: 600,
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    lineHeight: 1.6,
                    textAlign: { xs: "center", sm: "left" },
                    whiteSpace: "pre-line",
                  }}
                >
                  {line}
                </Typography>
              ))}
            </Stack>
          )}

          {/* Buttons */}
          {buttons.length > 0 && (
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "stretch", sm: "center" }}
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              {buttons.map((btn, idx) => (
                <Button
                  key={idx}
                  variant={btn.variant || "contained"}
                  onClick={btn.onClick}
                  size="large"
                  sx={{
                    minWidth: btn.minWidth || 150,
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  {btn.label}
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
  caption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      onClick: PropTypes.func,
      variant: PropTypes.oneOf(["text", "contained", "outlined"]),
      minWidth: PropTypes.number,
    })
  ),
};
