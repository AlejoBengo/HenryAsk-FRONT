// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { Container, Grid, Box, Link } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="yellow">
      {'Copyright © '}
      <Link color="inherit" underline="none">
        HenryAsk.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
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
                        <Link href="/" color='inherit' underline="none">Acerca de</Link>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Link href="/" color='inherit' underline="none">Carreras</Link>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Link href="/" color='inherit' underline="none">Sobre nosotros</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box borderBottom={1} display='flex' justifyContent='center'>Ayuda</Box>
                    <Box display='flex' justifyContent='center'>
                        <Link href="/" color='inherit' underline="none">Contacto</Link>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Link href="/" color='inherit' underline="none">Soporte</Link>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Link href="/" color='inherit' underline="none">Política de privacidad</Link>
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