import React from "react";
import {
    Box,
    Typography,
    Link,
    IconButton,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SXContainer from "./SXContainer";
import ButtonPE from "../components/buttons/ButtonPE";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logoImg from "../assets/logo/syd_logo_white.png";

export default function HomeFooter({ onTalk = () => window.alert("Talk clicked") }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

    const getFlexValue = () => {
        if (isMobile) return { minWidth: "100%", flex: "1 0 100%" };
        if (isSmallScreen) return { minWidth: "45%", flex: "1 0 45%" };
        return { minWidth: "180px", flex: 1 };
    };

    const columnStyle = getFlexValue();

    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                bgcolor: "#0F0B21",
                color: "#FFFFFF",
                pt: { xs: 8, md: 10 },
                pb: 6,
            }}
        >
            <SXContainer>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 4,
                    mb: 8,
                    justifyContent: "space-between",
                }}>
                    {/* Brand Section */}
                    <Box sx={{
                        ...columnStyle,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 4,
                    }}>
                        <Box
                            component="img"
                            src={logoImg}
                            alt="SYD Logo"
                            sx={{
                                height: 48,
                                maxWidth: "100%",
                            }}
                        />
                        <ButtonPE
                            label="Talk with us"
                            size="medium"
                            onClick={onTalk}
                            sx={{ bgcolor: "#6533FF", "&:hover": { bgcolor: "#5028CC" } }}
                        />
                    </Box>

                    {/* Links Columns */}
                    {[
                        { title: "Quick Links", items: quickLinks },
                        { title: "Services", items: services.map(s => ({ label: s })) },
                        { title: "Company", items: company.map(s => ({ label: s })) },
                        { title: "Resources", items: resources.map(s => ({ label: s })) }
                    ].map((col, idx) => (
                        <Box key={idx} sx={columnStyle}>
                            <Typography
                                variant="footerTitle"
                                sx={{
                                    color: "#FFFFFF",
                                    mb: 2.5,
                                    textAlign: "left",
                                }}
                            >
                                {col.title}
                            </Typography>
                            <Box component="ul" sx={{
                                listStyle: "none",
                                padding: 0,
                                m: 0,
                                textAlign: "left",
                            }}>
                                {col.items.map((item, i) => (
                                    <Box component="li" key={i}>
                                        <Link
                                            href={item.href || "#"}
                                            underline="none"
                                            sx={{
                                                color: "rgba(255, 255, 255, 0.7)",
                                                fontSize: "16px",
                                                lineHeight: "35px",
                                                display: "inline-block",
                                                "&:hover": {
                                                    color: "#6533FF",
                                                },
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
                    <Box
                        onClick={handleBackToTop}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            cursor: "pointer",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            px: 2,
                            py: 1,
                            "&:hover": { borderColor: "#FFFFFF" }
                        }}
                    >
                        <Typography sx={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px" }}>BACK TO TOP</Typography>
                        <KeyboardArrowUpIcon fontSize="small" />
                    </Box>
                </Box>

                <Box
                    sx={{
                        pt: 4,
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>
                        © {new Date().getFullYear()} SYD Consulting. All Rights Reserved.
                    </Typography>
                    <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                        <Link href="/privacy" sx={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", textDecoration: "none" }}>Privacy Policy</Link>
                        <Link href="#" sx={{ color: "#FFFFFF" }}>
                            <LinkedInIcon />
                        </Link>
                    </Box>
                </Box>
            </SXContainer>
        </Box>
    );
}
