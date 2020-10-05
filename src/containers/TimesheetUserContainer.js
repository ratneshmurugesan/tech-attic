import React from 'react';
import PropTypes from 'prop-types';
import TimesheetUserContext from 'context/timesheetUserContext';
import TimesheetUser from 'components/4pages/TimesheetUser';

const TimesheetUserContainer = (props) => {
  return (
    <TimesheetUserContext.Wrapper {...props}>
      <TimesheetUser />
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