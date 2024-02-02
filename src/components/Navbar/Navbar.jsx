import React from "react";
import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import * as bootstrap from "bootstrap";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid m-2">
        <span className="navbar-brand">Georgie Hackett</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-around" id="navbarTogglerDemo02">
          <ul className="navbar-nav">
            <li className="nav-item mx-5">
                <NavLink className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }>Home</NavLink>
            </li>
            <li className="nav-item mx-5">
                <NavLink className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }>Projects</NavLink>
            </li>
            <li className="nav-item mx-5">
                <NavLink className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
