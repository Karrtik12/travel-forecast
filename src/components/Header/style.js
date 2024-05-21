import { alpha, styled } from "@mui/material/styles";
import { InputBase, Toolbar, Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(3), width: "auto" },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
  },
}));

export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));
