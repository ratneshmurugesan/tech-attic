import React, { createContext } from "react";
import PropTypes from "prop-types";

import useFilters from "hooks/useFilters";

import { dashboardNames } from "config/filtersConfig";

const DmaContext = createContext({});
DmaContext.Wrapper = {};

const Provider = DmaContext.Provider;

const DmaContextWrapper = ({ children }) => {
  const [
    filters,
    selectedFilters,
    setSelectedFilters,
    dates,
    hasErrored,
  ] = useFilters(dashboardNames.DMA, true);

  const contextStateObj = {
    contextName: "Dma-Context",
    filters,
    selectedFilters,
    setSelectedFilters,
    dates,
    hasErrored,
  };

  return <Provider value={{ ...contextStateObj }}>{children}</Provider>;
};

DmaContext.Wrapper = DmaContextWrapper;

DmaContextWrapper.propTypes = {
  children: PropTypes.object,
};

DmaContextWrapper.defaultProps = {
  children: {},
};

export default DmaContext;
