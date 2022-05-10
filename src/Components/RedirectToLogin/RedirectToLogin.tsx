import Dialog from "../Dialog/Dialog";
import React from "react";

interface Props {
  open: boolean;
}

export default function RedirectToLogin({ open }: Props) {
  const [openDialog, setOpenDialog] = React.useState(open);
  const [modalState, setModalState] = React.useState(
    "Para ver este contenido, debes iniciar sesión"
  );
  return (
    <Dialog
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
