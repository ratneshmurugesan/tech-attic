import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const useStyles = makeStyles(theme => ({
  errorContainer: {
    height: '91vh',
    display: 'flex',
    alignItems: 'center',
  },
  errorBox: {
    padding: theme.spacing(3),
    margin: theme.spacing(2, 0),
    color: theme.palette.primary.error,
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  errMsg: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginLeft: 5
    },
  }
}));

const ErrorComponent = ({ message }) => {
  const classes = useStyles();
  return (
    <Container fixed className={classes.errorContainer}>
      <Paper className={classes.errorBox}>
        <Typography variant={'h6'} component={'h5'} gutterBottom align='center' className={classes.errMsg}>
          <ErrorOutlineIcon />
          <span>{message}</span>
        </Typography>
      </Paper>
    </Container>
  )
};

export default ErrorComponent;
