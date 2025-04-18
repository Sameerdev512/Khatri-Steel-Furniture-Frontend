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

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const role = localStorage.getItem("role");

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <button 
        type="button"
        className="profile-icon" 
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        <i className="fas fa-user-circle"></i>
        <span className="user-name">{userName || "Profile"}</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <span>Welcome, {role === "ADMIN" ? "Admin" : (userName || "User")}!</span>
          </div>
          <div className="dropdown-content">
            <Link to="/profile" className="dropdown-item" onClick={handleItemClick}>
              <i className="fas fa-user"></i> Profile
            </Link>
            {role === "ADMIN" ? (
              <Link to="/admin/dashboard" className="dropdown-item" onClick={handleItemClick}>
                <i className="fas fa-tachometer-alt"></i> Dashboard
              </Link>
            ) : (
              <Link to="/my-enquiries" className="dropdown-item" onClick={handleItemClick}>
                <i className="fas fa-envelope"></i> My Enquiries
              </Link>
            )}
            <button 
              onClick={(e) => {
                e.preventDefault();
                handleItemClick();
                onLogout();
              }} 
              className="dropdown-item logout-btn"
            >
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;


