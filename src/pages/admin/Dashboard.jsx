import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import '../../assets/scss/admin/Dashboard.scss';
import Navbar from '../../components/Navbar';
import toast from 'react-hot-toast';

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <AdminLayout>
      <div className="admin-dashboard">
        <h1>Dashboard</h1>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Products</h3>
            <p className="stat-number">24</p>
          </div>
          <div className="stat-card">
            <h3>Total Services</h3>
            <p className="stat-number">6</p>
          </div>
          <div className="stat-card">
            <h3>Active Orders</h3>
            <p className="stat-number">12</p>
          </div>
          <div className="stat-card">
            <h3>New Enquiries</h3>
            <p className="stat-number">8</p>
          </div>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {/* Add recent activities here */}
          </div>
        </div>
      </div>
    </AdminLayout>
    </>
  );
};

export default Dashboard;
