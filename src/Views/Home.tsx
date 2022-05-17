import {
  Box,
  CssBaseline } from "@mui/material";
import { useAppSelector } from "../app/hooks";
import CardRedirec from "../Components/Home/Grids/CardRedirec";
import Cards from "../Components/HomeSenior/Cards/Cards";
import Grids from "../Components/Home/Grids/Grids";
import Ranking from "../Components/HomeSenior/Ranking";
import PosteosAlumnos from "../Components/HomeSenior/PosteosAlumnos";
import CardPresentacion from "../Components/Home/Grids/CardPresentacion";
import QuantityUsers from "../Components/Home/Grids/QuantityUsers";

export default function Home() {
  const userRole = useAppSelector((state) => state.user.data);

  if(userRole.role <= 0 ){
    return (
      <Box sx={{ width: "100%", padding: "0px", margin: "0px" }}>
        <CssBaseline />
        <CardPresentacion />
        <QuantityUsers />
        <Grids />
        <CardRedirec />
      </Box>
    );
  } else {
    return (
      <Box>
        <CssBaseline />
        {userRole.role >= 2 ? (
          <Ranking />
        ) : null}
        <Cards />
        <PosteosAlumnos />
      </Box>
    );
  };
};