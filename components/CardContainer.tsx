"use client"

import Box from '@mui/material/Box';
import React from 'react';
import CardHeader from './CardHeader';
import CTA from './CTA';
import Container from '@mui/material/Container';
import Why from './Why';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

const CardContainer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{ 
        maxWidth: "39.6875rem",
        maxHeight: mobile ? "100%" : "29.6875rem",
        borderRadius: "0.5rem",
        overflow: "hidden",
      }}>
      <CardHeader />
      <Box sx={{ 
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        height: mobile ? "auto" : "100%"
      }}>
        <CTA />
        <Why />
      </Box>
    </Box>
  );
};

export default CardContainer;