import Box from '@mui/material/Box';
import React from 'react';
import CardHeader from './CardHeader';
import CTA from './CTA';
import Container from '@mui/material/Container';

const CardContainer = () => {
  return (
    <Container maxWidth="sm">
      <Box>
        <CardHeader />
        <CTA />
      </Box>
    </Container>
  );
};

export default CardContainer;