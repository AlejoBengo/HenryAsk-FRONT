/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { styled } from "@mui/system";
import { Paper, TextField, Box, Select, Stack } from "@mui/material";
import LateralItem from "../Navbar/LateralMenu/LateralItem";
import { Link } from "react-router-dom";
/*--------------------------------------------------------*/

export const LateralItemStyled = styled(LateralItem)`
  text-decoration: none;
  &:visited {
    color: black;
  }
`;

export const LinkDom = styled(Link)`
  text-decoration: none;
  color: unset;
  &:visited {
    color: unset;
  }
  &:hover 
  {
    text-decoration: underline
  }
`;

export const Div = styled("div")(`
    width: 100%;
    height: auto;
    margin-top: 0;
    `);

//text-shadow: 4px 4px 4px rgb(255,255,0);
export const TituloForo = styled("span")(`

border-bottom:10px solid rgb(255,255,0);
`);

export const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1em 1em 1em 1em;
  margin-top: 0.5vh;
`;
export const StyledTextField = styled(TextField)`
  width: 100%;
  text-align: center;
`;

// --------------> STYLED EDIT PROFILE

export const BoxStyledEditProfile = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  background-color: black;
  border: 2px solid black;
  box-shadow: 1px 1px 20px black;
  padding: 4px;
  color: white;
`;

export const Img = styled("img")`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
//-----------------------//

export const StyledButton = styled("button")(`
    width: 7vw;
    height: 5vh;
    padding: 0.8em 1.7em;
    display: flex;
    justify-content: center;
    border: red;
    font-size: 2.5vh;
    align-items: center;
    background-color: #302d2d;
    color: #fff;
    font-family: helvetica;
    cursor: pointer;
    margin-left: 70vw;
    `);

export const StyledButton2 = styled("button")(`
    width: 7vw;
    height: 5vh;
    padding: 0.8em 1.7em;
    display: flex;
    justify-content: center;
    font-size: 2.5vh;
    align-items: center;
    border: #f35555;
    background-color: #f35555;
    color: #fff;
    font-family: helvetica;
    cursor: pointer;
    `);

export const StyledBoxModal = styled(Box)(({theme})=>`
  background-color: ${theme.palette.mode === "dark" ? "#000000" : "#fff"};
  width: 75vw;
  height: 55vh;
  margin-left: 12.5vw;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`);

export const StyledBoxChoosed = styled(Box)`
  width: 30vw;
  height: 10vh;
  margin-top: 1vh;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledSelect = styled(Select)(({theme}) =>`
background-color: ${theme.palette.mode === "dark" ? "#000000" : "#fff"};
width: 15vw;
family-font: helvetica;
margin-left: 0.5vw;
`);

export const StyledDivButtons = styled("div")(`
    width: 15vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 70vw;
    `);

export const StyledDiv = styled("div")(`
    width: 75vw;
    height: 25vh;
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

export const StyledBoxModal2 = styled(Box)(`
  background-color: #fff;
  margin-top: 20vh;
  margin-left: 25vw;
  height: 30vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`);

//--------------style Code Editor

export const GridContainter = styled("div")(`
display: grid;
grid-template-columns: 60% 40%;
grid-gap: 20px;
padding-left: 2%;
`);

export const CodeArea = styled("div")(`
background-color: white;
border-radius: 1em;
padding-bottom: 5%;
`);

export const CodeAreaHeader = styled("div")(`
display: grid;
grid-template-columns: 50% 30%;
text-align: center;
`);

export const CodeButton = styled("button")(`
background-color: #4CAF50; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin-top: 1%;
margin-bottom: 1%;
`);

export const StackMigajas = styled(Stack)(
  ({ theme }) => `
  width: 70vw;
  margin-left: 1vh;
  padding:1vh;
  background-color: ${
    theme.palette.mode === "light"
      ? theme.palette.secondary.main
      : theme.palette.info.main
  };
`
);
