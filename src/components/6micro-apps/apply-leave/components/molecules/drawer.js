import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import CloseSharp from "@material-ui/icons/CloseSharp";

import ApplyNew from "../organisms/applyNew";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    justifyContent: "flex-end",
  },
}));

const CustomDrawer = ({ dispatch, storeState }) => {
  const classes = useStyles();

  const handleDrawerOpen = () => {
    dispatch({
      type: "toggleDrawer",
      isApplyNewVisible: !storeState.isApplyNewVisible,
    });
  };

  const DrawerContents = () => (
    <>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerOpen}>
          <CloseSharp />
        </IconButton>
      </div>
      <ApplyNew dispatch={dispatch} storeState={storeState} />
    </>
  );

  return (
    <Drawer
      anchor={"right"}
      open={storeState.isApplyNewVisible}
      onClose={handleDrawerOpen}
    >
      <DrawerContents />
    </Drawer>
  );
};

export default CustomDrawer;
