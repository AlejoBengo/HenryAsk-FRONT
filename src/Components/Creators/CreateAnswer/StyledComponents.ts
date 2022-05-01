/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
/*--------------------------------------------------------*/

export const StyledGrid = styled(Grid)`
  width: 84.4vw;
  height: 15vh;
  display: flex;
  background-color: rgb(209, 209, 209);
  padding: 4vh;
`;

export const StyledButton = styled(Button)`
  width: 7vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  background-color: yellow;
  color: black;
  margin-top: 1.5vh;
  margin-left: 1vw;
  border: 0.1vh solid black;
`;

export const StyledTextField = styled(TextField)`
  width: 60vw;
`;
