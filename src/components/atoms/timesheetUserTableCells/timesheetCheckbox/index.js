import React, {
  useContext
} from 'react';

import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

import TimesheetUserContext from 'context/timesheetUserContext';

import { timesheetTableKeys } from 'constants/timesheetUserConstants';
import PropTypes from 'prop-types';

import makeStyles from './styles';

const TimesheetCheckbox = ({  
  projObj,
}) => {

  const {
    billedProjectList
  } = useContext(TimesheetUserContext);

  const classes = makeStyles();
  
  const {
    checkbox_billable
  } = timesheetTableKeys;

  const isBilled = billedProjectList &&
  billedProjectList[projObj.id] &&
  billedProjectList[projObj.id].isBilled;

    return (
      <TableCell
        className={classes.billableCheckbox}
        align={checkbox_billable.align}
        key={`${checkbox_billable.key}${projObj.id}`}
        id={`${checkbox_billable.key}${projObj.id}`}
      >
        <Checkbox
          color={'primary'}
          key={`${checkbox_billable.name}${projObj.id}`}
          id={`${checkbox_billable.name}${projObj.id}`}
          name={checkbox_billable.name}
          checked={isBilled}
        />
      </TableCell>
    );
};

TimesheetCheckbox.propTypes = {
  projObj: PropTypes.object,
}

TimesheetCheckbox.defaultProps = {
  projObj: {},
}

export default TimesheetCheckbox;
