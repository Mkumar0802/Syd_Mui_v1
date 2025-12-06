import React from "react";
import Grid from "@mui/material/Grid";
import FeatureCard from "./FeatureCard";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const FeatureGrid = ({
  items = [],
  cardWidth = 360,    // fixed card width (px)
  cardHeight = 140,   // fixed card height (px)
  spacing = 3,
  containerSx = {},
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center", // center entire grid
      }}
    >
      <Grid
        container
        spacing={spacing}
        sx={{
          maxWidth: "1200px",
          justifyContent: "center",
          alignItems: "flex-start",
          ...containerSx,
        }}
      >
        {items.map((text, idx) => (
          <Grid
            item
            key={idx}
            xs={12}
            sm={6}
            md={4} // 3 columns at md and up
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Center card and give it a fixed width so all cards equal size */}
            <Box sx={{ display: "flex", justifyContent: "center", width: `${cardWidth}px` }}>
              <FeatureCard text={text} width={cardWidth} height={cardHeight} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

FeatureGrid.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FeatureGrid;
