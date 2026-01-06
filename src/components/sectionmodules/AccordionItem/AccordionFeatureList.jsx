// src/components/sectionmodules/AccordionItem/AccordionFeatureList.jsx
import React, { useState } from "react";
import { Box } from "@mui/material";
import AccordionItem from "./AccordionItem";
import { accordionItems as defaultAccordionItems } from "../../../data/AccordionItem";

export default function AccordionFeatureList({ data }) {
  const itemsToDisplay = data || defaultAccordionItems;
  // first item open by default
  const [openId, setOpenId] = useState(itemsToDisplay[0]?.id || null);

  return (
    <Box
      component="ul"
      sx={{
        listStyle: "none",
        p: 0,
        m: 0,
        borderTop: "0.5px solid #000000",
        // fill container
        width: "100%",
      }}
    >
      {itemsToDisplay.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          badgeLabel={item.badgeLabel}
          expanded={openId === item.id}
          onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
        />
      ))}
    </Box>
  );
}
