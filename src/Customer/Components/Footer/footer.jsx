import { Grid, Typography } from "@mui/material";
import React from "react";

const footer = () => {
  return (
    <div className="">
      <Grid
        className="bg-black text-white text-center mt-10 container"
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
            <Typography>
                
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default footer;
