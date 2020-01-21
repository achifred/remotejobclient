import React from 'react';
import { Drawer, Button, Grid } from '@material-ui/core';
import { IoIosMenu, IoIosHome } from 'react-icons/io';
import { colors } from './constant';
import {Link} from  'react-router-dom'

export function Sidebar({ Open, toggleBar, content, dest }) {
  return (
    <div>
      <Grid container style={{display:'flex', justifyContent:'flex-end'}} >
      <Button
        style={{
          color: colors.mintgreen,
          //display: 'flex',
          //justifyContent: 'flex-start'
        }}
        onClick={toggleBar}
      >
        <IoIosMenu style={{ height: 45, width: 40 }} />
      </Button>
       {/*
         <Link to='/' style={{textDecoration:'none'}}>
        <Button
        style={{
          color: colors.mintgreen,
          //display: 'flex',
          //justifyContent: 'flex-start'
        }}
        
      >
        <IoIosHome style={{ height: 45, width: 40 }}/>
      </Button>

        </Link>
        */}
      </Grid>
      
      <Drawer anchor="top" open={Open} onClose={toggleBar}>
        <div role="presentation" onClick={toggleBar} onKeyDown={toggleBar}>
          {content}
        </div>
      </Drawer>
    </div>
  );
}
