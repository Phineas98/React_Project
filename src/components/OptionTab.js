import React, { useState } from 'react';
import { Box,Tabs,tabsClasses,Tab,Button,Container } from '@mui/material';

import { FaFilter } from 'react-icons/fa';
import { locationsTab } from '../data/mock-data';


const OptionTab = () => {
   const [value, setValue] = useState(0);

   const handleData = (event,newValue) => {
      setValue(newValue);
   }

  return (
     <Container maxWidth="xl">
       <Box sx={{
         display:"flex",
         flexGrow: 1,
         px: { xs: 0, md: 2 },
         alignItems: 'center',
         mt: 2,
         mb: 2
       }}> 
         <Tabs
          value={value}
          onChange={handleData}
          variant="scrollable"
          scrollButtons
          sx={{
            [`&.${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
            }
          }}
         >
           {locationsTab.map((tab) => {
            return <Tab key={tab.id} icon={tab.icon} label={tab.label}/>
           })}
         </Tabs>
         <Button sx={{
            display: { xs: 'none', md:'block'},
            border:'1px solid #ddd',
            minWidth: 90,
            justifyContent: 'space-between',
            borderRadius: 2,
            textTransform:'capitalize',
            py: 1,
            color:'theme.palette.text.primary'
         }}>
         <FaFilter/> Filter
         </Button>
       </Box>
     </Container>
  )
}

export default OptionTab