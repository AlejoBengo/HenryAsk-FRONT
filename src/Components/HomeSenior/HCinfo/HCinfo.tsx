import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTheme } from "@mui/material/styles";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'black',
  color:'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};

export default function HCinfo(props:any) {
    const {handleCloseInfo , openInfo} = props;

    return (
        <Grid>
            <Modal
            open={openInfo}
            onClose={handleCloseInfo}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            
            <Grid sx={style}>
                <Typography id="modal-modal-title" variant="body1" component="h2" textAlign="center">
                    <Typography color='yellow'>¡Hola! Bienvenidx al Ranking de Henry Coins 🏆</Typography>
                    {<br />}
                    {<br />}
                    <Typography color='yellow'>¿Qué son las Henry Coins?</Typography>
                    {<br />}
                    Las Henry Coins son reconocimientos que recibirás de otros alumnos tras haberlos ayudado a solucionar dudas o consultas en el foro.
                    {<br />}
                    También podés otorgar Henry Coins a quienes te ayuden 💛
                    {<br />}
                    {<br />}
                    <Typography color='yellow'>¿Cómo funcionan?</Typography>
                    {<br />}
                    🚀 Tendrás 5 Henry Coins para otorgar por semana.
                    {<br />}
                    🚀 Todos los lunes se reinician: las HC que tengas disponibles no son acumulables semana a semana. Si no las utilizas, el lunes próximo seguirás teniendo 5 HC disponibles.
                    {<br />}
                    🚀 Puedes otorgar 1 HC por usuario: de lunes a lunes, las 5 HC que tengas disponibles las puedes otorgar a 5 alumnos diferentes. El lunes cuando se reinician las HC, puedes volver a otorgarle 1 HC a alguien que ya hayas reconocido anteriormente.
                    {<br />}
                    {<br />}
                    ¡Comienza a postear tus dudas/consultas en el foro y a brindar ayuda a la comunidad para que todos aparezcan en el ranking! 
                </Typography>
                <Grid sx={{display:"flex" , width:"100%" , justifyContent:"center" , marginTop:"20px"}}>
                    <Button  onClick={handleCloseInfo} variant="outlined" color="primary">Genial!</Button>
                </Grid>
            </Grid>
        </Modal>
    </Grid>
  );
};