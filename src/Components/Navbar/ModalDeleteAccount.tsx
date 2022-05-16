import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckIcon from '@mui/icons-material/Check';


export default function ModalDeleteAccount(props:any) {
    const {handleCloseDeleteAccount , deleteAccount ,handleSuccessDelete, handleChangeDelete , inputDelete, handleDeleteUser} = props

    if(inputDelete ==="Eliminado147"){
      return(
        <div>
      <Dialog open={deleteAccount} onClose={handleCloseDeleteAccount}>
        <DialogTitle>Su cuenta a sido eliminada</DialogTitle>
        <DialogContent sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
       
          <CheckIcon color="success" fontSize='large'/>
        </DialogContent>
        {/* <DialogActions sx={{display:"flex", justifyContent:"center"}}>
          <Button color="info" onClick={handleSuccessDelete}>Aceptar</Button>
        </DialogActions> */}
      </Dialog>
    </div>
      )
    }
  return (
    <div>
      <Dialog open={deleteAccount} onClose={handleCloseDeleteAccount}>
        <DialogTitle>Desea eliminar su cuenta?</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Porfavor, a continuación escriba <span style={{fontWeight:"bold"}}>"Eliminar cuenta"</span> y se habilitara la opción para borrar tu cuenta
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="text"
            label="Escriba aqui"
            type="text"
            fullWidth
            variant="standard"
            color='info'
            value={inputDelete}
            onChange={(e)=>handleChangeDelete(e)}
            autoComplete="off"
          />
        </DialogContent>
        <DialogActions>
          <Button color="info" onClick={handleCloseDeleteAccount}>Cancelar</Button>
          <Button color="error" disabled={inputDelete === "Eliminar cuenta"? false : true} onClick={handleDeleteUser}>Eliminar cuenta</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}