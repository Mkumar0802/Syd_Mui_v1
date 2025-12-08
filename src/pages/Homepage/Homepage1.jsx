// src/components/hero/HomePage1.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack } from "@mui/material";

import ButtonPE from "../../components/buttons/ButtonPE";
import SXContainer from "../../layout/SXContainer.jsx";
import heroImg from "../../assets/home/SYD_homepaged_hero_banner_Auckland1.jpg";

/**
 * HomePage1 - Hero section only
 */
function HomePage1({
    background = heroImg,
    title = ["SAP Consulting Built for New Zealand Businesses"],
    caption = "Big firm capability meets local agility. Get expert SAP solutions designed for New Zealand businesses.",
    layout = { width: 1451, height: 640, top: 75, left: -11 }
}) {
    // Safely access layout properties with defaults
    const layoutLeft = layout?.left ?? -11;
    const layoutTop = layout?.top ?? 75;
    const layoutHeight = layout?.height ?? 640;

    const bgPosX = typeof layoutLeft === "number" ? `${layoutLeft}px` : layoutLeft;
    const bgPosY = "center";

    return (
        <>
            <Box
                component="section"
                aria-label="Homepage hero"
                sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 420, sm: 480, md: layoutHeight },
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: `${bgPosX} ${bgPosY}`,
                    backgroundRepeat: "no-repeat",
                    mt: { xs: 0, md: `${layoutTop}px` },
                }}
            >
                {/* Dark overlay */}
                <Box
                    aria-hidden
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.5) 36%, rgba(0,0,0,0.08) 64%, rgba(0,0,0,0) 100%)",
                        pointerEvents: "none",
                    }}
                />

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                    <SXContainer maxWidth="xl" py={{ xs: 3, md: 6 }}>
                        <Box sx={{ maxWidth: { xs: "92%", md: "621px" }, position: "relative", zIndex: 2 }}>
                            <Stack spacing={0.3} sx={{ mb: 2 }}>
                                {Array.isArray(title) ? (
                                    title.map((line, idx) => (
                                        <Typography
                                            key={idx}
                                            component={idx === 0 ? "h1" : "div"}
                                            sx={{
                                                color: "#FFFFFF",
                                                fontWeight: 700,
                                                fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem", lg: "3.4rem" },
                                                lineHeight: 1.05,
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            {line}
                                        </Typography>
                                    ))
                                ) : (
                                    <Typography
                                        component="h1"
                                        sx={{
                                            color: "#FFFFFF",
                                            fontWeight: 700,
                                            fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem", lg: "3.4rem" },
                                            lineHeight: 1.05,
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                )}
                            </Stack>

                            <Typography sx={{ color: "rgba(255,255,255,0.9)", mb: 3, fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" } }}>
                                {caption}
                            </Typography>

                            <Stack direction="row" spacing={2}>
                                <ButtonPE label="Get in touch" size="medium" aria-label="Get in touch" sx={{ minWidth: 150 }} />
                                <ButtonPE label="Explore who we are" size="medium" aria-label="Explore who we are" sx={{ minWidth: 190 }} />
                            </Stack>
                        </Box>
                    </SXContainer>
                </Box>
            </Box>

            
        </>
    );
}

HomePage1.propTypes = {
    background: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    caption: PropTypes.string,
    layout: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
        top: PropTypes.number,
        left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
};

export default HomePage1;