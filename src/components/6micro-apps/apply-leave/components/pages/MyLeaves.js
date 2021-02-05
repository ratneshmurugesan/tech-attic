import React from "react";
import clsx from "clsx";

import Typography from "@material-ui/core/Typography";

import ViewSwitcher from "../organisms/viewSwitcher";
import MainButtonGroup from "../organisms/buttonGroup";
import CustomDrawer from "../molecules/drawer";

import useStyles from "./style";

const MyLeaves = ({ isPersistentDrawerOpen, dispatch, storeState }) => {
  const classes = useStyles();

  return (
    <main
      className={clsx(classes.mainWrapper, {
        [classes.contentShift]: isPersistentDrawerOpen,
      })}
    >
      <div className={classes.appMainTop}>
        <Typography variant="h5">
          My Leaves
        </Typography>
        <>
          <MainButtonGroup dispatch={dispatch} storeState={storeState} />
          <CustomDrawer dispatch={dispatch} storeState={storeState} />
        </>
      </div>
      <div className={classes.appMainBody}>
        <ViewSwitcher dispatch={dispatch} storeState={storeState} />
      </div>
    </main>
  );
};
export default MyLeaves;
