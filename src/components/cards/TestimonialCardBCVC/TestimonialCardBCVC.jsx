import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TestimonialCardBCVC = ({
  logoSrc,
  title,
  quote,
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
        maxWidth: "820px",
        transform: `rotate(${angle}deg)`,
        opacity,
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: { xs: 2, sm: 4 },
        px: { xs: 2, sm: 4 },
        py: { xs: 3, md: 0 },
        mx: "auto",
        boxSizing: "border-box",
        overflow: "hidden",
        ...sx,
      }}
    >
      {/* Logo Wrapper Circle */}
      {logoSrc && (
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: "100px", md: "130px" },
            height: { xs: "100px", md: "130px" },
            borderRadius: "50%",
            backgroundColor: "#F3E9FF", // Subtle purple background for the circle
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={logoSrc}
            alt={title}
            sx={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
      )}

      {/* Text */}
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
            fontWeight: 700,
            fontSize: { xs: "18px", sm: "20px", md: "22px" },
            mb: 1,
            color: "#000",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Segoe UI",
            fontWeight: 400,
            fontSize: { xs: "16px", sm: "18px", md: "24px" },
            lineHeight: "130%",
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
  title: PropTypes.string.isRequired,
  quote: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  angle: PropTypes.number,
  opacity: PropTypes.number,
  sx: PropTypes.object,
};

export default TestimonialCardBCVC;
