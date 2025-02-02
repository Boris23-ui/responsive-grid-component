import Box from '@mui/material/Box';
import React from 'react';
import CardHeader from './CardHeader';
import CTA from './CTA';
import Container from '@mui/material/Container';
import Why from './Why';

const CardContainer = () => {
  return (
    <Box 
      sx={{ 
        maxWidth: "39.6875rem",
        maxHeight: "29.6875rem",
        borderRadius: "0.5rem",
        overflow: "hidden",
        
      }}>
      <CardHeader />
      <Box sx={{ 
        display: "flex"  // Makes children display side by side
      }}>
        <CTA />
        <Why />
      </Box>
    </Box>
  );
};

export default CardContainer;