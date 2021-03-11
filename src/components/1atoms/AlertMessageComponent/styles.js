import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => {
  const {
    palette: { text, tertiary },
    fontweight,
  } = theme;

  return {
    root: {
      margin: theme.spacing(2),
      "& > *": {
        backgroundColor: tertiary.alertBackgroundColor,
      },
    },
    alertInfo: {
      padding: "16px 24px",
      fontSize: 14,
      margin: 0,
      color: text.alert,
      fontWeight: fontweight.light,
    },
  };
});
