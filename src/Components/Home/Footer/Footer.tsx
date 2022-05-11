import Typography from '@mui/material/Typography';
import { Grid, Box } from "@mui/material";
import { LinkDom } from '../../Style/StyledComponents';

function Copyright() {
  return (
    <Grid padding='2rem'>
      <Typography variant="body2" color="yellow" display='flex' justifyContent='center'>
        Hecho con 💛 por alumnos de Henry.
      </Typography>
      <Typography variant="body2" color="yellow" display='flex' justifyContent='center'>
        {`Henry Ask © ${new Date().getFullYear()} | Todos los derechos reservados.`}
      </Typography>
    </Grid>
  );
}

export default function StickyFooter() {
  return (
    <Box>
        <Typography variant="body2">
        <Box 
            px={{ xs: 3, sm: 10 }}
            py={{ xs:5, sm: 10 }} 
            bgcolor="#000" 
            color='yellow'
            display='flex'
            justifyContent='space-around'>
        
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                    <Box borderBottom={1} display='flex' justifyContent='center'>Sobre</Box>
                    <Box display='flex' justifyContent='center'>
                        <LinkDom to="/about" >Acerca de</LinkDom>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <LinkDom to="/careeers" >Carreras</LinkDom>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <LinkDom to="/aboutus" >Sobre nosotros</LinkDom>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box borderBottom={1} display='flex' justifyContent='center'>Ayuda</Box>
                    <Box display='flex' justifyContent='center'>
                      <LinkDom to="/careeers" >Contacto</LinkDom>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                      <LinkDom to="/careeers" >Preguntas frecuentes</LinkDom>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <LinkDom to="/careeers" >Política de privacidad</LinkDom>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Grid 
          item xs={12} sm={4} 
          bgcolor="#000" 
          color='yellow' 
          display='flex' 
          justifyContent='center'>
          <Box>
            <Copyright />
          </Box>
        </Grid>
        </Typography>
    </Box>
  );
}