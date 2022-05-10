/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
/*-----------IMPORT COMPONENTS-----------*/
import MainContent from "../Components/Content/MainContent/MainContent";
import RedirectToLogin from "../Components/RedirectToLogin/RedirectToLogin";
/*--------------------------------------------------------*/

const Content = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <RedirectToLogin open={true} />;
  }
  return <MainContent />;
};
export default Content;
