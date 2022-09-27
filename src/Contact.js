import { Grid,Box } from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    <div>
      <Grid container direction='row' sx={{display:'flex'}}>
          <Grid xs={12} md={6} sx={{lineHeight:5,textAlign:'center' ,fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
              0
          </Grid>
          <Grid xs={12} md={6} sx={{lineHeight:4,textAlign:'center',fontSize:'1.5rem',boxShadow:'5px 5px 8px 2px rgb(20 25 30 / 30%)'}}>
               0.1
          </Grid>
      </Grid>
    </div>
  )
}
