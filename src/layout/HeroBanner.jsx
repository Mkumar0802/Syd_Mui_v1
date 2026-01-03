// src/components/hero/HeroBanner.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack } from "@mui/material";
import ButtonPE from "../components/buttons/ButtonPE";
import SXContainer from "../layout/SXContainer.jsx";
import heroImg from "../assets/home/SYD_homepaged_hero_banner_Auckland1.jpg";

/**
 * Reusable HeroBanner
 *
 * Props:
 *  - background (string): URL for background image
 *  - overlayImage (string|null): optional centered decorative overlay image URL
 *  - label (string): eyebrow text
 *  - title (string|array): lines for title
 *  - caption (string|array): lines for caption
 *  - align ("left"|"center"|"right")
 *  - height (string|object): responsive height
 *  - contentMaxWidth (string|object)
 *  - actions (array): [
 *      { key, label, size, sx, onClick, href, component, disabled }
 *    ]
 *    if not provided, component renders default two buttons (Get in touch / Explore who we are)
 *  - children: if provided, rendered below caption instead of actions
 *  - ariaLabel
 */
export default function HeroBanner({
    background = heroImg,
    overlayImage = null,
    label = "",
    title = ["SAP Consulting", "Built for New Zealand", "Businesses"],
    caption = [],
    align = "left",
    height = { xs: "360px", sm: "420px", md: "520px", lg: "600px" },
    contentMaxWidth = { xs: "92%", sm: "86%", md: "621px" },
    contentTop = 0,    // new prop
    actions = null,
    children = null,
    ariaLabel = "Hero banner",
}) {
    const titleLines = Array.isArray(title) ? title : String(title).split("\n");
    const captionLines = Array.isArray(caption) ? caption : String(caption).split("\n");

    const textAlign = align;
    const justifyContent =
        align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start";

    const renderActions = () => {
        // if custom actions provided, map them
        if (Array.isArray(actions) && actions.length > 0) {
            return (
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    alignItems={{ xs: "stretch", sm: "center" }}
                    sx={{
                        justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                >
                    {actions.map((act, i) => (
                        <ButtonPE
                            key={act.key ?? `${act.label}-${i}`}
                            label={act.label}
                            size={act.size ?? "large"}
                            sx={{
                                minWidth: act.minWidth ?? (i === 0 ? 150 : 190),
                                width: { xs: "100%", sm: "auto" },
                                ...act.sx,
                            }}
                            onClick={act.onClick}
                            href={act.href}
                            component={act.component}
                            disabled={act.disabled}
                        />
                    ))}
                </Stack>
            );
        }

        // fallback: default two buttons for parity with FirstSection
        return (
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                alignItems={{ xs: "stretch", sm: "center" }}
                sx={{
                    justifyContent: { xs: "center", sm: "flex-start" },
                }}
            >

            </Stack>
        );
    };

    return (
        <Box
            component="header"
            role="img"
            aria-label={ariaLabel}
            sx={{
                width: "100%",
                height,
                position: "relative",
                display: "flex",
                alignItems: "center",
                backgroundImage: background ? `url(${background})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
            }}
        >
            {overlayImage && (
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${overlayImage})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        pointerEvents: "none",
                        zIndex: 2,
                        opacity: { xs: 0.5, md: 0.9 },
                    }}
                />
            )}

            <SXContainer
                maxWidth="xl"
                sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent,
                    position: "relative",
                    zIndex: 3,
                    px: 0,
                }}
            >
                <Box sx={{ width: contentMaxWidth, textAlign, mx: { xs: "auto", md: 0 } }}>
                    {label && (
                        <Typography
                            sx={{
                                color: "#ffffffcc",
                                mb: { xs: 1.5, sm: 2 },
                                textTransform: "uppercase",
                                textAlign,
                                fontFamily: `"Segoe UI", sans-serif`,
                                fontWeight: 600,
                                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                                letterSpacing: "13%",
                            }}
                        >
                            {label}
                        </Typography>
                    )}

                    <Stack spacing={0} sx={{ mb: { xs: 2, sm: 3, md: 3 } }}>
                        {titleLines.map((line, idx) => (
                            <Typography
                                key={idx}
                                sx={{
                                    color: "#FFFFFF",
                                    textAlign,
                                    wordBreak: "break-word",
                                    fontFamily: `"Microsoft JhengHei UI", sans-serif`,
                                    fontWeight: 500,
                                    fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "56px" },
                                    lineHeight: "100%",
                                    letterSpacing: "0px",
                                }}
                            >
                                {line}
                            </Typography>
                        ))}
                    </Stack>

                    <Stack sx={{ mb: { xs: 2, sm: 3, md: 3 }, mt: { xs: 2, sm: 3, md: 3 } }}>
                        {captionLines.map((line, idx) => (
                            <Typography
                                key={idx}
                                sx={{
                                    color: "rgba(255,255,255,0.92)",
                                    maxWidth: "520px",
                                    mx: { xs: "auto", sm: 0 },
                                    fontFamily: `"Segoe UI", sans-serif`,
                                    fontWeight: 600,
                                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                                    lineHeight: 1.6,
                                    textAlign,
                                    wordBreak: "break-word",
                                    letterSpacing: "0px",
                                    whiteSpace: "pre-line",
                                }}
                            >
                                {line}
                            </Typography>
                        ))}
                    </Stack>

                    {/* children override actions */}
                    {children ? <Box sx={{ mt: 1 }}>{children}</Box> : <Box sx={{ mt: 1 }}>{renderActions()}</Box>}
                </Box>
            </SXContainer>
        </Box>
    );
}

HeroBanner.propTypes = {
    background: PropTypes.string,
    overlayImage: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    align: PropTypes.oneOf(["left", "center", "right"]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    contentMaxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            label: PropTypes.string.isRequired,
            size: PropTypes.string,
            sx: PropTypes.object,
            onClick: PropTypes.func,
            href: PropTypes.string,
            component: PropTypes.elementType,
            disabled: PropTypes.bool,
            minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        })
    ),
    children: PropTypes.node,
    ariaLabel: PropTypes.string,
};
