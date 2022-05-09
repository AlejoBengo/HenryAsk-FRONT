import * as React from "react";
import { Container, Box, Typography, CssBaseline, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useState, useEffect } from "react";
import { fetchAllUsers } from "../app/Utils/allUsers";
import Footer from "../Components/Home/Footer/Footer";
import Carousel from "../Components/Home/Carousel/Carousel";
import Grids from "../Components/Home/Grids/Grids";
import Quantity from "../Components/Home/Grids/Quantity";
import CardRedirec from "../Components/Home/Grids/CardRedirec";

export default function Home() {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state: any) => state.allUser);

  useEffect(() => {
    dispatch(fetchAllUsers);
  }, []);

  return (
    <Box sx={{ width: "100%", padding: "0px", margin: "0px" }}>
      <Carousel />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
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
        {/* <Quantity /> */}
        <Grids />
      </Box>
      <CardRedirec />
      <Footer />
    </Box>
  );
}
