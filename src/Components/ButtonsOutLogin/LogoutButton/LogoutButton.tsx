/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
/*-----------IMPORT MUI & CSS-----------*/
import Button from "@mui/material/Button";
/*--------------------------------------------------------*/

export const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() => logout({ returnTo: window.location.origin })}
      color="inherit"
    >
      Cerrar Sesion
    </Button>
  );
};
