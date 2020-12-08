import React, { useContext } from "react";

import { Grid } from "@material-ui/core";

import DmaContext from "context/DmaContext";

import MapChart from "components/2molecules/MapChart";
import Filters from "components/2molecules/Filters";
import ContainerLoader from "components/1atoms/ContainerLoader";
import OnErrorReload from "components/1atoms/OnErrorReload";

import { generateParams, generateTitle } from "helpers/utils";

import { dmaFilters, dashboardNames } from "config/filtersConfig";

import { DASHBOARD_DATA_MOCK } from "constants/urlConstants";

import usa from "./map";

import useStyles from "./styles";

const DmaDashboard = () => {
  const classes = useStyles();

  const {
    filters,
    dates,
    selectedFilters,
    setSelectedFilters,
    hasErrored,
  } = useContext(DmaContext);

  if (hasErrored)
    return (
      <OnErrorReload message="Error occurred while loading Page. <br /> Click Reload button to try again." />
    );
  if (!filters || !selectedFilters)
    return <ContainerLoader message={"Initiating dashboard..."} />;
  return (
    <div className={classes.dashboardContainer}>
      <Grid container direction="column" spacing={4}>
        <Grid item xs={12}>
          <Filters
            config={dmaFilters}
            dates={dates}
            filters={filters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            reportType={dashboardNames.DMA}
          />
          <MapChart
            apiDetails={{
              apiUrl: DASHBOARD_DATA_MOCK,
              apiMethod: "GET",
              apiOptions: {
                params: generateParams(
                  selectedFilters,
                  "dma",
                  "report_by_region"
                ),
              },
            }}
            chartDetails={{
              title: generateTitle(
                "DMA report",
                selectedFilters.dates,
                classes
              ),
              map: usa,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default DmaDashboard;
