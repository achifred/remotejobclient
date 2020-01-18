import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Href = ({ path, children, styles }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Button variant="outlined" style={styles}>
        {children}
      </Button>
    </Link>
  );
};
