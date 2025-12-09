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

export default function WhyChooseUs() {
    return (
        <main>
            <HeroSection
                background={heroImg}
                title={["Why Business", "Choose SYD"]}
                layout={{ width: 1451, height: "auto" }}


            />


            <SecondSection />






            <FeatureGridSection items={featureItems} gap={3} />
            <HeroSection
                background={section3}
                title={["Our values aren’t just words on a wall."]}
                layout={{ width: 1451, height: "auto" }}


            />




            <FHGrid items={FHCards} />




            <FeatureGrid items={features} />




            {/* Testimonial band — title above carousel, no overlay */}
            <Box
                component="section"
                sx={{
                    backgroundColor: "#F2F2F2",
                    width: "100%",
                    py: { xs: 4, sm: 6, md: 8 },
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",   // center the column on the page
                    alignItems: "flex-start",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: { xs: "100%", sm: 920, md: 1100 }, // container width for content
                        mx: "auto",
                        px: { xs: 2, sm: 3, md: 0 },
                        display: "flex",
                        flexDirection: "column",
                        gap: { xs: 2, sm: 3 }, // space between title and carousel
                    }}
                >
                    {/* Title: left-aligned inside the content column */}
                    <Typography
                        sx={{
                            fontFamily: `"Microsoft JhengHei UI", sans-serif`,
                            fontWeight: 700,
                            fontSize: { xs: "clamp(20px, 5.5vw, 26px)", sm: "clamp(24px,4.5vw,30px)", md: "32px" },
                            lineHeight: "100%",
                            letterSpacing: "0px",
                            color: "#111",
                            textAlign: "left",

                        }}
                    >
                        Trusted by Leading Kiwi Brands
                    </Typography>

                    {/* Carousel block (centered inside the content area) */}
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






            {/* SectionOne — kept but hidden (you can toggle display via prop or remove) */}
            {/* <Box sx={{ display: "none", mt: 10 }}>
                <SectionOne
                    title="Why Business Choose SYD"
                    body1={`SYD Consulting is a New Zealand SAP specialist providing technical consulting,
            implementation, and support services. As a trusted SAP Partner and founded to
            make SAP simple for local businesses, we combine deep technical expertise in SAP Basis,
            authorisations, S/4HANA, and cloud solutions with a straightforward, human approach to
            delivering business outcomes.`}
                    body2={`We blend the rigour of enterprise consulting with the flexibility and speed of a Kiwi operator.
            No bureaucracy. No jargon. Just reliable expertise and practical delivery that gets the job done,
            trusted by leading enterprises across infrastructure, retail, utilities, and agriculture sectors
            throughout New Zealand.`}
                    buttonLabel="Explore what we do"
                    onButtonClick={() => console.log("Explore what we do clicked")}
                />
            </Box> */}
        </main>
    );
}
