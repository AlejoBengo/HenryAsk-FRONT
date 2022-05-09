import * as React from 'react';
import { Container, Box, Typography, Link, CardActionArea, Grid } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Footer from "../Components/Home/Footer/Footer";
import Q4Tr0 from "../Components/AboutUs/Img/Q4Tr0.jpg";
import elKefa from "../Components/AboutUs/Img/Agus.jpg";
import Alejo from "../Components/AboutUs/Img/alejo.jpg";
import Dai from "../Components/AboutUs/Img/Dai.jpg";
import Marko from "../Components/AboutUs/Img/Marko.jpg";
import Saul from "../Components/AboutUs/Img/Saul.jpg";



export default function AboutUs(){
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
                <Container sx={{ mt: 8, mb: 2, fontWeight: "bold", justifyContent: "center", alignItems: "center" }} maxWidth="sm">
                    <Typography variant="h2" component="h1" gutterBottom display='flex' justifyContent='center'>
                        Sobre Nosotros
                    </Typography>
                    <Box sx={{ height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                    <Typography variant="body2" color="rgb(255, 255, 1)">
                    Nuestra propuesta es una aplicación web diseñada para que la comunidad pueda solventar sus dudas, practicar y ayudar a sus compañeros con el fin de fortalecer la solidaridad y participación de los alumnos.
                    </Typography>
                    </Box>
                    <Typography variant="h3" component="h2" gutterBottom display='flex' justifyContent='center'>
                        Integrantes
                    </Typography>

                    {/* --------------------------------------- */}
                    <Box sx={{ height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                    <Typography variant="h4" component="h3" gutterBottom display='flex' justifyContent='center'>
                        Back End
                    </Typography>
                        {/* --------------------------------------- */}
                        <CardActionArea>
                        <Link href="https://www.linkedin.com/in/nicolas-aguilar-647340222/" color='inherit' underline="none" target="_blank">
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
                                image={Q4Tr0}
                                alt=""
                                sx={{
                                    width: "200px",
                                    height: "20vh",
                                  }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h4" gutterBottom display='flex' justifyContent='center' >
                            Nicolas Horacio Aguilar
                            </Typography> 
                            <Typography variant="body2" color="text.secondary" component="div"
                            sx={{ textAlign: "center", marginTop: "1rem", marginBottom: "1rem", color: "rgb(255, 255, 1)" }}
                            >
                            Full-Stack Developer, en un proceso de constante aprendizaje autodidacta. En busca de desarrollarme en el campo del hacking ético, con un interés enfocado hacia el desarrollo de Back-end . Poseo una gran capacidad en el ámbito social, con predisposición al trabajo en grupo, proactivo y de fácil adaptabilidad.
                            </Typography>                                               
                        </Grid>
                        </Grid>
                        </Link>
                        </CardActionArea>
                        {/* ------------------------------------------- */}
                        
                        <CardActionArea>
                        <Link href="https://www.linkedin.com/in/daiana-grillia" color='inherit' underline="none" target="_blank">
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
                                image={Dai}
                                alt=""
                                sx={{
                                    width: "200px",
                                    height: "20vh",
                                  }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                            Daiana Agustina Grillia
                            </Typography> 
                            <Typography variant="body2" color="text.secondary" component="div"
                            sx={{ textAlign: "center", marginTop: "1rem", marginBottom: "0.5rem", color: "rgb(255, 255, 1)"}}
                            >
                            Como Full-Stack sé desenvolverme tanto en Front-end como en Back-end, teniendo una preferencia hacia el Back a la hora de trabajar😄 Me encuentro en la búsqueda de una oportunidad para poner a prueba mis habilidades en un entorno laboral real y lograr una progresiva mejora de mis habilidades, tanto con las tecnologías que ya conozco como las nuevas🙌
                            </Typography>                                               
                        </Grid>
                        </Grid>
                        </Link>
                        </CardActionArea>
                        {/* ----------------------------------------------------- */}
                        <Typography variant="h4" component="h3" gutterBottom display='flex' justifyContent='center'>
                        Front End
                        </Typography>
                        {/* ----------------------------------------------------- */}

                        <CardActionArea>
                        <Link href="https://www.linkedin.com/in/saul-paez1004" color='inherit' underline="none" target="_blank">
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
                                image={Saul}
                                alt=""
                                sx={{
                                    width: "200px",
                                    height: "20vh",
                                  }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                            Saúl Páez
                            </Typography> 
                            <Typography variant="body2" color="text.secondary" component="div"
                            sx={{ textAlign: "center", marginTop: "1rem", marginBottom: "0.5rem", color: "rgb(255, 255, 1)"}}
                            >
                            Actualmente estudio el segundo semestre de la carrera de Computación en la Universidad Central de Venezuela. Soy capaz de hablar inglés, a un nivel medio, de forma autodidacta. También manejo los lenguajes de programación C++, Javascript, Python y PHP.
                            </Typography>                                               
                        </Grid>
                        </Grid>
                        </Link>
                        </CardActionArea>
                        {/* ------------------------------------- */}

                        <CardActionArea>
                        <Link href="https://www.linkedin.com/in/marko-ayala-65760b218" color='inherit' underline="none" target="_blank">
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
                                image={Marko}
                                alt=""
                                sx={{
                                    width: "200px",
                                    height: "20vh",
                                  }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                            Marko Ayala
                            </Typography> 
                            <Typography variant="body2" color="text.secondary" component="div"
                            sx={{ textAlign: "center", marginTop: "1rem", marginBottom: "0.5rem", color: "rgb(255, 255, 1)"}}
                            >
                            Mi actual meta es graduarme como Desarrollador web Full Stack en SoyHenry y conseguir empleo en el mundoIT. Me encuentro realizando proyectos propios a modo de práctica con el fin de aplicar lo que voy aprendiendo en el camino y pulir los conocimientos adquiridos
                            </Typography>                                               
                        </Grid>
                        </Grid>
                        </Link>
                        </CardActionArea>

                        {/* -------------------------------------- */}
                        <Typography variant="h4" component="h3" gutterBottom display='flex' justifyContent='center'>
                        Pivot Developer
                        </Typography>
                        {/* -------------------------------------- */}
                        
                        <CardActionArea>
                        <Link href="https://www.linkedin.com/in/agustín-villagrán" color='inherit' underline="none" target="_blank">
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
                                image={elKefa}
                                alt=""
                                sx={{
                                    width: "200px",
                                    height: "30vh",
                                  }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                            Marcelo Agustín Villagrán
                            </Typography> 
                            <Typography variant="body2" color="text.secondary" component="div"
                            sx={{ textAlign: "center", marginTop: "1rem", marginBottom: "0.5rem", color: "rgb(255, 255, 1)"}}
                            >
                            El liderazgo es una característica esencial en mí, ocupar roles de acción, guía y acompañamiento, con un estilo consciente, ético, cálido y personalizado. Además de esto, desarrolle mucho mis habilidades de gestión emocional, lo que me permite superar situaciones y ritmos desafiantes en lo laboral.
                            </Typography>                                               
                        </Grid>
                        </Grid>
                        </Link>
                        </CardActionArea>
                        {/* -------------------------------------- */}

                        <CardActionArea>
                        <Link href="https://www.linkedin.com/in/alejobengo" color='inherit' underline="none" target="_blank">
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
                                image={Alejo}
                                alt=""
                                sx={{
                                    width: "200px",
                                    height: "30vh",
                                  }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                            Alejo Bengoechea
                            </Typography> 
                            <Typography variant="body2" color="text.secondary" component="div"
                            sx={{ textAlign: "center", marginTop: "1rem", marginBottom: "0.5rem", color: "rgb(255, 255, 1)"}}
                            >
                            UN TIPO MUY CHEVERE!
                            </Typography>                                               
                        </Grid>
                        </Grid>
                        </Link>
                        </CardActionArea>
                        
                    </Box>
                </Container>
            </Box>
            <Footer />
        </Box>
    )
};