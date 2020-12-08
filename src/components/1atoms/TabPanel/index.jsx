import PropTypes from "prop-types";

const TabPanel = ({ whenActive, children, activeTabId }) =>
  activeTabId === whenActive ? children : null;

TabPanel.propTypes = {
  whenActive: PropTypes.number,
  children: PropTypes.array,
  activeTabId: PropTypes.number,
};

TabPanel.defaultProps = {
  whenActive: 0,
  children: [],
  activeTabId: 0,
};

export default TabPanel;
