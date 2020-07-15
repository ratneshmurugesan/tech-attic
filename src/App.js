import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link 
} from 'react-router-dom';

import './App.css';
import Container from '@material-ui/core/Container';

import TeaserPage from './atoms/TeaserPage';
import CustomGrid from './atoms/CustomGrid';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
          <Route path='/everything'>
              <Container maxWidth="xl" style={{ backgroundColor: '#333' }}>
                <CustomGrid />
              </Container>
            </Route>
            <Route path='/'>
              <TeaserPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
