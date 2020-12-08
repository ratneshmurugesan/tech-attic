import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";

import SearchContext from "context/SearchContext";

import ContainerLoader from "components/1atoms/ContainerLoader";
import Filters from "components/2molecules/Filters";
import TabSwitcher from "components/2molecules/TabSwitcher";
import SearchSummary from "components/6micro-apps/dashboard-app//SearchSummary";
import SearchCreative from "components/6micro-apps/dashboard-app//SearchCreative";

import { searchFilters, dashboardNames } from "config/filtersConfig";

import useStyles from "./styles";

const tabPages = [
  { label: "Summary", id: 0, disabled: false, page: SearchSummary },
  { label: "Creative", id: 1, disabled: false, page: SearchCreative },
];

const SearchDashboard = _ => {
  const { filters, dates, selectedFilters, setSelectedFilters } = useContext(
    SearchContext
  );

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
            config={searchFilters}
            dates={dates}
            filters={filters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            reportType={dashboardNames.SEARCH}
          />
        </Grid>
        <Grid item xs={12}>
          <TabSwitcher tabPages={tabPages} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchDashboard;
