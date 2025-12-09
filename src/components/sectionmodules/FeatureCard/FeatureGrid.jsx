// FeatureGrid.jsx
import React from "react";
import PropTypes from "prop-types";
import { Grid, Box } from "@mui/material";
import FeatureCard from "./FeatureCard";
import SXContainer from "../../../layout/SXContainer";
import { Typography } from "@mui/material";

/**
 * FeatureGrid - Responsive grid with tablet full-width alignment
 * 
 * Breakpoints:
 *  - xs:   <600px  (mobile) - 1 column, full width
 *  - sm:   600-899px (tablet) - 1 column, full width
 *  - md+:  >=900px  (laptop & large) - 3 columns, fixed width
 */
export default function FeatureGrid({
  items = [],
  cardWidth = 490,
  cardHeight = 140,
  spacing = 3,
  containerSx = {},
}) {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 4, sm: 6, md: 8 },
        ...containerSx,
      }}
    >

      <SXContainer>
        <Typography
          sx={{
            fontFamily: `"Microsoft JhengHei UI", sans-serif`,
            fontWeight: 700,
            fontSize: {
              xs: "clamp(24px, 6vw, 28px)",
              sm: "clamp(26px, 5vw, 30px)",
              md: "32px",
            },

            color: "#111",
            mb: { xs: 2, sm: 3 },

          }}
        >
          Our Track Record
        </Typography>
        <Grid
          container
          spacing={spacing}
          sx={{
            alignItems: "stretch",
          }}
        >
          {items.map((text, idx) => (
            <Grid
              key={idx}
              item
              xs={12}    // Full width on mobile (<600px)
              sm={12}    // Full width on tablet (600-899px) - CHANGED FROM 6 TO 12
              md={4}     // 3 columns on desktop (>=900px)
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <FeatureCard
                  text={text}
                  width={{
                    xs: "100%",      // Full width on mobile
                    sm: "100%",      // Full width on tablet - CHANGED
                    md: cardWidth    // Fixed width on desktop
                  }}
                  height={{
                    xs: cardHeight,
                    sm: cardHeight,
                    md: cardHeight
                  }}
                  sx={{
                    flexGrow: 1,
                    height: "100%",
                    minHeight: {
                      xs: 120,
                      sm: cardHeight,
                      md: cardHeight
                    },
                    // Tablet-specific styling
                    maxWidth: {
                      xs: "100%",
                      sm: "100%",    // Full width on tablet
                      md: cardWidth  // Fixed width on desktop
                    },
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </SXContainer>
    </Box>
  );
}

FeatureGrid.propTypes = {
  items: PropTypes.array.isRequired,
  cardWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cardHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  spacing: PropTypes.number,
  containerSx: PropTypes.object,
};

FeatureGrid.defaultProps = {
  items: [],
  cardWidth: 360,
  cardHeight: 140,
  spacing: 3,
};