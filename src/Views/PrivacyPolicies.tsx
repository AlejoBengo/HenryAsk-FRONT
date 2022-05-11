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
                        <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h3" component="h2" gutterBottom display='flex' justifyContent='center'>
                            Políticas de privacidad.
                        </Typography>

                        <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                            <Typography variant="body2" color="rgb(255, 255, 1)">
                            La privacidad y resguardo de la información personal de los usuarios del Sitio Web -según este término se define abajo- y alumnos de Henry Tecnología S.A.S. y Henry Technologies Inc. (en adelante, conjunta e indistintamente, “HENRY”) son una prioridad de HENRY.

                            El presente documento contiene la Política de Privacidad (la “Política de Privacidad”) de HENRY que se aplicará para el tratamiento de datos personales de que quienes accedan al sitio web www.soyhenry.com (en adelante el "Sitio Web") y/o que califiquen como alumnos de HENRY -según ese término se define en el Reglamento de Estudios de HENRY- (los “Usuarios”, y junto con “HENRY”, las “Partes”).

                            Es muy importante que conozcas y comprendas esta Política de Privacidad porque la misma será aplicable sobre el uso del Sitio Web y sobre todos los servicios que puedas contratar y programas de estudio a los que puedas acceder por esos medios con HENRY (los “Servicios”). Esta Política de Privacidad es un documento anexo y complementario a los Términos y Condiciones de www.soyhenry.com, y mediante su aceptación, se constituye un contrato válido y vinculante entre las Partes.

                            Como Usuario tomás conocimiento y aceptás irrevocablemente que al acceder a los Servicios previamente leíste y aceptaste esta Política de Privacidad -como así también los Términos y Condiciones- en su totalidad. Es decir, que al contratar los Servicios quedás obligado al estricto cumplimiento de los mismos.

                            Si no estás de acuerdo con parte o toda esta Política de Privacidad y los Términos y Condiciones debés abstenerse de ingresar al Sitio Web y/o contratar cualquiera de los Servicios que ofrece HENRY.

                            Por cualquier duda o asunto vinculado a esta Política de Privacidad, podés contactarnos en la siguiente dirección: contacto@soyhenry.com

                            Asimismo, te informamos que la “Agencia de Acceso a la Información Pública” (AAIP) tiene la atribución de atender las denuncias y reclamos de los Usuarios con relación al incumplimiento de las normas sobre protección de datos personales.
                            </Typography>
                        </Box>
                    </Container>
                    
            </Box>
        </Box>
    )}