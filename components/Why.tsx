import React from 'react'
import Box from "@mui/material/Box";
import { List, ListItem, Typography } from '@mui/material';

const Why = () => {
  return  <Box 
            sx={{ 
              padding: "2.5rem",
              backgroundColor: "#4abdbd",
              maxWidth: "19.875rem",
              borderRadius: "0 0 0.5rem 0 "
            }}>
            <Typography sx={{ fontSize: "1.125rem", fontWeight: 600, color: "#FFFFFF" }} >Why Us</Typography>
            <Box>
              <Typography sx={{ color: "#FFFFFF" }} >Tutorials by industry experts</Typography>
              <Typography sx={{ color: "#FFFFFF" }} >Peer & expert code review</Typography>
              <Typography sx={{ color: "#FFFFFF" }} >Code exercises</Typography>
              <Typography sx={{ color: "#FFFFFF" }} >Access to our Github repos</Typography>
              <Typography sx={{ color: "#FFFFFF" }} >Community forum</Typography>
              <Typography sx={{ color: "#FFFFFF" }} >Flashcard desks</Typography>
              <Typography sx={{ color: "#FFFFFF" }} >New videos every week</Typography>
            </Box>
          </Box>
}

export default Why;