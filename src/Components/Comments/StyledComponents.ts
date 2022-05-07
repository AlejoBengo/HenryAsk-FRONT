/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
/*--------------------------------------------------------*/

export const BoxButtons = styled(Box)`
  margin-left: 69vw;
  width: 5vw;
  display: flex;
  justify-content: space-between;
  }
`;

export const BoxModalDelete = styled(Box)`
width: 60vw;
height: 35vh;
margin-top: 15vh;
margin-left: 20vw;
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
  }
`;

export const AreYouSure = styled(Typography)`
  font-family: Helvetica;
  font-size: 7vh;
  font-weight: bold;
  }
`;
