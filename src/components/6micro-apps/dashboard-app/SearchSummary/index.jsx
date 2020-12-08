import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Paper } from "@material-ui/core";

import SearchContext from "context/SearchContext";

import TabularReport from "components/2molecules/TabularReport";
import TabPanel from "components/1atoms/TabPanel";
import ContainerLoader from "components/1atoms/ContainerLoader";
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
  "cvr",
  "cpva",
];

const SearchSummary = ({ activeTabId }) => {
  const { filters, selectedFilters } = useContext(SearchContext);
  const classes = useStyles();
  const updatedSelectedFilters = {
    ...selectedFilters,
    categories: [
      { id: 3, name: "CLP" },
      { id: 2, name: "Virtual" },
      { id: 1, name: "Category / Program" },
    ],
  };

  const getShimmerProps = _ => {
    let filterOptionsLength = 0;
    if (updatedSelectedFilters && updatedSelectedFilters.categories) {
      filterOptionsLength = Object.keys(updatedSelectedFilters.categories)
        .length;
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
    <TabPanel whenActive={0} activeTabId={activeTabId}>
      <Paper className={classes.container}>
        <TabularReport
          apiDetails={{
            apiUrl: DASHBOARD_DATA_MOCK,
            apiMethod: "GET",
            apiOptions: {
              params: generateParams(
                updatedSelectedFilters,
                "search",
                "categories_tablereport"
              ),
            },
          }}
          chartDetails={{
            title: generateTitle(
              "Categories",
              updatedSelectedFilters.dates,
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
      <Paper className={classes.container}>
        <SimpleTable
          apiDetails={{
            apiUrl: DASHBOARD_DATA_MOCK,
            apiMethod: "GET",
            apiOptions: {
              params: generateParams(selectedFilters, "search", "brands"),
            },
          }}
          chartDetails={{
            tableOf: "brand",
            highlightedMetrics: ["cpl", "ctr", "cpva"],
            tableHeadersSortOrder: ["brand", ...tableMetricsColln],
            title: generateTitle(
              "Performance by Brand v/s Non-Brand",
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
              params: generateParams(selectedFilters, "search", "engines"),
            },
          }}
          chartDetails={{
            tableOf: "engine",
            highlightedMetrics: ["cpl", "ctr", "cpva"],
            tableHeadersSortOrder: ["engine", ...tableMetricsColln],
            title: generateTitle(
              "Performance by Engine",
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
                "keyword_categories"
              ),
            },
          }}
          chartDetails={{
            tableOf: "keywordCategory",
            highlightedMetrics: ["cpl", "ctr", "cpva"],
            tableHeadersSortOrder: ["keyword_category", ...tableMetricsColln],
            title: generateTitle(
              "Performance by Keyword Category",
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
              params: generateParams(selectedFilters, "search", "keywords"),
            },
          }}
          chartDetails={{
            tableOf: "keyword",
            highlightedMetrics: ["cpl", "ctr", "cpva"],
            tableHeadersSortOrder: [
              "keyword",
              "keyword_category",
              ...tableMetricsColln,
            ],
            title: generateTitle(
              "Performance by Keywords",
              selectedFilters.dates,
              classes
            ),
          }}
        />
      </Paper>
    </TabPanel>
  );
};

SearchSummary.defaultProps = {
  activeTabId: 0,
};

SearchSummary.propTypes = {
  activeTabId: PropTypes.number,
};

export default SearchSummary;
