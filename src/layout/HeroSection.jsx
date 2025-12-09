// src/components/hero/HeroWithDots.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack, Button } from "@mui/material";
import SXContainer from "../layout/SXContainer";

/**
 * HeroWithDots - specialized hero matching the provided design.
 * Props:
 *  - background: url string for the hero photo
 *  - eyebrow: small uppercase label ("WHY CHOOSE US")
 *  - title: array of lines, e.g. ["Why Business", "Choose SYD"]
 *  - showDots: true|false to show decorative dots SVG
 *  - contentWidth: width for the left content column
 */
export default function HeroWithDots({
    background,
    eyebrow = "WHY CHOOSE US",
    title = ["Why Business", "Choose SYD"],
    caption = "",
    contentWidth = { xs: "92%", sm: "86%", md: "480px" },
    showDots = true,
    buttons = [], // optional array of { label, onClick }
}) {
    return (
        <Box
            component="section"
            aria-label="Hero - trusted by brands"
            sx={{
                position: "relative",
                width: "100%",
                // height control: mobile shorter, desktop taller
                height: { xs: 420, sm: 480, md: 520 },
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                backgroundImage: background ? `url(${background})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
            }}
        >

            {/* Content container (left column) */}
            <SXContainer maxWidth="xl" sx={{ height: "100%", display: "flex", alignItems: "center" }}>
                <Box sx={{ width: contentWidth, zIndex: 5 }}>
                    {/* Eyebrow */}
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.85)",
                            fontFamily: `"Microsoft JhengHei UI", "Segoe UI", sans-serif`,
                            fontWeight: 700,
                            fontSize: { xs: "12px", sm: "13px", md: "14px" },
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            mb: 1.5,
                        }}
                    >
                        {eyebrow}
                    </Typography>

                    {/* Two-line Title */}
                    <Stack spacing={0} sx={{ mb: 2 }}>
                        {title.map((line, i) => (
                            <Typography
                                key={i}
                                sx={{
                                    color: "#FFFFFF",
                                    fontFamily: `"Microsoft JhengHei UI", "Segoe UI", sans-serif`,
                                    fontWeight: 700,
                                    // Responsive font size: mobile, tablet, desktop
                                    fontSize: {
                                        xs: "28px",   // <600
                                        sm: "36px",   // 600-899
                                        md: "48px",   // 900+
                                    },
                                    lineHeight: "100%",
                                    letterSpacing: "0px",
                                }}
                            >
                                {line}
                            </Typography>
                        ))}
                    </Stack>

                    {/* Optional caption */}
                    {caption && (
                        <Typography sx={{
                            color: "rgba(255,255,255,0.9)",
                            mb: 2,
                            fontSize: { xs: "14px", sm: "15px", md: "16px" },
                            lineHeight: 1.6
                        }}>
                            {caption}
                        </Typography>
                    )}

                    {/* Optional Buttons (if you want) */}
                    {buttons.length > 0 && (
                        <Stack direction="row" spacing={2}>
                            {buttons.map((b, idx) => (
                                <Button key={idx} variant="contained" onClick={b.onClick || (() => { })}>
                                    {b.label}
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
    eyebrow: PropTypes.string,
    title: PropTypes.arrayOf(PropTypes.string),
    caption: PropTypes.string,
    contentWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    showDots: PropTypes.bool,
    buttons: PropTypes.array,
};
