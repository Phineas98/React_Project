import React from 'react';
import { Box, CssBaseline,Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import OptionTab from "./components/OptionTab";
import LocationCard from './components/LocationCard';
import { displayOnDesktop } from './theme/commonStyles';
import FooterMenu  from "./components/FooterMenu";
import Footer from "./components/Footer";


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{
        display:'flex',
        flexDirection: 'column',
        height: '100vh'
      }}>
       <Box>
        <Header/>
        <OptionTab/>
       </Box>
      <Box 
       sx={{
        display:'flex',
        flexDirection:'column',
        flexGrow: 1,
        height: 100,
        overflowY:'scroll'
       }}
      >
       <Container maxWidth="xl" sx={{ mb: 3 }}>
      <LocationCard/>
        </Container>
      </Box>
      <Box sx={{ display: { xs:'flex', md:'none'}}}>
        <FooterMenu />
      </Box>
      <Box sx={displayOnDesktop}>
        <Footer/>
      </Box>

      </Box>
    </React.Fragment>
  );
}

export default App;
