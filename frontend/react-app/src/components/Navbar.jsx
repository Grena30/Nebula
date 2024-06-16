import { Outlet, Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>NEBULA</h1>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tutorial">Tutorial</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
          </ul>
          <div className="navbar-btn">
            <Link to="/cars">
              <button>Shop</button>
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
