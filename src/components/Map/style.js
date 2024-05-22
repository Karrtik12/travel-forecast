import { styled } from "@mui/system";

export const PaperStyled = styled("div")(({ theme }) => ({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  width: "100px",
  cursor: "pointer",
}));

export const MapContainer = styled("div")(({ theme }) => ({
  height: "90vh",
  width: "100%",
}));

export const MarkerContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": { zIndex: 2 },
}));
