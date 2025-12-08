import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Typography } from "@mui/material";
import CSCard from "./CSCard";

export default function CSGrid({ items = [], title, containerWidth = "lg" }) {
    return (
        <Box component="section" sx={{ width: "100%", overflow: "hidden" }}>
            <Container
                maxWidth={containerWidth}
                disableGutters
                sx={{ m: 0, p: 0 }}
            >
                {title && (
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            mt: 0,
                            px: 0,
                        }}
                    >
                        {title}
                    </Typography>
                )}

                {/* HORIZONTAL SCROLLING TRACK */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 3,
                        overflowX: "auto",
                        scrollSnapType: "x mandatory",
                        WebkitOverflowScrolling: "touch",
                        pb: 2,

                        "&::-webkit-scrollbar": { display: "none" }, // hide scrollbar
                    }}
                >
                    {items.map((it) => (
                        <Box
                            key={it.id}
                            sx={{
                                flex: "0 0 calc((100% / 3.2))",  
                                /* 
                                   3.2 = 3 full cards + 0.2 of the next card
                                   (0.2 = 20% preview card)
                                */
                                scrollSnapAlign: "start",
                                display: "flex",
                            }}
                        >
                            <CSCard
                                image={it.image}
                                title={it.title}
                                description={it.description}
                                ctaLabel={it.ctaLabel}
                                onCta={it.onCta}
                                sx={{ width: "100%" }}
                            />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

CSGrid.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string,
    containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
