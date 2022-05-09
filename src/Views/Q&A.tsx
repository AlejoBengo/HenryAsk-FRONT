import * as React from 'react';
import { Container, Box, Typography, Link, CardActionArea, Grid } from "@mui/material";
import Button from "@mui/material/Button"
import Footer from "../Components/Home/Footer/Footer";
import { useTheme } from '@mui/material';


export default function Careers(){

    const theme = useTheme();

    return(
        <Box sx={{width: '100%', padding: '0'}}>            
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",               
                    
                }}>
                    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                        <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h3" component="h2" gutterBottom display='flex' justifyContent='center'>
                            Preguntas frecuentes.
                        </Typography>

                        <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h4" component="h3" gutterBottom display='flex' justifyContent='center'>
                            Comunicate con nosotros.
                        </Typography>
                    </Container>

            </Box>
            <Footer />
        </Box>
    )}