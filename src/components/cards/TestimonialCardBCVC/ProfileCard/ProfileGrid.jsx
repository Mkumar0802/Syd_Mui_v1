// ProfileCard/ProfileGrid.jsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { people } from "../../../../data/ProfileCard/index"; // adjust path as needed

const ProfileGrid = () => {
  const theme = useTheme();

  // split data into two sections
  const firstSection = people.slice(0, 5); // first 5
  const secondSection = people.slice(5); // remaining

  // gap between cards
  const gap = theme.spacing(2.5);

  const rowStyles = {
    width: "100%",
    maxWidth: 1400,
    display: "flex",
    flexWrap: "wrap",
    gap,
    justifyContent: "center",
    alignItems: "start",
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, md: 6 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: theme.spacing(4),
      }}
    >
      {/* FIRST ROW */}
      <Box
        component="section"
        aria-label="Team row 1"
        sx={rowStyles}
      >
        {firstSection.map((p, index) => (
          <Box key={p.id ?? `first-${index}`} sx={{ flexShrink: 0 }}>
            <ProfileCard name={p.name} role={p.role} />
          </Box>
        ))}
      </Box>

      {/* SECOND ROW */}
      <Box
        component="section"
        aria-label="Team row 2"
        sx={rowStyles}
      >
        {secondSection.map((p, index) => (
          <Box key={p.id ?? `second-${index}`} sx={{ flexShrink: 0 }}>
            <ProfileCard name={p.name} role={p.role} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProfileGrid;
