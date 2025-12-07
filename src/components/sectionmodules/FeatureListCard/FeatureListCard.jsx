// FeatureListCard.jsx
import React from "react";
import PropTypes from "prop-types";
import FeatureIcon from "../../buttons/FeatureIcon";
import { Box } from "@mui/material";

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
                alignItems: "flex-start",
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
                {/* Title stays same color always */}
                <h4
                    style={{
                        margin: "0 0 8px 0",
                        color: "#000000", // fixed color
                    }}
                >
                    {title}
                </h4>

                {/* Subtitle stays same color always */}
                <p style={{ margin: 0, color: "#000000" }}>
                    {subtitle}
                </p>
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
