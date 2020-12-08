import React from "react";

import useStyles from "./style";

const ShimmerLoader = ({ height, width }) => {
  const classes = useStyles();
  return <div className={classes.shimmer} style={{ height, width }} />;
};

export default ShimmerLoader;
