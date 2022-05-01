/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { Grid, TextField, Button, Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
/*--------------------------------------------------------*/

export const StyledGrid = styled(Grid)`
  width: 84.4vw;
  height: 15vh;
  display: flex;
  background-color: rgb(209, 209, 209);
  padding: 4vh;
`;

export const StyledTypography = styled(Typography)`
  font-size: 3vh;
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledButton = styled(Button)`
  // width: 7vw;
  height: 6vh;
  // background-color: yellow;
  // color: black;
  margin-top: 3.5vh;
`;

export const StyledTextField = styled(TextField)`
  margin: 1em;
  width: 72vw;
  text-align: center;
  padding-right: 16px;
`;

export const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1em 1em 1em 1em;
  margin-top: 1em;
`;
