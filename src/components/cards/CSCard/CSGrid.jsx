import React from "react";
import PropTypes from "prop-types";
import { Grid, Box, Container, Typography } from "@mui/material";
import CSCard from "./CSCard";

/**
 * CSGrid - responsive 3-up grid matching FHGrid pattern
 * Uses the same sizing/alignment syntax as your FHGrid example:
 *   size={{ xs: 12, sm: 6, md: 4 }}
 *
 * Note: `size` prop syntax is MUI v6. If you're using MUI v5, replace `size` with xs/sm/md props.
 */
export default function CSGrid({ items = [], title, containerWidth = "lg" }) {
    return (
        <Box component="section" sx={{ width: "100%", py: 4 }}>
            <Container maxWidth={containerWidth}>
                {title && (
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                        {title}
                    </Typography>
                )}

                <Grid container spacing={3} alignItems="stretch">
                    {items.map((it) => (
                        <Grid
                            key={it.id}
                            item
                            size={{ xs: 12, sm: 6, md: 4 }}   // <-- same pattern as your FHGrid example
                            sx={{ display: "flex" }}
                        >
                            <CSCard
                                image={it.image}
                                title={it.title}
                                description={it.description}
                                ctaLabel={it.ctaLabel}
                                onCta={it.onCta}
                                sx={{ flexGrow: 1 }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

CSGrid.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string,
    containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
