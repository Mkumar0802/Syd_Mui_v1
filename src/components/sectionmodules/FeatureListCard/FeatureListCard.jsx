// FeatureListCard.jsx
import React from "react";
import PropTypes from "prop-types";
import FeatureIcon from "../../buttons/FeatureIcon";
import { Box, Typography } from "@mui/material";

const FeatureListCard = React.memo(function FeatureListCard({
    title,
    subtitle,
    isActive,
}) {
    return (
        <Box
            className="feature-card"
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                backgroundColor: "transparent", // always transparent
                borderRadius: 1,
                cursor: "pointer",
            }}
        >
            {/* ONLY icon changes color */}
            <FeatureIcon
                size={24}
                padding={3}

                bgColor={isActive ? "#8A38F5" : "#E0E0E0"}
            />

            <Box sx={{ flex: 1 }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontFamily: '"Microsoft JhengHei UI", sans-serif',
                        fontWeight: 700,
                        fontSize: { xs: '18px', sm: '20px', md: '22px' },
                        lineHeight: 1.2,
                        mb: 1,
                        color: "#000000",
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        fontFamily: '"Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: { xs: '14px', sm: '15px', md: '16px' },
                        lineHeight: 1.5,
                        color: "#000000",
                    }}
                >
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    );
});

FeatureListCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
};

export default FeatureListCard;
