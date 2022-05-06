/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { styled } from "@mui/system";
import { Paper, TextField, Box, Select } from "@mui/material";
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
  color: black;
  &:visited {
    color: black;
  }
`;

export const Div = styled("div")(`
    width: 100%;
    height:auto;
    `);

export const TituloForo = styled("span")(`
text-shadow: 4px 4px 4px rgb(255,255,0);
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
  margin: 1em;
  width: 100%;
  text-align: center;
  padding-right: 16px;
`;



// --------------> STYLED EDIT PROFILE

export const BoxStyledEditProfile = styled(Box)`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height:auto;
    background-color: black;
    border: 2px solid black;
    box-shadow: 1px 1px 20px black;
    padding: 4px;
    color:white
`;

export const Img = styled("img")`
  width:100%;
  height:auto;
  object-fit:cover;
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

export const StyledBoxModal = styled(Box)`
  width: 75vw;
  height: 55vh;
  margin-left: 12.5vw;
  margin-top: 15vh;
  background-color: #302d2d;
`;

export const StyledBoxChoosed = styled(Box)`
  width: 35vw;
  height: 10vh;
  margin-left: 0.5vw;
  margin-top: 1vh;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledTextField2 = styled(TextField)`
  width: 65vw;
  border-radius: 0.5vh;
  background-color: #fff;
  color: black;
  margin: 0.5vw;
`;

export const StyledSelect = styled(Select)`
  width: 15vw;
  background-color: #fff;
  family-font: helvetica;
  color: black;
  margin-left: 0.5vw;
`;

export const StyledButtonModal = styled("button")(`
    width: 7vw;
    height: 5vh;
    padding: 0.8em 1.7em;
transition: all 0.3s;
    display: flex;
    justify-content: center;
    font-size: 2.5vh;
    align-items: center;
    border: #fff;
    background-color: #ff;
    color: #black;
    font-family: helvetica;
    cursor: pointer;
    margin-left: 68vw;

    &:hover {
      border: #f35555;
      background-color: #f35555;
    }
    `);

export const StyledButtonModal4 = styled("button")(`
width: 7vw;
height: 5vh;
margin-left: 68vw;
margin-top: 6vh;
color: #090909;
padding: 0.7em 1.7em;
font-size: 18px;
background: #e7e3e3;
border: 1px solid #e7e3e3;
transition: all 0.3s;
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;

&:hover {
  background: #5ace43;
border: 1px solid #5ace43;
}
    `);

export const StyledDivButtons = styled("div")(`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    `);

export const StyledButtonModal5 = styled("button")(`
width: 7vw;
height: 5vh;
margin-top: -2.7vh;
margin-left: 43.1vw;  
color: #090909;
font-size: 18px;
background:  #e8e8e8;
border: 1px solid  #e8e8e8;
cursor: pointer;
padding: 0.7em 1.7em;
display: flex;
justify-content: center;
align-items: center;
    `);

export const StyledButtonModal6 = styled("button")(`
width: 7vw;
height: 5vh;
color: #090909;
padding: 0.7em 1.7em;
font-size: 18px;
background: #e7e3e3;
border: 1px solid #e7e3e3;
transition: all 0.3s;
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;

&:hover {
  background: #5ace43;
border: 1px solid #5ace43;
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
  justify-content: space-around;
`);

//--------------style Code Editor

export const GridContainter = styled("div")(`
display: grid;
grid-template-columns: 60% 40%;
grid-gap: 20px;
padding-left: 2%;
`)

export const CodeArea = styled("div")(`
background-color: white;
border-radius: 1em;
padding-bottom: 5%;
`)

export const CodeAreaHeader = styled("div")(`
display: grid;
grid-template-columns: 50% 30%;
text-align: center;
`)

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
`)

