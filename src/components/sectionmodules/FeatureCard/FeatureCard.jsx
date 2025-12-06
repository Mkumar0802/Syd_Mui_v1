import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

/**
 * FeatureCard
 * - Designed to fill the grid cell's width (use width="100%")
 * - Internal padding keeps text away from edges
 */
const FeatureCard = ({
  text,
  width = "100%",      // accept "100%" so card fills grid cell
  maxWidth = 360,      // visual max width per column (adjust if needed)
  height = 140,
  bg = "#D9D9D9",
  sx = {},
  ...others
}) => {
  const theme = useTheme();
  const norm = (v) => (typeof v === "number" ? `${v}px` : v);

  return (
    <Box
      {...others}
      sx={{
        width,
        maxWidth: norm(maxWidth),
        height: norm(height),
        backgroundColor: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,               // inner padding
        textAlign: "center",
        boxSizing: "border-box",
        ...sx,
      }}
    >
      <Typography
        sx={{
          // use a theme token (replace semibold20 if you have it),
          fontFamily: theme.typography.fontFamily,
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "22px",
          color: "#000000",
          whiteSpace: "normal",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

FeatureCard.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FeatureCard;
