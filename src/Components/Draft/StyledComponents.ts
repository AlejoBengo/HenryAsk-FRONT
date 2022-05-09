/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { styled } from "@mui/system";
import { Grid } from "@mui/material";
/*--------------------------------------------------------*/
export const Container = styled(Grid)`
  width: 60vw;
  height: 50vh;
  border: 0.1vh solid grey;
`;

export const OptionsContainer = styled(Grid)`
  width: 59.9vw;
  height: 7.5vh;
  padding: 1vh;
  border-bottom: 0.1vh solid grey;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const EditorContainer = styled(Grid)(
  ({ theme }) => `
  width: 59.9vw;
  height: 42.3vh;
  padding: 1vh;
  font-family: helvetica;
  overflow-y: overlay;
  color: ${theme.palette.getContrastText(theme.palette.background.default)};

  &::-webkit-scrollbar {
    width: 1vh;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(39, 37, 37);
  }
`
);
