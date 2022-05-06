import * as React from 'react';
import { Container, Box, Typography, CssBaseline, Grid } from "@mui/material";
import Footer from "../Components/Home/Footer/Footer";
// import Carousel from "../Components/Home/Carousel/Carousel";
import Grids from '../Components/Home/Grids/Grids';


export default function Home(){
    return(
        <Box sx={{width: '100%', padding: '0'}}>
            {/* <Carousel /> */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}>
                <CssBaseline />
                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                    <Typography variant="h2" component="h1" gutterBottom display='flex' justifyContent='center'>
                        Home
                    </Typography>
                </Container>

                <Grids />
            </Box>
            <Footer />
        </Box>
    )
};