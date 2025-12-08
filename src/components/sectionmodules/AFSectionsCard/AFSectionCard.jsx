// src/components/sections/AFSection.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";
import AFCard from "./AFCard.jsx"; // ensure correct path
import AFSectionItems from "../AFSectionsCard/AFCard.jsx"; // ensure correct path to data file

export default function AFSection({ title = "Our Approach", items = AFSectionItems, sx = {} }) {
    return (
        <Box component="section" sx={{ width: "100%", py: { xs: 4, md: 6 }, ...sx }}>
            <Typography
                sx={{
                    fontFamily: `"Microsoft JhengHei UI"`,
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "100%",
                    mb: 4,
                }}
            >
                {title}
            </Typography>

            <Grid container spacing={4}>
                {items.map((item, idx) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                        <AFCard
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            sx={{
                                width: 400,
                                height: 465,
                                borderRadius: "20px",
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

AFSection.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array.isRequired,
    sx: PropTypes.object,
};
