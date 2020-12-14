import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ScreenResizerContext from "context/ScreenResizerContext";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { routeConfigObj } from "config/routeConfig";

const useStyles = makeStyles({
  list: {
    fontFamily: "Rajdhani",
  },
  fullList: {
    width: "auto",
    fontFamily: "Rajdhani",
  },
});

const buttonYellowTheme = {
  color: "#ffeb3b",
  fontFamily: "Rajdhani",
  fontSize: "20px",
  letterSpacing: "7px",
  padding: "0px 30px",
};

const buttonWhiteTheme = {
  ...buttonYellowTheme,
  color: "#fff",
  padding: "20px 0px 0px 0px",
};

function CustomDrawer() {
  const classes = useStyles();

  const { width } = useContext(ScreenResizerContext);
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const generateLinks = (side, category = null) => {
    return Object.keys(routeConfigObj)
      .filter(
        (key) =>
          routeConfigObj[key][side] && routeConfigObj[key].category === category
      )
      .map((key) => {
        // console.log({ key, obj: routeConfigObj[key] });
        return routeConfigObj[key]["isEnabled"] ? (
          <div key={key}>
            <Paper elevation={2} className="paper">
              <Link to={routeConfigObj[key].path}>
                {routeConfigObj[key].displayName}
              </Link>
            </Paper>
          </div>
        ) : null;
      });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ fontFamily: "Paprika" }}
    >
      {anchor === "right" ? (
        <React.Fragment>
          <List>{generateLinks("rightPanel", "micro-apps")}</List>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div style={buttonWhiteTheme} disabled>
            DSA
          </div>
          <List>{generateLinks("leftPanel", "dsa")}</List>
          <div style={buttonWhiteTheme}>CSS</div>
          <List>{generateLinks("leftPanel", "css")}</List>
        </React.Fragment>
      )}
    </div>
  );

  return (
    <React.Fragment>
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        orientation={`${width < 620 ? "vertical" : "horizontal"}`}
      >
        <Button style={buttonYellowTheme}>
          <Link
            to="/aboutme"
            style={{ color: "#ffeb3b", textDecoration: "none" }}
          >
            About-Me
          </Link>
        </Button>
        <Button style={buttonYellowTheme}>
          <Link
            to="/whyme"
            style={{ color: "#ffeb3b", textDecoration: "none" }}
          >
            Why-Me
          </Link>
        </Button>
        <Button style={buttonYellowTheme} onClick={toggleDrawer("left", true)}>
          Prototypes
        </Button>
        <Button style={buttonYellowTheme} onClick={toggleDrawer("right", true)}>
          Micro-Apps
        </Button>
      </ButtonGroup>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <Container
          maxWidth="sm"
          style={{ backgroundColor: "#333", height: "100%" }}
        >
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              {list("left")}
            </Grid>
          </Grid>
        </Container>
      </Drawer>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Container
          maxWidth="sm"
          style={{ backgroundColor: "#333", height: "100%" }}
        >
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              {list("right")}
            </Grid>
          </Grid>
        </Container>
      </Drawer>
    </React.Fragment>
  );
}

export default CustomDrawer;
