import Dialog from "../Dialog/Dialog";
import React from "react";
import { useTheme } from '@mui/material';

interface Props {
  open: boolean;
}

export default function RedirectToLogin({ open }: Props) {
  const [openDialog, setOpenDialog] = React.useState(open);
  const [modalState, setModalState] = React.useState(
    "Para ver este contenido, debes iniciar sesión"
  );
  const theme = useTheme();
  return (
    <Dialog
      color={theme.palette.getContrastText(theme.palette.background.default)}
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
      textSuccess="Cambios guardados correctamente"
      error="Para ver este contenido, debes iniciar sesión"
      buttonText="Volver a mi perfil"
      modalState={modalState}
      setModalState={setModalState}
      route="/"
    />
  );
}
