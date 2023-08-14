import React from "react";
import "./NavbarStyle.css"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
       
        <img src="../../../public/logo512.png" alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item navbar-dropdown">
          <Link to="/buyer_lo">Buyers</Link>
          <div className="dropdown-content">
            <Link to="#">Subpage 1</Link>
            <Link to="#">Subpage 2</Link>
            <Link to="#">Subpage 3</Link>
          </div>
        </li>

        <li className="navbar-item navbar-dropdown">
          <Link to="/business_owners_lo">Business Owners</Link>
          <div className="dropdown-content">
            <Link to="#">Subpage 1</Link>
            <Link to="#">Subpage 2</Link>
            <Link to="#">Subpage 3</Link>
          </div>
        </li>

        <li className="navbar-item navbar-dropdown">
          <Link to="/broker_lo">Brokers / Investment Bankers</Link>
          <div className="dropdown-content">
            <Link to="#">Subpage 1</Link>
            <Link to="#">Subpage 2</Link>
            <Link to="#">Subpage 3</Link>
          </div>
        </li>

        <li className="navbar-item navbar-dropdown">
          <Link to="/professional_services_lo">Professional Services</Link>
          <div className="dropdown-content">
            <Link to="#">Subpage 1</Link>
            <Link to="#">Subpage 2</Link>
            <Link to="#">Subpage 3</Link>
          </div>
        </li>

        <li className="navbar-item navbar-dropdown">
          <Link to="#">Login</Link>
          <div className="dropdown-content">
            <Link to="/user">User</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
