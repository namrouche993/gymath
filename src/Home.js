import React from 'react'
import MUIDataTable from "mui-datatables";
import { Grid,Box } from '@mui/material';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { ThemeProvider, createTheme } from '@mui/material/styles';


//https://codesandbox.io/s/github/gregnb/mui-datatables
//https://github.com/gregnb/mui-datatables
const columns = [
  {name:"nom et Prenom",
  options:{
     setCellProps:()=>({
      style:{
        padding:'3px 3px 3px 3%',letterSpacing:'0.13071em'
      }
     }),
  setCellHeaderProps: (value) => ({style:{background: "#2f2f2f",color:'#fff',height:'40px'}})} 
  },
  {name:"Date de naissance",
  options:{
    setCellProps:()=>({
     style:{
       padding:'3px 3px 3px 3%',letterSpacing:'0.13071em'
     }
    }),filterOptions: { fullWidth: false },    setCellHeaderProps: (value) => ({style:{background: "#2f2f2f",color:'#fff',height:'40px'}})} 
},
  {name:"date de abonnement",
  options:{
    setCellProps:()=>({
     style:{
       padding:'3px 3px 3px 3%',letterSpacing:'0.13071em'
     }
    }),filterOptions: { fullWidth: false },    setCellHeaderProps: (value) => ({style:{background: "#2f2f2f",color:'#fff',height:'40px'}})} 
},
  {name:"Montant",
  options:{
    setCellProps:()=>({
     style:{
       padding:'3px 3px 3px 3%',letterSpacing:'0.13071em'
     }
    }),filterOptions: { fullWidth: false },    setCellHeaderProps: (value) => ({style:{background: "#2f2f2f",color:'#fff',height:'40px'}})} 
},
  {name:"Notes",
  options:{
    setCellProps:()=>({
     style:{
       padding:'3px 3px 3px 3%',letterSpacing:'0.13071em'
     }
    }),    setCellHeaderProps: (value) => ({style:{background:'#2f2f2f',color:'#fff'}})} 
},
{
  name:"",options:{
    
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
           margin:'-50px'

        }
      }
    ),
    customBodyRender: (value, tableMeta, updateValue) => {  
      console.log('output of value is : ');
      console.log(value);
      console.log('output of tableMeta is :')
      console.log(tableMeta);
            return (
                    <Button variant='outlined' size='small' color='inherit'
                      //sx={{fontSize:'5px'}}                    
                    onClick={()=>alert(tableMeta.rowIndex)}><EditIcon fontSize="small"/>                      
                     </Button>
                    );
                  }
                  
}
},

{name:"",
options:{
  setCellProps:()=>({
   style:{
     padding:'0px'
   }
  }),    setCellHeaderProps: (value) => (
  {
    style:{
      background: "#2f2f2f",color:'#fff',height:'40px'}
    }
    ),
    customBodyRender: (value, tableMeta, updateValue) => {  
      console.log('output of value is : ');
      console.log(value);
      console.log('output of tableMeta is :')
      console.log(tableMeta);
            return (
                    <Button sx={{ border: 0,padding:0 }} variant='outlined' size='small' color='inherit'
                      //sx={{fontSize:'5px'}}                    
                    onClick={()=>alert(tableMeta.rowIndex)}><DeleteForeverIcon fontSize='small' color="error" />                      
                     </Button>
                    );
                  }
 }
}

];

const data = [
 ["Joe James", "21-12-1993", "22-09-2022", 2300,"","editbttn",""],
 ["Hamid achouri", "01-01-2000", "25-09-2022", 0,"nest pas paye et il a pris aussi 1kg megamaz","editbttn",""],
 ["Younes yousfi", "04-06-1988", "28-09-2022", 1500,"reste 8000da à payer","editbttn",""],
 ["Rabah yakobi", "09-09-1990", "05-10-2022", 2300,"editbttn","editbttn",""],
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


export default function Home() {
 


  return (
    <div>
      {/*<Box sx={{maxWidth:{xs:'100px',md:'600px'}}}>*/}
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
