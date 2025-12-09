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
                        <Typography
                            sx={{
                                fontFamily: `"Microsoft JhengHei UI", sans-serif`,
                                fontWeight: 700,
                                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                                color: "text.primary",
                                mb: 2,
                                paddingBottom: { xs: 1, sm: 2 },
                            }}
                        >
                            {eyebrow}
                        </Typography>

                        {/* QUOTE */}
                        {/* QUOTE — split into 4 lines */}
                        <Box sx={{ mt: { xs: 2, sm: 2, md: 3 }, mb: { xs: 2, sm: 2, md: 2 } }}>
                            {[
                                "They take real ownership - proactive",
                                "accountable, and committed to getting the job done.",
                                "job done then challenges arise, SYD step",
                                "up and deliver."
                            ].map((line, idx) => (
                                <Typography
                                    key={idx}
                                    sx={{
                                        fontFamily: `"Segoe UI", sans-serif`,
                                        fontWeight: 600,
                                        fontSize: {
                                            xs: "clamp(18px, 5vw, 20px)",
                                            sm: "clamp(20px, 4vw, 24px)",
                                               md: "24px",
                                            lg: "clamp(24px, 3vw, 32px)",
                                        },
                                        lineHeight: "120%",
                                        letterSpacing: "0px",
                                        color: "text.primary",
                                        maxWidth: { xs: "100%", md: "95%" },
                                    }}
                                >
                                    {idx === 0 && "“"}
                                    {line}
                                    {idx === 3 && "”"}
                                </Typography>
                            ))}
                        </Box>




                        {/* COMPANY */}
                        <Typography
                            sx={{
                                fontFamily: `"Segoe UI", sans-serif`,
                                fontWeight: 600,
                                fontSize: { xs: "16px", sm: "18px", md: "24px" },
                                lineHeight: "100%",
                                color: "text.primary",
                            }}
                        >
                            {company}
                        </Typography>
                    </Box>

                    {/* CTA BUTTON */}
                    <Box sx={{ mt: { xs: 3, sm: 2, md: 0 } }}>
                        <ButtonPE
                            label={ctaLabel}
                            size="medium"
                            onClick={onCta}
                            sx={{
                                minWidth: 120,
                                mb: { xs: 4, sm: 0 },
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
