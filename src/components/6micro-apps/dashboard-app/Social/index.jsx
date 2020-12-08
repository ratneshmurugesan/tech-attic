import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";

import SocialContext from "context/SocialContext";

import ContainerLoader from "components/1atoms/ContainerLoader";
import Filters from "components/2molecules/Filters";
import TabSwitcher from "components/2molecules/TabSwitcher";
import SocialSummary from "components/6micro-apps/dashboard-app//SocialSummary";
import SocialCreative from "components/6micro-apps/dashboard-app//SocialCreative";

import { socialFilters, dashboardNames } from "config/filtersConfig";

import useStyles from "./styles";

const tabPages = [
  { label: "Summary", id: 0, disabled: false, page: SocialSummary },
  { label: "Creative", id: 1, disabled: false, page: SocialCreative },
];

const SocialDashboard = _ => {
  const { filters, dates, selectedFilters, setSelectedFilters } = useContext(
    SocialContext
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
            config={socialFilters}
            dates={dates}
            filters={filters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            reportType={dashboardNames.SOCIAL}
          />
        </Grid>
        <Grid item xs={12}>
          <TabSwitcher tabPages={tabPages} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SocialDashboard;
