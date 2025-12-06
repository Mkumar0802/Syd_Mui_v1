import React from "react";
import { Box, Container, Grid } from "@mui/material";
import FeatureGridCard from "./FeatureGridCard";

/**
 * FeatureGridSection - 4-up grid WITHOUT title
 *
 * Props:
 * - items: array of { id, title, body }
 * - containerWidth: MUI width ('lg','xl',false)
 * - gap: spacing between cards
 */
export default function FeatureGridSection({
  items = [],
  containerWidth = "lg",
  gap = 3, // MUI spacing = 24px
}) {
  return (
    <Box component="section" sx={{ width: "100%", py: 4 }}>
      <Container maxWidth={containerWidth}>
        <Grid
          container
          spacing={gap}
          sx={{
            alignItems: "stretch",
          }}
        >
          {items.map((it) => (
            <Grid
              key={it.id ?? it.title}
              item
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{
                display: "flex",
              }}
            >
              <FeatureGridCard title={it.title} body={it.body} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
