import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    padding: theme.spacing(1),
    minWidth: 120,
    textAlign: "left",
  },
  appliedList: {
    display: "grid",
  },
  appliedLabel: {
    padding: 5,
    display: "inline-block",
    width: "50%",
    textTransform: "capitalize",
    paddingLeft: 20,
    textAlign: "left",
  },
  appliedValue: {
    padding: 5,
    display: "inline-block",
    width: "80px",
  },
  appliedContainerMax: {
    border: "1px solid #eaeaea",
    padding: 6,
    color: "#eaeaea",
    borderLeft: "none",
    borderRight: "none",
  },
  appliedContainer: {
    border: "1px solid #eaeaea",
    padding: 6,
    borderLeft: "none",
    borderRight: "none",
  },
}));

const total = 10;

const appliedLeaveObj = {
  sick: { applied: 0, total },
  maternity: { applied: 0, total },
  compensatory: { applied: 0, total },
  casual: { applied: 0, total },
  paternity: { applied: 0, total },
  publicHoliday: { applied: 10, total },
};

const AppliedList = ({ storeState }) => {
  const classes = useStyles();

  const updatedLeaveObj = storeState.data.reduce((memo, obj) => {
    memo[obj.leaveType.toLowerCase()].applied += 1;
    return memo;
  }, appliedLeaveObj);

  return (
    <div className={classes.appliedList}>
      {Object.keys(updatedLeaveObj).map((key, i) => {
        const appliedValue = updatedLeaveObj[key].applied;
        return (
          <span
            key={i}
            className={
              appliedValue < 10
                ? classes.appliedContainer
                : classes.appliedContainerMax
            }
          >
            <span className={classes.appliedLabel}>{key}</span>
            <div
              className={classes.appliedValue}
            >{`${appliedValue} of ${total}`}</div>
          </span>
        );
      })}
    </div>
  );
};

export default AppliedList;
