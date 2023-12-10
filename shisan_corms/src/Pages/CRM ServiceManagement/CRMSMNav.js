import React from "react";
import "../../Styles/ModuleNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../Components/Auth";
import { storageUserData, removeUserData } from "../../Components/storage";
import { Toaster, toast } from "react-hot-toast";

const CRMSMNav = () => {
  const navigate = useNavigate();
  const isAdminLoggedIn = isAuthenticated();

  const handleLogout = () => {
    removeUserData();
    toast.success("Successfully Logged out !!!");
    navigate("/"); 
    
  };

  return (
    <header className="modnav_header">
    <Toaster position="top-right" />
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
          <li>
            <button onClick={() => navigate("/")}>Home</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default CRMSMNav;
