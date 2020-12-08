import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Paper } from "@material-ui/core";

import SearchContext from "context/SearchContext";

import ContainerLoader from "components/1atoms/ContainerLoader";
import TabPanel from "components/1atoms/TabPanel";
import SimpleTable from "components/2molecules/SimpleTable";

import { DASHBOARD_DATA_MOCK } from "constants/urlConstants";

import { generateParams, generateTitle } from "helpers/utils";

import useStyles from "./styles";

const tableMetricsColln = [
  "spend",
  "ctr",
  "cpc",
  "leads",
  "prospects",
  "va",
  "cpva",
];

const SearchCreative = ({ activeTabId }) => {
  const { filters, selectedFilters } = useContext(SearchContext);
  const classes = useStyles();

  if (!selectedFilters || !filters)
    return <ContainerLoader message={"Initiating dashboard..."} />;

  return (
    <TabPanel whenActive={1} activeTabId={activeTabId}>
      <Paper className={classes.container}>
        <SimpleTable
          apiDetails={{
            apiUrl: DASHBOARD_DATA_MOCK,
            apiMethod: "GET",
            apiOptions: {
              params: generateParams(selectedFilters, "search", "headline_one"),
            },
          }}
          chartDetails={{
            tableOf: "headline_one",
            highlightedMetrics: ["cpl", "cpa", "cpva"],
            tableHeadersSortOrder: ["headline_one", ...tableMetricsColln],
            title: generateTitle(
              "Performance by Headline One",
              selectedFilters.dates,
              classes
            ),
          }}
        />
      </Paper>
      <Paper className={classes.container}>
        <SimpleTable
          apiDetails={{
            apiUrl: DASHBOARD_DATA_MOCK,
            apiMethod: "GET",
            apiOptions: {
              params: generateParams(selectedFilters, "search", "headline_two"),
            },
          }}
          chartDetails={{
            tableOf: "headline_two",
            highlightedMetrics: ["cpl", "cpa", "cpva"],
            tableHeadersSortOrder: ["headline_two", ...tableMetricsColln],
            title: generateTitle(
              "Performance by Headline Two",
              selectedFilters.dates,
              classes
            ),
          }}
        />
      </Paper>
      <Paper className={classes.container}>
        <SimpleTable
          apiDetails={{
            apiUrl: DASHBOARD_DATA_MOCK,
            apiMethod: "GET",
            apiOptions: {
              params: generateParams(
                selectedFilters,
                "search",
                "headline_three"
              ),
            },
          }}
          chartDetails={{
            tableOf: "headline_three",
            highlightedMetrics: ["cpl", "cpa", "cpva"],
            tableHeadersSortOrder: ["headline_three", ...tableMetricsColln],
            title: generateTitle(
              "Performance by Headline Three",
              selectedFilters.dates,
              classes
            ),
          }}
        />
      </Paper>
      <Paper className={classes.container}>
        <SimpleTable
          apiDetails={{
            apiUrl: DASHBOARD_DATA_MOCK,
            apiMethod: "GET",
            apiOptions: {
              params: generateParams(
                selectedFilters,
                "search",
                "description_one"
              ),
            },
          }}
          chartDetails={{
            tableOf: "description_one",
            highlightedMetrics: ["cpl", "cpa", "cpva"],
            tableHeadersSortOrder: ["description_one", ...tableMetricsColln],
            title: generateTitle(
              "Performance by Description One",
              selectedFilters.dates,
              classes
            ),
          }}
        />
      </Paper>
      <Paper className={classes.container}>
        <SimpleTable
          apiDetails={{
            apiUrl: DASHBOARD_DATA_MOCK,
            apiMethod: "GET",
            apiOptions: {
              params: generateParams(
                selectedFilters,
                "search",
                "description_two"
              ),
            },
          }}
          chartDetails={{
            tableOf: "description_two",
            highlightedMetrics: ["cpl", "cpa", "cpva"],
            tableHeadersSortOrder: ["description_two", ...tableMetricsColln],
            title: generateTitle(
              "Performance by Description Two",
              selectedFilters.dates,
              classes
            ),
          }}
        />
      </Paper>
    </TabPanel>
  );
};

SearchCreative.defaultProps = {
  activeTabId: 1,
};

SearchCreative.propTypes = {
  activeTabId: PropTypes.number,
};

export default SearchCreative;
