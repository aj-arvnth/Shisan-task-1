import React from "react";
import "../../Navbar/NavbarStyle.css";
import { Link, useNavigate } from "react-router-dom";

const Broker_navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <button onClick={() => navigate(-1)}>Back</button>
        </li>
        <li className="navbar-item">
          <Link to="/map">Locator</Link>
        </li>
        <li className="navbar-item">
          <Link to="/subscription">Subscribe</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>

        {/* <li className="navbar-item navbar-dropdown">
          <a href="#">Login</a>
          <div className="dropdown-content">
            <Link to="/user">User</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </li> */}
      </ul>
    </nav>
  );
};

export default Broker_navbar;
