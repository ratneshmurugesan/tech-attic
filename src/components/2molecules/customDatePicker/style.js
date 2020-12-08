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
}));

export default useStyles;
