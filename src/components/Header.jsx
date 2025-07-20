import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container">
       
        <Link to="/" className="logo"><span>BiteBolt</span></Link>
        <nav className="nav-links">
        <nav className="nav-links">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>
        <button className="toggle-btn" onClick={toggleTheme}>
          {theme === 'light' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;
