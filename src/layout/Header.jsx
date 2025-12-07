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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import logoImg from "../assets/logo/syd_logo_white.png";
import SXContainer from "../layout/SXContainer";

/* NAV in-component */
const NAV = [
    { key: "who", label: "Who we are", href: "/who" },
    { key: "what", label: "What we do", href: "/what" },
    { key: "work", label: "Our Work", href: "/work" },
    { key: "thinking", label: "Our Thinking", href: "/thinking" },
    { key: "contact", label: "Contact us", href: "/contact" },
];

export default function Header({
    height = 80,
    rightActions = null,
    containerWidth = "xl", // Keep this prop to control container width
}) {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => setDrawerOpen(open);

    return (
        <>
            <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent" }}>
                {/* Full width AppBar */}
                <Box sx={{ width: "100%" }}>
                    {/* SXContainer wraps the Toolbar content for consistent sizing */}
                    <SXContainer
                        maxWidth={containerWidth}
                        disableGutters={false}
                        py={0}
                    >
                        <Toolbar
                            disableGutters
                            sx={{
                                minHeight: height,
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            {/* LEFT: Logo */}
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                flexShrink: 0,
                            }}>
                                <Box
                                    component="img"
                                    src={logoImg}
                                    alt="SYD Consulting"
                                    sx={{
                                        height: { xs: 32, sm: 36, md: 64 },
                                        cursor: "pointer"
                                    }}
                                    onClick={() => (window.location.href = "/")}
                                />
                            </Box>

                            {/* CENTER + RIGHT: Navigation items aligned to the end */}
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                flex: 1,
                                justifyContent: "flex-end",
                                gap: { md: 4, lg: 5, xl: 6 },
                            }}>
                                {/* Navigation Links */}
                                <Box
                                    sx={{
                                        display: isMdUp ? "flex" : "none",
                                        alignItems: "center",
                                        gap: { md: 3, lg: 3.5, xl: 4 },
                                    }}
                                >
                                    {NAV.map((item) => (
                                        <Button
                                            key={item.key}
                                            disableRipple
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: { md: "15px", lg: "16px" },
                                                textTransform: "none",
                                                color: "text.primary",
                                                minWidth: "auto",
                                                px: 1,
                                                py: 0.5,
                                                '&:hover': {
                                                    backgroundColor: 'transparent',
                                                    opacity: 0.8,
                                                }
                                            }}
                                            onClick={() => (window.location.href = item.href)}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </Box>

                                {/* Right Actions */}
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    ml: { md: 2, lg: 3, xl: 4 },
                                }}>
                                    {isMdUp ? (
                                        rightActions
                                    ) : (
                                        <IconButton
                                            aria-label="Open menu"
                                            onClick={toggleDrawer(true)}
                                            sx={{ color: "text.primary" }}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                    )}
                                </Box>
                            </Box>
                        </Toolbar>
                    </SXContainer>
                </Box>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        width: { xs: 280, sm: 320 },
                        backgroundColor: theme.palette.background.paper,
                    }
                }}
            >
                <Box sx={{ p: 2, height: "100%", display: "flex", flexDirection: "column" }}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                        pb: 2,
                        borderBottom: `1px solid ${theme.palette.divider}`
                    }}>
                        <Box
                            component="img"
                            src={logoImg}
                            alt="SYD Consulting"
                            sx={{ height: 32, cursor: "pointer" }}
                            onClick={() => {
                                setDrawerOpen(false);
                                window.location.href = "/";
                            }}
                        />
                        <IconButton onClick={toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <List sx={{ flex: 1 }}>
                        {NAV.map((item) => (
                            <ListItem key={item.key} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        setDrawerOpen(false);
                                        window.location.href = item.href;
                                    }}
                                    sx={{
                                        py: 2,
                                        '&:hover': {
                                            backgroundColor: 'rgba(138, 56, 245, 0.08)',
                                        }
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontFamily: theme.typography.fontFamily,
                                            fontWeight: 600,
                                            fontSize: "16px",
                                            color: theme.palette.text.primary,
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    {rightActions && (
                        <Box sx={{
                            mt: "auto",
                            pt: 3,
                            borderTop: `1px solid ${theme.palette.divider}`
                        }}>
                            {rightActions}
                        </Box>
                    )}
                </Box>
            </Drawer>
        </>
    );
}

Header.propTypes = {
    height: PropTypes.number,
    rightActions: PropTypes.node,
    containerWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
    ]),
};

Header.defaultProps = {
    height: 80,
    containerWidth: "xl",
};