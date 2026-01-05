import React from "react";
import { Box, Typography } from "@mui/material";
import SXContainer from "../../layout/SXContainer";
import ButtonPE from "../../components/buttons/ButtonPE";

const HeroWhoWeAre = () => {
    return (
        <SXContainer
            maxWidth="xl"
            py={{ xs: 8, md: 10, lg: 12 }}
        >
            <Box sx={{ maxWidth: "800px", mx: "auto" }}>
                <Typography
                    variant="overline"
                    sx={{
                        color: "text.secondary",
                        fontWeight: 600,
                        letterSpacing: "1.2px",
                        mb: 1,
                        display: "block",
                    }}
                >
                    OUR TEAM
                </Typography>
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        mb: 3,
                        fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                        lineHeight: 1.2,
                    }}
                >
                    Meet the Team Behind the Solutions
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        mb: 2,
                        color: "text.primary",
                    }}
                >
                    Our people are our greatest asset. Every consultant brings deep SAP expertise,
                    practical problem-solving skills, and a commitment to client success. We work
                    as a seamless addition to your team, solving complex problems and delivering
                    real value every time.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        mb: 4,
                        color: "text.primary",
                    }}
                >
                    We're passionate about your success and care about your people as much as our
                    team. The embedded partnership style creates advisory, wisdom & knowledge
                    sharing, and ensures outcomes that last.
                </Typography>
                <ButtonPE
                    label={
                        <Box
                            component="span"
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                            }}
                        >
                            Explore Career Opportunities
                            <Box
                                component="span"
                                sx={{
                                    fontSize: "1.4em",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                →
                            </Box>
                        </Box>
                    }
                    size="large"
                    sx={{
                        bgcolor: "#8A38F5",
                        "&:hover": { bgcolor: "#762ad6" },
                        px: 4,
                    }}
                />


            </Box>
        </SXContainer>
    );
};

export default HeroWhoWeAre;
