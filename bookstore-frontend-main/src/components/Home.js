import { Button, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
      
      <Box display="flex" flexDirection="column" alignItems="center">
      <h1>Books</h1>
          <h1>Welcome to Book-Store!</h1>
          <h2>Jump right in and explore our Book store</h2>
          <h3>Feel free to share some of your own Books!</h3>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Button
              LinkComponent={Link}
              to="/books"
              sx={{ marginTop: 2, background: "orangered" }}
              variant="contained"
            >
            View All Products
              {/* <Typography variant="h2">View All products</Typography> */}
            </Button>
          </Box>
      </div>
    </>
  );
};

export default Home
