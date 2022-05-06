// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import { CssBaseline } from '@mui/material';

// export default function Grids(){
//     return(
//         <Container sx={{ paddingBottom: "16px", paddingTop: "20px"}}>
//             <Grid container sx={{ mt: 8, mb: 2 }}>
//                 <Grid item xs={4} sm={4} sx={{ paddingRight: "1em", display:"flex", margin:"0rem 0rem 2em 0em", justifyContent:"space-around" }}>
//                     {/* <CssBaseline /> */}
//                     <Box component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
//                         <Typography variant="h3" component="h2" gutterBottom>
//                             Teoría
//                         </Typography>
//                     </Box>
//                 </Grid>
//                 <Grid item xs={4} sm={4}>
//                     <Box component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
//                         <Typography variant="h3" component="h2" gutterBottom>
//                             Ejercicios
//                         </Typography>
//                     </Box>
//                 </Grid>
//                 <Grid item xs={4} sm={4}>
//                     <Box component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
//                         <Typography variant="h3" component="h2" gutterBottom>
//                             Posteos
//                         </Typography>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Container>
//     )
// };

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import posteos from './posteos.jpeg';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Grids() {
  return (
      <Container>
          <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <Typography 
                                gutterBottom 
                                variant="h4" 
                                component="div" 
                                display='flex'
                                justifyContent='center'
                                bgcolor="#000" 
                                color='yellow'>
                                Teoría
                            </Typography>
                            <CardMedia
                            component="img"
                            height="140"
                            image={posteos}
                            alt="Teoría"/>
                            <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Encontrarás contenido brindado por los y las instructores e instructoras de Henry para que puedas complementar tu cursada tanto del Prep Course como así también, del Bootcamp. Acrecentamos tus conocimientos 💛
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <Typography 
                                gutterBottom 
                                variant="h4" 
                                component="div" 
                                display='flex'
                                justifyContent='center'
                                bgcolor="#000" 
                                color='yellow'>
                                Ejercicios
                            </Typography>
                            <CardMedia
                            component="img"
                            height="140"
                            image={posteos}
                            alt="Ejercicios"
                            />
                            <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Sección dedicada a incrementar la práctica de lo que vayas aprendiendo en Henry. Los y las instructores e instructoras estarán compartiendo ejercicios para que puedas solucionarlos dentro de la plataforma😉
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <Typography 
                                gutterBottom 
                                variant="h4" 
                                component="div"
                                display='flex'
                                justifyContent='center'
                                bgcolor="#000" 
                                color='yellow'>
                                Posteos
                            </Typography>
                            <CardMedia
                            component="img"
                            height="140"
                            image={posteos}
                            alt="Posteos"
                            />
                            <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Foro de discusión donde podrás despejar dudas y ayudar a la comunidad. Si tu respuesta al ayudar a un miembro de la comunidad es la más votada, recibirás una HenryCoin. Acumula y regala HenryCoin's para obtener beneficios🎉
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
          </Grid>
      </Container>
  );
}