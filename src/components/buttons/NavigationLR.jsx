import { IconButton } from "@mui/material";
import ArrowBackImg from "../../assets/icons/arrow_backward.png";
import ArrowForwardImg from "../../assets/icons/arrow_forward.png";


const ArrowButton = ({ direction = "left", onClick, sx, ...props }) => {
  const iconSrc = direction === "left" ? ArrowBackImg : ArrowForwardImg;
  const altLabel = direction === "left" ? "Back" : "Next";

  return (
    <IconButton
      onClick={onClick}
      sx={{
        backgroundColor: "#8A38F5",
        width: 48,
        height: 48,
        borderRadius: "50%",
        padding: 0,
        "&:hover": { backgroundColor: "#8A38F5" },
        ...sx,
      }}
      {...props}
    >
      <img src={iconSrc} alt={altLabel} style={{ width: 24, height: 24 }} />
    </IconButton>
  );
};

export default ArrowButton;
