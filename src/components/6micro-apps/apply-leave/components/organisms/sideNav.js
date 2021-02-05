import React from "react";
import clsx from "clsx";

import ScheduleIcon from "@material-ui/icons/Schedule";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";

import SideNavList from "./sideNavList";

import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  sideNav: {
    display: "grid",
    gridTemplateRows: "repeat( 3, 75px )",
    padding: 15,
    placeItems: "center",
    backgroundColor: "#fff",
    border: "1px solid #d2d2d2",
    "& div:last-child": {
      display: "flex",
      alignSelf: "flex-end",
    },
    position: "sticky",
    left: 0,
    zIndex: 1,
  },
  sideNavMain: {
    display: "flex",
    width: drawerWidth,
    flexShrink: 0,
    transition: theme.transitions.create(["margin", "opacity"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    opacity: 0,
  },
  sideNavMainShift: {
    transition: theme.transitions.create(["opacity", "margin"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    opacity: 1,
  },
}));

const SideNav = ({
  storeState,
  handlePersistentDrawer,
  isPersistentDrawerOpen,
}) => {
  const classes = useStyles();

  let totalComments = 0;
  storeState.data.forEach((obj) => {
    totalComments += obj.comment ? obj.comment.length : 0;
  });

  const unReadTotalComments = totalComments;

  return (
    <>
      <div className={classes.sideNav}>
        <Avatar alt="PLogo" src="assets/phases/pLogo.png" />

        <IconButton onClick={handlePersistentDrawer} component="span">
          <Badge badgeContent={unReadTotalComments} color="error">
            <CalendarTodayIcon />
          </Badge>
        </IconButton>
        <ScheduleIcon />
        <Avatar alt="personImage" src="assets/phases/pLogo.png" />
      </div>
      <div
        className={clsx(
          classes.sideNavMain,
          isPersistentDrawerOpen && classes.sideNavMainShift
        )}
      >
        <SideNavList storeState={storeState} />
      </div>
    </>
  );
};

export default SideNav;
