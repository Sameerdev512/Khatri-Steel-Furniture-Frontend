import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/scss/AdminLayout.scss';

const AdminLayout = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="admin-layout">
      <div className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav className="admin-nav">
          <Link to="/admin/dashboard" className={`admin-nav-item ${isActive('/admin/dashboard')}`}>
            Dashboard
          </Link>
          <Link to="/admin/products" className={`admin-nav-item ${isActive('/admin/products')}`}>
            Products
          </Link>
          <Link to="/admin/services" className={`admin-nav-item ${isActive('/admin/services')}`}>
            Services
          </Link>
          <Link to="/admin/orders" className={`admin-nav-item ${isActive('/admin/orders')}`}>
            Orders
          </Link>
          <Link to="/admin/users" className={`admin-nav-item ${isActive('/admin/users')}`}>
            Users
          </Link>
          <Link to="/admin/enquiries" className={`admin-nav-item ${isActive('/admin/enquiries')}`}>
            Enquiries
          </Link>
          <Link to="/admin/contact-messages" className={`admin-nav-item ${isActive('/admin/contact-messages')}`}>
            Contact Messages
          </Link>
        </nav>
      </div>
      <div className="admin-content">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
