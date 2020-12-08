import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import StyledLabel from "components/1atoms/StyledLabel";
import StyledTableBody from "components/1atoms/StyledTableBody";

const useStyles = makeStyles(theme => ({
  body: {
    border: theme.borderLight,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

export default function StyledTable({ name, dataObj, color, title }) {
  const classes = useStyles();
  return (
    <div key={name}>
      <StyledLabel key={`${title}-table-label`} color={color} name={name} />
      <div className={classes.body}>
        <StyledTableBody
          key={`${title}-table-body`}
          dataObj={dataObj}
          name={name}
        />
      </div>
    </div>
  );
}

StyledTable.defaultProps = {
  name: "",
  dataObj: {},
  color: "",
  title: "",
};

StyledTable.propTypes = {
  name: PropTypes.string,
  dataObj: PropTypes.object,
  color: PropTypes.string,
  title: PropTypes.string,
};
