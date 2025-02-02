"use client"

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';


const CTA = () => {
  const mobile = useMediaQuery("(max-width:600px)")
  
  return (
    <Box sx={{ 
      padding: mobile ? "2rem" : "2.5rem", 
      backgroundColor: "#2AB3B1",
      height: "100%"
    }}>
      <Typography 
        sx={{ 
          color: 'white', 
          fontSize: mobile ? "1rem" : "1.125rem", 
          fontWeight: 600
        }}
      >
        Monthly Subscription
      </Typography>
      <Typography 
        sx={{ 
          color: 'white', 
          fontSize: "2rem", 
          fontWeight: "800", 
          display: "flex",
          alignItems: "center",
          marginTop: "1rem"
        }}
      >
        $29{" "} 
        <span 
          style={{
             color: "rgba(255,255,255, 0.5)",
             fontWeight: 400,
             fontSize: "1rem",
             marginLeft: "0.5rem"
              }}>
          per month
        </span>
      </Typography>
      <Typography sx={{ color: "#FFFFFF" }}>
        Full access for less than $1 a day
      </Typography>
      <Button 
        sx={{ 
            marginTop: "1.5rem",
            marginBottom: mobile ? "1rem" : "1.5rem",
            backgroundColor: "#C0DF33",
            color: "#FFFFFF",
            width: "100%",
            textTransform: "none",
            fontWeight: 800,
            padding: "1rem"
        }} 
      >
        Sign Up
      </Button>
    </Box>
  );
}

export default CTA