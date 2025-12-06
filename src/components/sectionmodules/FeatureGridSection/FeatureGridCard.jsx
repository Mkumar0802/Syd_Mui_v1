import React from "react";
import { Box, Typography, Paper } from "@mui/material";

/**
 * Theme-free FeatureGridCard
 *
 * Props:
 * - title, body
 * - sx: override styles
 * - height: default 254
 * - bg: optional background (default '#F2F2F2')
 */
export default function FeatureGridCard({
  title,
  body,
  sx = {},
  height = 254,
  bg = "#F2F2F2",
}) {
  return (
    <Paper
      elevation={0}
      square
      sx={{
        backgroundColor: bg,          // explicit background color
        height: `${height}px`,
        width: { xs: "100%", sm: "295px" }, // explicit pixel width on sm+
        padding: "24px",             // 3 * 8 = 24px (matches previous spacing)
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        overflow: "hidden",
        // ensure background isn't covered by anything
        WebkitTapHighlightColor: "transparent",
        ...sx,
      }}
    >
      <Box>
        <Typography
          component="div"
          sx={{
            fontFamily:
              `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`,
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "24px",
            marginBottom: "8px",
            color: "#000",
          }}
        >
          {title}
        </Typography>

        <Typography
          component="div"
          sx={{
            fontFamily:
              `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#666666",
          }}
        >
          {body}
        </Typography>
      </Box>
    </Paper>
  );
}
