import React from "react";
import PropTypes from "prop-types";
import { Box, Card, CardMedia, CardContent, Typography, Link } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

/**
 * CSCard - Capability / Service card
 * Props:
 *  - image: imported image or public path
 *  - title: string
 *  - description: string
 *  - ctaLabel: string
 *  - onCta: func
 *  - sx: style overrides
 */
export default function CSCard({
    image,
    title,
    description,
    ctaLabel = "Learn more",
    onCta,
    sx,
}) {
    return (
        <Card
            elevation={0}
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 0,
                boxShadow: "none",
                bgcolor: "transparent",
                ...sx,
            }}
        >
            {/* IMAGE (same heights as other cards for visual alignment) */}
            <Box sx={{ width: "100%", mb: 2 }}>
                <CardMedia
                    component="img"
                    src={image}
                    alt={title}
                    sx={{
                        width: "100%",
                        height: { xs: 160, sm: 190, md: 200 },
                        objectFit: "cover",
                        display: "block",
                    }}
                />
            </Box>

            {/* TEXT */}
            <CardContent sx={{ p: 0, pt: 0, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        fontWeight: 700,
                        mb: 1,
                        fontSize: { xs: "1rem", sm: "1.05rem", md: "1.125rem" },
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: "#000000",
                        lineHeight: 1.8,
                        mb: 2,
                    }}
                >
                    {description}
                </Typography>


                {/* CTA area at bottom-left, reserved space keeps alignment consistent */}
                <Box sx={{ mt: "auto", pt: 1 }}>
                    <Link
                        component="button"
                        onClick={onCta}
                        underline="none"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            color: "text.primary",
                            fontWeight: 600,
                        }}
                        aria-label={ctaLabel}
                    >
                        <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                            {ctaLabel}
                        </Typography>

                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
}

CSCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ctaLabel: PropTypes.string,
    onCta: PropTypes.func,
    sx: PropTypes.object,
};

CSCard.defaultProps = {
    ctaLabel: "Discover →",
    onCta: () => { },
};
