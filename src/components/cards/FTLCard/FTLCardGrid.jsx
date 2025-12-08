// src/components/cards/FTLCard/FTLCardGrid.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Grid } from "@mui/material";
import FTLCard from "./FTLCard";

export default function FTLCardGrid({
    items = [],
    title,
    sx = {},
    titleSx = {},
}) {
    return (
        <Box component="section" sx={{ width: "100%", ...sx }}>

            {/* Optional Section Title */}
            {title && (
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 4,
                        ...titleSx,
                    }}
                >
                    {title}
                </Typography>
            )}

            <Grid container spacing={6}>
                {items.map((item) => (
                    <Grid key={item.id} item xs={12} sm={6} md={3}>
                        <FTLCard
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

FTLCardGrid.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string,
    sx: PropTypes.object,
    titleSx: PropTypes.object,
};
