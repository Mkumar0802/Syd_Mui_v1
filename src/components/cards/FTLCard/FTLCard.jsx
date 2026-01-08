// src/components/cards/FTLCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import Subtitle from "../../../layout/Subtitle.jsx";

export default function FTLCard({
    icon,
    title,
    description,
    sx = {},
}) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                maxWidth: 320,
                gap: 1.5,
                ...sx,
            }}
        >
            {/* ICON */}
            <Box
                sx={{
                    width: 75,
                    height: 75,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {typeof icon === "string" ? (
                    <Box component="img" src={icon} alt={title} sx={{ width: "100%", height: "100%" }} />
                ) : (
                    icon
                )}
            </Box>

            {/* TITLE */}
            <Subtitle
                sx={{
                    fontSize: "20px",
                    lineHeight: "120%",
                    fontWeight: 700,
                }}
            >
                {title}
            </Subtitle>

            {/* DESCRIPTION — updated to the provided font spec */}
            <Typography
                sx={{
                    fontFamily: `"Segoe UI", sans-serif`,
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "27px",
                    letterSpacing: "0%",
                    color: "text.primary",
                }}
            >
                {description}
            </Typography>
        </Box>
    );
}

FTLCard.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sx: PropTypes.object,
};
