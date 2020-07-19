import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Current from '../bookShelve/current'
import Wishlist from '../bookShelve/wishlist'
import Completed from '../bookShelve/completed'

export class Sections extends React.Component{
    render(){
        return (
            <BrowserRouter>
            <div>
              <ul>
                <li>
                  <Link to='/everything/book-store/current'>Currently reading</Link>
                </li>
                <li>
                  <Link to='/everything/book-store/wishlist'>Want to read</Link>
                </li>
                <li>
                  <Link to='/everything/book-store/completed'>Done reading</Link>
                </li>
              </ul>
        
              <Route path='/everything/book-store/current' component={Current} />
              <Route path='/everything/book-store/wishlist' component={Wishlist} />
              <Route path='/everything/book-store/completed' component={Completed} />
              </div>
            </BrowserRouter>
          );
    }

  }