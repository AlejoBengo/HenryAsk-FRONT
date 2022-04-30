import { Grid, TextField, Select, Alert, Box, Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledGrid = styled(Grid)`
  width: 100vw;
  height: 50vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
`;

export const StyledTextField = styled(TextField)`
  width: 40vw;
  height: 10vh;
  margin-left: 1vw;
`;

export const StyledSelect = styled(Select)`
  width: 15vw;
  height: 7vh;
  margin-left: 1vw;
`;

export const StyledAlert = styled(Alert)`
  width: 40vw;
  margin-top: 1vw;
  margin-left: 1vw;
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1vh;
  background-color: rgba(153, 153, 153, 0.74);
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
