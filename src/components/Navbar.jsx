import React from "react";
import { NavLink } from "react-router-dom";
import "../css/components/navbar.css";

const NavBar = () => {
  return (
    <ul id="nav-bar">
      <li>
        <NavLink to="/" activeclassname="active">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeclassname="active">
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink to="/work" activeclassname="active">
          WORK
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeclassname="active">
          CONTACT
        </NavLink>
      </li>
      <li>
        <NavLink to="/testimonials" activeclassname="active">
          TESTIMONIALS
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
