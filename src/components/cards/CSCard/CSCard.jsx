import React, { memo } from "react";
import PropTypes from "prop-types";
import { Box, Card, CardMedia, CardContent, Typography, Link } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CSCard = memo(function CSCard({
    image,
    title,
    description,
    ctaLabel = "",
    onCta,
    sx
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
            {/* IMAGE */}
            <Box sx={{ width: "100%", mb: 2 }}>
                <CardMedia
                    component="img"
                    src={image}
                    alt={title}
                    sx={{
                        width: "100%",
                        height: { xs: 160, sm: 190, md: 200, lg: 220, xl: 240 },
                        objectFit: "cover",
                        display: "block",
                    }}
                />
            </Box>

            {/* CONTENT */}
            <CardContent
                sx={{
                    p: 0,
                    pt: 0,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        mb: 1,
                        color: "#000000",
                        fontFamily: `"Segoe UI", sans-serif`,
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: {
                            xs: "20px",
                            sm: "22px",
                            md: "24px",
                            lg: "24px",
                        },
                        lineHeight: {
                            xs: "26px",
                            sm: "28px",
                            md: "29px",
                            lg: "29px",
                        },
                        letterSpacing: "0%",
                        whiteSpace: "pre-line",
                    }}
                >
                    {title}
                </Typography>

                <Typography

                    sx={{
                        color: "#000000",
                        mb: 2,
                        // responsive font sizes for description
                        fontFamily: `"Segoe UI", sans-serif`,
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontSize: { xs: "14px", sm: "15px", md: "17px" },
                        lineHeight: { xs: "20px", sm: "21px", md: "29px" },
                        letterSpacing: "0",
                        whiteSpace: "pre-line",







                    }}
                >
                    {description}
                </Typography>

                {/* CTA */}
                <Box sx={{ mt: "auto", pt: 1 }}>
                    <Link
                        component="button"
                        onClick={onCta}
                        underline="none"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            color: "#000000",

                        }}
                        aria-label={ctaLabel}
                    >
                        <Typography sx={{
                            color: "#000000",
                            fontFamily: `"Segoe UI", sans-serif`,
                            fontWeight: 600,
                            fontStyle: "normal",
                            fontSize: { xs: "12px", sm: "14px", md: "16px" },
                            lineHeight: { xs: "20px", sm: "21px", md: "22px" },
                        }}>
                            {ctaLabel}
                        </Typography>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
});

CSCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // ctaLabel: PropTypes.string,
    onCta: PropTypes.func,
    sx: PropTypes.object,
};

CSCard.defaultProps = {
    // ctaLabel: "Discover →",
    onCta: () => { },
};

export default CSCard;
