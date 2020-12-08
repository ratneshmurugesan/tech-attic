import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import { useHistory } from "react-router-dom";
import { DASHBOARD_LINKS } from "constants/dashboardConstants";

import useStyles from "./styles";

const isActive = (location, page, pageKey, hasNestedPages) => {
  if (hasNestedPages) {
    return location.includes(pageKey);
  }
  return location === page;
};

const SidebarMenu = () => {
  const classes = useStyles();

  let history = useHistory();

  const handlePageChange = (pageUrl, e) => {
    history.push(pageUrl);
    // localStorage.removeItem("filters");
  };

  return (
    <div className={classes.sidebarMenu}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.list}
      >
        {DASHBOARD_LINKS.map(
          dashboardObj =>
            dashboardObj.isEnabled && (
              <Tooltip
                title={dashboardObj.title}
                key={dashboardObj.url}
                placement="right"
              >
                <ListItem
                  button
                  className={`${classes.listItem} ${
                    isActive(
                      window.location.pathname,
                      dashboardObj.url,
                      dashboardObj.pageKey,
                      dashboardObj.hasNestedPages
                    )
                      ? classes.active
                      : null
                  }`}
                  onClick={e => handlePageChange(dashboardObj.url, e)}
                >
                  {dashboardObj.icon}
                </ListItem>
              </Tooltip>
            )
        )}
      </List>
    </div>
  );
};

export default SidebarMenu;
