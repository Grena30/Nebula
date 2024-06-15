import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1>Find the best car deals with advanced filters and AI search</h1>
          <button className="header-button">Start now</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
