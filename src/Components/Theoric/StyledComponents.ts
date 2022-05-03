/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import {
  Paper,
  Stack,
  ListItemButton,
  Box,
  Grid,
  Typography,
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
  width: 19vw;
  height: 7vh;
  font-family: helvetica;
  margin-left: 1vw;
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
  height: 20vh;
  margin-top: 3vh;
  padding: 1vw;
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
