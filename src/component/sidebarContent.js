import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { colors } from "./constant";

import { Link } from "react-router-dom";


function SidebarContent({ openModal }) {
  return (
    <div>
       
        <div style={{ justifyContent: "center", textAlign: "center" }}>
          <div>
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <Typography variant="h6" style={{ color: colors.mintgreen }}>
                Home
              </Typography>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to={"/jobs"}>
              <Typography variant="h6" style={{ color: colors.mintgreen }}>
                Jobs
              </Typography>
            </Link>
          </div>
          <Grid>
            <Link style={{ textDecoration: "none" }} to={"/about"}>
              <Button
                variant="text"
                style={{ color: colors.mintgreen, marginRight: 10 }}
              >
                About Us
              </Button>
            </Link>
          </Grid>
          <Grid>
            <Link style={{ textDecoration: "none" }} to={"/contact"}>
              <Button
                variant="text"
                style={{ color: colors.mintgreen, marginRight: 10 }}
              >
                Contact Us
              </Button>
            </Link>
          </Grid>
         
        </div>
      
    </div>
  );
}

export default SidebarContent;
