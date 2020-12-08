import GridMenu from "components/1atoms/GridMenu";
import PropTypes from "prop-types";
import React from "react";

const GridMenuExample = ({ items, history }) => (
  <GridMenu items={items} history={history} />
);

GridMenuExample._meta = {
  category: "Material UI",
  section: "GridMenu",
  description: "Shows GridMenu",
};

GridMenuExample.propTypes = {
  items: PropTypes.array,
};

GridMenuExample.defaultProps = {
  items: [],
};

export default GridMenuExample;
