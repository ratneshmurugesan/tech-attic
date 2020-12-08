import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  circle: {
    zIndex: 100000,
    color: theme.palette.primary.black,
  },
  message: {
    marginTop: theme.spacing(2),
  },
}));

/**
 * Loader for the container this is present i.
 * Shows the loader in the center of the parent container.
 */
export default function ContainerLoader({ message }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress size="2rem" className={classes.circle} />
      {message && (
        <Typography className={classes.message} color="primary">
          {message}
        </Typography>
      )}
    </div>
  );
}
