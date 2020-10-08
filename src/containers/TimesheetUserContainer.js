import React from 'react';
import PropTypes from 'prop-types';
import TimesheetUserContext from 'context/timesheetUserContext';
import Timesheet from 'components/6micro-apps/timesheet';

const TimesheetUserContainer = (props) => {
  return (
    <TimesheetUserContext.Wrapper {...props}>
      <Timesheet />
    </TimesheetUserContext.Wrapper>
  );
};

TimesheetUserContainer.propTypes = {
  props: PropTypes.object
}

TimesheetUserContainer.defaultProps = {
  props: {},
}

export default TimesheetUserContainer;