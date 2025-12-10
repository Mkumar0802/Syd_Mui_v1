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
        <SXContainer pt={0} pb={{ xs: 6, md: 10 }}>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: 3, sm: 4, md: 8 },
                    alignItems: "stretch",
                }}
            >
                {/* LEFT IMAGE BLOCK */}
                <Box
                    sx={{
                        width: { xs: "100%", sm: "45%", md: "505px" },
                        height: { xs: "auto", sm: "auto", md: "373px" },
                        overflow: "hidden",
                        flexShrink: 0,
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
                        justifyContent: "space-between",
                        pt: { xs: 1, sm: 0 },
                        pb: { xs: 1, sm: 0 },
                    }}
                >
                    {/* TEXT BLOCK */}
                    <Box sx={{ flexShrink: 0 }}>
                        <Typography sx={{
                            mb: 2, paddingBottom: { xs: 1, sm: 2 },
                            color: "#000000ff",
                            textAlign: { xs: "center", sm: "left" },
                            wordBreak: "break-word",
                            fontFamily: `"Microsoft JhengHei UI", sans-serif`,
                            fontWeight: 500,
                            fontSize: {
                                xs: "28px",
                                sm: "28px",
                                md: "28px",
                                lg: "30px",
                                xl: "32px",
                            },
                            lineHeight: "100%",
                            letterSpacing: "0px",

                        }}>
                            {eyebrow}
                        </Typography>

                        {/* QUOTE */}
                        <Box
                            sx={{
                                mt: { xs: 2, sm: 2, md: 3 },
                                mb: { xs: 2, sm: 2, md: 2 },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#000000ff",
                                    textAlign: { xs: "center", sm: "left" },
                                    wordBreak: "break-word",

                                    fontFamily: `"Segoe UI", sans-serif`,
                                    fontWeight: 600,
                                    fontStyle: "normal",

                                    fontSize: {
                                        xs: "20px",
                                        sm: "24px",
                                        md: "22px",
                                        lg: "30px",
                                        xl: "32px",
                                    },

                                    lineHeight: {
                                        xs: 1.45,
                                        sm: 1.35,
                                        md: 1.3,
                                        lg: 1.25,
                                        xl: 1.18,
                                    },

                                    letterSpacing: "1px",
                                    mb: 1.2,
                                    maxWidth: { xs: "100%", md: "95%" },
                                    whiteSpace: "normal",
                                }}
                            >
                                “They take real ownership - proactive, accountable, and committed to getting the job
                                done. When challenges arise, SYD step up and deliver.”
                            </Typography>
                        </Box>



                        {/* COMPANY */}
                        <Typography sx={{
                            color: "#000000ff",
                            textAlign: { xs: "center", sm: "left" },
                            wordBreak: "break-word",
                            fontFamily: `"Microsoft JhengHei UI", sans-serif`,
                            fontWeight: 500,
                            fontSize: {
                                xs: "28px",
                                sm: "20px",
                                md: "24px",
                                lg: "28px",
                            },
                            lineHeight: "100%",
                            letterSpacing: "0px",
                        }}>
                            {company}
                        </Typography>
                    </Box>

                    {/* CTA BUTTON */}
                    <Box sx={{
                        mt: { xs: 3, sm: 2, md: 0 },

                        // CENTER on mobile, LEFT on tablet+ 
                        display: "flex",
                        justifyContent: { xs: "center", sm: "flex-start" },
                    }}

                    >
                        <ButtonPE
                            label={ctaLabel}
                            size="medium"
                            onClick={onCta}
                            sx={{
                                minWidth: 120,
                                mb: { xs: 4, sm: 0 },
                                // responsive padding so button looks balanced across sizes
                                px: { xs: 2, sm: 2.5, md: 3 },
                                py: { xs: 0.9, sm: 1, md: 1.1 },
                                fontFamily: `"segoe UI", sans-serif`,
                                fontWeight: 600,
                                fontStyle: "normal",
                                fontSize: {
                                    xs: "18px",
                                    sm: "18px",
                                    md: "18px",
                                    lg: "18px",
                                },
                                lineHeight: "100%",


                            }}
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
