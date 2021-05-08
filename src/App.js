import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.scss";

import ScreenResizerContext from "context/ScreenResizerContext";
import RoutesComponent from "routes";

function App() {
  return (
    <ScreenResizerContext.Wrapper>
      <div className="App">
        <Router>
          <Switch>
            <RoutesComponent />
          </Switch>
        </Router>
      </div>
    </ScreenResizerContext.Wrapper>
  );
}

export default App;
