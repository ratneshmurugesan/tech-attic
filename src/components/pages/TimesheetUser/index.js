import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import {
  Typography,
  Container,
  Grid,
} from '@material-ui/core';

import AlertMessageComponent from 'components/atoms/AlertMessageComponent';
import WeekViewStepper from 'components/atoms/WeekViewStepper';
import TimesheetUserTable from 'components/molecules/timesheetUserTable';
import Helpers from 'components/molecules/timesheetUserHelpers';

import TimesheetUserContext from 'context/timesheetUserContext';

import makeStyles from './styles';


const TimesheetUser = _ => {
  const classes = makeStyles();

  const {
    initialMissingTimesheetMessage,
  } = useContext(TimesheetUserContext);

    // console.log('missingTimesheetMessage', initialMissingTimesheetMessage);

  return (
    <Container maxWidth={'xl'} className={classes.root}>
      <Helmet>
        <title>Everest - Timesheets</title>
      </Helmet>
      <Grid container spacing={1}>
        <Grid item lg xs>
					<Typography className={classes.pageTitle} variant={'h3'}>Timesheets</Typography>
          {initialMissingTimesheetMessage && <AlertMessageComponent alertInfo={initialMissingTimesheetMessage} />}
          <Helpers />
          <WeekViewStepper />
          <TimesheetUserTable />
        </ Grid>
      </ Grid>
    </ Container>
  );
}

export default TimesheetUser;
