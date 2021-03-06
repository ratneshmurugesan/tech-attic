import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Paper } from "@material-ui/core";

import ExecutiveContext from "context/ExecutiveContext";

import TabularReport from "components/2molecules/TabularReport";
import TabPanel from "components/1atoms/TabPanel";
import ContainerLoader from "components/1atoms/ContainerLoader";

// import ChartWithFilters from "components/2molecules/pgChartWithFilters";
// import SimpleTable from "components/2molecules/SimpleTable";

import { DASHBOARD_DATA_MOCK } from "constants/urlConstants";

import { generateParams, generateTitle } from "helpers/utils";

import useStyles from "./styles";

const ExecutiveCategories = ({ activeTabId }) => {
  const { filters, selectedFilters } = useContext(ExecutiveContext);
  const classes = useStyles();

  const getShimmerProps = _ => {
    let filterOptionsLength = 0;
    if (selectedFilters && selectedFilters.categories) {
      filterOptionsLength = Object.keys(selectedFilters.categories).length;
    } else {
      filterOptionsLength = Object.keys(filters.categories).length;
    }
    const shimmerPropObj = {
      filterOptionsLength,
    };

    return shimmerPropObj;
  };

  if (!selectedFilters || !filters)
    return <ContainerLoader message={"Initiating dashboard..."} />;

  return (
    <TabPanel whenActive={1} activeTabId={activeTabId}>
      <Paper className={classes.container}>
        <TabularReport
          apiDetails={{
            apiUrl: DASHBOARD_DATA_MOCK,
            apiMethod: "GET",
            apiOptions: {
              params: generateParams(
                selectedFilters,
                "executive",
                "categories_tablereport"
              ),
            },
          }}
          chartDetails={{
            title: generateTitle(
              "Categories Summary",
              selectedFilters.dates,
              classes
            ),
            cardsOrder: [
              { name: "Category / Program", color: "#10ac84" },
              { name: "Virtual", color: "#ffbe76" },
              { name: "CLP", color: "#ff7979" },
            ],
            metricsOrder: [
              "spend",
              "leads",
              "prospects",
              "applications",
              "va",
              "cpl",
              "cpp",
              "cpa",
              "cpva",
            ],
          }}
          shimmerDetails={getShimmerProps()}
        />
      </Paper>
    </TabPanel>
  );
};

ExecutiveCategories.defaultProps = {
  activeTabId: 0,
};

ExecutiveCategories.propTypes = {
  activeTabId: PropTypes.number,
};

export default ExecutiveCategories;
