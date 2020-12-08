import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  tabs: {
    borderBottom: "2px solid",
    margin: theme.spacing(2),
  },
  tab: {
    "&.Mui-selected": {
      background: theme.palette.primary.main,
      color: theme.palette.primary.white,
    },
    "&.Mui-disabled": {
      color: theme.palette.disabled.tab,
    },
  },
}));
