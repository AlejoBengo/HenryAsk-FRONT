/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { styled } from "@mui/system";
import { Box, Typography, Button } from "@mui/material";
/*--------------------------------------------------------*/
export const EditorsContainer = styled(Box)`
  width: 45vw;
  height: 67vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const EditorCode = styled(Box)`
  background-color: #1d1d1d;
  padding-top: 0.5vh;
  width: 45vw;
  height: 35vh;
  border-radius: 0.3vw;
`;

export const EditorTest = styled(Box)`
  background-color: #1d1d1d;
  padding-top: 0.5vh;
  width: 45vw;
  height: 30vh;
  border-radius: 0.3vw;
`;

export const Title = styled(Typography)(
  ({ theme }) => `
    font-family: helvetica;
    font-size: 3vh;
    color: #fff;
    margin-left: 1vw;
`
);

export const Executer = styled(Button)(
  ({ theme }) => `
      font-family: helvetica;
      font-weight: bold;
      margin-left: 0.5vw;
      margin-top: 0.8vh;
  `
);
