// src/components/sections/ThirdSection.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack } from "@mui/material";

import ButtonPE from "../../components/buttons/ButtonPE.jsx";
import SXContainer from "../../layout/SXContainer.jsx";
import WCSCarousel from "../../components/carousel/WCSCarousel.jsx";

export default function ThirdSection({
    title = "What makes SYD Consulting your Ideal SAP Partner",
    description = "New Zealand organisations choose SYD when they want exceptional SAP expertise delivered with agility, transparency, and genuine partnership.",
    ctaLabel = "Explore who we are",
    items = [],
    containerWidth = false,
}) {

    // Split the title into 3 fixed lines
    const titleLines = [
        "What makes",
        "SYD Consulting your",
        "Ideal SAP Partner"
    ];

    return (
        <SXContainer py={{ xs: 8, md: 12 }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 4, md: 4 },
                }}
            >
                {/* LEFT CONTENT */}
                <Box
                    sx={{
                        minHeight: 200,
                        maxWidth: { xs: "100%", md: "400px", lg: "450px" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        mt: 3,
                    }}
                >
                    <Stack spacing={0.5} sx={{ mb: 2 }}>
                        {titleLines.map((line, idx) => (
                            <Typography
                                key={idx}
                                variant="h5"
                                sx={{
                                    mb: 1,
                                    color: "#000000ff",
                                    textAlign: { xs: "center", sm: "left" },
                                    wordBreak: "break-word",
                                    fontFamily: `"Microsoft JhengHei UI", sans-serif`,
                                    fontWeight: 500,
                                    fontSize: {
                                        xs: "28px",
                                        sm: "28px",
                                        md: "32px",
                                        lg: "32px",
                                    },
                                    lineHeight: "100%",
                                    letterSpacing: "0px",
                                }}
                            >
                                {line}
                            </Typography>
                        ))}
                    </Stack>

                    <Typography
                        sx={{
                            fontFamily: `"Segoe UI", sans-serif`,
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: { xs: "14px", sm: "15px", md: "17px" },
                            lineHeight: { xs: "20px", sm: "21px", md: "29px" },
                            letterSpacing: "0%",
                            whiteSpace: "pre-line",
                            color: "#000000ff",
                            mb: 3,
                        }}
                    >
                        {description}
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <ButtonPE label={ctaLabel} size="medium" />
                    </Stack>
                </Box>

                {/* RIGHT CAROUSEL */}
                <Box
                    sx={{
                        "--card-w": "340px",
                        width: { xs: "100%", md: `calc(var(--card-w) * 3.35)` },
                        minWidth: { xs: "100%", md: `calc(var(--card-w) * 2)` },
                    }}
                >
                    <WCSCarousel
                        items={items}
                        title={null}
                        description={null}
                        containerWidth={containerWidth}
                    />
                </Box>
            </Box>
        </SXContainer>
    );
}

ThirdSection.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    ctaLabel: PropTypes.string,
    items: PropTypes.array.isRequired,
    containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
