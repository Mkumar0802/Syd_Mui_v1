// src/components/sections/SectionTwo.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import SXContainer from "../../layout/SXContainer.jsx";

function SectionTwo() {
    return (
        <Box
            component="section"
            aria-label="Our Promise"
            sx={{
                width: "100%",
                // py: { xs: 3, sm: 4, md: 6 },
                backgroundColor: "#FFFFFF",
            }}
        >
            <SXContainer>

                {/* FULL-WIDTH BLOCK */}
                <Box sx={{ width: "100%" }}>
                    {/* TITLE */}
                    <Typography
                        sx={{
                            fontFamily: `"Microsoft JhengHei UI", sans-serif`,
                            fontWeight: 700,
                            fontSize: {
                                xs: "clamp(24px, 6vw, 28px)",
                                sm: "clamp(26px, 5vw, 30px)",
                                md: "32px",
                            },
                            lineHeight: "100%",
                            letterSpacing: "0px",
                            color: "#111",
                            mb: { xs: 2, sm: 3 },
                        }}
                    >
                        Big-firm capability.
                        Local agility.
                    </Typography>

                    {/* PARAGRAPH — NO MAX WIDTH */}
                    <Typography
                        sx={{
                            fontFamily: `"Segoe UI", sans-serif`,
                            fontWeight: 400,
                            fontSize: {
                                xs: "clamp(16px, 4vw, 18px)",
                                sm: "clamp(18px, 3vw, 19px)",
                                md: "20px",
                            },
                            lineHeight: "28px",
                            letterSpacing: "0px",
                            color: "#333",
                            width: "100%", // Full width
                            textAlign: "left",
                        }}
                    >
                        We scale to match your needs, delivering substance over complexity.
                        We bring senior expertise with the simplicity and flexibility of
                        a boutique consultancy, providing enterprise-grade SAP solutions
                        through trusted relationships and practical delivery.
                    </Typography>
                </Box>

                {/* Centered quoted block with decorative quotes */}

                <Typography
                    sx={{
                        fontFamily: `"Microsoft JhengHei UI", sans-serif`,
                        fontWeight: 700,
                        fontSize: {
                            xs: "clamp(24px, 6vw, 28px)",
                            sm: "clamp(26px, 5vw, 30px)",
                            md: "32px",
                        },
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        color: "#111",
                        mb: { xs: 2, sm: 3 },
                        paddingTop: "2em",
                    }}
                >
                    Our Promise
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",

                    }}
                >
                    <Box
                        sx={{
                            position: "relative",

                            maxWidth: { xs: "92%", sm: "760px", md: "900px" },
                            px: { xs: 3, sm: 5, md: 6 },
                            // py: { xs: 3, sm: 4, md: 4 },
                            textAlign: "left",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",

                            "&::before, &::after": {
                                position: "absolute",
                                color: "#6533FF",      // purple accent
                                fontFamily: "Arial",   // EXACT font
                                fontWeight: 700,       // EXACT weight
                                lineHeight: "100%",
                                letterSpacing: "0px",
                                pointerEvents: "none",
                                zIndex: 0,
                            },

                            "&::before": {
                                content: '"“"',
                                left: { xs: "6px", sm: "18px", md: "26px" },
                                top: "50%",
                                transform: "translateY(-50%)",
                                fontSize: {
                                    xs: "64px",
                                    sm: "96px",
                                    md: "128px",   // EXACT size (desktop)
                                },

                            },

                            "&::after": {
                                content: '"”"',
                                right: { xs: "6px", sm: "18px", md: "26px" },
                                top: "50%",
                                transform: "translateY(-50%)",
                                fontSize: {
                                    xs: "64px",
                                    sm: "96px",
                                    md: "128px",   // EXACT size (desktop)
                                },

                            },
                        }}
                    >
                        <Typography
                            sx={{
                                position: "relative",
                                zIndex: 2,
                                fontFamily: `"Segoe UI", sans-serif`,
                                fontWeight: 400,
                                fontSize: {
                                    xs: "clamp(16px, 4vw, 18px)",
                                    sm: "clamp(18px, 3vw, 20px)",
                                    md: "24px",
                                },
                                lineHeight: { xs: "26px", sm: "28px", md: "32px" },
                                letterSpacing: "0px",
                                color: "#333",
                                textAlign: "left",
                                px: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
                            }}
                        >
                            We bring together deep SAP expertise with a straightforward, human approach.
                            We shape solutions to fit each organization to make SAP easier, more secure,
                            and more effective so every customer can run their business with confidence.
                        </Typography>
                    </Box>
                </Box>
            </SXContainer>
        </Box>
    );
}

export default SectionTwo;
