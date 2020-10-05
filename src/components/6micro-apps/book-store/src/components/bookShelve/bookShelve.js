import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Current from './current'
import Wishlist from './wishlist'
import Completed from './completed'

export class Sections extends React.Component{
    render(){
        return (
            <BrowserRouter>
            <div>
              <ul>
                <li>
                  <Link to='/bookstore/current'>Currently reading</Link>
                </li>
                <li>
                  <Link to='/bookstore/wishlist'>Want to read</Link>
                </li>
                <li>
                  <Link to='/bookstore/completed'>Done reading</Link>
                </li>
              </ul>
        
              <Route path='/bookstore/current' component={Current} />
              <Route path='/bookstore/wishlist' component={Wishlist} />
              <Route path='/bookstore/completed' component={Completed} />
              </div>
            </BrowserRouter>
          );
    }

  }