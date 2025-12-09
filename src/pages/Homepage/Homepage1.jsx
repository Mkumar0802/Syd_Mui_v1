// src/components/hero/HomePage1.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack } from "@mui/material";
import ButtonPE from "../../components/buttons/ButtonPE";
import SXContainer from "../../layout/SXContainer.jsx";
import heroImg from "../../assets/home/SYD_homepaged_hero_banner_Auckland1.jpg";

/**
 * HomePage1 - Responsive hero section (explicit breakpoints)
 *
 * Breakpoints:
 *  - xs:   <600px  (mobile)
 *  - sm:  600-899px (tablet)
 *  - md+: >=900px  (laptop & large)
 */
function HomePage1({
    background = heroImg,
    title = ["SAP Consulting Built for New Zealand Businesses"],
    caption = "Big firm capability meets local agility. Get expert SAP solutions designed for New Zealand businesses.",
}) {
    return (
        <Box
            component="section"
            aria-label="Homepage hero"
            sx={{
                position: "relative",
                width: "100%",

                /* Auto height so content determines height */
                height: "auto",
                minHeight: "auto",

                display: "flex",
                alignItems: "center",

                /* Background */
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: { xs: "center", sm: "center", md: "center" },
                backgroundRepeat: "no-repeat",

                /* Spacing: tuned per breakpoint */
                pt: { xs: 6, sm: 8, md: 12 },   // smaller top padding on mobile
                pb: { xs: 6, sm: 8, md: 12 },   // smaller bottom padding on mobile

                /* On mobile we center text; on tablet+ we left-align */
                textAlign: { xs: "center", sm: "left", md: "left" },
                m: 0,
            }}
        >
            <SXContainer
                maxWidth="xl"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "center", md: "flex-start" },
                }}
            >
                <Box
                    sx={{
                        /* width behaviors:
                           - mobile: near-full (92%)
                           - tablet: narrower (86%)
                           - desktop: constrained to design width
                        */
                        width: { xs: "92%", sm: "86%", md: "621px" },
                        position: "relative",
                        zIndex: 2,
                        mx: { xs: "auto", sm: "auto", md: 0 }, // center on small, left on desktop
                    }}
                >
                    {/* TITLE */}
                    <Stack spacing={0.3} sx={{ mb: { xs: 1.5, sm: 1.8, md: 2 } }}>
                        {Array.isArray(title)
                            ? title.map((line, idx) => (
                                <Typography
                                    key={idx}
                                    component={idx === 0 ? "h1" : "div"}
                                    sx={{
                                        color: "#FFFFFF",
                                        fontWeight: 700,

                                        /* Explicit font sizes per breakpoint */
                                        fontSize: {
                                            xs: idx === 0 ? "1.6rem" : "1.2rem",   // mobile smaller - stack if multiple lines
                                            sm: idx === 0 ? "2.2rem" : "1.4rem",   // tablet
                                            md: idx === 0 ? "3.0rem" : "1.75rem",  // desktop
                                        },

                                        /* Tight line-height to match designs */
                                        lineHeight: 1.05,
                                        letterSpacing: "-0.02em",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {line}
                                </Typography>
                            ))
                            : (
                                <Typography
                                    component="h1"
                                    sx={{
                                        color: "#FFFFFF",
                                        fontWeight: 700,
                                        fontSize: { xs: "1.6rem", sm: "2.2rem", md: "3.0rem" },
                                        lineHeight: 1.05,
                                    }}
                                >
                                    {title}
                                </Typography>
                            )}
                    </Stack>

                    {/* CAPTION */}
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.92)",
                            mb: { xs: 2, sm: 2.5, md: 3 },
                            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                            lineHeight: 1.6,
                            maxWidth: { xs: "100%", sm: "520px", md: "520px" },
                            mx: { xs: "auto", sm: 0, md: 0 }, // center caption on xs
                        }}
                    >
                        {caption}
                    </Typography>

                    {/* BUTTONS */}
                    <Stack
                        direction={{ xs: "column", sm: "row", md: "row" }}
                        spacing={2}
                        alignItems={{ xs: "stretch", sm: "center", md: "center" }}
                        sx={{
                            mt: { xs: 1.5, sm: 0 },
                            justifyContent: { xs: "center", sm: "flex-start", md: "flex-start" },
                        }}
                    >
                        <ButtonPE
                            label="Get in touch"
                            size="medium"
                            aria-label="Get in touch"
                            sx={{
                                minWidth: 150,
                                width: { xs: "100%", sm: "auto" }, // full width on mobile
                                mx: { xs: "auto", sm: 0 },
                            }}
                        />
                        <ButtonPE
                            label="Explore who we are"
                            size="medium"
                            aria-label="Explore who we are"
                            sx={{
                                minWidth: 190,
                                width: { xs: "100%", sm: "auto" }, // full width on mobile
                                mx: { xs: "auto", sm: 0 },
                            }}
                        />
                    </Stack>
                </Box>
            </SXContainer>
        </Box>
    );
}

HomePage1.propTypes = {
    background: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    caption: PropTypes.string,
};

export default HomePage1;
