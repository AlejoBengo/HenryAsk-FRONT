import { Container, Box, Typography } from "@mui/material";
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
                            Contactos.
                        </Typography>

                        <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h4" component="h3" gutterBottom display='flex' justifyContent='center'>
                            Comunicate con nosotros.
                        </Typography>
                    </Container>

            </Box>
        </Box>
    )}