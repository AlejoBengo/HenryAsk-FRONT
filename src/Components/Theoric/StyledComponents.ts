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

export const StyledStack = styled(Stack)`
  width: 22vw;
  margin-left: 1vw;
  background-color: red;
`;

export const StyledListItemButton = styled(ListItemButton)`
  width: 20vw;
  height: 7vh;
  margin-left: 1vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  font-family: helvetica;
`;

export const StyledListItemButton2 = styled(ListItemButton)`
  width: 20vw;
  height: 7vh;
  font-family: helvetica;
  margin-left: 1vw;
  background-color: rgb(18, 18, 18);
  color: white;
`;

//-----------------------------------------------------------------------

export const StyledBox = styled(Box)`
  width: 100vw;
  height: 10vh;
  font-family: helvetica;
  background-color: rgb(18, 18, 18);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBox2 = styled(Box)`
  display: flex;
`;

export const StyledTypography = styled(Typography)`
  font-family: helvetica;
  color: white;
  font-size: 5vh;
  text-transform: uppercase;
  margin-left: 1vw;
`;

export const StyledTypography2 = styled(Typography)`
  font-family: helvetica;
  color: #fff;
  font-size: 2vh;
  margin-right: 0.5vw;
  margin-top: 7vh;
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
  width: 98vw;
  margin-top: 3vh;
  padding: 1vw;
  over-flow: hidden;
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledBoxModal = styled(Box)`
  margin-top: 10vh;
  margin-left: 10vw;
  width: 80vw;
  height: 80vh;
  background-color: rgb(18, 18, 18);
  font-family: helvetica;
  color: white;
  border-radius: 10px;
`;

export const StyledButtonModal = styled("button")(`
margin-left: 73vw;
width: 7vw;
height: 5vh;
color: #090909;
padding: 0.7em 1.7em;
font-size: 18px;
background: #e8e8e8;
border: 1px solid #e8e8e8;
transition: all 0.3s;
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;

&:hover {
  background-color: red;
  border-color: red;
    `);

export const StyledTextFieldModal = styled(TextField)`
  background: #e8e8e8;
  border-radius: 1vh;
  margin-left: 2vw;
  width: 40vw;
`;

export const StyledDivModal2 = styled("div")(`
  height: 52vh;
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

export const StyledTextFieldModal2 = styled(TextField)`
  width: 76vw;
  background-color: #e8e8e8;
  margin-top: 1vh;
  margin-left: 2vw;
  border-radius: 1vh;
`;

export const StyledTextFieldModal3 = styled(TextField)`
  background: #e8e8e8;
  border-radius: 1vh;
  margin-left: 2vw;
  width: 40vw;
  margin-top: 1vh;
`;

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

export const StyledButtonModal2 = styled("button")(`
margin-left: 73vw;
margin-top: 1vh;
width: 7vw;
height: 5vh;
color: #090909;
padding: 0.7em 1.7em;
font-size: 18px;
background: #e8e8e8;
border: 1px solid #e8e8e8;
transition: all 0.3s;
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;

&:hover {
  background-color: green;
  border-color: green;
    `);
