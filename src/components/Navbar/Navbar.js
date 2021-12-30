import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../src/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-right">
      <img src={logo} className="logo" width={130} alt="Logotipo"></img>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="text-right">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active ">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
