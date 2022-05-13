import { 
  Container, 
  Box, 
  Typography, 
  CssBaseline } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { fetchAllUsers } from "../app/Utils/allUsers";
// import FooterSenior from "../Components/Home/Footer/FooterSenior";
import Carousel from "../Components/Home/Carousel/Carousel";
import Grids from "../Components/Home/Grids/Grids";
import Quantity from "../Components/Home/Grids/Quantity";
import CardRedirec from "../Components/Home/Grids/CardRedirec";
import Cards from "../Components/HomeSenior/Cards/Cards";
import Ranking from "../Components/HomeSenior/Ranking";
import PosteosAlumnos from "../Components/HomeSenior/PosteosAlumnos";

export default function Home() {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state: any) => state.allUser);
  const userRole = useAppSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(fetchAllUsers);
  }, [userRole]);

  if(userRole.role <= 0 ){
    return (
      <Box sx={{ width: "100%", padding: "0px", margin: "0px" }}>
        <Carousel />
        <Box sx={{width: '100%', padding: '1rem'}}>
          <CssBaseline />
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="xl">
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              display="flex"
              justifyContent="center"
            >
              {`+${users ? users.allUsers.length : null} usuarios se han sumado`}
            </Typography>
          </Container>
          <Quantity />
          <Grids />
        </Box>
        <CardRedirec />
      </Box>
    );
  } else {
    return (
      <Box>
        <CssBaseline />
        <Box>
          <Ranking />
        </Box>
        <Cards />
        <PosteosAlumnos />
      </Box>
    );
  };
};