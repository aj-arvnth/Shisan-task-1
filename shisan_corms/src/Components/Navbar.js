import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../Components/Auth";
import { Toaster, toast } from "react-hot-toast";
import { storageUserData, removeUserData } from "../Components/storage";

import "../Styles/NavbarStyle.css";

const Navbar = () => {
  const navigate = useNavigate();

  const isAdminLoggedIn = isAuthenticated();

  const Authenticate = (e) => {
    e.preventDefault();
    if (isAdminLoggedIn) {
      return navigate("/itam-landing");
    } else {
      return navigate("/itam-lo");
    }
  };

  const Authenticate1 = (e) => {
    e.preventDefault();
    if (isAdminLoggedIn) {
      return navigate("/fam-landing");
    } else {
      return navigate("/fam-lo");
    }
  };

  const Authenticate2 = (e) => {
    e.preventDefault();
    if (isAdminLoggedIn) {
      return navigate("/others-landing");
    } else {
      return navigate("/others-lo");
    }
  };

  const Authenticate3 = (e) => {
    e.preventDefault();
    if (isAdminLoggedIn) {
      return navigate("/crmsm-landing");
    } else {
      return navigate("/crmsm-lo");
    }
  };

  const handleLogout = () => {
    removeUserData();
    toast.success("Successfully Logged out !!!");
    navigate("/");
  };

  return (
    <>
      <header className="navbar_header">
        <Toaster position="top-right" />
        <a href="/admin" className="logo">
          Shisan Suite
        </a>
        <input type="checkbox" id="menu-bar" />
        <label htmlFor="menu-bar">MENU</label>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/products">Products</Link>
              <ul>
                <li>
                  <Link onClick={Authenticate}>IT Asset Management</Link>
                  <ul>
                    <li>
                      <Link onClick={Authenticate}>Auto IT Discovery</Link>
                    </li>
                    <li>
                      <Link onClick={Authenticate}>
                        Software License Management
                      </Link>
                    </li>
                    <li>
                      <Link onClick={Authenticate}>IT Asset Management</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">Fixed Asset Management</Link>
                  <ul>
                    <li>
                      <Link onClick={Authenticate1}>Fixed Asset Register</Link>
                    </li>
                    <li>
                      <Link onClick={Authenticate1}>Asset Locator</Link>
                    </li>
                    <li>
                      <Link onClick={Authenticate1}>Barcode/RFID</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">Others</Link>
                  <ul>
                    <li>
                      <Link onClick={Authenticate2}>
                        Budgeting & Procurement
                      </Link>
                    </li>
                    <li>
                      <Link onClick={Authenticate2}>Spares & Consumables</Link>
                    </li>
                    <li>
                      <Link onClick={Authenticate2}>Request</Link>
                    </li>
                    <li>
                      <Link onClick={Authenticate2}>Service Desk</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link onClick={Authenticate3}>CRM Service Management</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/aboutus"}>About Us</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to="#">Login</Link>
              <ul>
                <li>
                  <Link to="/login">Admin</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  {isAdminLoggedIn && (
                    <Link onClick={handleLogout}>Logout</Link>
                  )}
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
