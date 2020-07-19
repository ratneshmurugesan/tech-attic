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
                  <Link to='/book-store/current'>Currently reading</Link>
                </li>
                <li>
                  <Link to='/book-store/wishlist'>Want to read</Link>
                </li>
                <li>
                  <Link to='/book-store/completed'>Done reading</Link>
                </li>
              </ul>
        
              <Route path='/book-store/current' component={Current} />
              <Route path='/book-store/wishlist' component={Wishlist} />
              <Route path='/book-store/completed' component={Completed} />
              </div>
            </BrowserRouter>
          );
    }

  }