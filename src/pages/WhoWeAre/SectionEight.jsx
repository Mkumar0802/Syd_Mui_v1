import React from "react";
import { Box, Typography } from "@mui/material";
import SXContainer from "../../layout/SXContainer"; // adjust path if needed
import ButtonPE from "../../components/buttons/ButtonPE";

const SectionEight = () => {
    return (
        <Box sx={{ bgcolor: "background.default" }}>
            <SXContainer
                maxWidth="xl"
                py={{ xs: 10, md: 14, lg: 28 }} // replaces Box py + Container
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 4,
                    }}
                >
                    {/* Left Column */}
                    <Box sx={{ flex: 1, maxWidth: { md: "45%" } }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{ fontWeight: 600, mb: 2 }}
                        >
                            Ready to Work Together?
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "1.1rem",
                                color: "text.secondary",
                                lineHeight: 1.6,
                            }}
                        >
                            Whether you're planning an S/4HANA transformation, need expert SAP
                            technical support, or want a trusted partner to simplify your SAP
                            landscape, we're here to help.
                        </Typography>
                    </Box>

                    {/* Right Column */}
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{ fontWeight: 500, mb: 3 }}
                        >
                            Let's talk about your SAP needs.
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 2,
                                justifyContent: { xs: "flex-start", sm: "flex-start" }
                            }}
                        >
                            <ButtonPE label="Get in touch →" size="large" />
                            <ButtonPE label="Explore what we do →" size="large" />
                            <ButtonPE label="Customer Success Stories →" size="large" />
                        </Box>
                    </Box>
                </Box>
            </SXContainer>
        </Box>
    );
};

export default SectionEight;
