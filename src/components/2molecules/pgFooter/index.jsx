import Paper from "@material-ui/core/Paper";
import Copyright from "components/1atoms/pgCopyright";
import React from "react";

import useStyles from "./style";

/**
 * Footer Component
 * The footer for logged in pages.
 */
const PageFooter = ({ href, title, showYear }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <footer className={classes.footer}>
        <Copyright href={href} title={title} showYear={showYear} />
      </footer>
    </Paper>
  );
};

export default PageFooter;
