import React from 'react'
import MUIDataTable from "mui-datatables";
import { Grid,Box } from '@mui/material';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
//import ButtonBootsrap from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import About from '../About.js';
import Button_edit_dialog from './Button_edit_dialog.js'

let widtha = window.innerWidth;
let widthname = window.innerWidth > 768 ? "" : "."
//https://codesandbox.io/s/github/gregnb/mui-datatables
//https://github.com/gregnb/mui-datatables


export default function Tableabonnement() {
  const columns = [
    {name:'id',
    options:{
      setCellProps:()=>({
        style:{
          padding:'3px 3px 3px 3%',letterSpacing:'0.13071em'
        }
       }),
       setCellHeaderProps: (value) => ({style:{background: "#2f2f2f",color:'#fff',height:'40px',width:'4%'}})} 
  
    },
    {name:"nom et Prenom",
    options:{
       setCellProps:()=>({
        style:{
          padding:'3px 3px 3px 3%',letterSpacing:'0.13071em'
        }
       }),
    setCellHeaderProps: (value) => ({style:{background: "#2f2f2f",color:'#fff',height:'40px',width:'15%'}})} 
    },
    {name:"Date de naissance",
    options:{
      setCellProps:()=>({
       style:{
         padding:'3px 3px 3px 3%',letterSpacing:'0.13071em'
       }
      }),
      //filterOptions: { fullWidth: false }, it do nothing
      setCellHeaderProps: (value) => ({style:{background: "#2f2f2f",color:'#fff',height:'40px',width:'15%'}})} 
  },
    {name:"date de abonnement",
    options:{
      setCellProps:()=>({
       style:{
         padding:'3px 3px 3px 5%',letterSpacing:'0.13071em'
       }
      }),
      //filterOptions: { fullWidth: false }, it do nothing
      setCellHeaderProps: (value) => ({style:{background: "#2f2f2f",color:'#fff',height:'40px',width:'15%'}})} 
  },
    {name:"Montant",
    options:{
      setCellProps:()=>({
       style:{
         padding:'3px 2.9em 3px 0px',
         letterSpacing:'0.13071em',textAlign:'end'
       }
      }),
      //filterOptions: { fullWidth: false }, it do nothing
      setCellHeaderProps: (value) => ({style:{background: "#2f2f2f",color:'#fff',height:'40px',width:'10%'}}),
      customBodyRender: (value, tableMeta, updateValue) => {  
              return (
                <p id='montantid'>{value} DA</p>
              )
      }
    
    } 
  },
    {name:"Notes",
    options:{
      setCellProps:()=>({
       style:{
         padding:'3px 3px 3px 3%',letterSpacing:'0.13071em'
       }
      }),    setCellHeaderProps: (value) => ({style:{background:'#2f2f2f',color:'#fff',width:'30%'}})} 
  },
  {
    name:widthname,options:{
      
      setCellProps:()=>({
        style:{
          padding:'0px'
        }
       }),
      setCellHeaderProps: (value) => (
        {
         style: {
            //'paddingRight': '20px',
             background: "#2f2f2f",
             color:'#fff',
             height:'40px',
             width:'10%'
  
          }
        }
      ),
      customBodyRender: (value, tableMeta, updateValue) => {  
        console.log('output of value is : ');
        console.log(value);
        console.log('output of tableMeta is :')
        console.log(tableMeta);
              return (
                <div style={{display:'inline-flex'}}>

                      {/* <Button sx={{ border: 0,padding:0 }} variant='outlined' size='small' color='inherit'
                        //sx={{fontSize:'5px'}}                    
                      onClick={()=>alert(tableMeta.rowIndex)}><EditIcon fontSize="small"/>                      
                       </Button> */}
                       
                       <Button_edit_dialog 
                        modifiedTitle="Modifier l'abonnement"
                        idabonne={tableMeta.rowData[0]}
                        //name={data[tableMeta.rowIndex][1]}
                        name={tableMeta.rowData[1]}
                        datedenaissance={tableMeta.rowData[2]}
                        dateabonnement={tableMeta.rowData[3]}
                        montant={tableMeta.rowData[4]}
                        notes={tableMeta.rowData[5]}

                        logobutton={<EditIcon fontSize="small" />} 
                        />

                         <Button sx={{ border: 0,padding:0 }} variant='outlined' size='small' color='inherit'
                         //sx={{fontSize:'5px'}}                    
                       onClick={()=>alert(tableMeta.rowIndex)}><DeleteForeverIcon fontSize='small' color="error" />                      
                        </Button>

                   
                </div>
                      );
                    }
                    
  }
  }
  ];
  
  //const logoedit = <EditIcon/>
  const [open, setOpen] = React.useState(false);

  const handleClickOpenn = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = [
   [1,"Joe James", "1993-12-21","2022-09-22T20:11", 2300,"","editremovebttn"],
   [2,"Hamid achouri","2000-01-01","2022-09-25T11:44", 0,"n'a pas paye et il a pris aussi 1kg megamaz","editremovebttn"],
   [3,"Younes yousfi","1988-06-04","2022-09-28T19:33", 1500,"reste 8000da à payer","editremovebttn"],
   [4,"Rabah yakobi","1990-09-10","2022-10-05T08:11", 2300,"","editremovebttn"],
  ];
  
  const options = {
    filterType: 'checkbox',
    responsive: 'standard',
    //fixedSelectColumn	:'false'
    selectableRows:'none',
    pagination:'false',
    rowsPerPage:20,rowsPerPageOptions:[20,50,100],
    filter:false
    
  };
  
  const customTheme = createTheme({
    overrides: {
        MuiTableCell: {
            root: {
                padding: '0px',
            },
        },
    },
  })

  // var openda = open ==true ? false : true
  
   return (
    <div>
      {/*<Box sx={{maxWidth:{xs:'100px',md:'600px'}}}>*/}
    {/* <Button_edit_dialog/> */}

     {/* openn={open} handleClose={openda} /> */}
    <Grid container>
      <Grid item xs={12} md={12}>
      <ThemeProvider  theme={customTheme}>
        <MUIDataTable
          title={"Liste des abonnés"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider >

        </Grid>
      </Grid>
      {/* </Box> */}
    </div>
  )
}
