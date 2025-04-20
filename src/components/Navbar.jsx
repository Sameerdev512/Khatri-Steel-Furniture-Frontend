import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import '../assets/scss/Navbar.scss';
import config from '../config/config';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName") || "User";

  const handleLogout = () => {
    localStorage.clear();
    // window.location.reload();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {config.appName}
        </Link>  

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          {localStorage.getItem("role") === "ADMIN" && <Link
            to="/admin/dashboard"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Dashbaord
          </Link>
}
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`nav-link ${
              location.pathname === "/products" ? "active" : ""
            }`}
          >
            Products
          </Link>
          <Link
            to="/services"
            className={`nav-link ${
              location.pathname === "/services" ? "active" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </Link>
          <Link to="/contact" className={`nav-link contact-btn`}>
            Contact Us
          </Link>
          {token && (
            <ProfileDropdown onLogout={handleLogout} userName={userName} />
          )}
        </div>
      </div>
    </nav>
  );
};

//export
export default Navbar;


