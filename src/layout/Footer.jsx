// src/components/footer/Footer.jsx
import React from "react";
import {
    Box,
    Typography,
    Link,
    Divider,
    IconButton,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SXContainer from "../layout/SXContainer";
import ButtonPE from "../components/buttons/ButtonPE";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logoImg from "../assets/logo/syd_logo_white.png";

export default function Footer({ onTalk = () => window.alert("Talk clicked") }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // screens smaller than 900px
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // screens smaller than 600px

    const quickLinks = [
        { label: "Home", href: "/" },
        { label: "Who We Are", href: "/who" },
        { label: "What We Do", href: "/what" },
        { label: "Our Work", href: "/work" },
        { label: "Our Thinking", href: "/thinking" },
    ];

    const services = [
        "Technical Specialisation",
        "Module Specialisation",
        "S/4HANA Services",
        "Managed Services",
        "Resource Augmentation",
    ];

    const company = ["Why Choose Us", "Our Team", "SAP PartnerEdge"];
    const resources = ["Case Studies", "Insights & Articles"];

    const handleBackToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    // Responsive layout for columns
    const getFlexValue = () => {
        if (isMobile) return { minWidth: "100%", flex: "1 0 100%" }; // 1 column on mobile
        if (isSmallScreen) return { minWidth: "45%", flex: "1 0 45%" }; // 2 columns on tablet
        return { minWidth: "200px", flex: 1 }; // 5 columns on desktop
    };

    const columnStyle = getFlexValue();

    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                bgcolor: "#16122A",
                color: "#fff",
                pt: 8,
                pb: 6,
            }}
        >
            <SXContainer>
                {/* Main Footer Content - Responsive Grid */}
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 4,
                    mb: 6,
                    justifyContent: isMobile ? "center" : "space-between",
                }}>
                    {/* Box 1 - Logo + Button */}
                    <Box sx={{
                        ...columnStyle,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: isMobile ? "center" : "flex-start",
                        textAlign: isMobile ? "center" : "left",
                        gap: 3,
                    }}>
                        {/* Logo Image */}
                        <Box
                            component="img"
                            src={logoImg}
                            alt="SYD Logo"
                            sx={{
                                height: isMobile ? 80 : 100,
                                maxWidth: "100%",
                            }}
                        />

                        {/* Talk with Us Button */}
                        <ButtonPE
                            label="Talk with Us"
                            size={isMobile ? "small" : "medium"}
                            onClick={onTalk}
                            sx={{
                                backgroundColor: "#6533FF",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#5b2ee6",
                                    color: "#fff"
                                },
                                width: isMobile ? "100%" : "fit-content",
                                minWidth: isMobile ? "auto" : "200px",
                            }}
                        />
                    </Box>

                    {/* Box 2 - Quick Links */}
                    <Box sx={columnStyle}>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontWeight: 700,
                                mb: 2,
                                fontSize: "0.9rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            Quick Links
                        </Typography>
                        <Box component="ul" sx={{
                            listStyle: "none",
                            padding: 0,
                            m: 0,
                            textAlign: isMobile ? "center" : "left",
                        }}>
                            {quickLinks.map((link) => (
                                <Box component="li" key={link.label} sx={{ mb: 1 }}>
                                    <Link
                                        href={link.href}
                                        underline="none"
                                        sx={{
                                            color: "#fff",
                                            fontSize: "0.9rem",
                                            display: "inline-block",
                                            "&:hover": {
                                                color: "#fff",
                                                textDecoration: "underline"
                                            },
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Box 3 - Services */}
                    <Box sx={columnStyle}>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontWeight: 700,
                                mb: 2,
                                fontSize: "0.9rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            Services
                        </Typography>
                        <Box component="ul" sx={{
                            listStyle: "none",
                            padding: 0,
                            m: 0,
                            textAlign: isMobile ? "center" : "left",
                        }}>
                            {services.map((service) => (
                                <Box component="li" key={service} sx={{ mb: 1 }}>
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontSize: "0.9rem",
                                            display: "inline-block",
                                        }}
                                    >
                                        {service}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Box 4 - Company */}
                    <Box sx={columnStyle}>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontWeight: 700,
                                mb: 2,
                                fontSize: "0.9rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            Company
                        </Typography>
                        <Box component="ul" sx={{
                            listStyle: "none",
                            padding: 0,
                            m: 0,
                            textAlign: isMobile ? "center" : "left",
                        }}>
                            {company.map((item) => (
                                <Box component="li" key={item} sx={{ mb: 1 }}>
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontSize: "0.9rem",
                                            display: "inline-block",
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Box 5 - Resources */}
                    <Box sx={columnStyle}>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontWeight: 700,
                                mb: 2,
                                fontSize: "0.9rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            Resources
                        </Typography>
                        <Box component="ul" sx={{
                            listStyle: "none",
                            padding: 0,
                            m: 0,
                            textAlign: isMobile ? "center" : "left",
                        }}>
                            {resources.map((resource) => (
                                <Box component="li" key={resource} sx={{ mb: 1 }}>
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontSize: "0.9rem",
                                            display: "inline-block",
                                        }}
                                    >
                                        {resource}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: { xs: "center", md: "flex-end" },
                        mt: { xs: 3, md: 4 },
                    }}
                >
                    <ButtonPE
                        label="BACK TO TOP"
                        variant="outlinedWhite"
                        size="small"
                        endIcon={<KeyboardArrowUpIcon />}
                        onClick={handleBackToTop}
                    />
                </Box>


                {/* Bottom Section - Responsive */}
                <Divider
                    sx={{
                        borderColor: "rgba(255,255,255,0.2)",
                        borderWidth: "0.75px",
                        my: 4
                    }}
                />

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "space-between",
                        alignItems: isMobile ? "center" : "center",
                        flexWrap: "wrap",
                        width: "100%",
                        gap: 3,
                    }}
                >
                    {/* Left: Copyright */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            flexShrink: 0,
                            order: isMobile ? 2 : 1,
                            textAlign: isMobile ? "center" : "left",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#FFFFFF",
                                fontSize: isMobile ? "12px" : "14px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            © {new Date().getFullYear()} SYD Consulting. All Rights Reserved.
                            <Link
                                href="/privacy"
                                sx={{
                                    color: "#FFFFFF",
                                    textDecoration: "none",
                                    ml: 10,       // 12px left spacing
                                    "&:hover": { textDecoration: "underline" }
                                }}
                            >
                                Privacy Policy
                            </Link>
                        </Typography>


                    </Box>

                    {/* Right: Social icons */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: isMobile ? 1 : 2,
                            order: isMobile ? 1 : 2,
                            justifyContent: isMobile ? "center" : "flex-end",
                            width: isMobile ? "100%" : "auto",
                            mb: isMobile ? 2 : 0,
                        }}
                    >
                        <IconButton
                            component="a"
                            href="https://linkedin.com"
                            target="_blank"
                            sx={{
                                color: "#FFFFFF",
                                padding: isMobile ? "8px" : "12px",
                            }}
                        >
                            <LinkedInIcon sx={{ fontSize: isMobile ? 24 : 32 }} />
                        </IconButton>

                        {/* Back to Top Button - Only show on mobile */}
                        {isMobile && (
                            <IconButton
                                onClick={handleBackToTop}
                                sx={{
                                    color: "#FFFFFF",
                                    padding: "8px",
                                }}
                            >
                                <KeyboardArrowUpIcon sx={{ fontSize: 24 }} />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            </SXContainer>
        </Box>
    );
}