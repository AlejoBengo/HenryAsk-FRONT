import { styled } from "@mui/system";
import { Button, Box, TextField, Typography } from "@mui/material";

export const StyledDiv = styled("div")(`
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`);

export const BotonBorrar = styled(Button)(
  ({ theme }) => `
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
);

export const BotonBorrar2 = styled(Button)(
  ({ theme }) => `
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
);

export const BotonEditar = styled(Button)(
  ({ theme }) => `
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
);

export const BotonCerrar = styled(Button)(
  ({ theme }) => `
  height: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 53.2vw;
  `
);

export const BotonGuardar = styled(Button)(
  ({ theme }) => `
      height: 4vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 53.2vw;
  `
);

export const ModalTextField = styled(TextField)(
  ({ theme }) => `
  width: 57vw;
`
);

export const ModalTextFieldContainer = styled("div")(`
    width: 60vw;
    height: 26vh;
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

export const BoxModal = styled(Box)(
  ({ theme }) => `
    width: 60vw;
    height: 35vh;
    margin-top: 15vh;
    margin-left: 20vw;
    background-color: ${
      theme.palette.mode === "light"
        ? theme.palette.secondary.main
        : theme.palette.info.main
    };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`
);

export const AreYouSure = styled(Typography)(
  ({ theme }) => `
  font-family: helvetica;
  font-size: 6vh;
  font-weight: bold;
`
);

export const BoxModal2 = styled(Box)(
  ({ theme }) => `
    width: 60vw;
    height: 35vh;
    margin-top: 15vh;
    margin-left: 20vw;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
);
