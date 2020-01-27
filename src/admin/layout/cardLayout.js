import React from 'react';
import { Grid, Paper, Divider, Typography } from '@material-ui/core';

export default function CardLayout({ icon, count, name }) {
  return (
    <Paper style={{ width: 200, height: 150, margin: 40 }}>
      <Grid container style={{ justifyContent: 'center' }}>
        <Paper
          style={{
            textAlign: 'center',
            backgroundColor: 'green',
            width: 60,
            height: 60,
            marginTop: -30
          }}
        >
          {icon}
        </Paper>
      </Grid>
      <Divider />
      <Typography
        style={{
          textAlign: 'center',
          alignItems: 'center',
          fontSize: 20
        }}
      >
        {count} {name}
      </Typography>
    </Paper>
  );
}
