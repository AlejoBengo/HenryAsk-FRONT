import * as React from 'react';
import emailjs from "emailjs-com";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Container, Box, Typography, Input } from "@mui/material";
import Button from "@mui/material/Button"
import Footer from "../Components/Home/Footer/Footer";
import { useTheme } from '@mui/material';
import Rocket from '../Components/AboutUs/Img/rocket.png';




export default function Careers(){

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
                    CONTACTO
                    </Typography>
                    <img src={Rocket} alt="" height= "60em" width= "60em" />
                    </Box>
                    <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h4" component="h3" gutterBottom display='flex' justifyContent='center'>
                        Comunicate con nosotros.
                    </Typography>
                    
                    <Box component="form" noValidate onSubmit={sendEmail} 
                        sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center",
                        alignItems: "center", border: "2px solid", borderColor:"primary.mein",
                        borderRadius: "20px", padding: "10px"  }}>
                        <Input type="text" placeholder="Nombre" name='user_name'/>

                        <Input type="email" placeholder="Email" name='user_email'/>

                        <Input type="text" placeholder="Asunto" name="user_subject"/>
                        
                        <TextareaAutosize style={{ marginTop: "20px" ,width: 400, height: 300 }} id="" placeholder="Tu mensaje" name="user_message"></TextareaAutosize>

                        <Button sx={{
                                backgroundColor: "rgb(255, 255, 1)",
                                color: "black",
                                fontWeight: "bold",
                            }} type="submit" value="Send Message"
                            >Enviar</Button>
                    </Box>
                    </Container>

            </Box>
            <Footer />
        </Box>
    )}