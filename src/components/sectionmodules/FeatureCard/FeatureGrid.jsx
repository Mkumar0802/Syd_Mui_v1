// src/components/FeatureGrid.jsx
import React from "react";
import Grid from "@mui/material/Grid";
import FeatureCard from "./FeatureCard";
import PropTypes from "prop-types";

const FeatureGrid = ({
    items = [],
    cardWidth = 400,
    cardHeight = 173,
    containerSx = {},
}) => {
    return (
        <Grid
            container
            spacing={4}                   // <-- Equal spacing between cards
            sx={{
                justifyContent: "center",   // <-- Keep grid centered
                ...containerSx,
            }}
        >
            {items.map((text, idx) => (
                <Grid
                    item
                    key={idx}
                    size={{ xs: 12, sm: 6, md: 4 }} // <-- MUI v2 syntax
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <FeatureCard
                        text={text}
                        width={cardWidth}
                        height={cardHeight}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

FeatureGrid.propTypes = {
    items: PropTypes.array.isRequired,
};

export default FeatureGrid;
