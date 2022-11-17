import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from 'axios';

export default class Navbar extends Component {

   render() {
     return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to = "/" className = "navbar-brand">BookFace </Link>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                 <Link to="/" className="nav-link">Feed</Link>
             </li>
              <li className="navbar-item">
                 <Link to="/create-post" className="nav-link">New Post</Link>
             </li>
              <li className="navbar-item">
                 <Link to="/register" className="nav-link">Register</Link>
              </li>
              <li className="navbar-item">
                 <Link to="/profiles" className="nav-link">Profiles</Link>
              </li>
           </ul>
        </div>
      </nav>
    );
  }
}