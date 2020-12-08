import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  table: {
    "& tbody": {
      "& tr td": {
        padding: "10px",
        textTransform: "capitalize",
        maxWidth: `100px`,
        "&:first-of-type": {
          width: "200px",
        },
      },
    },
  },
  tableHeadRow: {
    verticalAlign: "top",
    width: "70px",
  },
  tableCellHeader: {
    background: theme.palette.primary.white,
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    padding: "10px",
    fontSize: 13,
    width: 100,
    "&.sticky": {
      width: 200,
      position: "sticky",
      left: 0,
    },
  },
  tableCellBody: {
    padding: "10px",
    fontSize: 12,
    border: "none",
    "&.sticky": {
      minWidth: 90,
      fontWeight: "bold",
      backgroundColor: theme.palette.primary.white,
      position: "sticky",
      left: 0,
    },
    "&.textBold": { fontWeight: "bold" },
  },
  stripes: {
    "&:nth-child(2n+2)": {
      backgroundColor: theme.palette.primary.mainLight,
      "& td": { backgroundColor: theme.palette.primary.mainLight },
    },
  },
  tableWrapper: {
    position: "relative",
    display: "inline-block",
    width: "100%",
  },
  tableHeading: {
    marginBottom: 5,
  },
  noData: {
    padding: 20,
  },
  tableLoader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(255,255,255, 0.7)",
  },
  button: {
    alignSelf: "flex-start",
    padding: 0,
  },
  tableHeadliner: {
    padding: "13px 0",
    borderBottom: `1px solid rgba(224, 224, 224, 1)`,
    textTransform: "uppercase",
    fontSize: theme.spacing(3),
    fontWeight: "bold",
    marginBottom: "8px",
  },
}));
