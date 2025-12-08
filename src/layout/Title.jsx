import { Typography } from "@mui/material";

export default function Title({ children, sx = {}, ...props }) {
  return (
    <Typography
      variant="title32"
      sx={{ ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
}
