import React from "react";

import Grid from "@material-ui/core/Grid";

import RoutesComp from "components/2molecules/RoutesComp";

import useStyles from "./styles";

const Home = _ => {
  const classes = useStyles();
  return (
    <div className={classes.homeContainer}>
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12} xl={12} item>
          <RoutesComp />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
