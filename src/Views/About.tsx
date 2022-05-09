import * as React from 'react';
import { Container, Box, Typography, Link, CardActionArea, Grid } from "@mui/material";
import Footer from "../Components/Home/Footer/Footer";

export default function About(){
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
                        HENRY ASK
                    </Typography>

                    <Box sx={{ boxShadow: "15px", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                    <Typography variant="body2" color="rgb(255, 255, 1)">
                    Nuestra propuesta es una aplicación web diseñada para que la comunidad pueda solventar sus dudas, practicar y ayudar a sus compañeros con el fin de fortalecer la solidaridad y participación de los alumnos.
                    </Typography>
                    </Box>

                    <Typography variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                    El contenido de la página se dividirá de la siguiente forma:
                    </Typography>

                    <Box sx={{ marginBottom: "1rem" ,height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                    <Typography variant="body2" color="rgb(255, 255, 1)">
                    • Sección con material teórico y práctico organizado según el módulo al que se pertenezca. En cuanto a lo primero, se presentará todo el material brindado en Henry, y para lo segundo, los ejercicios se calificarán según la temática.                   
                    </Typography>
                    </Box>

                    <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                    <Typography variant="body2" color="rgb(255, 255, 1)">
                    • Sección de foro donde cada estudiante podrá publicar sus inquietudes e interrogantes y, a su vez, el resto de la comunidad será capaz de aportar respuestas y debatir sobre las soluciones ya proporcionadas, pudiendo comentar y puntuar cada una de las mismas.
                    </Typography>
                    </Box>

                    <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                    <Typography variant="body2" color="rgb(255, 255, 1)">
                    • Sección de ranking de reconocimientos. Los estudiantes con una participación activa y certera serán reconocidos por sus compañeros, otorgándoles HenryCoins (un sistema que podría ser tomado en cuenta a la hora de seleccionar TA’s).
                    </Typography>
                    </Box>

                    <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                    <Typography variant="body2" color="rgb(255, 255, 1)">
                    • Sección con enlaces a páginas brindadas tanto por alumnos como por instructores, que sirvan como soporte para acrecentar el conocimiento (videos, contenido teórico, material práctico, etc.).
                    </Typography>
                    </Box>

                    <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                    <Typography variant="body2" color="rgb(255, 255, 1)">
                    • Sección de perfiles. Cada usuario podrá acceder a su propio perfil y al de sus compañeros, donde podrá ver su información personal pública, los HenryCoins que tiene y su registro de Actividad.
                    </Typography>
                    </Box>

                    <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                    <Typography variant="body2" color="rgb(255, 255, 1)">
                    Si bien Slack es un espacio donde la comunidad puede intercambiar información, preguntar y responder, organizar reuniones, entre otras cosas, el problema es que no existe ningún tipo de filtro del contenido. Esto puede llegar a complicar el entendimiento para quienes están iniciando en Henry.
                    </Typography>
                    </Box>

                    <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                    <Typography variant="body2" color="rgb(255, 255, 1)">
                    Nuestra propuesta sirve como una solución a este dilema, aportando un espacio para modularizar la información disponible y que se le ofrece a la comunidad de Henry como una herramienta auxiliar para hacer preguntas, proponer soluciones, practicar y encontrar referencias útiles sobre código.
                    </Typography>
                    </Box>

                    
                </Container>
            </Box>
            <Footer />
        </Box>
    )
};