import React from "react";
import { Box, Typography, Link } from "@mui/material";
import SXContainer from "../../layout/SXContainer";
import klSkyline from "../../assets/aboutus/kl_skyline.png";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const OffshoreTeam = () => {
    return (
        <SXContainer
            maxWidth="xl"
            py={{ xs: 8, md: 10, lg: 12 }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    gap: { xs: 4, md: 8 },
                }}
            >
                {/* Image Column */}
                <Box
                    sx={{
                        flex: 1,
                        width: "100%",
                        borderRadius: "8px",
                        overflow: "hidden",
                        height: { xs: "250px", sm: "350px", md: "400px" },
                    }}
                >
                    <Box
                        component="img"
                        src={klSkyline}
                        alt="Kuala Lumpur Skyline"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>

                {/* Text Column */}
                <Box sx={{ flex: 1 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 3,
                            fontSize: { xs: "1.75rem", md: "2.25rem" },
                        }}
                    >
                        Our Offshore Team
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
                        Our offshore team is based in Kuala Lumpur, Malaysia. They are a dedicated
                        team of SAP technology specialists who provide practical solutions and
                        technical support for our clients, ensuring consistency and quality results
                        across the board.
                    </Typography>
                    <Link
                        href="https://www.virtualcalibre.com"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            textDecoration: "none",
                            color: "text.primary",
                            fontWeight: 600,
                            fontSize: "1rem",
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        www.virtualcalibre.com
                        <OpenInNewIcon sx={{ fontSize: "1rem" }} />
                    </Link>
                </Box>
            </Box>
        </SXContainer>
    );
};

export default OffshoreTeam;
