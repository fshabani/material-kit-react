import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
//import Icon from '@mui/material/icons';
import NotificationImportantRoundedIcon from '@mui/icons-material/NotificationImportantRounded';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



export default function  ConfirmDialog(props) {
  //const [open, setOpen] = React.useState(false);
  const { confirmDialog, setConfirmDialog } = props;
 
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setConfirmDialog(false);
//   };
  

  return (
    <div>
     <Dialog open={confirmDialog.isOpen}
        fullScreen={fullScreen}
        //open={open}
        //onClose={handleClose}
        
      >
        <DialogTitle id="responsive-dialog-title">
               <NotificationImportantRoundedIcon/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <h3>{confirmDialog.title}</h3>
          <h5>{confirmDialog.subTitle}</h5>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" autoFocus onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}>
            Disagree
          </Button>
          <Button variant="contained" color="success" autoFocus onClick={confirmDialog.onConfirm}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
