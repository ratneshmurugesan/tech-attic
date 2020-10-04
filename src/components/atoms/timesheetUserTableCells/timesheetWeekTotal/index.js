import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';

import makeStyles from './styles';

const TimesheetWeekTotal = ({
  projObj,
  inputs,
  calculateTotalHours,
}) => {

  const classes = makeStyles();

  return (
    <TableCell
      className={classes.totalHours}
      align={'center'}
      key={`week_total${projObj.id}`}
      id={`week_total.key${projObj.id}`}
    >
      <Typography variant='body2' display='block'>
        {
          inputs &&
          inputs.projectInputHours &&
          calculateTotalHours(inputs.projectInputHours[projObj.id]).toFixed(2)
        }
      </Typography>
    </TableCell>
  )
};

TimesheetWeekTotal.propTypes = {
  projObj: PropTypes.object,
  inputs: PropTypes.object,
  calculateTotalHours: PropTypes.func,
}

TimesheetWeekTotal.defaultProps = {
  projObj: {},
  inputs: {},
  calculateTotalHours: () => null,
}

export default TimesheetWeekTotal;
