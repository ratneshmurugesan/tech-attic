import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  footer: {
    height: "30px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    padding: theme.spacing(1),
    background: theme.palette.grey[50],
    zIndex: 100,
    borderTop: "1px solid #ccc",
    boxShadow: "none",
  },
}));
