import React from "react";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  name: {
    padding: theme.spacing(4),
    border: "1px solid rgba(0, 0, 0, 0.2)",
    fontWeight: 700,
    textAlign: "center",
  },
}));

export default function StyledLabel({ name, color }) {
  const classes = useStyles();

  return (
    <div
      className={classes.name}
      key={`${name}-label`}
      style={{ backgroundColor: color }}
    >
      {name.toUpperCase()}
    </div>
  );
}

StyledLabel.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

StyledLabel.defaultProps = {
  name: "",
  color: "",
};
