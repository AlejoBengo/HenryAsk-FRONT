/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import {
  Paper,
  Stack,
  ListItemButton,
  Box,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
/*--------------------------------------------------------*/

export const StyledBox = styled(Box)`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBox2 = styled(Box)`
  display: flex;
  margin-top: 1vh;
  position: absolute;
  bottom: 1vh;
  right: 1vh;
`;

export const StyledTypography = styled(Typography)`
  font-family: helvetica;
  color: black;
  font-size: 5vh;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 1vw;
`;

export const StyledTypography2 = styled(Typography)`
  font-family: helvetica;
  color: black;
  font-size: 2vh;
  margin-top: 1vh;
  margin-left: 1vw;
`;

export const StyledTypography3 = styled(Typography)`
  font-family: helvetica;
  color: black;
  text-transform: uppercase;
  font-size: 2vh;
  font-weight: bold;
  margin-right: 1vh;
`;

export const StyledPaper = styled(Paper)`
  font-family: helvetica;
  color: black;
  font-size: 3vh;
  width: 96vw;
  padding: 1vw;
  over-flow: hidden;
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

export const StyledBoxModal = styled(Box)`
  margin-top: 10vh;
  margin-left: 10vw;
  width: 80vw;
  height: 80vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const StyledDivModal2 = styled("div")(`
  height: 52vh;
  width: 80vw;
  padding: 1vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 15px;
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(39, 37, 37);
    border-radius: 10px;
  }
`);

export const StyledTextFieldModal4 = styled(TextField)`
  background: #ff8c00;
  border-radius: 1vh;
  margin-left: 2vw;
  width: 20vw;
  margin-top: 1vh;
`;
export const StyledDivModal = styled("div")(`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 11vh;
`);

export const StyledBox3 = styled(Box)`
  width: 15vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledDiv = styled("div")(`
  height: 69vh;
  overflow-y: auto;
  padding: 1vw;

  &::-webkit-scrollbar {
    width: 15px;
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(39, 37, 37);
    border-radius: 10px;
  }
`);

export const StyledBoxModal2 = styled(Box)(`
  background-color: #fff;
  margin-top: 20vh;
  margin-left: 25vw;
  height: 30vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`);
