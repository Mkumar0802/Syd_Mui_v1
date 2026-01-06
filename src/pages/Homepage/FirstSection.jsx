// src/components/hero/FirstSection.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack } from "@mui/material";
import ButtonPE from "../../components/buttons/ButtonPE";
import SXContainer from "../../layout/SXContainer.jsx";
import heroImg from "../../assets/home/SYD_homepaged_hero_banner_Auckland1.jpg";

function FirstSection({
    background = heroImg,
    overlayImage = null,
    label = "",
    title = [
        "SAP Consulting",
        "Built for New Zealand",
        "Businesses"
    ],
    caption = [
        "Big firm capability meets local agility Get expert",
        " SAP solutions designed for New Zealand businesses."
    ],
}) {
    const titleLines = Array.isArray(title) ? title : String(title).split("\n");
    const captionLines = Array.isArray(caption) ? caption : String(caption).split("\n");

    return (
        <Box
            component="section"
            aria-label="Hero section"
            sx={{
                width: "100%",
                position: "relative",
                minHeight: { xs: "500px", sm: "600px", md: "700px", lg: "800px" },
                height: "auto",
                display: "flex",
                alignItems: "center",
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.35)",
                    zIndex: 1,
                }
            }}
        >
            {overlayImage && (
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${overlayImage})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        pointerEvents: "none",
                        zIndex: 2,
                        opacity: { xs: 0.5, md: 0.9 },
                    }}
                />
            )}

            <SXContainer
                maxWidth="xl"
                sx={{
                    position: "relative",
                    zIndex: 3,
                    py: { xs: 8, md: 12 },
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "700px" },
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    {label && (
                        <Typography
                            sx={{
                                color: "#ffffffcc",
                                mb: 2,
                                textTransform: "uppercase",
                                fontWeight: 600,
                                letterSpacing: "1.5px",
                                fontSize: { xs: "12px", md: "14px" },
                            }}
                        >
                            {label}
                        </Typography>
                    )}

                    <Stack spacing={0} sx={{ mb: 4 }}>
                        {titleLines.map((line, idx) => (
                            <Typography
                                key={idx}
                                sx={{
                                    color: "#FFFFFF",
                                    fontFamily: '"Microsoft JhengHei UI", sans-serif',
                                    fontWeight: 700,
                                    fontSize: {
                                        xs: "32px",
                                        sm: "42px",
                                        md: "52px",
                                        lg: "64px",
                                    },
                                    lineHeight: { xs: 1.1, md: 1.05 },
                                    wordBreak: "break-word",
                                }}
                            >
                                {line}
                            </Typography>
                        ))}
                    </Stack>

                    <Stack sx={{ mb: 5 }}>
                        {captionLines.map((line, idx) => (
                            <Typography
                                key={idx}
                                sx={{
                                    color: "rgba(255,255,255,0.95)",
                                    maxWidth: "550px",
                                    mx: { xs: "auto", md: 0 },
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 400,
                                    fontSize: { xs: "16px", md: "18px" },
                                    lineHeight: 1.6,
                                    mb: 1,
                                }}
                            >
                                {line}
                            </Typography>
                        ))}
                    </Stack>

                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={3}
                        sx={{
                            justifyContent: { xs: "center", md: "flex-start" },
                            alignItems: "center",
                        }}
                    >
                        <ButtonPE
                            label="Get in touch"
                            size="large"
                            sx={{ minWidth: 180, width: { xs: "100%", sm: "auto" } }}
                        />

                        <ButtonPE
                            label="Explore who we are"
                            size="large"
                            sx={{ minWidth: 220, width: { xs: "100%", sm: "auto" } }}
                        />
                    </Stack>
                </Box>
            </SXContainer>
        </Box>
    );
}

FirstSection.propTypes = {
    background: PropTypes.string,
    overlayImage: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
    caption: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
};

export default FirstSection;
