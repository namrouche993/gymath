import * as React from 'react';
import { useRef,useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Grid,Box} from '@mui/material'
import Moment from 'moment';
import InputAdornment from '@mui/material/InputAdornment';
import SaveIcon from '@mui/icons-material/Save';


//import dayjs from 'dayjs';

//import { DateTimePicker } from '@mui/x-date-pickers-pro/DateTimePicker';

import BasicDateTimePicker from './BasicDateTimePicker.js'
//https://mui.com/material-ui/react-dialog/

let widthdialogzoom = window.innerWidth > 768 ? "120%" : "100%"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  ///////width:'45rem',height:'60rem',
  '& .MuiDialog-paper': {
    width:'45rem',height:'28rem'
    // ,zoom:{md:1.3 , xs:1}
    ,zoom: widthdialogzoom
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(4,1,1,3) ,
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2,
    //width:'45rem',height:'40rem'
     }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            // width:'85rem', //45rem
            // height:'60rem',  //40rem
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Button_edit_dialog(props) {
  const [open, setOpen] = React.useState(false);


  const refeditnometprenom = React.useRef()
  const [nameetprenomstate,setNameetprenomstate] = React.useState(props.name)
  const Changeeditnometprenom = () => {
    setNameetprenomstate(refeditnometprenom.current.value)
  }


  const refmontant = React.useRef()
  const [montantstate, setMontantstate] = React.useState(props.montant)
  const Changemontant = () => {
    setMontantstate(refmontant.current.value)
  }

  const inputdatedenaissance = React.useRef();
  const [birthday,setBirthday] =React.useState(props.datedenaissance)
  const Changedatedenaissance = () => {
    setBirthday(inputdatedenaissance.current.value)
  }


    // i didn't use useref beacause it already used it with props component "BasicDateTimePicker"
  const datenoww = Moment().format('YYYY-MM-DDThh:mm') 
  const [dateabonnementstate,setDateabonnementstate] = React.useState(props.dateabonnement)
  const Changedateabonnement = (event) => {
    setDateabonnementstate(event.target.value)
      //console.log('le eventtt cuurent valuee est : ' + event.current.value )
  }


  const inputTextnote = useRef();
  const [noteab, setNoteab] = React.useState(props.notes);
  const Changenote = () => {
    setNoteab(inputTextnote.current.value)
  }



  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };




   return (
    <div>
      <Button sx={{ border: 0,padding:0 }} variant='outlined' size='small' color='inherit' onClick={handleClickOpen}>
        {props.logobutton}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.modifiedTitle}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {/* <Typography gutterBottom>
            l'abonné numero {props.idabonne} 
          </Typography> */}

          <Typography gutterBottom>
          <Grid container md={12} direction='row' columnSpacing={5} rowSpacing={{ md:4 , xs:4 }} sx={{marginBottom:'1.6rem'}} >
            <Grid container item md={6} direction='column' rowSpacing={4}>
               {/* rowSpacing={{ md:4 , xs:2 }}>   */}
             <Grid item md={4}>
                <TextField
                  required
                  id="editname"
                  label="Nom et Prénom :"
                  inputRef={refeditnometprenom}
                  defaultValue={props.name}
                  onChange={Changeeditnometprenom}
                />
             </Grid>
             <Grid item md={4} rowSpacing={4}>

                <TextField
                  required
                  id="editmontant"
                  label="Montant :"
                  defaultValue={props.montant}
                  onChange={Changemontant}
                  type="number"
                  inputRef={refmontant}
                  sx={{ m: 0, width: '24ch' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">DA</InputAdornment>,
                  }}
                  //inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                />
            </Grid>
            </Grid>
            <Grid container item direction='column' md={6}  rowSpacing={4}  >
             <Grid item md={4}>
                <TextField
                              id="editdatedenaissance"
                              label="Date de naissance"
                              type="date"
                              defaultValue={birthday} //"2018-06-12T19:30"
                              inputRef={inputdatedenaissance}
                              onChange={Changedatedenaissance}
                              //"2017-05-24T10:30"
                              sx={{ width: 250 }}
                              InputLabelProps={{
                                shrink: true,
                                }}
                />
             </Grid>
             <Grid item md={4}>
                <BasicDateTimePicker 
                   datedebutabonnement={props.dateabonnement}
                   Changedateabonnement={Changedateabonnement}
                />

            </Grid>

            </Grid>
            </Grid>
         
     
        </Typography>
        
          <Grid md={10} sx={{display:'grid'}}>
                <TextField
                  required
                  id="editnotes"
                  label="Notes :"
                  inputRef={inputTextnote}
                  onChange={Changenote}
                  multiline            
                //maxRows={4}
                  defaultValue={props.notes}
                />
        </Grid>
        <h4>Nom et Prénom : {nameetprenomstate}</h4>
        <h4>Montant payés : {montantstate} DA </h4> 
        <h4>Test : date de naissance {birthday}</h4>
        <h4> Test date d'abonnement : {dateabonnementstate} </h4>

        <h4>la note : {noteab}</h4>

        </DialogContent>
        <DialogActions>
          <Button variant="outlined" autoFocus onClick={handleClose}>
          Sauvegarder <SaveIcon />            
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
