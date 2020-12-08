import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import { dataConfig } from "config/pgChartConfig";
import { numberFormatter } from "helpers/utils";

const useStyles = makeStyles(theme => ({
  body: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.secondary.grey,
    },
  },
  detailKey: {
    color: theme.palette.secondary.dark,
    textAlign: "left",
  },
  detailValue: {
    textAlign: "right",
    fontWeight: 700,
  },
}));

export default function StyledTableBody({ dataObj }) {
  const classes = useStyles();

  return (
    <>
      {dataObj
        ? Object.keys(dataObj).map(key => (
            <div className={classes.body} key={key}>
              <span className={classes.detailKey}>
                {(dataConfig[key] && dataConfig[key].title) || key}
              </span>
              <span className={classes.detailValue}>
                {(dataConfig[key] &&
                  numberFormatter(
                    dataConfig[key].type,
                    dataObj[key],
                    dataConfig[key].isDecimal,
                    dataConfig[key].decimalPoints,
                    dataConfig[key].formatting
                  )) ||
                  dataObj[key]}
              </span>
            </div>
          ))
        : null}
    </>
  );
}

StyledTableBody.propTypes = {
  dataObj: PropTypes.object,
};

StyledTableBody.defaultProps = {
  dataObj: {},
};
