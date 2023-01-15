
import React from 'react'
import {AppBar, Typography, Button} from '@mui/material'
const Header = () => {
  return (
    <div className='header'>
      <AppBar sx={{

        background: 'linear-gradient(45deg, #110f18 30%, #110f18 90%)', 
      }}>
        <Typography variant="h2" component="div" sx={{ 
          textAlign: 'center',
          fontFamily: 'Roboto',
        }}>
          Pomoduo
        
        </Typography>        
      </AppBar>
    </div>
  )
}

export default Header