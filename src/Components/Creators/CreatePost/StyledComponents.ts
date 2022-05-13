/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { Grid, TextField, Select, Alert, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
/*--------------------------------------------------------*/

export const StyledGrid = styled(Grid)`
  width: 70vw;
  height: 60vh;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  background-color: rgb(209, 209, 209);
  padding: 4vh;
  flex-direction: column;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  margin-y: 1rem;
`;

export const StyledSelect = styled(Select)`
  width: 15vw;
  height: 7vh;
  margin-left: 1vw;
`;

export const StyledAlert = styled(Alert)`
  margin-top: 1vw;
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1vh;
  width: 35vw;
`;

export const StyledBox2 = styled(Box)`
  display: flex;
  width: 18vh;
  height: 5vh;
  margin: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 100, 100);
`;

export const StyledButton = styled(Button)`
  width: 10vh;
  height: 5vh;
  color: black;
  background-color: yellow;
  margin-left: 17vw;
  margin-top: 2vh;
  border: 0.1vh solid black;
`;
