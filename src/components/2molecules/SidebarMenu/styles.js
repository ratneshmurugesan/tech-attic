import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  sidebarMenu: {
    width: theme.spacing(13),
    height: "100%",
    position: "fixed",
    zIndex: 1001,
    top: "60px",
    left: 0,
    background: theme.palette.primary.main,
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
    "& svg": {
      fill: "#fff",
      width: "27px",
      height: "25px",
    },
  },
  list: {
    color: "white",
  },
  listItem: {
    padding: theme.spacing(3),
  },
  active: {
    "& svg": {
      fill: theme.palette.primary.light,
    },
    color: theme.palette.primary.light,
  },
}));
