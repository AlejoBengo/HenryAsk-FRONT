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
  width: 19vw;
  margin-left: 1vw;
  background-color: red;
`;

export const StyledListItemButton = styled(ListItemButton)`
  width: 19vw;
  height: 7vh;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  font-family: helvetica;
`;

export const StyledListItemButton2 = styled(ListItemButton)`
  width: 100%;
  max-width: 100%;
  height: 7vh;
  font-family: helvetica;
  background-color: white;
  color: black;
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
  margin-top: 1vh;
  position: absolute;
  bottom: 1vh;
  right: 1vh;
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

export const StyledTypography4 = styled(Typography)`
  font-family: helvetica;
  color: #fff;
  text-transform: uppercase;
  font-size: 4vh;
  font-weight: bold;
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

export const StyledButtonModal3 = styled("button")(`
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
    `);

export const StyledButtonModal4 = styled("button")(`
width: 7vw;
height: 5vh;
color: #090909;
padding: 0.7em 1.7em;
font-size: 18px;
background: #ec4141;
border: 1px solid #ec4141;
transition: all 0.3s;
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;
    `);

export const StyledBox3 = styled(Box)`
  width: 15vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledDiv = styled("div")(`
  height: 72vh;
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
  background-color: rgb(18, 18, 18);
  margin-top: 20vh;
  margin-left: 25vw;
  height: 30vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`);

export const StyledButtonModal5 = styled("button")(`
width: 7vw;
height: 5vh;
margin-top: -4.6vh;
margin-left: 43.1vw;  
color: #090909;
padding: 0.7em 1.7em;
font-size: 18px;
background:  #e8e8e8;
border: 1px solid  #e8e8e8;
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;
    `);
