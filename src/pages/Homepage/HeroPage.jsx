// src/components/hero/HomePage.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack, Grid } from "@mui/material";

import ButtonPE from "../../components/buttons/ButtonPE.jsx";
import SXContainer from "../../layout/SXContainer.jsx";
import CSCarousel from "../../components/carousel/CSCarousel.jsx";
import CSGrid from "../../components/cards/CSCard/CSGrid.jsx";
import CSItems from "../../data/CSCard/index.js";

import heroImg from "../../assets/home/SYD_homepaged_hero_banner_Auckland1.jpg";
import partnerImage from "../../assets/home/cloud_demo.jpg";
import WCSCarousel from "../../components/carousel/WCSCarousel.jsx";
import section_three from "../../data/HomePage/index.js";

/**
 * HeroSection (Box-based, same file)
 */
function HeroPage({ background, title, caption, layout }) {
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

HeroPage.propTypes = {
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
        <Box component="section" sx={{ width: "100%", py: { xs: 4, md: 8 } }}>
            <Grid container spacing={4} alignItems="flex-start">
                {/* LEFT: Info box */}
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            maxWidth: { xs: "100%", md: 340 },
                            minHeight: 200,
                            display: "flex",
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
                </Grid>

                {/* RIGHT: Carousel */}
                <Grid item xs={12} md={8}>
                    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", pt: { xs: 1, md: 0 } }}>
                        <WCSCarousel items={items} title={null} description={null} containerWidth={containerWidth} />
                    </Box>
                </Grid>
            </Grid>
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
 * PartnerSection (Box-based, same file)
 */
function PartnerSection({ partner = {}, csItems = [] }) {
    const imgW = 602.0594482421875;
    const imgH = 401.5622863769531;

    return (
        <SXContainer component="section" sx={{ py: { xs: 6, md: 10 } }}>
            <CSCarousel
                items={csItems}
                title="Comprehensive SAP Consulting Services"
                description="End-to-end SAP solutions designed for your success, from strategic planning through implementation to ongoing optimisation."
                containerWidth="lg"
            />

            <Box sx={{ width: "100%", position: "relative" }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                minHeight: { xs: 300, md: "auto" },
                                display: "flex",
                                py: { xs: 2, md: 0 },
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                component="img"
                                src={partner.imageSrc}
                                alt="Partner"
                                loading="lazy"
                                sx={{
                                    display: { xs: "none", md: "block" },
                                    width: Math.round(imgW) + "px",
                                    height: Math.round(imgH) + "px",
                                    objectFit: "cover",
                                }}
                            />

                            <Box
                                sx={{
                                    display: { xs: "block", md: "none" },
                                    width: "100%",
                                    aspectRatio: "16/9",
                                    borderRadius: 2,
                                    backgroundImage: `url(${partner.imageSrc})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                        </Box>


                    </Grid>
                </Grid>
            </Box>
        </SXContainer>
    );
}

PartnerSection.propTypes = {
    partner: PropTypes.object,
    csItems: PropTypes.array,
};

/**
 * HomePage — compose sections (all in same file)
 */
export default function HomePage({
    background = heroImg,
    title = ["SAP Consulting Built for New Zealand Businesses"],
    caption = "Big firm capability meets local agility. Get expert SAP solutions designed for New Zealand businesses.",
    layout = { width: 1451, height: 640, top: 75, left: -11 },
    partner = {
        imageSrc: partnerImage,
        eyebrow: "Partnering with New Zealand's Leading Organisations",
        quote:
            "“They take real ownership -  proactive, accountable, and committed to getting the job done. When challenges arise, SYD step up and deliver.” ",
        company: "Kordia Group",
        ctaLabel: "Learn more",
        onCta: () => console.log("Partner CTA clicked"),
    },
}) {
    return (
        <>
            <HeroPage background={background} title={title} caption={caption} layout={layout} />
            <PartnerSection partner={partner} csItems={CSItems} />

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
    partner: PropTypes.object,
};


