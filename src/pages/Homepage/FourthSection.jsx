// src/components/sections/FourthSection.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import SXContainer from "../../layout/SXContainer.jsx";
import ButtonPE from "../../components/buttons/ButtonPE";

export default function FourthSection({
    image,
    eyebrow,
    quote,
    company,
    ctaLabel = "Learn more",
    onCta = () => { },
}) {
    return (
        <SXContainer py={{ xs: 8, md: 12 }}>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 4, md: 6, lg: 10 },
                    alignItems: "center",
                }}
            >
                {/* LEFT IMAGE BLOCK */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "45%", lg: "500px" },
                        height: { xs: "280px", sm: "350px", md: "400px", lg: "450px" },
                        borderRadius: "8px",
                        overflow: "hidden",
                        flexShrink: 0,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                >
                    <Box
                        component="img"
                        src={image}
                        alt="Partner Testimonial"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </Box>

                {/* RIGHT CONTENT */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Typography
                        sx={{
                            color: "#000000",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            letterSpacing: "1.2px",
                            fontSize: { xs: "12px", md: "14px" },
                            mb: 2,
                        }}
                    >
                        {eyebrow}
                    </Typography>

                    <Typography
                        sx={{
                            color: "#000000",
                            fontFamily: '"Segoe UI", sans-serif',
                            fontWeight: 600,
                            fontSize: {
                                xs: "22px",
                                sm: "26px",
                                md: "28px",
                                lg: "34px",
                            },
                            lineHeight: 1.3,
                            mb: 3,
                            position: "relative",
                        }}
                    >
                        “{quote}”
                    </Typography>

                    <Typography
                        sx={{
                            color: "#000000",
                            fontFamily: '"Microsoft JhengHei UI", sans-serif',
                            fontWeight: 700,
                            fontSize: {
                                xs: "18px",
                                md: "22px",
                            },
                            mb: 4,
                        }}
                    >
                        — {company}
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                        <ButtonPE
                            label={ctaLabel}
                            size="large"
                            onClick={onCta}
                            sx={{ minWidth: 160 }}
                        />
                    </Box>
                </Box>
            </Box>
        </SXContainer>
    );
}

FourthSection.propTypes = {
    image: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    ctaLabel: PropTypes.string,
    onCta: PropTypes.func,
};
