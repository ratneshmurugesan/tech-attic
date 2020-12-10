import React, { useState } from "react";
import PropTypes from "prop-types";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import useStyles from "./styles";

const TabSwitcher = ({ tabPages }) => {
  const classes = useStyles();

  const [activeTabId, setActiveTab] = useState(0);

  const handleTabClick = (_, activeTabId) => {
    setActiveTab(activeTabId);
  };

  return (
    <>
      <Tabs
        className={classes.tabs}
        value={activeTabId}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleTabClick}
      >
        {tabPages.map(tabPage => (
          <Tab
            className={classes.tab}
            key={tabPage.label}
            disabled={tabPage.disabled}
            label={tabPage.label}
            active={tabPage.id}
          />
        ))}
      </Tabs>
      {tabPages.map(tabPage => {
        const Component = tabPage.page;
        return <Component key={tabPage.label} activeTabId={activeTabId} />;
      })}
    </>
  );
};

TabSwitcher.defaultProps = {
  tabPages: [],
};

TabSwitcher.propTypes = {
  tabPages: PropTypes.array,
};

export default TabSwitcher;
