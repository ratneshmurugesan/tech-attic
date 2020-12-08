import React, { createContext } from "react";
import PropTypes from "prop-types";

import useFilters from "hooks/useFilters";

import { dashboardNames } from "config/filtersConfig";

const SocialContext = createContext({});
SocialContext.Wrapper = {};

const Provider = SocialContext.Provider;

const SocialContextWrapper = ({ children }) => {
  const [filters, selectedFilters, setSelectedFilters, dates] = useFilters(
    dashboardNames.SOCIAL,
    true
  );

  const contextStateObj = {
    contextName: "Social-Context",
    filters,
    selectedFilters,
    setSelectedFilters,
    dates,
  };

  return <Provider value={{ ...contextStateObj }}>{children}</Provider>;
};

SocialContext.Wrapper = SocialContextWrapper;

SocialContextWrapper.propTypes = {
  children: PropTypes.object,
};

SocialContextWrapper.defaultProps = {
  children: {},
};

export default SocialContext;
