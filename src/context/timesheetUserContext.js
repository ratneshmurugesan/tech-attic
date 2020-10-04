import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  getTimesheetUserWeekData,
  getTimesheetUserMetaData,
} from 'services/timesheetUserService';

// import {
//   checkResponseFailure,
// } from 'utils/global';

import {
  getFilteredData
} from 'utils/timesheetUserUtils';

// import ParentContext from 'context/parentContext';

const TimesheetUserContext = createContext({});

const TimesheetUserContextWrapper = ({ children }) => {

  // const { permissions } = useContext(ParentContext);
  const [timesheetContextData, setTimesheetContextData] = useState({});
  const [isContextLoading, setContextLoading] = useState(false);
  const [errorMessagePopup, setErrMessage] = useState(false);
    
  useEffect(_ => {
    (async _ => {
      setContextLoading(true);
      try {
        const body = { action: 'Custom', weekString: 'September 21, 2020 - September 27, 2020' };

        const [
          { timesheetMetaData },
          timesheetWeekData
        ] = await Promise.all([
          getTimesheetUserMetaData().catch(err => { throw err }),
          getTimesheetUserWeekData(body).catch(err => { throw err })
        ]);

        console.log('useEffect context', { timesheetMetaData, timesheetWeekData });

        const filteredTsWeekData = getFilteredData(timesheetWeekData);

        // if (
        //   checkResponseFailure(timesheetMetaData) ||
        //   checkResponseFailure(timesheetWeekData) ) {
        //   setErrMessage(timesheetMetaData);
        // }

        setTimesheetContextData(timesheetContextData => ({
          ...timesheetContextData,
          ...{ timesheetMetaData },
          ...filteredTsWeekData,
        }));

        setContextLoading(false);

      } catch (err) {
        throw err;
      }
    })();
}, []);

  const contextValue = {
    ...timesheetContextData,
    isContextLoading,
    errorMessagePopup,
    setErrMessage,
    setTimesheetContextData,
    getFilteredData,
    setContextLoading,
  };

  return (
    <TimesheetUserContext.Provider
      value={contextValue}>
      {children}
    </TimesheetUserContext.Provider>
  )
};

TimesheetUserContext.Wrapper = TimesheetUserContextWrapper;

TimesheetUserContext.propTypes = {
  children: PropTypes.object,
};

TimesheetUserContext.defaultProps = {
  children: {},
}

export default TimesheetUserContext;
