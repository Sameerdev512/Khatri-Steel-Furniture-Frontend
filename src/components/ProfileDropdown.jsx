import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/ProfileDropdown.scss';

const ProfileDropdown = ({ onLogout, userName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const role = localStorage.getItem("role");

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <button className="profile-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-user-circle"></i>
        <span className="user-name">Profile</span>
      </button>

      {role == "USER" && isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <span>Welcome, {userName || "User"}!</span>
          </div>
          <div className="dropdown-content">
            <Link to="/profile" className="dropdown-item">
              <i className="fas fa-user"></i> Profile
            </Link>
            <Link to="/my-enquiries" className="dropdown-item">
              <i className="fas fa-envelope"></i> My Enquiries
            </Link>
            <button onClick={onLogout} className="dropdown-item logout-btn">
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        </div>
      )}

      {role == "ADMIN" && isOpen && (
        <div className="dropdown-menu ">
          <div className="dropdown-header">
            <span>Welcome, Admin!</span>
          </div>
          <div className="dropdown-content">
            <Link to="/profile" className="dropdown-item">
              <i className="fas fa-user"></i> Profile
            </Link>
            <Link to="/admin/dashboard" className="dropdown-item">
              <i className="fas fa-envelope"></i> Dashboard
            </Link>
            <button onClick={onLogout} className="dropdown-item logout-btn">
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;