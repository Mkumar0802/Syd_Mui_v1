import React from "react";
import { Box, Typography, Paper } from "@mui/material";

/**
 * Responsive FeatureGridCard
 *
 * Props:
 * - title, body
 * - sx: style overrides
 * - height: optional fixed height (default auto)
 * - bg: background color
 */
export default function FeatureGridCard({
  title,
  body,
  sx = {},
  height = "auto",
  bg = "#F2F2F2",
}) {
  return (
    <Paper
      elevation={0}
      square
      sx={{
        backgroundColor: bg,
        height: height === "auto" ? "auto" : `${height}px`,
        width: "100%",             // full responsive width
        p: 3,                      // 24px
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        borderRadius: "4px",
        ...sx,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: `"Segoe UI", sans-serif`,
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#000",
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: `"Segoe UI", sans-serif`,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#666",
          }}
        >
          {body}
        </Typography>
      </Box>
    </Paper>
  );
}
