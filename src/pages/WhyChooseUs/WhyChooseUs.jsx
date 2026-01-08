// src/pages/WhyChooseUs/WhyChooseUs.jsx
import React from "react";
import HeroSection from "../../layout/HeroSection.jsx";
import SectionOne from "../WhyChooseUs/SectionOne.jsx";
import heroImg from "../../assets/whychooseus/section1.jpg";
import section3 from "../../assets/whychooseus/section3.svg";
import FeatureGridSection from "../../components/sectionmodules/FeatureGridSection/FeatureGridSection.jsx";
import { featureItems } from "../../data/FeatureGridSection/index.js";
import FHGrid from "../../components/cards/FHCard/FHGrid.jsx";
import FHCards from "../../data/FHCard";
import FeatureGrid from "../../components/sectionmodules/FeatureCard/FeatureGrid.jsx";
import features from "../../data/FeatureCard";
import TestimonialCardBCVC from "../../components/cards/TestimonialCardBCVC/TestimonialCardBCVC.jsx";
import { testimonialCardBCVC } from "../../data/TestimonialCardBCVC";
import { Stack, Box, Typography, Grid, Container } from "@mui/material";
import TestimonialCarousel from "../../components/carousel/TestimonialCarousel.jsx";
import Title from "../../layout/Title.jsx";
import SecondSection from "./SectionTwo.jsx";
import SXContainer from "../../layout/SXContainer.jsx";
import SectionEight from "./SectionEight.jsx";

// Consistent typography styles
const titleStyle = {
    fontFamily: '"Microsoft JhengHei UI", sans-serif',
    fontWeight: 500,
    fontSize: { xs: '22px', sm: '26px', md: '32px' },
    lineHeight: { xs: '30px', sm: '36px', md: '45px' },
    letterSpacing: '0%',
    mb: { xs: 2.5, md: 4 },
    color: '#000000',
};

const paragraphStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: { xs: '15px', sm: '17px', md: '20px' },
    lineHeight: { xs: '22px', sm: '25px', md: '29px' },
    letterSpacing: '0%',
    color: '#000000',
};

// Consistent section spacing - reduced for more compact layout
const sectionSpacing = {
    py: { xs: 4, sm: 5, md: 6 }
};

export default function WhyChooseUs() {
    return (
        <main>
            {/* Hero Section */}
            <HeroSection
                background={heroImg}
                eyebrow="WHY CHOOSE US"
                title={["Why Business", "Choose SYD"]}
                layout={{ height: "auto" }}
            />

            {/* Section Two - Big-firm capability */}
            <Box component="section" sx={{ pt: { xs: 4, sm: 5, md: 4 }, pb: { xs: 4, sm: 5, md: 4 }, backgroundColor: "#FFFFFF" }}>
                <SecondSection />
            </Box>

            {/* Feature Grid Section */}
            <Box component="section" sx={{ pt: { xs: 2, sm: 2, md: 3 }, pb: { xs: 4, sm: 5, md: 4 } }}>
                <FeatureGridSection items={featureItems} gap={3} />
            </Box>

            {/* What We Stand For Hero */}
            <Box component="section" sx={{ py: { xs: 4, sm: 5, md: 4 } }}>
                <HeroSection
                    background={section3}
                    eyebrow="WHAT WE STAND FOR"
                    title={["Our values aren't just words on a wall."]}
                    caption={`They guide how we work, how we solve problems,
and how we show up for our clients every day.`}
                    layout={{ width: 1451, height: "auto" }}
                />
            </Box>

            {/* FH Cards Grid */}
            <Box component="section" sx={{ py: { xs: 4, sm: 5, md: 4 } }}>
                <FHGrid items={FHCards} />
            </Box>

            {/* Feature Grid with CTA */}
            <Box
                component="section"
                sx={{
                    py: { xs: 4, sm: 5, md: 4 },
                    width: "100%",
                }}
            >
                <FeatureGrid items={features} />

                <SXContainer>
                    <Typography
                        sx={{
                            ...titleStyle,
                            textAlign: "center",
                            mt: { xs: 3, sm: 4, md: 5 },
                            mb: 0,
                            px: { xs: 2, sm: 3, md: 0 },
                        }}
                    >
                        Our Work → See how we've helped businesses like yours
                    </Typography>
                </SXContainer>
            </Box>

            {/* Testimonial Section */}
            <Box
                component="section"
                sx={{
                    backgroundColor: "#F2F2F2",
                    width: "100%",
                    py: { xs: 4, sm: 5, md: 4 },
                }}
            >
                <SXContainer>
                    <Typography
                        sx={{
                            ...titleStyle,
                            textAlign: "left",
                            mb: { xs: 2, sm: 3, md: 4 },
                        }}
                    >
                        Trusted by Leading Kiwi Brands
                    </Typography>
                </SXContainer>

                <Box
                    sx={{
                        width: "100%",
                        maxWidth: { xs: "100%", sm: 920, md: 1100 },
                        mx: "auto",
                        px: { xs: 2, sm: 3, md: 4 },
                        display: "flex",
                        flexDirection: "column",
                        gap: { xs: 2, sm: 3 },
                    }}
                >
                    {/* Carousel block */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{ width: "100%", maxWidth: { xs: "100%", sm: 720, md: 900 } }}>
                            <TestimonialCarousel items={testimonialCardBCVC} title="Client Testimonials" />
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Section Eight - CTA */}
            <Box component="section" sx={{ py: { xs: 4, sm: 5, md: 4 } }}>
                <SectionEight />
            </Box>
        </main>
    );
}
