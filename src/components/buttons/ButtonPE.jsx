import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SIZE_STYLES = {
  small: {
    fontSize: "14px",
    padding: "8px 14px",
    gap: "8px",
  },
  medium: {
    fontSize: "16px",
    padding: "10px 15px",
    gap: "10px",
  },
  large: {
    fontSize: "18px",
    padding: "14px 22px",
    gap: "12px",
  },
};

const ButtonPE = ({
  label,
  size = "medium",
  onClick,
  startIcon,
  endIcon,
  sx,
  ...props
}) => {
  const theme = useTheme();
  const sizeStyles = SIZE_STYLES[size] || SIZE_STYLES.medium;

  return (
    <Button
      variant="contained"
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        // Apply theme button typography
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.button.fontWeight,
        textTransform: theme.typography.button.textTransform,
        lineHeight: theme.typography.button.lineHeight,
        letterSpacing: theme.typography.button.letterSpacing,

        // Dynamic size
        fontSize: sizeStyles.fontSize,
        padding: sizeStyles.padding,
        gap: sizeStyles.gap,

        // Colors
        backgroundColor: "#6533FF",
        borderRadius: 0,
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#5b2ee6",
          boxShadow: "none",
        },

        ...sx,
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default ButtonPE;
