import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ProfileCard = ({ name, role, src }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "190px",
        height: "190px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        p: 1,
        boxSizing: "border-box",
      }}
    >
      {/* EMPTY CIRCLE — NO DEFAULT USER ICON */}
      <Box
        sx={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          backgroundColor: "#D9D9D9",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {src ? (
          <Box
            component="img"
            src={src}
            alt={name}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : null}
      </Box>

      {/* NAME */}
      <Typography
        variant="profileName"
        sx={{
          mt: "12px",
          textAlign: "center",
          ...theme.typography.profileName,
        }}
      >
        {name}
      </Typography>

      {/* ROLE */}
      <Typography
        variant="profileRole"
        sx={{
          mt: "4px",
          textAlign: "center",
          ...theme.typography.profileRole,
        }}
      >
        {role}
      </Typography>
    </Box>
  );
};

export default ProfileCard;
