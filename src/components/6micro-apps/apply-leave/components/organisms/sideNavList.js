import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 250,
    backgroundColor: theme.palette.background.paper,
  },
}));

const SideNavList = () => {
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
    </div>
  );
};

export default SideNavList;
