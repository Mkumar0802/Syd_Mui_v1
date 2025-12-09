// FeatureCard.jsx
import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/**
 * FeatureCard - Responsive card with full-width tablets
 * 
 * Standard MUI Breakpoints:
 *  - xs:  0-599px    (mobile phones) - Full width, compact
 *  - sm:  600-899px  (tablets) - Full width, larger cards
 *  - md:  900-1199px (small laptops/desktops) - Fixed width, 3 columns
 *  - lg:  1200-1535px (large desktops) - Fixed width, 3 columns
 *  - xl:  1536px+    (extra large screens) - Fixed width, 3 columns
 */
const FeatureCard = ({
    text,
    width = {
        xs: "100%",    // Mobile: full width
        sm: "100%",    // Tablet: full width (CHANGED from 280 to 100%)
        md: 360,       // Desktop: fixed width
        lg: 400,       // Large: fixed width
        xl: 440        // XL: fixed width
    },
    height = {
        xs: 120,       // Mobile: compact height
        sm: 160,       // Tablet: taller for full width (CHANGED from 140 to 160)
        md: 160,       // Desktop: standard height
        lg: 180,       // Large: taller
        xl: 200        // XL: tallest
    },
    bg = "#D9D9D9",
    sx = {},
    ...others
}) => {
    return (
        <Box
            {...others}
            sx={{
                // Responsive dimensions
                width: width,
                height: height,
                minHeight: height,
                maxWidth: "100%",

                // Styling
                backgroundColor: bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                // Responsive padding - More on tablet for full-width cards
                p: {
                    xs: 2,    // Mobile: 16px (compact)
                    sm: 3,    // Tablet: 24px (more space for full width) CHANGED from 2.5
                    md: 3,    // Desktop: 24px
                    lg: 3.5,  // Large: 28px
                    xl: 4     // XL: 32px
                },

                // Text alignment
                textAlign: "center",
                boxSizing: "border-box",
                overflow: "hidden",


            }}
        >
            <Typography
                sx={{
                    fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
                    fontWeight: {
                        xs: 600,
                        sm: 600,   // Tablet: regular weight
                        md: 700,   // Desktop: bold
                        lg: 700,
                        xl: 700
                    },
                    fontSize: {
                        xs: "14px",   // Mobile
                        sm: "16px",   // Tablet (larger for full width) CHANGED from 15px
                        md: "16px",   // Desktop
                        lg: "17px",   // Large
                        xl: "18px"    // XL
                    },
                    lineHeight: {
                        xs: 1.3,  // Mobile
                        sm: 1.5,  // Tablet (more spacing) CHANGED from 1.4
                        md: 1.5,  // Desktop
                        lg: 1.5,  // Large
                        xl: 1.5   // XL
                    },
                    color: "#000000",

                    // Text truncation - Show more lines on tablet
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: {
                        xs: 3,   // Mobile: 3 lines
                        sm: 4,   // Tablet: 4 lines (more content visible) NEW
                        md: 3,   // Desktop: 3 lines
                        lg: 3,   // Large: 3 lines
                        xl: 3    // XL: 3 lines
                    },
                    WebkitBoxOrient: "vertical",

                    // Ensure text takes full width
                    width: "100%",
                    wordBreak: "break-word",

                    // Tablet-specific: maximum width for readability
                    maxWidth: {
                        xs: "100%",
                        sm: "800px",   // Limit width on tablet for better readability
                        md: "100%",
                        lg: "100%",
                        xl: "100%"
                    },
                    mx: {
                        xs: 0,
                        sm: "auto",    // Center on tablet
                        md: 0,
                        lg: 0,
                        xl: 0
                    }
                }}
            >
                {text}
            </Typography>
        </Box>
    );
};

FeatureCard.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object
    ]),
    bg: PropTypes.string,
    sx: PropTypes.object,
};

FeatureCard.defaultProps = {
    width: {
        xs: "100%",
        sm: "100%",
        md: 360,
        lg: 400,
        xl: 440
    },
    height: {
        xs: 120,
        sm: 160,
        md: 160,
        lg: 180,
        xl: 200
    },
    bg: "#D9D9D9",
};

export default FeatureCard;