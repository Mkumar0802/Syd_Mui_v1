import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TestimonialCardBCVC = ({
  logoSrc,
  quote,
  company,
  width = { xs: "100%", sm: "90%", md: "820px", lg: "820px" },
  height = { xs: "auto", md: "283px" },
  angle = 0,
  opacity = 1,
  sx = {},
}) => {
  return (
    <Box
      sx={{
        width,
        height,
        maxWidth: "820px",                  // prevents stretching above design spec
        transform: `rotate(${angle}deg)`,
        opacity,
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center", sm: "center" },
        justifyContent: "flex-start",
        gap: { xs: 2, sm: 4 },
        px: { xs: 2, sm: 4 },
        py: { xs: 3, md: 0 },
        mx: "auto",
        boxSizing: "border-box",
        overflow: "hidden",
        ...sx,
      }}
    >
      {/* Logo */}
      {logoSrc && (
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: 80, sm: 100, md: 140 },
            height: { xs: 35, sm: 45, md: 60 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 2, sm: 0 },
          }}
        >
          <Box
            component="img"
            src={logoSrc}
            alt={company}
            sx={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
      )}

      {/* Quote Text */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", sm: "left" },
          pr: { sm: 3, md: 5 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Segoe UI",
            fontWeight: 400,
            fontSize: { xs: "16px", sm: "18px", md: "24px" },
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#000",
          }}
        >
          “{quote}”
        </Typography>
      </Box>
    </Box>
  );
};

TestimonialCardBCVC.propTypes = {
  logoSrc: PropTypes.string,
  quote: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  company: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  angle: PropTypes.number,
  opacity: PropTypes.number,
  sx: PropTypes.object,
};

export default TestimonialCardBCVC;
