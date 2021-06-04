import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="navbar">
      <NavLink className="nav-item" activeClassName="active-item" id="main-nav" to="/"exact>HOME</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/habitats">HABITATS</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/animals">ANIMALS</NavLink>
    </div>
  );
};

export default NavBar;