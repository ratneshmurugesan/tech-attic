import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";

import ExecutiveContext from "context/ExecutiveContext";

import ContainerLoader from "components/1atoms/ContainerLoader";
import CardGrid from "components/2molecules/CardGrid";
import Filters from "components/2molecules/Filters";
import TabSwitcher from "components/2molecules/TabSwitcher";
import ExecutiveChannels from "components/6micro-apps/dashboard-app//ExecutiveChannels";
import ExecutiveCategories from "components/6micro-apps/dashboard-app//ExecutiveCategories";

import { executiveFilters, dashboardNames } from "config/filtersConfig";

import { DASHBOARD_DATA_MOCK } from "constants/urlConstants";
import { generateParams } from "helpers/utils";

import useStyles from "./styles";

const tabPages = [
  { label: "Channels", id: 0, disabled: false, page: ExecutiveChannels },
  { label: "Categories", id: 1, disabled: false, page: ExecutiveCategories },
];

const ExecutiveDashboard = _ => {
  const { filters, selectedFilters, setSelectedFilters, dates } = useContext(
    ExecutiveContext
  );

  // console.log({ filters, selectedFilters, setSelectedFilters, dates });

  const classes = useStyles();

  if (!filters || !selectedFilters)
    return (
      <div className={classes.dashboardContainer}>
        <Grid container direction="column" spacing={4}>
          <Grid item xs={12}>
            <ContainerLoader message={"Initiating dashboard..."} />
          </Grid>
        </Grid>
      </div>
    );

  return (
    <div className={classes.dashboardContainer}>
      <Grid container direction="column" spacing={4}>
        <Grid item xs={12}>
          <Filters
            config={executiveFilters}
            dates={dates}
            filters={filters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            reportType={dashboardNames.EXECUTIVE}
          />
        </Grid>
        <Grid item xs={12}>
          <CardGrid
            apiDetails={{
              apiUrl: DASHBOARD_DATA_MOCK,
              apiMethod: "GET",
              apiResponseKey: "data",
              apiOptions: {
                params: generateParams(
                  selectedFilters,
                  "executive",
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
        </Grid>
        <Grid item xs={12}>
          <TabSwitcher tabPages={tabPages} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ExecutiveDashboard;
