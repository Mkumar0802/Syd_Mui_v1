// src/components/HeroBanner.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

/**
 * HeroBanner
 *
 * Minimal, reusable hero built with MUI Box + Typography only.
 * - bgImage: background image URL
 * - overlayImage: optional centered decorative overlay image URL
 * - label: small uppercase eyebrow text (optional)
 * - title: string or array of strings (each array item -> its own line)
 * - align: "left" | "center" | "right" controls content alignment (default "left")
 * - height: responsive height object or string (default uses xs/sm/md/lg breakpoints)
 * - gradient: CSS gradient string for overlay (optional, default provided)
 * - contentMaxWidth: max width for text content
 * - children: optional node(s) for buttons or extra content (rendered below the caption/title)
 */
export default function HeroBanner({
    bgImage,
    overlayImage,
    label,
    title,
    align = "left",
    height = { xs: "360px", sm: "420px", md: "520px", lg: "600px" },
    gradient = "linear-gradient(90deg, rgba(0,0,0,0.75) 15%, rgba(0,0,0,0.0) 85%)",
    contentMaxWidth = { xs: "90%", sm: "85%", md: "680px" },
    children,
    ariaLabel = "Hero banner",
}) {
    const titleLines = Array.isArray(title)
        ? title
        : typeof title === "string"
            ? title.split("\n")
            : [];

    // alignment mapping to textAlign and horizontal padding placement
    const textAlign = align;
    const justifyContent =
        align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start";

    return (
        <Box
            component="header"
            role="img"
            aria-label={ariaLabel}
            sx={{
                width: "100%",
                height,
                position: "relative",
                backgroundImage: bgImage ? `url(${bgImage})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* Gradient overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: gradient,
                    zIndex: 1,
                }}
            />

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
                    }}
                />
            )}

            {/* Content wrapper */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 3,
                    width: "100%",
                    display: "flex",
                    justifyContent,
                    px: { xs: 2, sm: 4, md: 10 },
                }}
            >
                <Box
                    sx={{
                        maxWidth: contentMaxWidth,
                        textAlign,
                    }}
                >
                    {label && (
                        <Typography
                            sx={{
                                fontFamily: `"Segoe UI", sans-serif`,
                                fontWeight: 600,
                                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                                lineHeight: "100%",
                                letterSpacing: "13%",
                                textTransform: "uppercase",
                                color: "#ffffffcc",
                                mb: { xs: 1.5, sm: 2 },
                            }}
                        >
                            {label}
                        </Typography>
                    )}

                    {titleLines.length > 0 && (
                        <Box>
                            {titleLines.map((line, i) => (
                                <Typography
                                    key={i}
                                    sx={{
                                        display: "block",
                                        fontFamily: `"Microsoft JhengHei UI", sans-serif`,
                                        fontWeight: 500,
                                        fontSize: {
                                            xs: "26px",
                                            sm: "34px",
                                            md: "42px",
                                            lg: "48px",
                                        },
                                        lineHeight: "120%",
                                        letterSpacing: "0%",
                                        color: "#ffffff",
                                        whiteSpace: "pre-line",
                                        maxWidth: "683px",
                                        mb: i === titleLines.length - 1 && children ? 2 : 0,
                                        // center the title block horizontally for center alignment
                                        mx: align === "center" ? "auto" : 0,
                                    }}
                                >
                                    {line}
                                </Typography>
                            ))}
                        </Box>
                    )}

                    {/* children slot (buttons, small caption, links etc.) */}
                    {children && (
                        <Box
                            sx={{
                                mt: 1,
                                display: "flex",
                                gap: 2,
                                justifyContent:
                                    align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
                                flexWrap: "wrap",
                            }}
                        >
                            {children}
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

HeroBanner.propTypes = {
    bgImage: PropTypes.string,
    overlayImage: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
    align: PropTypes.oneOf(["left", "center", "right"]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    gradient: PropTypes.string,
    contentMaxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.node,
    ariaLabel: PropTypes.string,
};
