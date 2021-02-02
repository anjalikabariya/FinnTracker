import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../Assets/logo2.JPG';
import './styles.scss';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        {/* LOGO SECTION */}
        <NavLink className="nav__logo--container" to="/home">
          <img  src={logo} className="nav__logo" alt="App logo"/>
        </NavLink>
        {/* LOGO SECTION */}
        {/* ----------------- */}
        {/* NAVIGATION LINKS */}
        <ul className="nav__menu">
          <NavLink
              to="/home"
              activeClassName="nav__menu-link--active"
              className="nav__menu-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/news"
              activeClassName="nav__menu-link--active"
              className="nav__menu-link"
            >
              News
            </NavLink>
            <NavLink
              to="/tracker"
              activeClassName="nav__menu-link--active"
              className="nav__menu-link"
            >
              Tracker
            </NavLink>
          </ul>
        {/* NAVIGATION LINKS */}
      </div>
    </nav>
  );
};

export default Navigation;