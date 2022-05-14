import * as React from 'react';
import emailjs from "emailjs-com";
import { Container, Box, Typography, Input } from "@mui/material";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from "@mui/material/Button"
import { useTheme } from '@mui/material';
import Rocket from '../Components/AboutUs/Img/rocket.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Qa(){

    const theme = useTheme();

    function sendEmail(e: any) {
        e.preventDefault();

    emailjs.sendForm('service_uzz0cwc', 'template_tzptjbn', e.target, 'QMfhtlbO6dkMjqvoY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <Box sx={{width: '100%', padding: '0'}}>            
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",               
                    
                }}>
                    <Container component="main" sx={{ mt: 8, mb: 2 , display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center",}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: "center",}}>
                    <img src={Rocket} alt="" height= "60em" width= "60em" />
                    <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h2" component="h1" gutterBottom display='flex' justifyContent='center'>
                    Preguntas Frecuentes.
                    </Typography>
                    <img src={Rocket} alt="" height= "60em" width= "60em" />
                    </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: "center", 
                            marginBottom: "50px",
                        }}>
                            <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h4" component="h3" gutterBottom display='flex' justifyContent='center'>
                                Esperamos resolver tus dudas.
                            </Typography>
                        </Box>

                        {/* ------------------------------------------------------ */}

                        <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                                ¿COMO USUARIO NO LOGUEADO QUE PUEDO HACER?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Box sx={{ marginBottom: "1rem", height: "100%", width: "50em", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                                        <Typography variant="body2" color="rgb(255, 255, 1)">
                                        1. Como usuario no logueado, puedo iniciar sesión, para poder mantener un registro de mi actividad.<br/>                                        
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        
                        {/* ------------------------------------------------------ */}
                        <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                                ¿COMO INSTRUCTOR QUE PUEDO HACER?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Box sx={{ marginBottom: "1rem", height: "100%", width: "50em", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                                        <Typography variant="body2" color="rgb(255, 255, 1)">
                                        1. Como instructor, puedo subir material que sea prioritario y distintivo para los alumnos con el fin de que sea lo primero que se muestre.<br/>
                                        2. Como instructor, puedo eliminar contenido de la app, por si ese contenido ya no es necesario.<br/>
                                        3. Como instructor, puedo tener ademas los mismo privilegios que como alumno.<br/>
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion> 

                            {/* ------------------------------------------------------ */}

                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                                ¿QUE PUEDO HACER COMO ALUMNO?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Box sx={{ marginBottom: "1rem", height: "100%", width: "50em", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                                        <Typography variant="body2" color="rgb(255, 255, 1)">
                                        1. Como alumno, puedo tener una sección donde solo pueda encontrar contenido teórico, incluso se divida en dos secciones, una contenido teórico subido por el profesor y otro contenido subido por alumnos.<br/> 
                                        2. Como alumno, puedo recibir notificaciones sobre cualquier comentario en una respuesta de mi propiedad, o sobre cualquier respuesta en una pregunta abierta por mi, para poder mantenerse actualizado acerca de cualquier interacción conmigo.<br/> 
                                        3. Como alumno, puedo abrir un foro acerca de un tema en general, para poder solucionar errores y aclarar cualquier duda que pueda tener.<br/> 
                                        4. Como alumno, puedo responder cualquier pregunta abierta, para aportar a la discusión. <br/> 
                                        5. Como alumno, puedo acceder a mi perfil para poder editar mi foto de perfil e información personal.<br/> 
                                        6. Como alumno, puedo acceder a mi perfil y el de otros usuarios, para observar la información personal y la cantidad de #HenryCoins que tengo. <br/> 
                                        7. Como alumno, puedo reportar publicaciones para que sean revisadas por un administrador.<br/> 
                                        8. Como alumno, puedo postear ejercicios o homeworks para que los demás usuarios puedan resolver/comentar.<br/> 
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>

                            {/* ------------------------------------------------------ */}

                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                                ¿QUE PUEDO HACER COMO ESTUDIANTE?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Box sx={{ marginBottom: "1rem", height: "100%", width: "50em", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                                        <Typography variant="body2" color="rgb(255, 255, 1)">
                                        1. Como estudiante, puedo acceder a ejercicios, para mejorar mediante la práctica. <br/>
                                        2. Como estudiante, puedo tener mi propia sección de favoritos para guardar ejercicios, y así retomarlos más tarde. <br/>
                                        3. Como estudiante, puedo premiar a un compañero por haberme ayudado ya sea tanto teóricamente como técnicamente, a través de un #HenryCoin. <br/>
                                        4. Como estudiante, puedo hacer que si mi respuesta es la más votada, recibir un #HenryCoin. <br/>
                                        5. Como estudiante, puedo visualizar los temas por módulos, para así poder llevar una mejor organización. <br/>
                                        6. Como estudiante, puedo tener un simulacro del Henry Challenge, para poder practicar y no estar tan nervioso. <br/>
                                        7. Como estudiante, puedo poder encontrar respuesta a las dudas que no pueda resolver por mi mismo viendo como otros compañeros pudieron resolverlas. <br/>
                                        8. Como estudiante, puedo compartir mis logros en esta plataforma, en otras redes como LinkedIn para hacer visible mi práctica y entusiasmo con programación. <br/>
                                        9. Como estudiante, puedo recibir 5 #HenryCoins para repartir al final de cada semana, para evitar que sean distribuidas arbitrariamente. <br/>
                                        10. Como estudiante, puedo cerrar las preguntas que considero que ya están solucionadas, para evitar seguir recibiendo respuestas innecesarias.<br/>
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: "center", 
                            marginBottom: "10px",
                            marginTop: "50px",
                        }}>
                            <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h4" component="h3" gutterBottom display='flex' justifyContent='center'>
                                Cualquier otra duda puedes consultarnos.
                            </Typography>
                        </Box>

                        <Box component="form" noValidate onSubmit={sendEmail} 
                        sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center",
                         alignItems: "center", border: "2px solid", borderColor:"primary.mein",
                         borderRadius: "20px", padding: "10px"  }}>
                            <Input type="text" placeholder="Nombre" name='user_name'/>

                            <Input type="email" placeholder="Email" name='user_email'/>

                            <Input type="text" placeholder="Asunto" name="user_subject"/>
                        
                            <TextareaAutosize style={{ marginTop: "20px" ,width: 400, height: 300 }} id="" placeholder="Tu consulta..." name="user_message"></TextareaAutosize>

                            <Button sx={{
                                    backgroundColor: "rgb(255, 255, 1)",
                                    color: "black",
                                    fontWeight: "bold",
                                }} type="submit" value="Send Message"
                                >Enviar</Button>
                        </Box>

                        
                    </Container>

            </Box>
        </Box>
    )}    