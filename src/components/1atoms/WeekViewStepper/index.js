import React, { useContext, useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';

import {
  NavigateNext,
  NavigateBefore
} from '@material-ui/icons';

import {
  getTimesheetUserWeekData,
} from 'services/timesheetUserService';

import TimesheetUserContext from 'context/timesheetUserContext';

import ButtonComponent from 'components/1atoms/buttonComponent';

import useStyles from './styles';

const WeekViewStepper = () => {

  const {
    initialDataDayStart,
    initialDataDayEnd,
    initialWeekString,
    initialWeekType,
    initialOntimeSubmission,
    initialNotAllocatedMessage,
    // Below are functions.
    setTimesheetContextData,
    getFilteredData,
  } = useContext(TimesheetUserContext);

  const [state, setWeekViewData] = useState({});

  useEffect(_ => {
    setWeekViewData({
      initialDataDayStart,
      initialDataDayEnd,
      initialWeekString,
      initialWeekType,
      initialOntimeSubmission,
      initialNotAllocatedMessage,
    });
  }, [
      initialDataDayStart,
      initialDataDayEnd,
      initialWeekString,
      initialWeekType,
      initialOntimeSubmission,
      initialNotAllocatedMessage,
    ]);

  const classes = useStyles();

  const handleWeekChange = async (week) => {
    const weekDataApiBody = {
      action: week,
      weekString: state.initialWeekString
    }
    // console.log('handleWeekChange');
    try {
      const nextWeekAPIData = await getTimesheetUserWeekData(weekDataApiBody);
      const filteredData = getFilteredData(nextWeekAPIData);
      setTimesheetContextData(timesheetContextData => ({
        ...timesheetContextData,
        ...filteredData,
      }));
    } catch (err) {
      throw err;
    }
    return null;
  };

  const prevWeekDate = state.initialDataDayStart && (
    <>
      <Typography variant="h2">{state.initialDataDayStart.day}</Typography>
      <span className={classes.monthYear}>
        <Typography variant="overline">{state.initialDataDayStart.month}</Typography>
        <Typography variant="overline">{state.initialDataDayStart.year}</Typography>
      </span>
    </>
  );

  const nextWeekDate = state.initialDataDayEnd && (
    <>
      <Typography variant="h2">{state.initialDataDayEnd.day}</Typography>
      <span className={classes.monthYear}>
        <Typography variant="overline">{state.initialDataDayEnd.month}</Typography>
        <Typography variant="overline">{state.initialDataDayEnd.year}</Typography>
      </span>
    </>
  );

  return (
    <>
      <div className={classes.root}>
        <ButtonComponent name={<><NavigateBefore fontSize={'large'} /></>} onClick={() => handleWeekChange('Prev')} />
        <span className={classes.date}>{prevWeekDate}</span>
        <span className={classes.date}>{nextWeekDate}</span>
        {state.weekType !== 'Current' ? (<ButtonComponent name={<><NavigateNext fontSize={'large'} /></>} onClick={() => handleWeekChange('Next')} />) : null}
      </div>
      <div className={classes.weekType}>{state.initialWeekType} week</div>
      <div className={classes.weekViewStatus}>
        <Typography variant='overline'>
          {state.initialOntimeSubmission ? 'On Time Submission' : 'On Time Submission'}
        </Typography>
        <Typography variant='overline'>
          {state.initialNotAllocatedMessage}
        </Typography>
      </div>
    </>
  );
}

export default WeekViewStepper;