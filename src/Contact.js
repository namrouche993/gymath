import { Grid,Box, Paper } from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    <div>
    <Grid container direction='column'>
      <Grid container direction='row' sx={{display:'flex'}}>
          <Grid xs={12} md={3} sx={{lineHeight:5,textAlign:'center' ,fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
              0
          </Grid>
          <Grid xs={12} md={3} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
               0.1
          </Grid>
          <Grid xs={6} md={3} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
              2
          </Grid>          
          <Grid xs={6} md={3} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
              2
          </Grid>
       </Grid>
       <Grid container sx={{display:'flex',flexDirection:'column'}}>
          <Grid item xs={3} md={2} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
              2.1
          </Grid> 
          <Grid item xs={3} md={2} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
              2.2
          </Grid>           
          <Grid item xs={4} md={2} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
              2.3
          </Grid> 
          <Grid item xs={4} md={2} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
              2.4
          </Grid>
       </Grid>



    </Grid>
    </div>
  )
}
