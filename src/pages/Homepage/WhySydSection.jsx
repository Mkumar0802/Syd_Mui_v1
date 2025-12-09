// src/components/sections/WhySydSection.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack } from "@mui/material";

import ButtonPE from "../../components/buttons/ButtonPE";
import SXContainer from "../../layout/SXContainer.jsx";
import WCSCarousel from "../../components/carousel/WCSCarousel";

export default function WhySydSection({
    title = "What makes SYD Consulting your Ideal SAP Partner",
    description = "New Zealand organisations choose SYD when they want exceptional SAP expertise delivered with agility, transparency, and genuine partnership.",
    ctaLabel = "Explore who we are",
    items = [],
    containerWidth = false,
}) {
    return (
        <SXContainer>
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
                        mt: 3

                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            fontSize: { xs: "20px", md: "1.4rem" },
                            lineHeight: 1.05,
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            lineHeight: 1.6,
                            mb: 3,
                            fontSize: "14px",
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

WhySydSection.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    ctaLabel: PropTypes.string,
    items: PropTypes.array.isRequired,
    containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
