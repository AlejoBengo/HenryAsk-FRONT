import * as React from 'react';
/*-----------IMPORT MUI & CSS-----------*/
import { TituloForo } from '../Style/StyledComponents';
import { Link } from 'react-router-dom';
import { LinkDom } from '../Style/StyledComponents';
import { editIsBanned , fetchIdUserBan} from '../../app/Utils/editUser';
import { editReportStatus } from '../../app/Utils/editReportStatus';
/*-----------IMPORT Components-----------*/
import {Button , Dialog , DialogTitle , DialogContent , DialogActions , IconButton , Typography , DialogContentText, Divider} from '@mui/material';
import { Box } from '@mui/system';

export default function ReadMoreModal(props:any) {
const {open, setOpen, infoModal, handlePostComment} = props;
  setTimeout(()=> console.log(infoModal),4000)
  const handleClose = () =>{
    setOpen(false)
  }
  const handleCloseResuelto = (info:any) => {
    if(info.post){
      fetchIdUserBan(info.post.owner)
       .then(response=> {
        let aux = {...response , isBanned:true}
        alert(`${aux.user_name} ha sido baneado correctamente`)
        editIsBanned(aux)
        .then(respo => editReportStatus({status:"FULFILLED", id:info._id }))
        .then(()=> window.location.reload())
      })
    }
    if(info.answer){
      fetchIdUserBan(info.answer.owner)
       .then(response=>{
        let aux = {...response, isBanned:true}
        alert(`${aux.user_name} ha sido baneado correctamente`)
        editIsBanned(aux)
        .then(respo => editReportStatus({status:"FULFILLED", id:info._id }))
        .then(()=> window.location.reload())
      })
    }
    if(info.comment){
      fetchIdUserBan(info.comment.owner)
       .then(response =>{
        let aux = {...response, isBanned:true}
        alert(`${aux.user_name} ha sido baneado correctamente`)
        editIsBanned(aux)
        .then(respo => editReportStatus({status:"FULFILLED", id:info._id }))
        .then(()=> window.location.reload())
      })
    }
    setOpen(false);
  };

  const handleCloseRechazado = (info:any) => {
    editReportStatus({status:"REJECTED", id:info._id }).then(()=> window.location.reload())
    setOpen(false);
  }

 /*  setTimeout(()=>console.log(infoModal), 4000) */

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
            infoModal.val?.post?._id && (<Button onClick={handleClose} sx={{color:"info.main"}} color="info" variant="outlined"><LinkDom to={`/post/${infoModal.val?.post._id}`}>Ir al Post</LinkDom></Button>)
          }
          {
          infoModal.val?.answer?._id && (<Button onClick={handleClose} sx={{color:"info.main"}} color="info" variant="outlined"><LinkDom to={`/post/${infoModal.val?.answer.post}`}>Ir al Post</LinkDom></Button>)
          }
          {
            infoModal.val?.comment?._id && (<Button onClick={()=>handlePostComment(infoModal.val.comment.answer)} sx={{color:"info.main"}} color="info" variant="outlined">Ir al Post</Button>)
          }
            <Box>
                <Button onClick={()=>handleCloseResuelto(infoModal.val)} sx={{color:"error.main", marginRight:"2vw"}} color="error" variant="outlined">Banear</Button>
                <Button onClick={()=>handleCloseRechazado(infoModal.val)} autoFocus sx={{color:"success.main"}} color="success" variant="outlined" >Rechazar peticion</Button>
            </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}