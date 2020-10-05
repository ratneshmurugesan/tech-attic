import React, { useContext } from 'react';

import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';

import TimesheetUserContext from 'context/timesheetUserContext';

import {
  timesheetStatus,
} from 'constants/timesheetUserConstants';

import makeStyles from './styles';

const TimesheetStatus = ({
  projObj,
}) => {

  const {
    intialTsStatusList: sheetStatusList,
  } = useContext(TimesheetUserContext);

  const classes = makeStyles();

  const status = sheetStatusList &&
    sheetStatusList[projObj.id] ?
    sheetStatusList[projObj.id].status : '';

  const statusText = timesheetStatus &&
    timesheetStatus[status] ? timesheetStatus[status].text : '';

  return (
    <TableCell
      align={'center'}
      key={`status${projObj.id}`}
      id={`status${projObj.id}`}
    >
      <Typography
        variant='overline'
        display='block'
        className={classes[status]}
      >
        {statusText}
      </Typography>
    </TableCell>
  )
};

TimesheetStatus.propTypes = {
  projObj: PropTypes.object,
}

TimesheetStatus.defaultProps = {
  projObj: {},
}

export default TimesheetStatus;
