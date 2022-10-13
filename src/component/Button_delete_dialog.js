import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DangerousIcon from '@mui/icons-material/Dangerous';

export default function Button_delete_dialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{ border: 0,padding:0 }} variant='outlined' size='small' color='inherit' onClick={handleClickOpen}>
           <DeleteForeverIcon fontSize='small' color="error" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth="false"
      >
        <DialogTitle id="alert-dialog-title" style={{textAlign:'center',marginBottom:'-2.3rem'}}>
              <DangerousIcon sx={{color:'brown',fontSize:'6.2rem',marginBottom:'-1.9rem'}}/>
              <h2 style={{textAlign:"center",color:'#424242'}}>{"Delete it  ?!"}</h2>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{textAlign:'center'}}>
            <h4> l'abonnement sous le nom : {props.nometprenom} </h4>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{alignSelf:'center'}}>
          <Button color="inherit" size="large" variant="contained" onClick={handleClose}>Non</Button>
          <Button sx={{marginLeft:'1.8rem'}} color="primary" size="large" variant="contained" onClick={handleClose} autoFocus>
            Oui
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
