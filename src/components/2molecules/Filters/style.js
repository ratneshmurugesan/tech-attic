import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    maxWidth: 300,
  },
  filter50: {
    margin: theme.spacing(2),
    width: `calc(50% - ${2 * theme.spacing(2)}px)`,
    boxSizing: "border-box",
  },
  filter33: {
    margin: theme.spacing(2),
    width: `calc(33% - ${2 * theme.spacing(2)}px)`,
    boxSizing: "border-box",
  },
  filter25: {
    margin: theme.spacing(2),
    width: `calc(25% - ${2 * theme.spacing(2)}px)`,
    boxSizing: "border-box",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  dIF: {
    display: "inline-flex",
  },
  dropDown: {
    fontSize: "14px",
    textAlign: "left",
  },
  dateSelector: {
    borderBottom: theme.borderLight,
    width: "100%",
    display: "inline-flex",
    justifyContent: "start",
    height: "48px",
    [theme.breakpoints.down("xs")]: {
      height: "80px",
    },
    borderRadius: 0,
    padding: 0,
  },
  dateLabel: {
    display: "flex",
    width: "100%",
    justifyContent: "start",
    flexDirection: "column",
    textTransform: "capitalize",
    textAlign: "left",
    top: 200,
    "& label": {
      fontSize: "0.75rem",
      textAlign: "left",
      color: "#0000008A",
    },
  },
}));

export default useStyles;
