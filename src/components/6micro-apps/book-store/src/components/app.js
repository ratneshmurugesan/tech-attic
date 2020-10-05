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
              <Link to="/bookstore/bookshelve">Book Shelve</Link>
            </li>
            <li>
              <Link to="/bookstore/search">Search</Link>
            </li>
          </ul>

          <Route exact path="/bookstore/bookshelve" component={Sections} />
          <Route path="/bookstore/search" component={Search} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;