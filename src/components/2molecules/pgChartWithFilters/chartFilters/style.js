import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  chartDropdown: {
    width: "100%",
    "& .MuiSelect-selectMenu": {
      textTransform: "capitalize",
    },
  },
  graphType: {
    marginRight: 30,
  },
  radioLabel: {
    fontSize: theme.spacing(3),
    color: theme.palette.primary.labelTextColor,
  },
  cumulative: {
    marginLeft: 0,
  },
  menuLabel: {
    textTransform: "capitalize",
    whiteSpace: "normal",
  },
}));
