import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Moment from 'moment';


export default function BasicDateTimePicker(props) {
  //var datenow = Date().toLocaleString()
  //const datenow = Moment().format('YYYY-MM-DDThh:mm') 
  // const timenow = Moment().format('hh:mm') 
  
  const datetimeabonnement = React.useRef()
  // datetime format : 2018-06-12T19:30//



return ( 
    <Stack component="form" noValidate spacing={3}>
       {/* <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
      /> */}
          {/* <dayjs>{datenow}</dayjs>
          <h4>timenow : {timenow} datenow: {datenow} new : {datetoday}</h4> */}

  <TextField
        id="datetime-local"
        label="Date de début d'inscription"
        type="datetime-local"
        defaultValue={props.datedebutabonnement} //"2018-06-12T19:30"
        inputRef={datetimeabonnement}
        onChange=  {props.Changedateabonnement}
        //"2017-05-24T10:30"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />      
    </Stack>
  );
}
