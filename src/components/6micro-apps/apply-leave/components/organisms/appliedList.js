import React, { useEffect, useState } from "react";
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
  appliedTitle: {
    textAlign: "left",
    padding: 15,
    fontWeight: "bold",
    margin: 0,
    marginLeft: 15,
  },
}));

const AppliedList = ({ storeState }) => {
  const classes = useStyles();

  const [appliedLeaveObj, setAppliedLeaveObj] = useState({});

  useEffect(
    (_) => {
      const defaultAppliedLeaveObj = {
        Sick: 0,
        Maternity: 0,
        Compensatory: 0,
        Casual: 0,
        paternity: 0,
        PublicHoliday: 10,
      };
      let updatedLeaveObj = defaultAppliedLeaveObj;
      storeState.data.forEach((obj) => {
        const leaveTypeInLower = obj.leaveType;
        updatedLeaveObj = {
          ...updatedLeaveObj,
          ...{ [leaveTypeInLower]: updatedLeaveObj[leaveTypeInLower] + 1 },
        };
      });

      setAppliedLeaveObj(updatedLeaveObj);
    },
    [storeState, setAppliedLeaveObj]
  );

  return (
    <div className={classes.appliedList}>
      <h2 className={classes.appliedTitle}>{"Applied"}</h2>
      {appliedLeaveObj
        ? Object.keys(appliedLeaveObj).map((key, i) => {
            const appliedValue = appliedLeaveObj[key];
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
                >{`${appliedValue} of 10`}</div>
              </span>
            );
          })
        : null}
    </div>
  );
};

export default AppliedList;
