// src/components/hero/HeroSection.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack } from "@mui/material";
import SXContainer from "../layout/SXContainer.jsx";


/**
 * Reusable HeroSection component
 * Can be used with or without buttons
 */
const HeroSection = ({
    background,
    title = ["Default Title"],
    caption = "",
    layout = { width: 1451, height: 640, top: 75, left: -11 },
    overlay = true,
    buttons = [], // Array of button objects: [{ label, onClick, sx, props }]
    contentWidth = { xs: "92%", md: "621px" },
    align = "left", // "left", "center"
    containerProps = {}, // Additional props for SXContainer
    ...props
}) => {
    const bgPosX = typeof layout.left === "number" ? `${layout.left}px` : layout.left;
    const bgPosY = "center";

    const isCenterAligned = align === "center";

    return (
        <Box
            component="section"
            aria-label="Hero section"
            sx={{
                position: "relative",
                width: "100%",
                height: { xs: 420, sm: 480, md: layout.height || 640 },
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                backgroundImage: background ? `url(${background})` : "none",
                backgroundSize: "cover",
                backgroundPosition: `${bgPosX} ${bgPosY}`,
                backgroundRepeat: "no-repeat",
                mt: { xs: 0, md: `${layout.top || 0}px` },
                backgroundColor: !background ? "primary.main" : "transparent",
                ...props.sx,
            }}
            {...props}
        >
            {/* Optional dark overlay */}
            {/* {overlay && (
                <Box
                    aria-hidden
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.5) 36%, rgba(0,0,0,0.08) 64%, rgba(0,0,0,0) 100%)",
                        pointerEvents: "none",
                    }}
                />
            )} */}

            <SXContainer
                maxWidth="xl"
                py={{ xs: 3, md: 6 }}
                sx={{
                    display: "flex",
                    justifyContent: isCenterAligned ? "center" : "flex-start",
                    alignItems: "center",
                    height: "100%",
                }}
                {...containerProps}
            >
                <Box sx={{
                    maxWidth: contentWidth,
                    position: "relative",
                    zIndex: 2,
                    textAlign: isCenterAligned ? "center" : "left",
                    mx: isCenterAligned ? "auto" : 0
                }}>
                    <Stack spacing={0.3} sx={{ mb: caption || buttons.length > 0 ? 2 : 0 }}>
                        {Array.isArray(title) ? (
                            title.map((line, idx) => (
                                <Typography
                                    key={idx}
                                    component={idx === 0 ? "h1" : "div"}
                                    sx={{
                                        color: "#FFFFFF",
                                        fontWeight: 700,
                                        fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem", lg: "3.4rem" },
                                        lineHeight: 1.05,
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {line}
                                </Typography>
                            ))
                        ) : (
                            <Typography
                                component="h1"
                                sx={{
                                    color: "#FFFFFF",
                                    fontWeight: 700,
                                    fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem", lg: "3.4rem" },
                                    lineHeight: 1.05,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {title}
                            </Typography>
                        )}
                    </Stack>

                    {caption && (
                        <Typography sx={{
                            color: "rgba(255,255,255,0.9)",
                            mb: buttons.length > 0 ? 3 : 0,
                            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                            lineHeight: 1.6
                        }}>
                            {caption}
                        </Typography>
                    )}

                    {buttons.length > 0 && (
                        <Stack
                            direction="row"
                            spacing={2}
                            justifyContent={isCenterAligned ? "center" : "flex-start"}
                            flexWrap="wrap"
                            useFlexGap
                            sx={{ mt: 3 }}
                        >
                            {buttons.map((button, index) => (
                                <ButtonPE
                                    key={index}
                                    label={button.label}
                                    size="medium"
                                    aria-label={button.label}
                                    onClick={button.onClick}
                                    sx={{ minWidth: 150, ...button.sx }}
                                    {...button.props}
                                />
                            ))}
                        </Stack>
                    )}
                </Box>
            </SXContainer>
        </Box>
    );
};

HeroSection.propTypes = {
    background: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    caption: PropTypes.string,
    layout: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
        top: PropTypes.number,
        left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
    overlay: PropTypes.bool,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func,
            sx: PropTypes.object,
            props: PropTypes.object,
        })
    ),
    contentWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.number,
    ]),
    align: PropTypes.oneOf(["left", "center"]),
    containerProps: PropTypes.object,
    sx: PropTypes.object,
};

export default HeroSection;