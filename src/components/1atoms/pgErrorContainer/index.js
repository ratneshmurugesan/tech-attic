import React from "react";
import Typography from "@material-ui/core/Typography";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  errorIcon: {
    fontSize: "3rem",
    display: "block",
    margin: "0 auto",
  },
}));

export default function ErrorContainer({
  text = "Error occurred while loading this part. <br /> Please try again later.",
  height,
  color,
}) {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{ height }}>
      <Typography
        component="div"
        align="center"
        color={color ? color : "error"}
      >
        <ErrorOutlineIcon className={classes.errorIcon} />
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </Typography>
    </div>
  );
}
