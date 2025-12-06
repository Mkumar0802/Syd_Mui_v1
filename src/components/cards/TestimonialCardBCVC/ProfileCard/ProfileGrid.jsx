// ProfileCard/ProfileGrid.jsx

import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ProfileCard from "./ProfileCard";
import { people } from "../../../../data/ProfileCard/index"; // adjust path

const ProfileGrid = () => {
  const theme = useTheme();

  // split data into two sections
  const firstSection = people.slice(0, 5);  // first 5
  const secondSection = people.slice(5);    // remaining (4)

  const gridSX = {
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(1, 190px)",
      sm: "repeat(2, 190px)",
      md: "repeat(3, 190px)",
      lg: "repeat(5, 190px)",
    },
    gap: theme.spacing(2.5),
    justifyContent: "center",
    alignItems: "start",
  };

  return (
    <Box
      sx={{
        padding: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: theme.spacing(4), // space between the two sections
      }}
    >
      {/* Optional heading for first section */}
      {/* <Typography variant="h6" sx={{ mb: 1 }}>Section 1</Typography> */}

      <Box
        component="section"
        aria-label="Team row 1"
        sx={{
          ...gridSX,
          width: "100%",
        }}
      >
        {firstSection.map((p, index) => (
          <ProfileCard key={p.name || index} name={p.name} role={p.role} />
        ))}
      </Box>

      {/* Optional heading for second section */}
      {/* <Typography variant="h6" sx={{ mb: 1 }}>Section 2</Typography> */}

      <Box
        component="section"
        aria-label="Team row 2"
        sx={{
          ...gridSX,
          width: "100%",
           position: "relative",
        left: "100px",   // move right; use negative to move left
        }}
      >
        {secondSection.map((p, index) => (
          <ProfileCard
            key={p.name || `second-${index}`}
            name={p.name}
            role={p.role}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProfileGrid;
