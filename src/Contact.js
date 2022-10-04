import React from 'react'
import { Grid,Box, Paper } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';

//import useMediaQuery from '@material-ui/core/useMediaQuery';

//import './About.css'

export default function Contact() {
    //const matches = useMediaQuery('(min-width:800px)');

  return (
    <div>
    <Grid container sx={{flexDirection:'column',display:'flex'}}>
       {/* direction='column'> */}
      <Grid container item sx={{display:'flex',flexDirection:'row'}}> 
       {/* direction='row' }} > */}
          <Grid xs={12} md={3} sx={{lineHeight:5,textAlign:'center' ,fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
             1
          </Grid>
          <Grid xs={12} md={3} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
             2
          </Grid>
          <Grid xs={6} md={4} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
             3
          </Grid>          
          <Grid xs={6} md={2} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
             4
          </Grid>
       </Grid>  
    <Grid container item md={6} sx={{display:'flex',flexDirection:'row'}}>    
      <Grid container item md={4} sx={{display:'flex',color:{xs:'red',md:'blue'}, flexDirection: {xs:'row' , md:'column'}  }}>
        {/* <Grid sx={{flexDirection:{md:'column'}}}> */}
          <Grid item xs={3} md={12} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
            5
          </Grid> 
          <Grid item xs={3} md={12} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
            6
          </Grid>           
          <Grid item xs={3} md={12} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
            7
          </Grid> 
          <Grid item xs={3} md={12} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
            8
          </Grid>
        {/* </Grid> */}
      </Grid>
      <Grid container item md={6}>
        <Grid item sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
           9
        </Grid>
      </Grid>
    </Grid>



    </Grid>
    </div>
  )
}
