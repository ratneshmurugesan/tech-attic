import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppliedList from "./appliedList";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 250,
    backgroundColor: theme.palette.background.paper,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    boxShadow: " 10px 0 15px -2px rgba(0, 0, 0, 0.06)",
  },
}));

const SideNavList = ({ storeState }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Leaves" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="New Comments" />
        </ListItem>
      </List>
      <AppliedList storeState={storeState} />
    </div>
  );
};

export default SideNavList;
