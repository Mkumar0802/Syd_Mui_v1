// src/components/cards/AFCard/AFCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Card, Typography } from "@mui/material";

/**
 * AFCard
 * Props:
 *  - image: image URL (string) or React node
 *  - title: string
 *  - description: string
 *  - sx: overrides
 */
export default function AFCard({ image, title, description, sx = {} }) {
    return (
        <Card
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                backgroundColor: "#16122A",
                padding: "32px",
                color: "#FFFFFF",
                height: "100%",
                boxSizing: "border-box",
                ...sx,
            }}
        >
            {/* ICON CONTAINER */}
            <Box
                sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "12px",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    flexShrink: 0,
                }}
            >
                {typeof image === "string" ? (
                    <Box
                        component="img"
                        src={image}
                        alt={title}
                        sx={{ width: "70%", height: "70%", objectFit: "contain", display: "block" }}
                    />
                ) : (
                    image
                )}
            </Box>

            {/* TITLE */}
            <Typography
                sx={{
                    fontFamily: "Segoe UI, sans-serif",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "100%",
                    mb: 2,
                    color: "#FFFFFF",
                }}
            >
                {title}
            </Typography>

            {/* DESCRIPTION */}
            <Typography
                sx={{
                    fontFamily: "Segoe UI, sans-serif",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "27px",
                    opacity: 0.9,
                    color: "#FFFFFF",
                }}
            >
                {description}
            </Typography>
        </Card>
    );
}

AFCard.propTypes = {
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sx: PropTypes.object,
};
