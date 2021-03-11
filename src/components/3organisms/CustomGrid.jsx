import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import CustomDrawer from "./CustomDrawer";

const useStyles_grid = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "5px",
    position: "relative",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#424242",
  },
}));

function CustomGrid() {
  const classes = useStyles_grid();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl" style={{ backgroundColor: "#333" }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <CustomDrawer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CustomGrid;
