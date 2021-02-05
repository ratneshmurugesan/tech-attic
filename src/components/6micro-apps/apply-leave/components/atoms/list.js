import React from "react";
import Badge from "@material-ui/core/Badge";

import useStyles from "./commonStyles";

const LeaveList = ({
  listId,
  from_date = "FROMDATE",
  unformatted_from_date,
  unformatted_to_date,
  to_date = "TODATE",
  halfDay,
  description,
  leaveType,
  status: statusValue,
  comment,
}) => {
  const classes = useStyles();

  const selectedDates =
    unformatted_from_date.getTime() === unformatted_to_date.getTime()
      ? to_date
      : `${from_date} - ${to_date}`;

  return (
    <div className={classes.rootList} key={listId} id={listId}>
      <span className={classes.halfDay}>{halfDay ? "Half" : "Full"}</span>
      <span className={classes.fromToDates} color="textSecondary">
        {selectedDates}
      </span>
      <p className={classes.description}>{description}</p>
      <span className={classes.leaveType}>{leaveType}</span>
      <span className={classes[`status${statusValue}`]}>{statusValue}</span>
      {Boolean(comment) && comment.length ? (
        <span className={classes.comment}>
          <Badge badgeContent={comment.length} color="error"></Badge>
          <span className={classes.commentText}>New comment</span>
        </span>
      ) : null}
    </div>
  );
};

export default LeaveList;
