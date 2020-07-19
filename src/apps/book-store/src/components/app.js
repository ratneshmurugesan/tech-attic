import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Search from './search/search.js'
import { Sections } from './bookShelve/bookShelve.js'

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/book-store">Book Shelve</Link>
            </li>
            <li>
              <Link to="/book-store/search">Search</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/book-store" component={Sections} />
          <Route path="/book-store/search" component={Search} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;