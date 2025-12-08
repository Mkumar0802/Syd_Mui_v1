// src/components/hero/HomePage.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack, Grid } from "@mui/material";

import ButtonPE from "../../components/buttons/ButtonPE";
import SXContainer from "../../layout/SXContainer.jsx";
import WCSCarousel from "../../components/carousel/WCSCarousel";
import section_three from "../../data/HomePage";
import heroImg from "../../assets/home/SYD_homepaged_hero_banner_Auckland1.jpg";

/**
 * HeroSection (Box-based, same file)
 */
function HeroSection({ background, title, caption, layout }) {
    const bgPosX = typeof layout.left === "number" ? `${layout.left}px` : layout.left;
    const bgPosY = "center";

    return (
        <Box
            component="section"
            aria-label="Homepage hero"
            sx={{
                position: "relative",
                width: "100%",
                height: { xs: 420, sm: 480, md: layout.height || 640 },
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: `${bgPosX} ${bgPosY}`,
                backgroundRepeat: "no-repeat",
                mt: { xs: 0, md: `${layout.top || 0}px` },
            }}
        >
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                }}
            />

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                <SXContainer maxWidth="xl" py={{ xs: 3, md: 6 }}>
                    <Box sx={{ maxWidth: { xs: "92%", md: "621px" }, position: "relative", zIndex: 2 }}>
                        <Stack spacing={0.3} sx={{ mb: 2 }}>
                            {title.map((line, idx) => (
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
                            ))}
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
    );
}

HeroSection.propTypes = {
    background: PropTypes.string.isRequired,
    title: PropTypes.array,
    caption: PropTypes.string,
    layout: PropTypes.object,
};

/**
 * WhySydSection (Box-based, same file)
 */
function WhySydSection({
    title = "What makes SYD Consulting your Ideal SAP Partner",
    description = "New Zealand organisations choose SYD when they want exceptional SAP expertise delivered with agility, transparency, and genuine partnership. Here's what we bring to every engagement:",
    ctaLabel = "Explore who we are",
    items = section_three.sections,
    containerWidth = false,
}) {
    return (
        <Box>
            <SXContainer py={{ xs: 3, md: 6 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: { xs: 2, md: 4 },
                    }}
                >
                    {/* LEFT: Info box */}
                    <Box
                        sx={{
                            minHeight: 200,
                            maxWidth: { xs: "90%", md: "400px", lg: "450px" },
                            display: "flex",
                            marginTop: 6,
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            p: 0,
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "20px", md: "1.4rem" }, lineHeight: 1.05 }}>
                            {title}
                        </Typography>

                        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6, mb: 3, fontSize: "14px" }}>
                            {description}
                        </Typography>

                        <Stack direction="row" spacing={2} alignItems="center">
                            <ButtonPE label={ctaLabel} size="medium" onClick={() => console.log("Explore clicked")} />
                        </Stack>
                    </Box>

                    {/* RIGHT: Carousel wrapper — constrain width so cards display consistently */}
                    <Box
                        sx={{
                            // Calculate a comfortable viewport width for the carousel:
                            // For 2 full cards + preview (2.35 visible) at CARD_WIDTH px each:
                            // viewportWidth ≈ CARD_WIDTH * 2.35
                            // Use same value you set in CSCard DEFAULT_WIDTH
                            "--card-w": "340px",
                            width: { xs: "100%", md: `calc(var(--card-w) * 2.35)` }, // responsive
                            minWidth: { xs: "100%", md: `calc(var(--card-w) * 2)` },
                            // ensure the carousel track fills this box
                            "& .wcs-track": {
                                width: "100%",
                            },
                        }}
                    >
                        <WCSCarousel items={items} title={null} description={null} containerWidth={containerWidth} />
                    </Box>
                </Box>
            </SXContainer>
        </Box>

    );
}

WhySydSection.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    ctaLabel: PropTypes.string,
    items: PropTypes.array,
    containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

/**
 * HomePage — compose sections (Hero + WhySydSection only)
 */
export default function HomePage({
    background = heroImg,
    title = ["SAP Consulting Built for New Zealand Businesses"],
    caption = "Big firm capability meets local agility. Get expert SAP solutions designed for New Zealand businesses.",
    layout = { width: 1451, height: 640, top: 75, left: -11 },
}) {
    return (
        <>
            <HeroSection background={background} title={title} caption={caption} layout={layout} />

            <WhySydSection
                title="What makes SYD Consulting your Ideal SAP Partner"
                description="New Zealand organisations choose SYD when they want exceptional SAP expertise delivered with agility, transparency, and genuine partnership. Here's what we bring to every engagement:"
                ctaLabel="Explore who we are"
                items={section_three.sections}
                containerWidth={false}
            />
        </>
    );
}

HomePage.propTypes = {
    background: PropTypes.string,
    title: PropTypes.array,
    caption: PropTypes.string,
    layout: PropTypes.object,
};
