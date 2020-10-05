import React from 'react';
import {
  BrowserRouter as Router,
  // Route,
  Switch,
} from 'react-router-dom';

import './App.scss';

// import { ScreenResizer } from './prototypes/ScreenResizer/index.jsx';
import RoutesComponent from 'routes';

function App() {
  // ScreenResizer();
  return (
    <div className="App">
      <Router>
        <Switch>
          <RoutesComponent />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
