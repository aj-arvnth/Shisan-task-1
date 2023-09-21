import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
      </ul>
    </nav>
  );
};

export default SubscriptionNavbar;
