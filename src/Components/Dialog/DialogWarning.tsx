import * as React from 'react';
/*-----------IMPORT MUI & CSS-----------*/
import {Button , Dialog, DialogActions , DialogContent, DialogContentText, DialogTitle,Slide , Alert , AlertTitle, Grid} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogWarning(props:any) {
  
const {handleClose, open} = props
/*   const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; */

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Alert severity="warning" icon={false}>
        <AlertTitle sx={{fontSize:"2em"}}><strong>Cuidado!</strong></AlertTitle>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                El usuario al que esta intentando buscar<strong> no existe o puede que lo haya escrito mal</strong>
            </Grid>
            <Grid item xs={12} sx={{display:"flex" , justifyContent:"center"}}>
                <Button onClick={handleClose} color="inherit" size="small" sx={{width:"40%"}}>
                    Aceptar
                </Button>
            </Grid>
        </Grid>

           
        </Alert>
      </Dialog>
    </div>
  );
}