// src/components/layout/SXContainer.jsx
import React from "react";
import PropTypes from "prop-types";
import { Container, Box, useTheme } from "@mui/material";

/**
 * SXContainer — Universal responsive container with consistent spacing
 * 
 * Responsive padding pattern:
 * xs (mobile): 1rem (16px) - Compact
 * sm (tablet): 2rem (32px) - Comfortable
 * md/lg/xl (desktop+): 3rem (48px) - Consistent across all larger screens
 */
export default function SXContainer({
    children,
    maxWidth = "xl",           // "xs", "sm", "md", "lg", "xl", false
    disableGutters = false,
    py = { xs: 4, md: 6, lg: 8 }, // Responsive vertical padding
    px,                        // Optional: override horizontal padding
    fluid = false,             // Fluid container (full width background)
    bgColor,                   // Background color for fluid containers
    component = "section",     // HTML element type
    className,
    sx = {},
}) {
    const theme = useTheme();

    // Consistent horizontal padding - SAME for md, lg, xl
    // MUI spacing units (1 unit = 8px)
    const consistentPaddingX = {
        xs: 2,     // 16px - Mobile: Comfortable for small screens
        sm: 3,     // 24px - Tablet: Good reading width
        md: 1,     // 32px - Desktop: Standard padding
        lg: 1,     // 32px - Large Desktop: Same as desktop
        xl: 1,     // 32px - Extra Large: Consistent
    };

    // Use custom px if provided, otherwise use consistent scale
    const responsivePaddingX = px || consistentPaddingX;

    // Container styles
    const containerStyles = {
        px: disableGutters ? 0 : responsivePaddingX,

        // Ultra-wide screens (1920px+) - keep same padding
        [theme.breakpoints.up(1920)]: !disableGutters && {
            px: px ? px : 6, // Same 3rem = 48px for ultra-wide
        },
    };

    // If fluid mode, container should be full width but children still constrained
    const containerMaxWidth = fluid ? false : maxWidth;

    // Main container content
    const renderContainer = () => (
        <Container
            maxWidth={containerMaxWidth}
            disableGutters={disableGutters}
            className={className}
            sx={{
                ...containerStyles,
                ...(fluid && {
                    maxWidth: `${maxWidth} !important`,
                    width: '100%',
                }),
            }}
        >
            {children}
        </Container>
    );

    // For fluid containers with background
    if (fluid || bgColor) {
        return (
            <Box
                component={component}
                sx={{
                    width: "100%",
                    py,
                    backgroundColor: bgColor || 'transparent',
                    ...sx,
                }}
            >
                {renderContainer()}
            </Box>
        );
    }

    // Standard container
    return (
        <Box
            component={component}
            sx={{
                width: "100%",
                py,
                ...sx,
            }}
        >
            {renderContainer()}
        </Box>
    );
}

SXContainer.propTypes = {
    children: PropTypes.node.isRequired,
    maxWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
    ]),
    disableGutters: PropTypes.bool,
    py: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.object,
    ]),
    px: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.object,
    ]),
    fluid: PropTypes.bool,
    bgColor: PropTypes.string,
    component: PropTypes.string,
    className: PropTypes.string,
    sx: PropTypes.object,
};

SXContainer.defaultProps = {
    maxWidth: "xl",
    disableGutters: false,
    py: { xs: 4, md: 6, lg: 8 },
    fluid: false,
    component: "section",
};