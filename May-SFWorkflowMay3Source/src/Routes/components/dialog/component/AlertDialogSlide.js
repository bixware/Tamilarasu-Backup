/**
 * Animated Dialog
 */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide(){
   const [open,setOpen] = useState(false);
	
	const handleClickOpen = () => {
      setOpen(true);
	};

	const handleClose = () => {
      setOpen(false);
	};

   return (
      <div>
         <Button 
            variant="contained" 
            onClick={handleClickOpen} 
            className="btn-warning text-white btn-block">
            Slide in alert dialog
         </Button>
         <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
         >
            <DialogTitle id="alert-dialog-slide-title">
               {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
               <DialogContentText id="alert-dialog-slide-description">
                  Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button variant="contained" onClick={() => handleClose()} className="btn-danger text-white mr-10">Disagree</Button>
               <Button variant="contained" onClick={() => handleClose()} className="btn-success text-white mr-10">Agree</Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}

export default AlertDialogSlide;