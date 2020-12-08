import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Paper } from "@material-ui/core";

import SocialContext from "context/SocialContext";

import TabularReport from "components/2molecules/TabularReport";
import TabPanel from "components/1atoms/TabPanel";
import ContainerLoader from "components/1atoms/ContainerLoader";
import CardGrid from "components/2molecules/CardGrid";
import NestedTableWithLegend from "components/2molecules/NestedTableWithLegend";

import { DASHBOARD_DATA_MOCK } from "constants/urlConstants";

import { generateParams, generateTitle } from "helpers/utils";

import useStyles from "./styles";

const SocialSummary = ({ activeTabId }) => {
  const { filters, selectedFilters } = useContext(SocialContext);
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
      <CardGrid
        apiDetails={{
          apiUrl: DASHBOARD_DATA_MOCK,
          apiMethod: "GET",
          apiResponseKey: "data",
          apiOptions: {
            params: generateParams(
              updatedSelectedFilters,
              "social",
              "card_summary"
            ),
          },
        }}
        chartDetails={{
          chartOptions: {
            style: {
              height: "80px",
              width: "80px",
              top: "-5px",
            },
          },
          cardsOrder: [
            {
              key: "spend",
              showPieChart: true,
              chartKeys: ["spend", "spend_target"],
              colors: ["#6ab04c", "#686de0"],
            },
            {
              key: "applications",
              showPieChart: true,
              chartKeys: ["applications", "applications_target"],
              colors: ["#6ab04c", "#686de0"],
            },
            {
              key: "va",
              showPieChart: false,
              chartKeys: [],
            },
            {
              key: "cpva",
              showPieChart: false,
              chartKeys: [],
            },
            {
              key: "leads",
              showPieChart: false,
              chartKeys: [],
            },
            {
              key: "prospects",
              showPieChart: false,
              chartKeys: [],
            },
            {
              key: "cpl",
              showPieChart: false,
              chartKeys: [],
            },
            {
              key: "cpc",
              showPieChart: false,
              chartKeys: [],
            },
          ],
        }}
      />
      <Paper className={classes.container}>
        <TabularReport
          apiDetails={{
            apiUrl: DASHBOARD_DATA_MOCK,
            apiMethod: "GET",
            apiOptions: {
              params: generateParams(
                updatedSelectedFilters,
                "social",
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
              { name: "CLP", color: "#ff7979" },
              { name: "Virtual", color: "#ffbe76" },
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
        <NestedTableWithLegend
          apiDetails={{
            apiUrl: DASHBOARD_DATA_MOCK,
            apiMethod: "GET",
            apiOptions: {
              params: generateParams(
                selectedFilters,
                "social",
                "program_summary",
                "spend|desc"
              ),
            },
          }}
          download={false}
          chartDetails={{
            tableOf: "business",
            highlightedMetrics: ["cpl", "ctr", "cpp", "cpva"],
            tableHeadersSortOrder: [
              "program",
              "spend",
              "ctr",
              "leads",
              "cpl",
              "prospects",
              "cpp",
              "va",
              "cpva",
            ],
            title: generateTitle(
              "Program Summary",
              selectedFilters.dates,
              classes
            ),
            legendTitle: "Business line",
          }}
        />
      </Paper>
    </TabPanel>
  );
};

SocialSummary.defaultProps = {
  activeTabId: 0,
};

SocialSummary.propTypes = {
  activeTabId: PropTypes.number,
};

export default SocialSummary;
