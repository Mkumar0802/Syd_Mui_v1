// src/components/sectionmodules/AccordionItem/AccordionFeatureList.jsx
import React, { useState } from "react";
import { Box } from "@mui/material";
import AccordionItem from "./AccordionItem";
import { accordionItems } from "../../../data/AccordionItem";

export default function AccordionFeatureList() {
  // first item open by default
  const [openId, setOpenId] = useState(accordionItems[0]?.id || null);

  return (
    <Box
      component="ul"
      sx={{
        listStyle: "none",
        p: 0,
        m: 0,
        borderTop: "0.5px solid #000000",
        // responsive content width (centered by container)
        width: "100%",
        maxWidth: { xs: "95%", sm: 720, md: 900 },
      }}
    >
      {accordionItems.map((item) => (
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
