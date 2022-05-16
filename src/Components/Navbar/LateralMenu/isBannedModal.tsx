import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function IsBannedModal(props:any) {

    const {handleCloseBanned , openBanned} = props;

  return (
    <div>
      <Dialog
        open={openBanned}
        onClose={handleCloseBanned}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Ha sido baneado/a. 😕"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Usted no puede crear discusiones ya que se encuentra temporalmente Baneado/a
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseBanned}>Entiendo.</Button>
      
        </DialogActions>
      </Dialog>
    </div>
  );
}