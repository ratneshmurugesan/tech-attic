import React from "react";
import Card from "@material-ui/core/Card";
import Badge from "@material-ui/core/Badge";

import useStyles from "./commonStyles";

export default function LeaveCard({
  cardID,
  from_date = "FROMDATE",
  to_date = "TODATE",
  unformatted_from_date,
  unformatted_to_date,
  halfDay,
  description,
  leaveType,
  status: statusValue,
  comment,
}) {
  const classes = useStyles();

  const selectedDates =
    unformatted_from_date.getTime() === unformatted_to_date.getTime()
      ? to_date
      : `${from_date} - ${to_date}`;

  return (
    <div key={cardID} id={cardID}>
      <Card className={classes.root}  key={cardID} id={cardID}>
        <div className={classes.cardContent}>
          <p className={classes.halfDay}>{halfDay ? "Half" : "Full"}</p>
          <p className={classes.fromToDates} color="textSecondary">
            {selectedDates}
          </p>
          <p className={classes.description}>{description}</p>
          <p className={classes.leaveType}>{leaveType}</p>
          <p className={classes[`status${statusValue}`]}>{statusValue}</p>
        </div>
        {Boolean(comment) && comment.length ? (
          <span className={classes.comment}>
            <Badge badgeContent={comment.length} color="error"></Badge>
            <span className={classes.commentText}>New comment(s)</span>
          </span>
        ) : null}
      </Card>
    </div>
  );
}
