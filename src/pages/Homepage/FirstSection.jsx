// src/components/hero/FirstSection.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack } from "@mui/material";
import ButtonPE from "../../components/buttons/ButtonPE";
import SXContainer from "../../layout/SXContainer.jsx";
import heroImg from "../../assets/home/SYD_homepaged_hero_banner_Auckland1.jpg";

function FirstSection({
    background = heroImg,

    // 3-line hero heading
    title = [
        "SAP Consulting",
        "Built for New Zealand",
        "Businesses"
    ],

    // 2-line caption
    caption = [
        "Big firm capability meets local agility Get expert",
        " SAP solutions designed for New Zealand businesses."
    ],
}) {
    return (
        <Box
            component="section"
            aria-label="Hero section"
            sx={{
                width: "100%",
                height: "auto",
                display: "flex",
                alignItems: "center",
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",        // Image fills container, maintains aspect ratio
                backgroundPosition: "center",   // Center the image
                backgroundRepeat: "no-repeat",  // Don't repeat the image
                pt: { xs: 6, sm: 8, md: 12 },
                pb: { xs: 6, sm: 8, md: 12 },
                textAlign: { xs: "center", sm: "left" },

                // Optional: Add overlay for better text contrast
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",

                    zIndex: 1,
                },
            }}
        >
            <SXContainer
                maxWidth="xl"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", md: "flex-start" },
                }}
            >
                <Box
                    sx={{
                        width: { xs: "92%", sm: "86%", md: "621px" },
                        mx: { xs: "auto", md: 0 },
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    {/* HERO TITLE — theme variant heroTitle48 */}
                    <Stack
                        spacing={0}
                        sx={{
                            mb: { xs: 2, sm: 3, md: 3 },
                        }}
                    >
                        {title.map((line, idx) => (
                            <Typography
                                key={idx}
                                sx={{
                                    fontFamily: `"Microsoft JhengHei UI", sans-serif`,
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    fontSize: {
                                        xs: "32px",    // mobile fallback
                                        sm: "40px",    // tablet fallback
                                        md: "48px",    // desktop spec
                                    },
                                    lineHeight: "100%",
                                    letterSpacing: "0px",
                                    color: "#FFFFFF",
                                    textAlign: { xs: "center", sm: "left" },
                                }}
                            >
                                {line}
                            </Typography>
                        ))}
                    </Stack>







                    {/* CAPTION — variant segoe20Semi from theme */}
                    <Stack
                        sx={{
                            mb: { xs: 2, sm: 3, md: 3 },
                            mt: { xs: 2, sm: 3, md: 3 }
                        }}
                    >

                        {caption.map((line, idx) => (
                            <Typography
                                key={idx}
                                variant="segoe20Semi"
                                sx={{
                                    color: "rgba(255,255,255,0.92)",
                                    maxWidth: "520px",
                                    mx: { xs: "auto", sm: 0 },
                                }}
                            >
                                {line}
                            </Typography>
                        ))}
                    </Stack>

                    {/* BUTTONS */}
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        alignItems={{ xs: "stretch", sm: "center" }}
                        sx={{
                            justifyContent: { xs: "center", sm: "flex-start" },
                        }}
                    >
                        <ButtonPE
                            label="Get in touch"
                            size="medium"
                            sx={{
                                minWidth: 150,
                                width: { xs: "100%", sm: "auto" },
                            }}
                        />

                        <ButtonPE
                            label="Explore who we are"
                            size="medium"
                            sx={{
                                minWidth: 190,
                                width: { xs: "100%", sm: "auto" },
                            }}
                        />
                    </Stack>
                </Box>
            </SXContainer>
        </Box>
    );
}

FirstSection.propTypes = {
    background: PropTypes.string,
    title: PropTypes.arrayOf(PropTypes.string),
    caption: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
};

export default FirstSection;
