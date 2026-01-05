import React from "react";
import {
    Box,
    Typography,
    Link,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SXContainer from "./SXContainer";

export default function CommonFooter() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const quickLinks = [
        { label: "Home", href: "/" },
        { label: "Who We Are", href: "/who" },
        { label: "What We Do", href: "/what" },
        { label: "Our Work", href: "/work" },
        { label: "Our Thinking", href: "/thinking" },
        { label: "Contact", href: "/contact" },
    ];

    const services = [
        "Technical Specialisation",
        "Module Specialisation",
        "S/4HANA Services",
        "Managed Services",
        "Resource Augmentation",
    ];

    const company = [
        "Why Choose Us",
        "Our Team",
        "SAP PartnerEdge",
        "Careers/Consultant Opportunities"
    ];
    const resources = [
        "Case Studies",
        "Insights & Articles",
        "Subscribe to Updates"
    ];

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
                bgcolor: "#D9D9D9", // Light gray background
                color: "#000000",
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
                    {/* Columns */}
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
                                    color: "#000000",
                                    mb: 2.5,
                                    textAlign: "left",
                                    fontWeight: 700,
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
                                                color: "#333333",
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

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 10,
                        textAlign: "left",
                    }}
                >
                    {/* Contact Info */}
                    <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "16px", mb: 2 }}>Contact</Typography>
                        <Typography sx={{ fontSize: "14px", mb: 0.5 }}>info@syd.co.nz</Typography>
                        <Typography sx={{ fontSize: "14px", mb: 0.5 }}>+64 21 294 8239</Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            SYD Consulting<br />
                            2, Crummer Road, Ponsonby,<br />
                            Auckland 1021, New Zealand
                        </Typography>
                    </Box>

                    {/* Legal */}
                    <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "16px", mb: 2 }}>Legal</Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            <Link href="/privacy" sx={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</Link>
                            {" | "}
                            <Link href="/terms" sx={{ color: "inherit", textDecoration: "none" }}>Terms & Conditions</Link>
                        </Typography>
                    </Box>
                </Box>
            </SXContainer>
        </Box>
    );
}
