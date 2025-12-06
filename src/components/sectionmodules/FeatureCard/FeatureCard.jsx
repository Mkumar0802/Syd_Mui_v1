import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

/**
 * FeatureCard
 * - Fixed size (width & height in px) to ensure all cards are identical
 */
const FeatureCard = ({
    text,
    width = 360,     // FIXED width in px
    height = 140,     // FIXED height in px
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
                width: norm(width),
                height: norm(height),
                backgroundColor: bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",         // inner padding
                textAlign: "center",
                boxSizing: "border-box",
                overflow: "hidden",      // prevents expansion
                ...sx,
            }}
        >
            <Typography
                sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "22px",
                    color: "#000000",

                    // Prevent the text from pushing the box larger:
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,       // clamp lines to keep consistent height
                    WebkitBoxOrient: "vertical",
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
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FeatureCard;
