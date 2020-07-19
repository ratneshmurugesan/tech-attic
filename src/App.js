import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
// import Container from '@material-ui/core/Container';

import TeaserPage from './organisms/TeaserPage';
import CustomGrid from './organisms/CustomGrid';
import { AutoScreenResizer } from './prototypes/AutoScreenResizer/index.jsx';

function App() {
  AutoScreenResizer();
  return (
    <div className="App">
      <Router>
      <div>
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
      </div>
      </Router>
    </div>
  );
}

export default App;
