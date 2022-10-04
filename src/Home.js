import React from 'react'
import MUIDataTable from "mui-datatables";
import { Grid,Box } from '@mui/material';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { ThemeProvider, createTheme } from '@mui/material/styles';

let widtha = window.innerWidth;
let widthname = window.innerWidth > 768 ? "" : "."
//https://codesandbox.io/s/github/gregnb/mui-datatables
//https://github.com/gregnb/mui-datatables
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
                    <Button sx={{ border: 0,padding:0 }} variant='outlined' size='small' color='inherit'
                      //sx={{fontSize:'5px'}}                    
                    onClick={()=>alert(tableMeta.rowIndex)}><EditIcon fontSize="small"/>                      
                     </Button>
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

const data = [
 [1,"Joe James", "21-12-1993", "22-09-2022", 2300,"","editremovebttn"],
 [2,"Hamid achouri", "01-01-2000", "25-09-2022", 0,"n'a pas paye et il a pris aussi 1kg megamaz","editremovebttn"],
 [3,"Younes yousfi", "04-06-1988", "28-09-2022", 1500,"reste 8000da à payer","editremovebttn"],
 [4,"Rabah yakobi", "09-09-1990", "05-10-2022", 2300,"","editremovebttn"],
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
