import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const FeatureIcon = ({
  size = 32,
  padding = 10,
  bgColor = "#8A38F5",
  sx = {},
}) => {
  return (
    <Box
      className="feature-icon"
      sx={{
        width: `${size + padding * 2}px`,
        height: `${size + padding * 2}px`,
        padding: `${padding}px`,
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        flexShrink: 0,
        transition: "0.2s ease",
        ...sx,
      }}
    >
      <ChevronRightIcon
        sx={{
          fontSize: size,
          color: "#FFFFFF",
        }}
      />
    </Box>
  );
};

FeatureIcon.propTypes = {
  size: PropTypes.number,
  padding: PropTypes.number,
  bgColor: PropTypes.string,
  sx: PropTypes.object,
};

export default FeatureIcon;
