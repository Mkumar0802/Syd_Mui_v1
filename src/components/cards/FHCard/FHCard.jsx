import React from "react";
import PropTypes from "prop-types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

/**
 * FHCard
 * - image: imported image or public path
 * - imageLabel: large overlay text on the image (left aligned)
 * - title, description
 */
export default function FHCard({ image, imageLabel, title, description, sx }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",                 // allow equal-height grid items
        display: "flex",
        flexDirection: "column",
        borderRadius: 0,
        boxShadow: "none",
        bgcolor: "transparent",
        ...sx,
      }}
    >
      {/* IMAGE AREA */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 0,
          // image height responsive to match screenshot proportions
          height: { xs: 160, sm: 190, md: 200, lg: 240 },
          mb: 2,
        }}
      >
        <CardMedia
          component="img"
          src={image}
          alt={imageLabel || title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Overlay label (large, left aligned vertically centered) */}
        {imageLabel && (
          <Typography
            variant="h4"
            component="span"
            aria-hidden="true"
            sx={{
              position: "absolute",
              left: { xs: 16, sm: 20, md: 28 },
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              fontWeight: 600,
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.6rem", lg: "1.8rem" },
              textShadow: "0 4px 16px rgba(0,0,0,0.45)",
            }}
          >
            {imageLabel}
          </Typography>
        )}
      </Box>

      {/* TEXT AREA */}
      <CardContent sx={{ p: 0, pt: 0 }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1rem", sm: "1.05rem", md: "1.125rem" } }}
        >
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

FHCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageLabel: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sx: PropTypes.object,
};
