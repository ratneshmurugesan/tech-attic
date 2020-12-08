import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    boxSizing: "border-box",
    color: "#404040",
    borderBottom: "3px solid",
    display: "flex",
    "& > div": {
      height: 80,
    },
  },
  cardValue: {
    fontSize: "2rem",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  cardSubTitle: {
    fontSize: "0.8rem",
    marginTop: theme.spacing(2),
    textShadow: "0 1px 0 rgba(0,0,0,0.5)",
    "& span": {
      display: "inline-block",
      marginRight: 8,
    },
  },
  icon: {
    background: theme.palette.primary.light,
    color: "#fff",
    width: "55px",
    height: "55px",
    "& svg": {
      fontSize: "2rem",
    },
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },
}));
