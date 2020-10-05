import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

// import TimesheetUserContext from 'context/timesheetUserContext';

import { timesheetTableKeys } from 'constants/timesheetUserConstants';
import PropTypes from 'prop-types';

import makeStyles from './styles';

const TimesheetInputFields = ({
  projObj,
  inputs,
  buttons,
  errorInputs,
  handleHoursChange,
  handleMemoChange
}) => {

  const classes = makeStyles();

  if (inputs &&
    inputs.projectInputHours &&
    inputs.projectInputMemos) {

    const hoursObj = inputs.projectInputHours[projObj.id];
    const memoObj = inputs.projectInputMemos[projObj.id];
    const errorObj = errorInputs[projObj.id];

    if (buttons &&
      buttons.hiddenButtons &&
      buttons.hiddenButtons[projObj.id]) {

      const currentActions = buttons.hiddenButtons[projObj.id];
      const {
        isSaveHidden,
        isEditHidden,
      } = currentActions;

      const isProjectDropdownSelected = inputs &&
        inputs.projectDropdownValues &&
        inputs.projectDropdownValues[projObj.id] &&
        inputs.projectDropdownValues[projObj.id].projectObj &&
        inputs.projectDropdownValues[projObj.id].projectObj.projectName !== '';

      return (
        <TableCell
          className={classes.timesheetTableBodyCell}
          align='center'
          key={`${projObj.key}-${projObj.id}`}
          id={`${projObj.key}-${projObj.id}`}
        >
          {isSaveHidden &&
            <FormControl className={classes.hourInput}>
              <Typography variant='body2' display='block'>
                {hoursObj[projObj.keyT]}
              </Typography>
            </FormControl>}
          {isSaveHidden &&
            <FormControl className={classes.memoInput}>
              <Typography variant='body2' display='block'>
                {memoObj[projObj.keyM]}
              </Typography>
            </FormControl>}
          {/* Hour input fields */}
          {
            (isEditHidden && isProjectDropdownSelected) &&
            <FormControl className={classes.hourInput}>
              <TextField
                name={timesheetTableKeys[projObj.keyT].name}
                key={`${projObj.keyT}-${projObj.id}`}
                id={`${projObj.keyT}-${projObj.id}`}
                className={classes.hours}
                value={hoursObj[projObj.keyT]}
                onChange={handleHoursChange}
                placeholder='Hours'
                variant='outlined'
                InputProps={{ inputProps: { max: 24, min: 1 } }}
                size='small'
                type='number' />
            </FormControl>
          }
          {/* Memo input fields */}
          {
            (isEditHidden && isProjectDropdownSelected) &&
            <FormControl className={classes.memoInput}>
              <TextField
                error={(errorObj && errorObj[projObj.keyM] === '') ? true : false}
                name={timesheetTableKeys[projObj.keyM].name}
                key={`${projObj.keyM}-${projObj.id}`}
                id={`${projObj.keyM}-${projObj.id}`}
                multiline
                rows={3}
                className={classes.memo}
                value={memoObj[projObj.keyM]}
                onChange={handleMemoChange}
                placeholder='Memo'
                variant='outlined'
                size='small'
                type='number' />
            </FormControl>
          }
        </TableCell>
      )
    }
  }
  return null;
};

TimesheetInputFields.propTypes = {
  projObj: PropTypes.object,
  inputs: PropTypes.object,
  buttons: PropTypes.object,
  errorInputs: PropTypes.object,
  handleHoursChange: PropTypes.func,
  handleMemoChange: PropTypes.func,
}

TimesheetInputFields.defaultProps = {
  projObj: {},
  inputs: {},
  buttons: {},
  errorInputs: {},
  handleHoursChange: () => null,
  handleMemoChange: () => null,
}

export default TimesheetInputFields;
