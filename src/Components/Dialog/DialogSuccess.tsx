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

export default function DialogSuccess(props:any) {
  
const {handleClose, openDialog, title1 , subtitle1 , buttonText} = props
/*   const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; */
  //const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <div>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Alert severity="success" icon={false}>
        <AlertTitle sx={{fontSize:"2em"}}><strong>{title1}</strong></AlertTitle>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {subtitle1}
            </Grid>
            <Grid item xs={12} sx={{display:"flex" , justifyContent:"center"}}>
                <Button onClick={handleClose} color="inherit" size="small" sx={{width:"40%", color:"dialogButt.main"}}>
                    {buttonText}
                </Button>
            </Grid>
        </Grid>           
        </Alert>
      </Dialog>
    </div>
  );
}