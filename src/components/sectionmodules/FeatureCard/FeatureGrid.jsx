import React from "react";
import Grid from "@mui/material/Grid";
import FeatureCard from "./FeatureCard";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const FeatureGrid = ({
    items = [],
    cardMaxWidth = 360,   // controls card visual width inside each column
    cardHeight = 140,
    spacing = 3,          // controls gap between columns & rows
    containerSx = {},
}) => {
    return (
        <Grid
            container
            spacing={spacing}
            sx={{
                width: "100%",
                margin: 0,
                ...containerSx,
            }}
        >
            {items.map((text, idx) => (
                <Grid
                    item
                    key={idx}
                    xs={12}
                    sm={6}
                    md={4}         // 3 columns at md and up
                    sx={{
                        display: "flex",
                        justifyContent: "center",   // centers the inner card container
                        alignItems: "flex-start",
                    }}
                >
                    {/* Wrap card in a Box so card can have maxWidth while filling cell */}
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <FeatureCard
                            text={text}
                            width="100%"
                            maxWidth={cardMaxWidth}
                            height={cardHeight}
                        />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

FeatureGrid.propTypes = {
    items: PropTypes.array.isRequired,
};

export default FeatureGrid;
