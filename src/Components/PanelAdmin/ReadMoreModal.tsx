import * as React from 'react';
/*-----------IMPORT MUI & CSS-----------*/
import { TituloForo } from '../Style/StyledComponents';
import { Link } from 'react-router-dom';
/*-----------IMPORT Components-----------*/
import {Button , Dialog , DialogTitle , DialogContent , DialogActions , IconButton , Typography , DialogContentText, Divider} from '@mui/material';
import { Box } from '@mui/system';

export default function ReadMoreModal(props:any) {
const {open, setOpen, infoModal, handlePostComment} = props;
  const handleClose = () => {
    setOpen(false);
  };
  setTimeout(()=>console.log(infoModal), 4000)

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title" textAlign="center" sx={{display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
            <div style={{width:"2.5vw"}}><img style={{width:"100%" , height:"auto"}} src='https://startupeable.com/directorio/wp-content/uploads/2021/03/d4face92a7abc37a414e0bc3acf4ff23ec588438.png'/></div>
          <Box><TituloForo sx={{borderBottom:"6px solid yellow"}}>Razon:</TituloForo> {infoModal.val?.reason}</Box>
          <Button onClick={handleClose} sx={{color:"error.main", fontSize:"17px" ,}} color="error" variant="outlined">X</Button>
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{minHeight:"20vh"}}>
            <TituloForo sx={{borderBottom:"6px solid yellow" , fontWeight:"bold"}}>Descripcion del reporte: </TituloForo><br/><br/>{infoModal.val?.description}<br/><br/>
            {
              infoModal.val?.answer?._id && (<><TituloForo sx={{borderBottom:"6px solid yellow" , fontWeight:"bold"}}>Respuesta reportada:</TituloForo><br/><br/>{infoModal.val?.answer.content}</>)
            }
            {
              infoModal.val?.comment?._id && (<><TituloForo sx={{borderBottom:"6px solid yellow" , fontWeight:"bold"}}>Comentario reportado:</TituloForo><br/><br/>{infoModal.val?.comment.content}</>)
            }
          </DialogContentText>
        </DialogContent>
        <Divider/>
        <DialogActions sx={{display:"flex", justifyContent:"space-between" , margin:"1rem 1rem 1rem 1rem", minWidth:"40vw"}}>
      
          {
            infoModal.val?.post?._id && (<Button onClick={handleClose} sx={{color:"info.main"}} color="info" variant="outlined"><Link to={`/post/${infoModal.val?.post._id}`}>Ir al Post</Link></Button>)
          }
          {
          infoModal.val?.answer?._id && (<Button onClick={handleClose} sx={{color:"info.main"}} color="info" variant="outlined"><Link to={`/post/${infoModal.val?.answer.post}`}>Ir al Post</Link></Button>)
          }
          {
            infoModal.val?.comment?._id && (<Button onClick={()=>handlePostComment(infoModal.val.comment.answer)} sx={{color:"info.main"}} color="info" variant="outlined">Ir al Post</Button>)
          }
            <Box>
                <Button onClick={handleClose} sx={{color:"error.main", marginRight:"2vw"}} color="error" variant="outlined">Banear</Button>
                <Button onClick={handleClose} autoFocus sx={{color:"success.main"}} color="success" variant="outlined" >Rechazar peticion</Button>
            </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}