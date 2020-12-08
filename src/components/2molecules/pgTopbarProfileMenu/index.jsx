import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  profileIconColor: { color: theme.palette.secondary.yellow },
}));

/**
 * Top bar Profile Menu
 * Shows up on the top bar with
 */
const TopbarProfileMenu = ({ className, history, logoutUrl }) => {
  /**
   * Holds the ref which acts as anchor to show the profile menu
   */
  const menuAnchorRef = React.useRef();

  /**
   * Determine if the profile menu is visible or not
   */
  const [showProfileMenu, setShowProfileMenu] = React.useState(null);

  /**
   * Toggles the visibility of the user menu
   */
  const toggleProfileMenu = () => setShowProfileMenu(!showProfileMenu);

  /**
   * User Context
   */
  // const userContextValue = React.useContext(UserContext);

  const logout = () => {
    history.push(logoutUrl);
  };

  const anchor = { vertical: "top", horizontal: "right" };
  const transformOrigin = { vertical: "top", horizontal: "right" };
  const classes = useStyles();

  return (
    <>
      <IconButton
        edge="end"
        ref={menuAnchorRef}
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        onClick={toggleProfileMenu}
        color="inherit"
      >
        <AccountCircle className={classes.profileIconColor} />
      </IconButton>
      {showProfileMenu && (
        <Menu
          open
          keepMounted
          id="user-menu"
          className={className}
          anchorEl={menuAnchorRef.current}
          anchorOrigin={anchor}
          transformOrigin={transformOrigin}
          onClose={toggleProfileMenu}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={toggleProfileMenu}>
            <AccountBoxIcon />
            Profile
          </MenuItem>

          <Divider />
          <MenuItem onClick={logout}>
            <ExitToAppIcon /> Logout
          </MenuItem>
        </Menu>
      )}
    </>
  );
};

export default withRouter(TopbarProfileMenu);
