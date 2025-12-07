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

  // responsive grid template: 1 / 2 / 3 / 5 columns depending on breakpoint
  const gridTemplateColumns = {
    xs: "repeat(1, minmax(0, 1fr))", // mobile: single column (full width)
    sm: "repeat(2, minmax(0, 190px))", // small: two columns of 190px (keeps card width stable)
    md: "repeat(3, minmax(0, 190px))", // tablet: three columns
    lg: "repeat(5, minmax(0, 190px))", // desktop: five columns
  };

  // gap between cards
  const gap = theme.spacing(2.5);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, sm: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: theme.spacing(4),
      }}
    >
      {/* optional section title */}
      {/* <Typography variant="h6" sx={{ mb: 1 }}>Our Team</Typography> */}

      {/* FIRST ROW */}
      <Box
        component="section"
        aria-label="Team row 1"
        sx={{
          width: "100%",
          maxWidth: 1400,
          display: "grid",
          gridTemplateColumns,
          gap,
          justifyContent: "center", // center the grid within the container
          alignItems: "start",
        }}
      >
        {firstSection.map((p, index) => (
          <Box key={p.id ?? `first-${index}`} sx={{ justifySelf: "center" }}>
            <ProfileCard name={p.name} role={p.role} />
          </Box>
        ))}
      </Box>

      {/* SECOND ROW (with responsive horizontal offset) */}
      <Box
        component="section"
        aria-label="Team row 2"
        sx={{
          width: "100%",
          maxWidth: 1400,
          display: "grid",
          gridTemplateColumns,
          gap,
          ml: { xs: 0, sm: 0, md: -0, lg: -0 },
          justifyContent: "center",
          alignItems: "start",
          // responsive offset: no offset on small screens, slight right shift on md+, larger on lg+
          pl: { xs: 0, sm: 0, md: 6, lg: 24 }, // adds left padding to visually shift row right
        }}
      >
        {secondSection.map((p, index) => (
          <Box key={p.id ?? `second-${index}`} sx={{ justifySelf: "center" }}>
            <ProfileCard name={p.name} role={p.role} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProfileGrid;
