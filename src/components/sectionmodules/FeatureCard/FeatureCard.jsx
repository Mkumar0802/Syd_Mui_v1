// src/components/FeatureCard.jsx
import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const FeatureCard = ({
    text,
    width = 400,
    height = 173,
    bg = "#D9D9D9",
    angle = 0,
    opacity = 1,
    sx = {},
    ...others
}) => {
    const theme = useTheme();
    const norm = (v) => (typeof v === "number" ? `${v}px` : v);

    return (
        <Box
            {...others}
            sx={{
                width: norm(width),
                height: norm(height),
                backgroundColor: bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
                textAlign: "center",
                transform: `rotate(${angle}deg)`,
                opacity,
                // borderRadius: 1,
                boxSizing: "border-box",
                ...sx,
            }}
        >
            <Typography
                sx={{
                    ...(theme.typography?.semibold20 || {}),
                    color: "#000000",    // <-- ADDED FONT COLOR
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
};

export default FeatureCard;
