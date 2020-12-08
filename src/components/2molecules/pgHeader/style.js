import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  header: {
    width: "100%",
    height: "60px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: `0 ${theme.spacing(2)}px`,
    zIndex: 1000,
    position: "fixed",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flex: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logo: {
    height: 34,
  },
  menuStyle: {
    zIndex: "10001 !important",
  },
}));
