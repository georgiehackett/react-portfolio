import React from "react";
import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import * as bootstrap from "bootstrap";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand">Georgie Hackett</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
