import { Typography } from "@mui/material";

export default function BodyContent({ children, sx = {}, ...props }) {
    return (
        <Typography
            variant="bodyContent20"
            sx={sx}
            {...props}
        >
            {children}
        </Typography>
    );
}
