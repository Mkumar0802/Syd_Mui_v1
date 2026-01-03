import React from "react";
import PropTypes from "prop-types";
import { Grid, Box, Container } from "@mui/material";
import FHCard from "./FHCard";
import SXContainer from "../../../layout/SXContainer";
import { Typography } from "@mui/material";

/**
 * FHGrid - 3-up responsive grid aligned like FeatureGridSection
 */
export default function FHGrid({ items, }) {
  return (
    <Box component="section" sx={{ width: "100%" }}>
      <SXContainer>

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
              size={{ xs: 12, sm: 6, md: 4 }}  // SAME PATTERN YOU REQUESTED
              sx={{
                display: "flex",
              }}
            >
              <FHCard
                image={it.image}
                imageLabel={it.imageLabel}
                title={it.title}
                description={it.description}
                sx={{ flexGrow: 1 }}
              />
            </Grid>
          ))}
        </Grid>
      </SXContainer>

    </Box>
  );
}

FHGrid.propTypes = {
  items: PropTypes.array.isRequired,
  containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
