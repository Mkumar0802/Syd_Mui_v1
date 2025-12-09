// src/pages/AboutUs.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";
import HeroSection from "../../layout/HeroSection.jsx";
import heroImg from "../../assets/aboutus/hero.jpg";

// import SXContainer from "../../layout/SXContainer.jsx";          // adjust path if needed
import ButtonPE from "../../components/buttons/ButtonPE";    // adjust path if needed
import Title from "../../layout/Title.jsx";       // your Title component (variant title32)
import Subtitle from "../../layout/Subtitle.jsx"; // your Subtitle component



export default function AboutUs({
    background = heroImg,
    title = ["Meet SYD Consulting", "New Zealand's Trusted SAP Specialists"],
    caption = "We partner with New Zealand organisations to deliver pragmatic SAP solutions — from strategy through to live operations. Our focus is outcomes, knowledge transfer and long-term success.",
}) {
    return (
        <main>
            {/* HERO */}
            <HeroSection
                background={background}
                title={title}

                layout={{ width: 1451, height: 640, top: 75, left: -11 }}
                align="left"
                buttons={[]} // intentionally no hero buttons
            />

            {/* INTRO / LEAD SECTION — matches screenshot: left text, right CTA */}

            <Box
                sx={{

                    display: "flex",
                    marginTop: { xs: 4, md: 8 },
                    marginBottom: { xs: 6, md: 10 },
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 4, md: 2 },
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    px: { xs: 2, md: 0 },

                }}
            >

                <Box>
                    <Title
                        sx={{
                            mb: 2,
                            // Title already uses variant title32 from your theme, but ensure weight & spacing
                            fontFamily: `"Microsoft JhengHei UI", "Segoe UI", sans-serif`,
                        }}
                    >
                        We're trusted SAP experts who make things simple.
                    </Title>

                    <Typography
                        sx={{
                            mt: 2,
                            mb: 2,
                            fontFamily: `"Segoe UI", sans-serif`,
                            fontSize: "16px",
                            lineHeight: "28px",
                            color: "text.primary",
                        }}
                    >
                        SYD Consulting is a New Zealand SAP specialist providing technical consulting,
                        implementation, and support services. As a trusted SAP Partner and founded to
                        make SAP simple for local businesses, we combine deep technical expertise in SAP Basis,
                        authorisations, S/4HANA, and cloud solutions with a straightforward, human approach to
                        delivering business outcomes.
                    </Typography>

                    <Typography
                        sx={{
                            mb: 0,
                            fontFamily: `"Segoe UI", sans-serif`,
                            fontSize: "16px",
                            lineHeight: "28px",
                            color: "text.primary",
                        }}
                    >
                        We blend the rigour of enterprise consulting with the flexibility and speed of a Kiwi operator.
                        No bureaucracy. No jargon. Just reliable expertise and practical delivery that gets the job done,
                        trusted by leading enterprises across infrastructure, retail, utilities, and agriculture sectors
                        throughout New Zealand.
                    </Typography>
                </Box>
                <Box sx={{ width: { marginTop: 34, xs: "100%", md: "auto" }, textAlign: { xs: "left", md: "right" } }}>
                    <ButtonPE
                        label="Explore what we do"
                        size="medium"
                        onClick={() => {
                            // wire this to actual route / section in your app
                            // example: navigate("/services")
                            // for now keep console action
                            console.log("Explore what we do clicked");
                        }}
                        sx={{
                            minWidth: 190,
                        }}
                    />
                </Box>
            </Box>




            {/* You can add more About page sections here (team, values, approach, etc.) */}
        </main>
    );
}

AboutUs.propTypes = {
    background: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    caption: PropTypes.string,
};
