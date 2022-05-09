import * as React from 'react';
import { Container, Box, Typography, Link, CardActionArea, Grid } from "@mui/material";
import Button from "@mui/material/Button"
import Footer from "../Components/Home/Footer/Footer";


export default function Careers(){
    return(
        <Box sx={{width: '100%', padding: '0'}}>            
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",               
                    backgroundColor: "rgb(255, 255, 1)"
                }}>
                    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                        <Typography variant="h2" component="h1" gutterBottom display='flex' justifyContent='center'>
                            Contactos.
                        </Typography>

                        <Typography variant="h4" component="h3" gutterBottom display='flex' justifyContent='center'>
                            Comunicate con nosotros.
                        </Typography>
                    </Container>

            </Box>
            <Footer />
        </Box>
    )}