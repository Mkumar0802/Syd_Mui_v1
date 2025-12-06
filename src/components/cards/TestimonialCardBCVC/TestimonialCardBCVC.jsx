import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

/**
 * TestimonialCardBCVC
 * - theme contains only font tokens
 * - component sets background, text color and badge color itself
 */
const TestimonialCardBCVC = ({
  logoSrc,
  quote,
  badgeText,
  company,
  width = 820,
  height = 283,
  angle = 0,
  opacity = 1,
  top,
  left,
  sx = {},
}) => {
  const theme = useTheme();
  const norm = (v) => (typeof v === "number" ? `${v}px` : v);
  const positioned = top !== undefined || left !== undefined ? "absolute" : "relative";

  return (
    <Box
      sx={{
        position: positioned,
        top: top !== undefined ? norm(top) : undefined,
        left: left !== undefined ? norm(left) : undefined,
        width: norm(width),
        height: norm(height),
        transform: `rotate(${angle}deg)`,
        opacity,
        // component controls visual colors (NOT the theme)
        backgroundColor: "#FFFFFF", // card background
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 4,
        px: 4,
        boxSizing: "border-box",
        boxShadow: "none",
        ...sx,
      }}
    >
      {/* Left: logo area */}
      {logoSrc && (
        <Box
          sx={{
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 60,
          }}
        >
          <Box
            component="img"
            src={logoSrc}
            alt={company || "logo"}
            sx={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
      )}

      {/* Quote text: uses typography token from theme (font only). Colour applied here. */}
      <Box sx={{ flex: 1, pr: badgeText ? 5 : 0 }}>
        <Typography
          component="div"
          sx={{
            ...(theme.typography?.testimonialBCVC || {}),
            color: "#000000", // text colour set by component
          }}
        >
          &ldquo;{quote}&rdquo;
        </Typography>
      </Box>

      {/* Badge on the right edge — visual styling kept in component */}
      {badgeText && (
        <Box
          sx={{
            position: "absolute",
            right: -18,
            top: "50%",
            transform: "translateY(-50%)",
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "#FFC107", // badge colour inside component
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: 700,
              fontSize: 16,
              color: "#000000",
            }}
          >
            {badgeText}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

TestimonialCardBCVC.propTypes = {
  logoSrc: PropTypes.string,
  quote: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  badgeText: PropTypes.string,
  company: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  angle: PropTypes.number,
  opacity: PropTypes.number,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sx: PropTypes.object,
};

export default TestimonialCardBCVC;
