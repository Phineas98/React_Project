import React from 'react';
import { Box } from '@mui/material';
import {Typography} from '@mui/material';
// React Icons 

import { FaAirbnb } from "react-icons/fa";
import { flexCenter } from "../theme/commonStyles";
import { pink } from '@mui/material/colors';

const Logo = () => {
  return (
    <Box sx={flexCenter}>
     <FaAirbnb size={40} color={pink[500]}/>
      <Typography
       sx={{
        ml: 1,
        color: (theme) => theme.palette.secondary.main,
        fontSize: '20px',
        fontWeight: 'bold',
       }}
       component="h3"
      >
       AirBnb
      </Typography>
    </Box>
  )
}

export default Logo