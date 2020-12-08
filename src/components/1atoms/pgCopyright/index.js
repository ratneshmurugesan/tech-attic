import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

/**
 * Shows the bottom Copyright Bar.
 */
const Copyright = ({ href, title, showYear }) => (
  <Typography variant="body2" color="textSecondary" align="center">
    Copyright ©
    <Link color="inherit" target="_blank" href={href}>
      &nbsp;{title}
    </Link>
    &nbsp;{showYear && new Date().getFullYear()}.
  </Typography>
);

Copyright.defaultProps = {
  href: "",
  title: "",
  showYear: true,
};

export default Copyright;
