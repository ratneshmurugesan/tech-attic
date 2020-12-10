import React, { createContext } from "react";
import PropTypes from "prop-types";

import useFilters from "hooks/useFilters";

import { dashboardNames } from "config/filtersConfig";

const ExecutiveContext = createContext({});
ExecutiveContext.Wrapper = {};

const Provider = ExecutiveContext.Provider;

const ExecutiveContextWrapper = ({ children }) => {
  const [filters, selectedFilters, setSelectedFilters, dates] = useFilters(
    dashboardNames.EXECUTIVE,
    true
  );

  const contextStateObj = {
    contextName: "Executive-Context",
    filters,
    selectedFilters,
    setSelectedFilters,
    dates,
  };

  return <Provider value={{ ...contextStateObj }}>{children}</Provider>;
};

ExecutiveContext.Wrapper = ExecutiveContextWrapper;

ExecutiveContextWrapper.propTypes = {
  children: PropTypes.object,
};

ExecutiveContextWrapper.defaultProps = {
  children: {},
};

export default ExecutiveContext;
