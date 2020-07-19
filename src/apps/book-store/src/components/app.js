import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Search from './search/search.js'
import { Sections } from './bookShelve/bookShelve.js'

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <div className="app">
          <ul >
            <li>
              <Link to="/everything/book-store">Book Shelve</Link>
            </li>
            <li>
              <Link to="/everything/book-store/search">Search</Link>
            </li>
          </ul>

          <Route exact path="/everything/book-store" component={Sections} />
          <Route path="/everything/book-store/search" component={Search} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;