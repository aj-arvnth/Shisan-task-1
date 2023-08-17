import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "../../Navbar/SubNavBar.css";

const SubscriptionNavbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="nav-menu">
      <li className="nav-item">
          <button onClick={() => navigate(-1)}>Back</button>
        </li>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item nav-dropdown">
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

export default SubscriptionNavbar;
