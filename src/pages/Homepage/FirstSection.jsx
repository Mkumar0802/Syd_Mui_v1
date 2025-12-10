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
                minHeight: { xs: "360px", sm: "420px", md: "520px", lg: "600px" },
                display: "flex",
                alignItems: "center",
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
                // px: { xs: 2, sm: 4, md: 10 },
                // py: { xs: 6, sm: 8, md: 10 },
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
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", md: "flex-start" },
                    position: "relative",
                    zIndex: 3,
                    px: 0,
                }}
            >
                <Box
                    sx={{
                        width: { xs: "92%", sm: "86%", md: "621px" },
                        mx: { xs: "auto", md: 0 },
                        textAlign: { xs: "center", sm: "left" },
                    }}
                >
                    {label && (
                        <Typography
                            sx={{
                                color: "#ffffffcc",
                                mb: { xs: 1.5, sm: 2 },
                                textTransform: "uppercase",
                                textAlign: { xs: "center", sm: "left" },
                            }}
                        >
                            {label}
                        </Typography>
                    )}

                    <Stack spacing={0} sx={{ mb: { xs: 2, sm: 3, md: 3 } }}>
                        {titleLines.map((line, idx) => (
                            <Typography
                                key={idx}
                                sx={{
                                    color: "#FFFFFF",
                                    textAlign: { xs: "center", sm: "left" },
                                    wordBreak: "break-word",
                                    fontFamily: `"Microsoft JhengHei UI", sans-serif`,
                                    fontWeight: 500,
                                    fontSize: {
                                        xs: "28px",
                                        sm: "36px",
                                        md: "48px",
                                        lg: "56px",
                                    },
                                    lineHeight: "100%",
                                    letterSpacing: "0px",
                                }}
                            >
                                {line}
                            </Typography>
                        ))}
                    </Stack>

                    <Stack
                        sx={{
                            mb: { xs: 2, sm: 3, md: 3 },
                            mt: { xs: 2, sm: 3, md: 3 },
                        }}
                    >
                        {captionLines.map((line, idx) => (
                            <Typography
                                key={idx}
                                sx={{
                                    color: "rgba(255,255,255,0.92)",
                                    maxWidth: "520px",
                                    mx: { xs: "auto", sm: 0 },
                                    fontFamily: `"Segoe UI", sans-serif`,
                                    fontWeight: 600,        // or 600 for semibold
                                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                                    lineHeight: 1.6,
                                    textAlign: { xs: "center", sm: "left" },
                                    wordBreak: "break-word",
                                    letterSpacing: "0px",
                                    whiteSpace: "pre-line",
                                }}

                            >
                                {line}
                            </Typography>
                        ))}
                    </Stack>

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
                            size="large"
                            sx={{ minWidth: 150, width: { xs: "100%", sm: "auto" } }}
                        />

                        <ButtonPE
                            label="Explore who we are"
                            size="large"
                            sx={{ minWidth: 190, width: { xs: "100%", sm: "auto" } }}
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
