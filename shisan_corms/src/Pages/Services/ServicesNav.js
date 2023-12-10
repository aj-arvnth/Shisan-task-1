import React from "react";
import "../../Styles/ModuleNavbar.css";
import { Link, useNavigate } from "react-router-dom";

const ServicesNav = () => {
  const navigate = useNavigate();
 

  return (
    <header className="modnav_header">
      <a href="/admin" className="logo">
        Shisan Suite
      </a>
      
      <input type="checkbox" id="menu-bar" />
      <label htmlFor="menu-bar">MENU</label>
      <nav className="modnav">
        <ul>
          <li>
            <button onClick={() => navigate(-1)}>Back</button>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default ServicesNav;
