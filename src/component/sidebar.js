import React from 'react';
import { Drawer, Button } from '@material-ui/core';
import { IoIosMenu } from 'react-icons/io';
import { colors } from './constant';

export function Sidebar({ Open, toggleBar, content, dest }) {
  return (
    <div>
      <Button
        style={{
          color: colors.mintgreen,
          display: 'flex',
          justifyContent: 'flex-start'
        }}
        onClick={toggleBar}
      >
        <IoIosMenu style={{ height: 45, width: 40 }} />
      </Button>
      <Drawer anchor="top" open={Open} onClose={toggleBar}>
        <div role="presentation" onClick={toggleBar} onKeyDown={toggleBar}>
          {content}
        </div>
      </Drawer>
    </div>
  );
}
