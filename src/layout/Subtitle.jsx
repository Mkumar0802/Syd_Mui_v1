import { Typography } from "@mui/material";

export default function Subtitle({ children, sx = {}, ...props }) {
  return (
    <Typography
      sx={{
        fontFamily: `"Segoe UI", sans-serif`,
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: "100%",
        letterSpacing: "0%",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
