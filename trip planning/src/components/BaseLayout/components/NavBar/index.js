

import React ,{ useState }from 'react';
import { Icon } from 'react-materialize';
import { NavLink, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';



import logo from './trippy-high-resolution-logo-transparent.png'; 

import './index.css';


const Navbar = () => (
  <div>
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" /> 
      <div className="nav-links">
        <ul>
          <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
          <li><NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink></li>
          <li><NavLink activeClassName="selected" className="nav-link" to="/places">Places</NavLink></li>
            <li><NavLink activeClassName="selected" className="nav-link" to="/contact">Contact</NavLink></li>
            <li><NavLink activeClassName="selected" className="nav-link" to="/login">Login</NavLink></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
