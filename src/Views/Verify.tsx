import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Typography,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
export const Verify = () => {
  const { user } = useAuth0();
  const [open, setOpen] = useState(!user?.email_verified);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email_verified) navigate("/");
  }, [user]);
  return (
    <Dialog open={open}>
      <DialogTitle>Verifica tu email</DialogTitle>

      <DialogContent>
        Para seguir navegando en esta página es necesario que confirmes tu
        dirección de correo electrónico. Se envió un email de confirmación a{" "}
        {user?.email}
      </DialogContent>
    </Dialog>
  );
};
export default Verify;
