import * as React from 'react';
import { Container, Box, Typography, Link, CardActionArea, Grid } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button"
import CardActions from "@mui/material/CardActions";
import Footer from "../Components/Home/Footer/FooterSenior";
import Rocket from "../Components/AboutUs/Img/rocket.gif";
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
                    <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h2" component="h1" gutterBottom display='flex' justifyContent='center'>
                        Carreras
                    </Typography>

                    <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h4" component="h3" gutterBottom display='flex' justifyContent='center'>
                        Invertimos en tu educación
                    </Typography>
                </Container>
                <Box sx={{ marginBottom: "1rem", height: "100%", width: "50%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                <CardActionArea>
                        
                        <Grid 
                            container
                            spacing={2}
                            columns={10}
                            direction="row"
                            alignItems="center"
                        > 
                         <Grid item xs={4}>
                            <CardMedia
                                component="img"
                                image={Rocket}
                                alt=""
                                sx={{
                                    width: "160px",
                                    height: "20vh",
                                    alignItems: "center",
                                  }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h4" gutterBottom display='flex' justifyContent='center' >
                            Full Stack Developer Full Time.
                            </Typography> 
                            <Typography variant="body2" color="text.secondary" component="div"
                            sx={{ textAlign: "center", marginTop: "1rem", marginBottom: "1rem", color: "rgb(255, 255, 1)" }}
                            >
                            Un programa intensivo en línea que simula un entorno de trabajo real y te prepara para una carrera exitosa como desarrollador Full Stack.
                            </Typography>                                               
                        </Grid>
                        </Grid>
                        
                        <CardActions sx={{ height: "40%", justifyContent: "center" }}>
                        <Link href="https://www.soyhenry.com/webfullstack" color='inherit' underline="none" target="_blank">
                            <Button
                            sx={{
                                backgroundColor: "rgb(255, 255, 1)",
                                color: "black",
                                fontWeight: "bold",
                            }}
                            variant="contained"
                            >
                            Inscribirse Ahora!!
                            </Button>
                            </Link>
                        </CardActions>
                        </CardActionArea>
                    </Box>
                    {/* ------------------------------- */}

                    <Box sx={{marginBottom: "1rem",  height: "100%", width: "50%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                <CardActionArea>
                        
                        <Grid 
                            container
                            spacing={2}
                            columns={10}
                            direction="row"
                            alignItems="center"
                        > 
                         
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h4" gutterBottom display='flex' justifyContent='center' >
                            Full Stack Part-Time.
                            </Typography> 
                            <Typography variant="body2" color="text.secondary" component="div"
                            sx={{ textAlign: "center", marginTop: "1rem", marginBottom: "1rem", color: "rgb(255, 255, 1)" }}
                            >
                            En Henry invertimos en tu educación. Ahora puedes convertirte en Full Stack Web Developer mientras trabajas. Diseñamos una carrera part-time de 7 meses para que ingreses al mercado tech.
                            </Typography>                                               
                        </Grid>
                        <Grid item xs={4}>
                            <CardMedia
                                component="img"
                                image={Rocket}
                                alt=""
                                sx={{
                                    width: "160px",
                                    height: "20vh",
                                  }}
                            />
                        </Grid>
                        </Grid>
                        
                        <CardActions sx={{ height: "40%", justifyContent: "center" }}>
                        <Link href="https://www.soyhenry.com/carrera-part-time-desarrollo-full-stack" color='inherit' underline="none" target="_blank">
                            <Button
                            sx={{
                                backgroundColor: "rgb(255, 255, 1)",
                                color: "black",
                                fontWeight: "bold",
                            }}
                            variant="contained"
                            >
                            Inscribirse Ahora!!
                            </Button>
                            </Link>
                        </CardActions>
                        </CardActionArea>
                    </Box>

                    {/* ---------------------------- */}

                    <Box sx={{marginBottom: "1rem",  height: "100%", width: "50%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                <CardActionArea>
                        
                        <Grid 
                            container
                            spacing={2}
                            columns={10}
                            direction="row"
                            alignItems="center"
                        > 
                         <Grid item xs={4}>
                            <CardMedia
                                component="img"
                                image={Rocket}
                                alt=""
                                sx={{
                                    width: "160px",
                                    height: "20vh",
                                  }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h4" gutterBottom display='flex' justifyContent='center' >
                            Estudia Data Science.
                            </Typography> 
                            <Typography variant="body2" color="text.secondary" component="div"
                            sx={{ textAlign: "center", marginTop: "1rem", marginBottom: "1rem", color: "rgb(255, 255, 1)" }}
                            >
                            Aprende todo lo que necesitas para trabajar en el mundo de los datos. En solo 5 meses y sin costo inicial.
                            </Typography>                                               
                        </Grid>
                        </Grid>
                        
                        <CardActions sx={{ height: "40%", justifyContent: "center" }}>
                        <Link href="https://www.soyhenry.com/carrera-data-science" color='inherit' underline="none" target="_blank">
                            <Button
                            sx={{
                                backgroundColor: "rgb(255, 255, 1)",
                                color: "black",
                                fontWeight: "bold",
                            }}
                            variant="contained"
                            >
                            Inscribirse Ahora!!
                            </Button>
                            </Link>
                        </CardActions>
                        </CardActionArea>
                    </Box>
            </Box>
            <Footer />            
        </Box>
    )
};