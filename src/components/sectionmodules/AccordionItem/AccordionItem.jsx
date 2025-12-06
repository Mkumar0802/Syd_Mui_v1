// src/components/sectionmodules/AccordionItem/AccordionItem.jsx
import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  IconButton,
  Badge as MuiBadge,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function AccordionItem({
  id,
  title,
  subtitle,
  badgeLabel,
  expanded = false,
  onToggle,
  children,
}) {
  return (
    <Box
      component="li"
      sx={{
        listStyle: "none",
        backgroundColor: expanded ? "#FFFFFF" : "#F2F2F2",
        borderTop: "0.5px solid #000",
        borderBottom: "0.5px solid #000",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // responsive horizontal padding
          px: { xs: 2, sm: 3 },
          // slightly smaller vertical padding on small screens
          py: { xs: 1.5, sm: 2.25 },
        }}
      >
        <Box sx={{ flex: 1, pr: 2 }}>
          {/* TITLE — EXACT TYPOGRAPHY */}
          <Typography
            component="div"
            sx={{
              fontFamily: `"Microsoft JhengHei UI", sans-serif`,
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: { xs: "20px", sm: "24px" }, // responsive size
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#000",
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* ACTION AREA */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            size="small"
            onClick={onToggle}
            sx={{
              width: 36,
              height: 36,
              color: "#000",
              bgcolor: "transparent",
              "&:hover": { bgcolor: "transparent" },
            }}
          >
            {expanded ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
          </IconButton>

          {badgeLabel && (
            <MuiBadge
              badgeContent={badgeLabel}
              color="warning"
              sx={{
                "& .MuiBadge-badge": {
                  right: -4,
                  top: -4,
                  minWidth: 22,
                  height: 22,
                  borderRadius: "50%",
                  fontSize: 12,
                  fontWeight: 700,
                },
              }}
            />
          )}
        </Box>
      </Box>

      {/* EXPANDED CONTENT (subtitle goes here) */}
      {expanded && (
        <Box sx={{ px: { xs: 2, sm: 3 }, py: { xs: 1.5, sm: 2 } }}>
          <Typography
            component="div"
            sx={{
              fontFamily: `"Segoe UI", sans-serif`,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: { xs: "18px", sm: "20px" },
              lineHeight: "30px",
              letterSpacing: "0%",
              color: "#000",
            }}
          >
            {subtitle}
          </Typography>

          {children}
        </Box>
      )}
    </Box>
  );
}

AccordionItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  badgeLabel: PropTypes.string,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  children: PropTypes.node,
};
