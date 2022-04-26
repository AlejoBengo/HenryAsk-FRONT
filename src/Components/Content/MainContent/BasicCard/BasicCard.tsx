import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {estilosCard} from "../../ContentStyled";


export default function BasicCard() {
  return (
    <Card sx={estilosCard}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{textAlign:"center", marginTop:"2rem", marginBottom:"0.5rem"}}>
          Rinde el henry challengue y se parte de Henry!
        </Typography>
      </CardContent>
      <CardActions sx={{ height:"40%", justifyContent:"center"}}>
        <Button sx={{backgroundColor:"rgb(255, 255, 1)", color:"black" , fontWeight:"bold"}} variant="contained">Inscribirse Ahora</Button>
      </CardActions>
    </Card>
  );
}