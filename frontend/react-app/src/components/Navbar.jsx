import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>NEBULA</h1>
      </div>
      <div className="navbar-menu">
      <ul className="navbar-links">
        <li>
          <a href="#tutorial">Tutorial</a>
        </li>
        <li>
          <a href="#cars">Cars</a>
        </li>
      </ul>
      <div className="navbar-btn">
        <button>Shop</button>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
