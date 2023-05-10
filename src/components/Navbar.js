import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li className="logo">
        <Link className="routes" to="/">
          Math Magicians
        </Link>
      </li>
      <li className="nav-link">
        <Link className="routes" to="/home">
          Home
        </Link>
      </li>
      <li className="nav-Link">
        <Link className="routes" to="/calculator">
          Calculator
        </Link>
      </li>
      <li className="nav-link">
        <Link className="routes" to="/quote">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
