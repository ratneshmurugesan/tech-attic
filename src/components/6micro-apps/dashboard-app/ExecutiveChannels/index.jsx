import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Paper } from "@material-ui/core";

import ExecutiveContext from "context/ExecutiveContext";

import TabularReport from "components/2molecules/TabularReport";
import TabPanel from "components/1atoms/TabPanel";
import ContainerLoader from "components/1atoms/ContainerLoader";
import ChartWithFilters from "components/2molecules/pgChartWithFilters";
import SimpleTable from "components/2molecules/SimpleTable";

import { DASHBOARD_DATA_MOCK } from "constants/urlConstants";

import { generateParams, generateTitle } from "helpers/utils";

import useStyles from "./styles";

const ExecutiveChannels = ({ activeTabId }) => {
  const { filters, selectedFilters } = useContext(ExecutiveContext);
  const classes = useStyles();

  const getShimmerProps = _ => {
    let filterOptionsLength = 0;
    if (selectedFilters && selectedFilters.channels) {
      filterOptionsLength = Object.keys(selectedFilters.channels).length;
    } else {
      filterOptionsLength = Object.keys(filters.channels).length;
    }
    const shimmerPropObj = {
      filterOptionsLength,
    };

    return shimmerPropObj;
  };

  if (!selectedFilters || !filters)
    return <ContainerLoader message={"Initiating dashboard..."} />;

  return (
    <TabPanel whenActive={0} activeTabId={activeTabId}>
      <Paper className={classes.container}>
        <TabularReport
          apiDetails={{
            apiUrl: DASHBOARD_DATA_MOCK,
            apiMethod: "GET",
            apiOptions: {
              params: generateParams(
                selectedFilters,
                "executive",
                "channels_tablereport"
              ),
            },
          }}
          chartDetails={{
            title: generateTitle(
              "Channels Summary",
              selectedFilters.dates,
              classes
            ),
            cardsOrder: [
              { name: "Search", color: "#7ed6df" },
              { name: "Social", color: "#ff7979" },
              { name: "Direct", color: "#ffbe76" },
              { name: "Programmatic", color: "#10ac84" },
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
      <Paper className={classes.container}>
        <ChartWithFilters
          apiDetails={{
            apiUrl: DASHBOARD_DATA_MOCK,
            apiMethod: "GET",
            apiOptions: {
              params: {
                ...generateParams(
                  selectedFilters,
                  "executive",
                  "channels_metrics_timeline"
                ),
                ...{ order_by: ["time_aggregate | desc"] },
              },
              body: {},
              reportType: "name",
            },
            apiResponseKey: "data",
          }}
          chartDetails={{
            title: generateTitle(
              "Channels and Metrics timeline",
              selectedFilters.dates,
              classes
            ),
          }}
          filterOptions={{
            dimensions: [filters.channels],
            metrics: [
              "visits",
              "spend",
              "leads",
              "prospects",
              "applications",
              "cpl",
              "cpv",
              "cpp",
              "cpa",
              "cpva",
            ],
          }}
        />
      </Paper>
      <Paper className={classes.container}>
        <SimpleTable
          apiDetails={{
            apiUrl: DASHBOARD_DATA_MOCK,
            apiMethod: "GET",
            apiOptions: {
              params: {
                ...generateParams(
                  selectedFilters,
                  "executive",
                  "channels_metrics_timeline"
                ),
                ...{ order_by: ["time_aggregate | desc"] },
              },
            },
          }}
          chartDetails={{
            tableOf: "channel",
            highlightedMetrics: ["cpl", "cpv", "cpp"],
            tableHeadersSortOrder: [
              selectedFilters.time_aggregate,
              "name",
              "leads",
              "visits",
              "spend",
              "prospects",
              "applications",
              "cpv",
              "cpl",
              "cpp",
              "cpa",
              "cpva",
            ],
            title: generateTitle(
              "Channels and Metrics timeline",
              selectedFilters.dates,
              classes
            ),
          }}
        />
      </Paper>
    </TabPanel>
  );
};

ExecutiveChannels.defaultProps = {
  activeTabId: 0,
};

ExecutiveChannels.propTypes = {
  activeTabId: PropTypes.number,
};

export default ExecutiveChannels;
