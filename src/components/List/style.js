import { FormControl, Grid } from "@mui/material";
import { styled } from "@mui/system";

export const FormControlStyled = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginTop: "20px",
  marginBottom: "40px",
}));

export const ContainerStyled = styled("div")(({ theme }) => ({
  padding: "25px 0px 25px 25px",
}));

export const ListStyled = styled(Grid)(({ theme }) => ({
  height: "75vh",
  overflow: "auto",
}));

export const Loading = styled("div")(({ theme }) => ({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

// export default makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//     loading: {
//       height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
//     },
//     marginBottom: {
//       marginBottom: '30px',
//     },
//   }));
