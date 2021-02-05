import React from "react";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import LeaveCard from "../atoms/card";
import LeaveList from "../atoms/list";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  viewSwitcher: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "left",
    alignItems: "flex-start",
    padding: 10,
  },
  cardContainer: {
    display: "flex",
    textAlign: "center",
    overflow: "auto",
    height: 260,
  },
  listContainer: {
    display: "flex",
    textAlign: "center",
    overflow: "auto",
  },
}));

const ViewSwitcher = ({ storeState }) => {
  const classes = useStyles();

  const groupBySectionDate = (arr, sectionDateProp) => {
    return arr.reduce((memo, newLeaveObj) => {
      if (!memo[newLeaveObj[sectionDateProp]]) {
        memo[newLeaveObj[sectionDateProp]] = [];
      }
      memo[newLeaveObj[sectionDateProp]].push(newLeaveObj);
      return memo;
    }, {});
  };

  const groupedList = groupBySectionDate(storeState.data, "sectionDate");
  const sectionKeys = Object.keys(groupedList);

  const whichView = storeState.viewCard ? "card" : "list";
  const applyTransition = (i) => (i === 0 ? 1 * 800 : i * 800);

  return (
    <div className={classes.viewSwitcher}>
      {sectionKeys.map((sectionName, i) => {
        // console.log({ sectionName, i });
        return (
          <span
            key={`${whichView}-${sectionName}${i}`}
            id={`${whichView}-${sectionName}${i}`}
          >
            <Typography variant="overline" component="p">
              {sectionName}
            </Typography>
            {whichView === "card" ? (
              <Fade
                in={whichView === "card"}
                timeout={{
                  enter: applyTransition(i),
                  exit: applyTransition(i),
                }}
              >
                <span className={classes.cardContainer}>
                  {groupedList[sectionName].map((ItemObj, i) => (
                    <LeaveCard
                      cardID={`${whichView}${ItemObj.id}`}
                      {...ItemObj}
                    />
                  ))}
                </span>
              </Fade>
            ) : (
              <Fade
                in={whichView === "list"}
                timeout={{
                  enter: applyTransition(i),
                  exit: applyTransition(i),
                }}
              >
                <span className={classes.listContainer}>
                  {groupedList[sectionName].map((ItemObj, i) => (
                    <LeaveList
                      listId={`${whichView}${ItemObj.id}`}
                      {...ItemObj}
                    />
                  ))}
                </span>
              </Fade>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default ViewSwitcher;
