// src/components/sections/SectionTwo.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

/**
 * SectionTwo - "Our Promise" section with mission statement
 * Full width of the screen (edge to edge)
 * 
 * Breakpoints:
 *  - xs:   <600px  (mobile)
 *  - sm:  600-899px (tablet)
 *  - md+: >=900px  (laptop & large)
 */
function SectionTwo({
    backgroundColor = "#FFFFFF",
    opacity = 1,
    angle = 0,
}) {
    return (
        <Box
            component="section"
            aria-label="Our Promise"
            sx={{
                // Full viewport width
                width: "100vw",
                minWidth: "100vw",
                maxWidth: "100vw",

                // Center the element horizontally
                position: "relative",
                left: "50%",
                right: "50%",
                marginLeft: "-50vw",
                marginRight: "-50vw",

                // Styling
                backgroundColor: backgroundColor,
                opacity: opacity,
                transform: `rotate(${angle}deg)`,

                // Spacing
                py: { xs: 8, sm: 10, md: 12 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* Inner container for content */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: { xs: "100%", sm: "90%", md: "80%", lg: "1200px", xl: "1400px" },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "flex-start" },
                    justifyContent: "center",
                    gap: { xs: 6, md: 8, lg: 12 },
                    px: { xs: 4, sm: 6, md: 8, lg: 12 },
                }}
            >
                {/* Left Column - Heading and Tagline */}
                <Box
                    sx={{
                        flex: { xs: "0 0 100%", md: "0 0 45%" },
                        textAlign: { xs: "center", md: "left" },
                        pr: { md: 8 },
                    }}
                >
                    <Typography
                        component="h2"
                        sx={{
                            fontSize: {
                                xs: "1.8rem",
                                sm: "2.2rem",
                                md: "2.8rem",
                                lg: "3.2rem"
                            },
                            fontWeight: 800,
                            color: "#111",
                            mb: 3,
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Big-firm capability.<br />
                        Local agility.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: {
                                xs: "1.1rem",
                                sm: "1.2rem",
                                md: "1.3rem",
                                lg: "1.4rem"
                            },
                            color: "#555",
                            lineHeight: 1.7,
                            maxWidth: { xs: "100%", md: "500px" },
                        }}
                    >
                        We scale to match your needs, delivering substance over complexity.
                        We bring senior expertise with the simplicity and flexibility of a
                        boutique consultancy, providing enterprise-grade SAP solutions
                        through trusted relationships and practical delivery.
                    </Typography>
                </Box>

                {/* Right Column - Our Promise */}
                <Box
                    sx={{
                        flex: { xs: "0 0 100%", md: "0 0 55%" },
                        textAlign: { xs: "center", md: "left" },
                        pl: { md: 8 },
                        borderLeft: {
                            xs: "none",
                            md: "3px solid #1976d2"
                        },
                        pt: { md: 1 },
                    }}
                >
                    <Typography
                        component="h3"
                        sx={{
                            fontSize: {
                                xs: "1.5rem",
                                sm: "1.8rem",
                                md: "2.2rem",
                                lg: "2.5rem"
                            },
                            fontWeight: 700,
                            color: "#111",
                            mb: 4,
                            position: "relative",
                        }}
                    >
                        Our Promise
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: {
                                xs: "1.1rem",
                                sm: "1.2rem",
                                md: "1.3rem",
                                lg: "1.4rem"
                            },
                            color: "#444",
                            lineHeight: 1.8,
                        }}
                    >
                        We bring together deep SAP expertise with a straightforward, human approach.
                        We shape solutions to fit each organization to make SAP easier, more secure,
                        and more effective so every customer can run their business with confidence.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

SectionTwo.propTypes = {
    backgroundColor: PropTypes.string,
    opacity: PropTypes.number,
    angle: PropTypes.number,
};

SectionTwo.defaultProps = {
    backgroundColor: "#FFFFFF",
    opacity: 1,
    angle: 0,
};

export default SectionTwo;