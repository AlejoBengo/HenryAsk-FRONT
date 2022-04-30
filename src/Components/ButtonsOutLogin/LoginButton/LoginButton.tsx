/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
/*-----------IMPORT mui & css-----------*/
import { Button } from "@mui/material";
/*--------------------------------------------------------*/

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      color="secondary"
      variant="contained"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};
