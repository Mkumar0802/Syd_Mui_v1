import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Avatar,
    Collapse,
    Chip,
} from "@mui/material";
import FeatureIcon from "../../buttons/FeatureIcon";

export default function PFHCard({
    image,
    name,
    role,
    description,
    initial,
    containers = [],
    fullBio = "",
    onAction,
    sx,
}) {
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        const newExpandedState = !expanded;
        setExpanded(newExpandedState);
        if (onAction) onAction(newExpandedState);
    };

    return (
        <Card
            elevation={0}
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 0,
                boxShadow: "none",
                bgcolor: "transparent",
                ...sx,
            }}
        >
            {/* IMAGE */}
            <Box sx={{ width: "100%", mb: 2 }}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    sx={{
                        width: "100%",
                        height: { xs: 160, sm: 190, md: 200 },
                        objectFit: "cover",
                        display: "block",
                    }}
                />
            </Box>

            {/* TEXT + ACTION */}
            <CardContent sx={{ p: 0, pt: 0, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Box sx={{ mb: 1 }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: 700,
                            display: "inline",
                            fontSize: { xs: "1rem", sm: "1.05rem", md: "1.125rem" },
                        }}
                    >
                        {name}
                    </Typography>
                    {role && (
                        <Typography component="span" sx={{ fontWeight: 400, color: "text.secondary", ml: 0.5 }}>
                            , {role}
                        </Typography>
                    )}
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                    {description}
                </Typography>

                {/* EXPANDABLE CONTENT - SHOWS BELOW */}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Box sx={{ mb: 3 }}>
                        {/* Full Bio Section */}
                        {fullBio && (
                            <>
                                <Typography
                                    variant="subtitle2"
                                    component="div"
                                    sx={{
                                        fontWeight: 600,
                                        color: "text.primary",
                                        mb: 1.5,
                                        mt: 1,
                                        fontSize: "0.9rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.5px",
                                    }}
                                >
                                    Full bio:
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        lineHeight: 1.7,
                                        mb: 3,
                                        fontSize: "0.9rem",
                                        whiteSpace: "pre-line",
                                    }}
                                >
                                    {fullBio}
                                </Typography>
                            </>
                        )}

                        {/* Containers/Expertise Section */}
                        {containers && containers.length > 0 && (
                            <>
                                <Typography
                                    variant="subtitle2"
                                    component="div"
                                    sx={{
                                        fontWeight: 600,
                                        color: "text.primary",
                                        mb: 1.5,
                                        fontSize: "0.9rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.5px",
                                    }}
                                >
                                    Expertise:
                                </Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                    {containers.map((container, index) => (
                                        <Chip
                                            key={index}
                                            label={container}
                                            size="small"
                                            sx={{
                                                bgcolor: "rgba(138, 56, 245, 0.08)",
                                                color: "#8A38F5",
                                                fontWeight: 500,
                                                fontSize: "0.75rem",
                                                height: 26,
                                                borderRadius: "6px",
                                                border: "1px solid rgba(138, 56, 245, 0.2)",
                                                '&:hover': {
                                                    bgcolor: "rgba(138, 56, 245, 0.12)",
                                                },
                                            }}
                                        />
                                    ))}
                                </Box>
                            </>
                        )}
                    </Box>
                </Collapse>

                {/* ACTION AREA - FEATURE ICON ON LEFT SIDE */}
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: "auto",
                    pt: 1,
                    borderTop: expanded ? "1px solid rgba(0, 0, 0, 0.08)" : "none",
                    pb: expanded ? 0.5 : 0,
                }}>
                    {/* LEFT SIDE: FeatureIcon with Avatar */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, cursor: 'pointer' }} onClick={handleToggleExpand}>
                        <FeatureIcon
                            size={24}
                            padding={8}
                            bgColor="#8A38F5"
                            ariaLabel={expanded ? `Show less about ${name}` : `Show more about ${name}`}
                            sx={{
                                transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
                                transition: "transform 0.2s ease",
                            }}
                        />
                    </Box>

                    {/* Optional: Status indicator */}
                    {expanded && (
                        <Box sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            bgcolor: "#8A38F5",
                            animation: "pulse 2s infinite",
                            "@keyframes pulse": {
                                "0%": { opacity: 1 },
                                "50%": { opacity: 0.5 },
                                "100%": { opacity: 1 },
                            }
                        }} />
                    )}
                </Box>
            </CardContent>
        </Card>
    );
}

PFHCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    description: PropTypes.string,
    fullBio: PropTypes.string,
    containers: PropTypes.array,
    initial: PropTypes.string,
    onAction: PropTypes.func,
    sx: PropTypes.object,
};

PFHCard.defaultProps = {
    role: "",
    description: "",
    fullBio: "",
    containers: [],
    initial: "",
    onAction: () => { },
};