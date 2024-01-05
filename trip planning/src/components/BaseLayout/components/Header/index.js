//Dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';
//Internals
import './index.css';

const Header = () => (
  <div className="header">
    <h1 id="header-title">Search your holiday</h1>
    <div className="links-header">
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/BestPrices">Best Prices</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/Hotels">Hotels</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/Safety">Safety</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/Packages">Packages</NavLink></p>
    </div>
  </div>
)
export default Header;
 