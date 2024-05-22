import { Chip, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ChipStyled = styled(Chip)(({ theme }) => ({
  margin: "5px 5px 5px 0",
}));

export const TypoSubtitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "10px",
}));
export const TypoSpacing = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

//   export default makeStyles(() => ({
//     chip: {
//       margin: '5px 5px 5px 0',
//     },
//     subtitle: {
//       display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
//     },
//     spacing: {
//       display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//     },
//   }));
