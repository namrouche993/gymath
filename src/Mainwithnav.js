import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
 
/////***NOO maybe false***//import Link from '@mui/material/Link';
 
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
//import AdbIcon from '@mui/icons-material/Adb';
//import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';


export default function Mainwithnav() {
 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} >
        <p style={{textAlign:'center'}}>Sidali Gym</p>
      </AppBar>
      <AppBar position="static">
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginRight: '50px',
              fontSize: '22px',
              borderRight: '5px #fff solid',
              paddingRight: '10px',
              lineHeight: '1.1',
              textAlign: '-webkit-right'
            }}
          >
            SIDALI <br></br> GYM
          </Typography>
          <Box sx={{ flexGrow: 1 }} >
        <Button href='/home' variant={document.location.pathname=="/home" ? ("contained"):("h6")}>
            Home
        </Button> 
          <Button href='/news' variant={document.location.pathname=="/news" ? ("contained"):("h6")}>
            News
          </Button>          
          <Button href='/contact' variant={document.location.pathname=="/contact" ? ("contained"):("h6")}>
            Contact
          </Button>  
          <Button href='/about' variant={document.location.pathname=="/about" ? ("contained"):("h6")}>
            About
          </Button>
        </Box>
        <AdbIcon sx={{display: { xs: 'none', md: 'flex' }, mr: 1 }} />

        </Toolbar>
      </AppBar>
    </Box>
  );
}