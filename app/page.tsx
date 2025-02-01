import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardContainer from "@/components/CardContainer";
import React from "react";

// Home page component
// The Box component uses flex to center its child (CardContainer) both
// horizontally and vertically, and occupies the full height of the viewport.
const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh", // Ensures the Box takes up the full viewport height
        display: "flex", // Applies flexbox layout
        justifyContent: "center", // Centers the child horizontally
        alignItems: "center", // Centers the child vertically
      }}
    >
      <CardContainer />
    </Box>
  );
};

export default Home;
