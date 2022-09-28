import React from 'react'
import MUIDataTable from "mui-datatables";
import { Grid,Box } from '@mui/material';

const columns = ["Name", "Date de naissance", "date abonnement", "montant","Notes"];

const data = [
 ["Joe James", "21-12-1993", "22-09-2022", 2300,""],
 ["Hamid achouri", "01-01-2000", "25-09-2022", 0,"nest pas paye et il a pris aussi 1kg megamaz"],
 ["Younes yousfi", "04-06-1988", "28-09-2022", 1500,"reste 8000da à payer"],
 ["Rabah yakobi", "09-09-1990", "05-10-2022", 2300,""],
];

const options = {
  filterType: 'checkbox',
  responsive: 'standard'
};



export default function Home() {
  return (
    <div>
      {/*<Box sx={{maxWidth:{xs:'100px',md:'600px'}}}>*/}
      <Grid sx={{width:{xs:'100%',md:'100%'}}}>
        <MUIDataTable
          title={"Employee List"}
          data={data}
          columns={columns}
          options={options}
        />
        </Grid>
      {/* </Box> */}
    </div>
  )
}
