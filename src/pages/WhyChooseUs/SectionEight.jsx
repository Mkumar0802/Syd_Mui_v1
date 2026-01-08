import React from "react";
import { Box, Typography } from "@mui/material";
import SXContainer from "../../layout/SXContainer";
import ButtonPE from "../../components/buttons/ButtonPE";

// Consistent typography styles
const titleStyle = {
    fontFamily: '"Microsoft JhengHei UI", sans-serif',
    fontWeight: 500,
    fontSize: { xs: '22px', sm: '26px', md: '32px' },
    lineHeight: { xs: '30px', sm: '36px', md: '45px' },
    letterSpacing: '0%',
    color: '#000000',
};

const paragraphStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: { xs: '15px', sm: '17px', md: '20px' },
    lineHeight: { xs: '22px', sm: '25px', md: '29px' },
    letterSpacing: '0%',
    color: '#000000',
};

const SectionEight = () => {
    return (
        <Box sx={{ bgcolor: "background.default" }}>
            <SXContainer
                maxWidth="xl"
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: { xs: 4, md: 6 },
                    }}
                >
                    {/* Left Column */}
                    <Box sx={{ flex: 1, maxWidth: { md: "45%" } }}>
                        <Typography
                            component="h2"
                            sx={{
                                ...titleStyle,
                                mb: { xs: 2, md: 3 },
                            }}
                        >
                            Ready to Work Together?
                        </Typography>

                        <Typography
                            sx={{
                                ...paragraphStyle,
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
                            component="p"
                            sx={{
                                ...titleStyle,
                                fontSize: { xs: '18px', sm: '20px', md: '24px' },
                                mb: { xs: 3, md: 4 },
                            }}
                        >
                            Let's talk about your SAP needs.
                        </Typography>

                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
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
