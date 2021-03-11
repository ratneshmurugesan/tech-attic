import React, { useReducer } from "react";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import SideNav from "./components/organisms/sideNav";
import MyLeaves from "./components/pages/MyLeaves";

import useStyles from "./style";
import { reducerFn, initialState } from "./store";

const theme = createMuiTheme({
  typography: {},
});

const App = () => {
  const classes = useStyles();
  const [storeState, dispatch] = useReducer(reducerFn, initialState);
  const [isPersistentDrawerOpen, setPersistentDrawer] = React.useState(false);

  const handlePersistentDrawer = () => {
    setPersistentDrawer(!isPersistentDrawerOpen);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <SideNav
          dispatch={dispatch}
          storeState={storeState}
          handlePersistentDrawer={handlePersistentDrawer}
          isPersistentDrawerOpen={isPersistentDrawerOpen}
        />
        <MyLeaves
          dispatch={dispatch}
          storeState={storeState}
          handlePersistentDrawer={handlePersistentDrawer}
          isPersistentDrawerOpen={isPersistentDrawerOpen}
        />
      </ThemeProvider>
    </div>
  );
};

const ApplyLeave = () => {
  return (
    <div style={{ backgroundColor: "#e6e6e6" }}>
      <App />
    </div>
  );
};

export default ApplyLeave;
