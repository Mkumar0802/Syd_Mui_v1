import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import SXContainer from "../../layout/SXContainer.jsx";
import ButtonPE from "../../components/buttons/ButtonPE";

export default function PartnerTestimonialSection({
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
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 3, md: 8 },
                    alignItems: "stretch",
                }}
            >
                {/* LEFT: FIXED HEIGHT ON DESKTOP — FLUID ON MOBILE */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "505px" },
                        height: { xs: "auto", md: "373px" },
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

                {/* RIGHT SIDE — PRESERVE LAYOUT, MAKE RESPONSIVE */}
                <Box
                    sx={{
                        flex: 1,
                        height: { xs: "auto", md: "373px" }, // auto on mobile, fixed on desktop
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        pt: { xs: 1, md: 1 },
                        pb: { xs: 1, md: 1 },
                    }}
                >
                    {/* TEXT BLOCK */}
                    <Box sx={{ flexShrink: 0 }}>
                        <Typography
                            sx={{
                                fontFamily: `"Microsoft JhengHei UI"`,
                                fontWeight: 700,
                                fontSize: { xs: "20px", md: "24px" },
                                color: "text.primary",
                                mb: 2,
                            }}
                        >
                            {eyebrow}
                        </Typography>

                        {/* QUOTE */}
                        <Typography
                            sx={{
                                fontFamily: "Segoe UI",
                                fontWeight: 600,
                                fontSize: {
                                    xs: "clamp(18px, 5vw, 22px)",
                                    sm: "clamp(20px, 4vw, 26px)",
                                    md: "clamp(24px, 3vw, 32px)",
                                },
                                lineHeight: "120%",         // more readable across breakpoints
                                letterSpacing: "0%",
                                mt: { xs: 2, md: 3 },
                                mb: { xs: 2, md: 2 },
                                color: "text.primary",
                                maxWidth: { xs: "100%", md: "95%" },
                            }}
                        >
                            “{quote}”
                        </Typography>


                        {/* COMPANY */}
                        <Typography
                            sx={{
                                fontFamily: "Segoe UI",
                                fontWeight: 600,
                                fontSize: { xs: "18px", md: "24px" },
                                lineHeight: "100%",
                                color: "text.primary",
                            }}
                        >
                            {company}
                        </Typography>
                    </Box>

                    {/* BUTTON — ALWAYS AT BOTTOM ON DESKTOP */}
                    <Box sx={{ mt: { xs: 3, md: 0 } }}>
                        <ButtonPE
                            label={ctaLabel}
                            size="medium"
                            onClick={onCta}
                            sx={{
                                minWidth: 120,
                                mb: 2,
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </SXContainer>
    );
}

PartnerTestimonialSection.propTypes = {
    image: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    ctaLabel: PropTypes.string,
    onCta: PropTypes.func,
};
