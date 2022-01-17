import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import ActionButton from '../controls/ActionButton';
import React  from 'react';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
//import CloseIcon from '@mui/icons-material';
//import AddMember from './AddMember';


const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function Popup(props) {
    const {title, children, openPopup, setOpenPopup} = props;
    const classes = useStyles();

    return (

        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>

        <DialogTitle className={classes.dialogTitle}>
            <div style={{display: 'flex'}}>
                <typography variant="h6" component="div" style={{flexGrow: 1}}>
                    {title}
                    </typography>
                    <ActionButton
                        color="secondary"
                        text = "X"
                        onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon/>
                    </ActionButton>
                    </div>
        </DialogTitle>
        
        <DialogContent dividers>
                {children}
        </DialogContent>

        

        </Dialog>
    )


}