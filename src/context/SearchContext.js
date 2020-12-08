import React, { createContext } from "react";
import PropTypes from "prop-types";

import useFilters from "hooks/useFilters";

import { dashboardNames } from "config/filtersConfig";

const SearchContext = createContext({});
SearchContext.Wrapper = {};

const Provider = SearchContext.Provider;

const SearchContextWrapper = ({ children }) => {
  const [filters, selectedFilters, setSelectedFilters, dates] = useFilters(
    dashboardNames.SEARCH,
    true
  );

  const contextStateObj = {
    contextName: "Search-Context",
    filters,
    selectedFilters,
    setSelectedFilters,
    dates,
  };

  return <Provider value={{ ...contextStateObj }}>{children}</Provider>;
};

SearchContext.Wrapper = SearchContextWrapper;

SearchContextWrapper.propTypes = {
  children: PropTypes.object,
};

SearchContextWrapper.defaultProps = {
  children: {},
};

export default SearchContext;
