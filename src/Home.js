import React from 'react'
import MUIDataTable from "mui-datatables";
import { Grid,Box } from '@mui/material';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';


//https://codesandbox.io/s/github/gregnb/mui-datatables
//https://github.com/gregnb/mui-datatables
const columns = [
  {name:"nom et Prenom"},
  {name:"Date de naissance"},
  {name:"date de abonnement"},
  {name:"Montant"},
  {name:"Notes"},
{
  name:"edit_button",options:{
    customBodyRender: (value, tableMeta, updateValue) => {  
      console.log('output of value is : ');
      console.log(value);
      console.log('output of tableMeta is :')
      console.log(tableMeta);
            return (
                    <Button variant='contained'
                      sx={{fontSize:'5px'}}                    
                    onClick={()=>alert(tableMeta.rowIndex)}><EditIcon/></Button>
                    );
                  }
                  
}
},

{name:"remove_button"}
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



export default function Home() {
  return (
    <div>
      {/*<Box sx={{maxWidth:{xs:'100px',md:'600px'}}}>*/}
    <Grid container>
      <Grid item xs={12} md={12}>
        <MUIDataTable
          title={"Liste des abonnés"}
          data={data}
          columns={columns}
          options={options}
        />
        </Grid>
      </Grid>
      {/* </Box> */}
    </div>
  )
}
