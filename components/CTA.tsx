import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const CTA = () => {
  return (
    <Box sx={{ padding: "2.5rem", backgroundColor: "#2AB3B1" }}>
      <Typography sx={{ color: 'white', fontSize: "1.125rem", fontWeight: 600}} >Monthly Subscription</Typography>
      <Typography sx={{ color: 'white'}} >
        $29 <span style={{ color: "rgba(255,255,255, 0.5)" }} >per month</span>
      </Typography>
      <Typography>Full access for less than $1 a day</Typography>
      <Button></Button>
    </Box>
  );
}

export default CTA