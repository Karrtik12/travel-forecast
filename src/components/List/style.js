import { FormControl, Grid } from "@mui/material";
import { styled } from "@mui/system";

export const FormControlStyled = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));

export const ContainerStyled = styled("div")(({ theme }) => ({
  padding: "25px",
}));

export const ListStyled = styled(Grid)(({ theme }) => ({
  height: "75vh",
  overflow: "auto",
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
