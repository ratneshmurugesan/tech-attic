import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    width: "100%",
    flexGrow: 1,
    padding: 20,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  appMainTop: {
    margin: 10,
    padding: 5,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(600)]: {
      display: "unset",
    },
    [theme.breakpoints.between(600, 900)]: {
      display: "grid",
    },
    "& div": {
      [theme.breakpoints.down(600)]: {
        display: "block",
      },
    },
  },
  appMainBody: {
    display: "flex",
    flexDirection: "column",
  },
  myLeaves: {
    fontSize: "35px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "44px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));
