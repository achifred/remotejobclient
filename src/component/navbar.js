import React, {useState} from "react";
import { Grid, Toolbar, Button} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Sidebar } from "./sidebar";
import SidebarContent from "./sidebarContent";
function Navbar(props) {
  const [left, setLeft] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleSidebar = event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLeft(!left);
  };
  function closeModal() {
    setOpen(false);
  }
  function openModal() {
    setOpen(true);
  }
  const nav =  (
    <Grid container style={{ display: "flex", justifyContent: "flex-end" }}>
      <Grid>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Button
            variant="text"
            style={{  marginRight: 10 }}
          >
            Home
          </Button>
        </Link>
      </Grid>
      <Grid>
        <Link style={{ textDecoration: "none" }} to={"/jobs"}>
          <Button
            variant="text"
            style={{  marginRight: 10 }}
          >
            RemoteJobs
          </Button>
        </Link>
      </Grid>
      <Grid>
        <Link style={{ textDecoration: "none" }} to={"/about"}>
          <Button
            variant="text"
            style={{  marginRight: 10 }}
          >
            About Us
          </Button>
        </Link>
      </Grid>
      <Grid>
        <Link style={{ textDecoration: "none" }} to={"/contact"}>
          <Button
            variant="text"
            style={{  marginRight: 10 }}
          >
            Contact Us
          </Button>
        </Link>
      </Grid>
     { /*<Grid>
        <Link style={{ textDecoration: "none" }} to={"/postjob"}>
          <Button
            variant="text"
            style={{  marginRight: 10 }}
          >
            Post a Job
          </Button>
        </Link>
     </Grid>*/}
    </Grid>
  ) 
  return (
    <div style={styles.root}>
     
      <Toolbar className="toolbar" style={{ backgroundColor:'white' }}>
      <Grid>
          <Link style={{ textDecoration: "none" }} to={"/home"}>
            AchifDevJobs
          </Link>
        </Grid>
        <Grid className="sidebar">
          <Sidebar
            Open={left}
            toggleBar={toggleSidebar}
            content={<SidebarContent openModal={openModal} />}
          />
        </Grid>
       
        {nav}
      </Toolbar>
    </div>
  );
}



const styles = {
  root: {
    flexGrow: 1
  },
  registerbtn: {
    borderRadius: 30,

    backgroundColor: 'orange',
    color: 'white'
  },

  link: {
    color: "green",
    background: "transparent",
    textDecoration: "none",
    marginRight: 8
  }
};

export default Navbar;
