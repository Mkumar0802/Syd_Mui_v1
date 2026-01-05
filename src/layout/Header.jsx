// src/components/header/Header.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    Menu,
    MenuItem,
    Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import logoImg from "../assets/logo/syd_logo_white.png";
import SXContainer from "../layout/SXContainer";

/* ---------------- NAV CONFIG ---------------- */

const NAV = [
    {
        key: "who",
        label: "Who we are",
        href: "/who",
        children: [
            { key: "about", label: "About us", href: "/about-us" },
            { key: "why", label: "Why Choose Us", href: "/why-choose-us" },
            {
                key: "team",
                label: "Our Team",
                href: "/our-team",
                children: [
                    { key: "consultant", label: "Explore Consultant Opportunities", href: "/consultant-opportunities" },
                    { key: "job", label: "Job Opportunities", href: "/job-opportunities" },
                ],
            },
            { key: "partner", label: "SAP PartnerEdge", href: "/sap-partner-edge" },
        ],
    },
    {
        key: "what",
        label: "What we do",
        href: "/what",
        children: [
            { key: "technical", label: "SAP Technical Specialisation", href: "/sap-technical-specialisation" },
            { key: "module", label: "SAP Module Specialisation", href: "/sap-module-specialisation" },
            { key: "s4hana", label: "SAP S/4HANA Full Stack Services", href: "/sap-s4hana-services" },
            { key: "managed", label: "SYD Consulting Managed Services", href: "/managed-services" },
            { key: "resource", label: "Resource Augmentation", href: "/resource-augmentation" },
        ],
    },
    {
        key: "work",
        label: "Our Work",
        href: "/work",
        children: [
            { key: "video", label: "Client Video", href: "/client-video" },
            {
                key: "casestudies",
                label: "Case Studies",
                href: "/case-studies",
                children: [
                    { key: "cs1", label: "Case Study 1", href: "/case-study-1" },
                    { key: "cs2", label: "Case Study 2", href: "/case-study-2" },
                    { key: "cs3", label: "Case Study 3", href: "/case-study-3" },
                ],
            },
            { key: "testimonials", label: "Client testimonials", href: "/client-testimonials" },
        ],
    },
    {
        key: "thinking",
        label: "Our Thinking",
        href: "/thinking",
        children: [
            { key: "news", label: "News & Insights", href: "/news-insights" },
            { key: "connected", label: "Stay Connected", href: "/stay-connected" },
        ],
    },
    {
        key: "contact",
        label: "Contact us",
        href: "/contact",
        children: [
            { key: "talk", label: "Lets Talk & Contact us form", href: "/contact-form" },
            { key: "address", label: "Address details", href: "/address-details" },
        ],
    },
];

/* ---------------- HEADER ---------------- */

export default function Header({ height = 70, rightActions = null, containerWidth = "xl" }) {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Close drawer when screen size shifts to desktop
    React.useEffect(() => {
        if (isMdUp && drawerOpen) {
            setDrawerOpen(false);
        }
    }, [isMdUp, drawerOpen]);

    return (
        <>
            <AppBar position="sticky" elevation={0} sx={{ bgcolor: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <SXContainer maxWidth={containerWidth} py={0}>
                    <Toolbar sx={{ minHeight: height, display: "flex", justifyContent: "space-between" }}>
                        <Box
                            component="img"
                            src={logoImg}
                            alt="SYD Consulting"
                            sx={{
                                height: { xs: 36, md: 44 },
                                cursor: "pointer",
                                // Adjusting filter for white background - assuming logo is white by default
                                filter: "brightness(0) saturate(100%) invert(29%) sepia(94%) quad(143deg) hue-rotate(248deg) brightness(97%) contrast(106%)", // Approximate brand purple
                                "&:hover": { opacity: 0.8 }
                            }}
                            onClick={() => (window.location.href = "/")}
                        />

                        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                            {NAV.map((item) => (
                                <NavItem key={item.key} item={item} />
                            ))}
                        </Box>

                        {!isMdUp && (
                            <IconButton
                                onClick={() => setDrawerOpen(true)}
                                sx={{ color: "text.primary" }}
                                aria-label="open navigation drawer"
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Toolbar>
                </SXContainer>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 300 }}>
                    <Box sx={{
                        p: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid",
                        borderColor: "divider"
                    }}>
                        <Box
                            component="img"
                            src={logoImg}
                            alt="logo"
                            sx={{
                                height: 32,
                                filter: "brightness(0) saturate(100%) invert(29%) sepia(94%) quad(143deg) hue-rotate(248deg) brightness(97%) contrast(106%)"
                            }}
                        />
                        <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "text.secondary" }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <List>
                        {NAV.map((item) => (
                            <MobileNavItem key={item.key} item={item} onClose={() => setDrawerOpen(false)} />
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

/* ---------------- DESKTOP NAV ---------------- */

function NavItem({ item }) {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const isActive = window.location.pathname.startsWith(item.href);

    return (
        <Box onMouseEnter={(e) => item.children && setAnchorEl(e.currentTarget)}
            onMouseLeave={() => setAnchorEl(null)}>
            <Button
                disableRipple
                onClick={() => !item.children && (window.location.href = item.href)}
                endIcon={item.children ? <KeyboardArrowDownIcon /> : null}
                sx={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: open || isActive ? theme.palette.primary.main : theme.palette.text.primary,
                    "&:hover": {
                        backgroundColor: "transparent",
                        color: theme.palette.primary.main
                    },
                    textTransform: "none",
                    transition: "color 0.2s ease",
                }}
            >
                {item.label}
            </Button>

            {item.children && (
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{
                        onMouseEnter: () => setAnchorEl(anchorEl),
                        onMouseLeave: () => setAnchorEl(null),
                        sx: { py: 1 }
                    }}
                    slotProps={{
                        paper: {
                            elevation: 8,
                            sx: {
                                mt: 1,
                                minWidth: 200,
                                borderRadius: 2,
                                border: "1px solid",
                                borderColor: "divider",
                            }
                        }
                    }}
                >
                    {item.children.map((child) => (
                        <NestedMenuItem key={child.key} item={child} closeAll={() => setAnchorEl(null)} />
                    ))}
                </Menu>
            )}
        </Box>
    );
}

function NestedMenuItem({ item, closeAll }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    return (
        <Box onMouseEnter={(e) => item.children && setAnchorEl(e.currentTarget)}
            onMouseLeave={() => setAnchorEl(null)}>
            <MenuItem
                onClick={() => {
                    if (!item.children) {
                        window.location.href = item.href;
                        closeAll();
                    }
                }}
                sx={{ display: "flex", justifyContent: "space-between" }}
            >
                {item.label}
                {item.children && <KeyboardArrowRightIcon fontSize="small" />}
            </MenuItem>

            {item.children && (
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    MenuListProps={{
                        onMouseEnter: () => setAnchorEl(anchorEl),
                        onMouseLeave: () => setAnchorEl(null),
                        sx: { py: 1 }
                    }}
                    slotProps={{
                        paper: {
                            elevation: 8,
                            sx: {
                                ml: 0.5,
                                minWidth: 220,
                                borderRadius: 2,
                                border: "1px solid",
                                borderColor: "divider",
                            }
                        }
                    }}
                >
                    {item.children.map((sub) => (
                        <MenuItem
                            key={sub.key}
                            onClick={() => {
                                window.location.href = sub.href;
                                closeAll();
                            }}
                            sx={{
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                py: 1.2,
                                px: 2,
                                "&:hover": {
                                    backgroundColor: "rgba(101, 51, 255, 0.04)",
                                    color: "primary.main",
                                }
                            }}
                        >
                            {sub.label}
                        </MenuItem>
                    ))}
                </Menu>
            )}
        </Box>
    );
}

/* ---------------- MOBILE NAV ---------------- */

function MobileNavItem({ item, onClose, depth = 0 }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => {
                        if (item.children) setOpen(!open);
                        else {
                            window.location.href = item.href;
                            onClose();
                        }
                    }}
                    sx={{
                        pl: 2 + depth * 2,
                        py: 1.5,
                        "&:hover": {
                            backgroundColor: "rgba(101, 51, 255, 0.04)",
                        }
                    }}
                >
                    <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                            fontWeight: depth === 0 ? 700 : 500,
                            fontSize: depth === 0 ? "1.05rem" : "0.95rem",
                            color: "text.primary"
                        }}
                    />
                    {item.children && (open ? <ExpandLess color="primary" /> : <ExpandMore color="action" />)}
                </ListItemButton>
            </ListItem>

            {item.children && (
                <Collapse in={open}>
                    <List disablePadding>
                        {item.children.map((child) => (
                            <MobileNavItem
                                key={child.key}
                                item={child}
                                onClose={onClose}
                                depth={depth + 1}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
}

/* ---------------- PROPS ---------------- */

Header.propTypes = {
    height: PropTypes.number,
    rightActions: PropTypes.node,
    containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
