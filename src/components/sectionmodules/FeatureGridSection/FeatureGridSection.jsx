import React from "react";
import { Box, Container, Grid } from "@mui/material";
import FeatureGridCard from "./FeatureGridCard";
import SXContainer from "../../../layout/SXContainer";
import { Typography } from "@mui/material";



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

  gap = 3, // MUI spacing = 24px
}) {
  return (
    <Box component="section" sx={{ width: "100%" }}>
      <SXContainer >
        <Typography
          sx={{
            fontFamily: `"Microsoft JhengHei UI", sans-serif`,
            fontWeight: 700,
            fontSize: {
              xs: "clamp(24px, 6vw, 28px)",
              sm: "clamp(26px, 5vw, 30px)",
              md: "32px",
            },
            lineHeight: "100%",
            letterSpacing: "0px",
            color: "#111",
            mb: { xs: 2, sm: 3 },
            // paddingTop: "2em",
          }}
        >
          Clients work with SYD because they know
        </Typography>
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
      </SXContainer>

    </Box>
  );
}
