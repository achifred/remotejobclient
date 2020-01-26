import React from 'react';
import { CircularProgress, makeStyles, Grid } from '@material-ui/core';
import { colors } from './constant';

export function LoadingIndicator() {
  const styles = useStyles();
  return (
    <Grid container className={styles.loader}>
      <CircularProgress className={styles.progress} />
      <CircularProgress className={styles.progress} />
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
    color: colors.mintgreen
  },
  loader: {
    justifyContent: 'center'
  }
}));
