import React, { useState } from "react";
import { Box } from "@mui/material";
import FeatureListCard from "./FeatureListCard";
import { features as defaultFeatures } from "../../../data/FeatureList";

const FeatureList = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const featuresToDisplay = data || defaultFeatures;

  return (
    <Box
      component="ul"
      sx={{
        listStyle: "none",
        p: 0,
        m: 0,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {featuresToDisplay.map((f, index) => {
        const isHovered = hoveredIndex === index;
        const isFirst = index === 0;

        // FIXED LOGIC
        const isActive = isHovered || (hoveredIndex === null && isFirst);

        return (
          <Box
            component="li"
            key={f.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <FeatureListCard
              title={f.title}
              subtitle={f.subtitle}
              isActive={isActive}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default FeatureList;
