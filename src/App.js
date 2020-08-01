import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.scss';
// import Container from '@material-ui/core/Container';

import TeaserPage from './organisms/TeaserPage';
import CustomGrid from './organisms/CustomGrid';
import { ScreenResizer } from './prototypes/ScreenResizer/index.jsx';

function App() {
  ScreenResizer();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <TeaserPage />
          </Route>
          <Route path='/everything'>
            {/* <Container maxWidth="xl"> */}
              <CustomGrid />
            {/* </Container> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
