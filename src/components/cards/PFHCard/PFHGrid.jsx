import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, Box, Container, Typography } from "@mui/material";
import PFHCard from "./PFHCard";

export default function PFHGrid({ items, title, containerWidth = "lg" }) {
    const [expandedId, setExpandedId] = useState(null);

    const handleCardAction = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <Box component="section" sx={{ width: "100%", py: 4 }}>
            <Container maxWidth={containerWidth}>
                {title && (
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 4,
                            fontWeight: 700,
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        {title}
                    </Typography>
                )}

                <Grid
                    container
                    spacing={3}
                    sx={{
                        alignItems: "stretch",
                    }}
                >
                    {items.map((it) => (
                        <Grid
                            key={it.id}
                            item
                            size={{ xs: 12, sm: 6, md: 4 }}
                            sx={{
                                display: "flex",
                            }}
                        >
                            <PFHCard
                                image={it.image}
                                name={it.name}
                                role={it.role}
                                description={it.description}
                                fullBio={it.fullBio}
                                containers={it.containers}
                                initial={it.initial}
                                onAction={() => handleCardAction(it.id)}
                                sx={{
                                    flexGrow: 1,
                                    // Optional: Add a visual indicator for expanded card
                                    border: expandedId === it.id ? "1px solid rgba(138, 56, 245, 0.3)" : "none",
                                    borderRadius: expandedId === it.id ? "8px" : 0,
                                    p: expandedId === it.id ? 1 : 0,
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

PFHGrid.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string,
    containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};