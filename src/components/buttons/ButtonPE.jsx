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
  variant = "contained",
  sx,
  ...props
}) => {
  const theme = useTheme();
  const sizeStyles = SIZE_STYLES[size] || SIZE_STYLES.medium;

  // STATIC COLOR + HOVER COLOR LOGIC
  const defaultStaticColor = "#6533FF";
  const hoverColor = "#00D0FF";

  const customVariantStyles =
    variant === "outlinedWhite"
      ? {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        border: "1px solid rgba(255,255,255,0.6)",
        borderRadius: 0,
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid #FFFFFF",
        },
      }
      : {
        backgroundColor: defaultStaticColor,
        color: "#FFFFFF",
        borderRadius: 0,
        boxShadow: "none",
        transition: "background-color 0.25s ease",

        "&:hover": {
          backgroundColor: hoverColor,
          boxShadow: "none",
        },

        // OPTIONAL: keep click active style same as static color
        "&:active": {
          backgroundColor: defaultStaticColor,
        },
      };

  return (
    <Button
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.button.fontWeight,
        textTransform: theme.typography.button.textTransform,
        lineHeight: theme.typography.button.lineHeight,
        letterSpacing: theme.typography.button.letterSpacing,

        fontSize: sizeStyles.fontSize,
        padding: sizeStyles.padding,
        gap: sizeStyles.gap,

        ...customVariantStyles,
        ...sx,
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default ButtonPE;
