import React from 'react';
import '../css/header.css'; // Assuming you have a CSS file for styling
import { NavLink } from 'react-router-dom';

export default function MyNav() {
  return (
    <div className="header__nav-container">
      <div className="header__logo">
        {/* Add your logo here */}
      </div>
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <NavLink
              className={({ isActive }) => isActive ? 'text-success header__menu-item' : 'header__menu-item'}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink
              className={({ isActive }) => isActive ? 'text-warning header__menu-item' : 'header__menu-item'}
              to="/books"
            >
              Books
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink
              className={({ isActive }) => isActive ? 'text-info header__menu-item' : 'header__menu-item'}
              to="/About"
            >
              About
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink
              className={({ isActive }) => isActive ? 'text-success header__menu-item' : 'header__menu-item'}
              to="/Contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
