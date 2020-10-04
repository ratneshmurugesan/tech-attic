import React from 'react';
import PropTypes from 'prop-types';
import TimesheetUserContext from 'context/timesheetUserContext';
import TimesheetUser from 'components/pages/TimesheetUser';

const TimesheetUserContainer = (props) => {
  return (
    <TimesheetUserContext.Wrapper {...props}>
      <TimesheetUser />
    </TimesheetUserContext.Wrapper>
  );
};

TimesheetUserContainer.propTypes = {
  history: PropTypes.object
}

TimesheetUserContainer.defaultProps = {
  history: {},
}

export default TimesheetUserContainer;