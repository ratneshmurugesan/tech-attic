import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import makeStyles from './styles';

const AlertMessageComponent = ({ alertInfo }) => {
  const classes = makeStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" elevation={0}>
        <Typography variant="subtitle2" className={classes.alertInfo}>
          {alertInfo}
        </Typography>
      </ Paper>
    </div>
  );
}


export default AlertMessageComponent;
