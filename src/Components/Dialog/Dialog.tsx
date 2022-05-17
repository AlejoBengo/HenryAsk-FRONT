import React, { useState } from "react";
/*-----------IMPORT MUI & CSS-----------*/
import {
  CircularProgress,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Button, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router-dom";

// EJEMPLO DE COMO APLICAR ESTO EN ./Componets/Profile/EditProfile.tsx esta todo comentado y explicado ademas de aca

export default function Dialog(props: any) {
  //const [openDialog, setOpenDialog] = useState(false); -----> el componente que use modal debe tener este estado local y pasarlo por props a este dialog
  //const [modalState, setModalState] = useState("Enviando...");-----> el componente que use modal debe tener este estado local y pasarlo por props a este dialog
  // con los nombres de la linea 28
  //textSucces es el texto que se va mostrar por defecto si la operacion salio exitosa (tambien pasada por props)
  // error es el texto por defecto se va mostrar si salio algo mal
  // en su handle click tienen que usar setOpen(true) para que se abra el dialogo  tambien un setModalState('...')
  // IMPORTANTE lo que le pasen al setModalState tiene que coincidir con el textSucces que pasan x props!!
  const navigate = useNavigate();
  const {
    error,
    textSuccess,
    openDialog,
    setOpenDialog,
    modalState,
    setModalState,
    ancho,
    alto,
    route,
  } = props;

  const handleClose = () => {
    if (modalState !== "Enviando...") {
      setOpenDialog(false);
      navigate(route || 0);
    }
  };

  return (
    <Modal open={openDialog} onClose={() => handleClose}>
      <Fade in={openDialog}>
        <Box
          sx={{
            color:"comen.main",
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: ancho ? ancho : 400,
            height: alto ? alto : "auto",
            bgcolor: "background.paper",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" align="center">
            {modalState}
          </Typography>
          {modalState === "Enviando" && <CircularProgress />}
          {modalState === textSuccess && (
            <CheckIcon fontSize="large" color="success" />
          )}
          {modalState === error && <ErrorIcon fontSize="large" color="error" />}
          {modalState !== "Enviando..." && (
            <Button sx={{color:"dialogButt.main"}} onClick={() => handleClose()}>Aceptar</Button>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}
