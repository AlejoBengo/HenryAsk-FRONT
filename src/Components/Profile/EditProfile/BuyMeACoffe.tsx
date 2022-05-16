import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};

export default function BuyMeACoffe(props:any) {
    const {handleCloseInfo , openInfo} = props
  return (
    <div>
      <Modal
        open={openInfo}
        onClose={handleCloseInfo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
          Buy Me A Coffee es una plataforma que permite que todas aquellas personas que tengan ganas de agradecer a un compañero por su compañerismo o premiar algun tipo de accion u hecho, lo hagan regalandole un Cafecito😋. Create una cuenta en <a target="_blank" href='https://www.buymeacoffee.com/'>Aqui</a> y guarda el link de tu perfil en nuestra seccion 'Buy me a coffe' para que tus compañeros puedan regalarte uno
          </Typography>
          <Box sx={{display:"flex" , width:"100%" , justifyContent:"center" , marginTop:"20px"}}>
          <Button  onClick={handleCloseInfo} variant="outlined" color="info">Genial!</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}