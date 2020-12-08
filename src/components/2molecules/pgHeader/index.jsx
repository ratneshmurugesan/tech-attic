import AppBar from "@material-ui/core/AppBar";
import TopbarProfileMenu from "components/2molecules/pgTopbarProfileMenu";
import React from "react";
import { Link } from "react-router-dom";

import { ClientLogo } from "components/1atoms/SvgIcons";

import useStyles from "./style";

/**
 * Header Component
 * The header for logged in pages.
 */
const PageHeader = ({ homeUrl, logoutUrl, logoUrl, logoTitle }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.header} position="sticky">
      <Link to={homeUrl}>
        <ClientLogo />
      </Link>
      <div className={classes.grow} />
      <TopbarProfileMenu className={classes.menuStyle} logoutUrl={logoutUrl} />
    </AppBar>
  );
};

PageHeader.defaultProps = {
  logoUrl: "",
  logoTitle: "",
};

export default PageHeader;
