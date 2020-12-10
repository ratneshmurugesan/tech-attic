import { createMuiTheme } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";
import cyan from "@material-ui/core/colors/cyan";

/**
 * Configures the theme for our APP.
 * Any changes on the theme should be done here.
 * If you need, you can create many themes and switch based on the user preference.
 */

/**
 * Client theme
 */
const client = createMuiTheme({
  spacing: 4,
  borderLight: "1px solid rgba(0, 0, 0, 0.165)",
  lineShadowRight: "inset -2px 0px 1px rgba(0, 0, 0, 0.165)",
  palette: {
    contentBg: "#f5f5f5",
    primary: {
      main: "#262626",
      mainLight: "#ebebeb",
      light: "#fdc20d",
      dark: "#050d9e",
      contrastText: "rgba(0, 0, 0, 0.87)",
      black: "#000",
      white: "#fff",
      labelTextColor: "#0000008A",
      lightBG: "#d5d5d5",
      fontLight: "#515050",
      hoverBG: "#f5f5f5",
      fontLink: "#145cc7",
    },
    secondary: {
      main: "#404040",
      light: "rgb(102, 102, 102)",
      dark: "rgb(44, 44, 44)",
      contrastText: "#fff",
      grey: "#cfcfcf",
      yellow: "#fdc20d",
    },
    high: "#e53935",
    medium: "#f57c00",
    low: "#ffde00",
    overdue: "#ef5350",
    completed: "#81d4fa",
    received: "#66bb6a",
    open: "rgba(255, 222, 0, 1)",
    published: "rgba(129, 199, 132, 1)",
    draft: "rgba(249, 168, 37, 1)",
    closed: "rgba(224, 224, 224, 1)",
    archived: "rgba(58,58,58, 1)",
    disabled: {
      tab: "rgb(0 0 0 / 0.2)",
    },
  },
  typography: {
    h6: {
      fontWeight: "bold",
      color: "#404040",
    },
    button: {
      fontSize: "0.875rem",
    },
  },
});

client.name = "Client Theme";
client.color = "#122048";

/**
 * An combination of deep orange and grey theme
 */
const deepOrangeGrey = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: grey,
  },
  typography: {
    button: {
      fontSize: "0.875rem",
    },
  },
  overrides: {},
});

deepOrangeGrey.name = "Orange Theme";
deepOrangeGrey.color = "#ff5722";

/**
 * An combination of blue and cyan theme
 */
const blueCyan = createMuiTheme({
  palette: {
    primary: blue,
    secondary: cyan,
  },
  typography: {
    button: {
      fontSize: "0.875rem",
    },
  },
  overrides: {},
});

blueCyan.name = "Blue";
blueCyan.color = "#2196f3";

const themeObj = {
  deepOrangeGrey,
  blueCyan,
  client,
};

export default themeObj;
