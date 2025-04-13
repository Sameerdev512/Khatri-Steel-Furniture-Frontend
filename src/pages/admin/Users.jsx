import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import '../../assets/scss/admin/Users.scss';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Customer",
      status: "Active",
      joinDate: "2024-01-15"
    },
    // Add more sample users
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Customer',
    password: ''
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    // Add user logic here
    setShowAddModal(false);
  };

  const handleStatusToggle = (userId) => {
    // Toggle user status logic here
  };

  return (
    <AdminLayout>
      <div className="admin-users">
        <div className="header">
          <h1>User Management</h1>
          <button className="add-btn" onClick={() => setShowAddModal(true)}>
            Add New User
          </button>
        </div>

        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Join Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.joinDate}</td>
                  <td>
                    <button 
                      className={`status-btn ${user.status.toLowerCase()}`}
                      onClick={() => handleStatusToggle(user.id)}
                    >
                      {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                    </button>
                    <button className="edit-btn">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showAddModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Add New User</h2>
              <form onSubmit={handleAddUser}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                  >
                    <option value="Customer">Customer</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                  />
                </div>
                <div className="button-group">
                  <button type="submit">Add User</button>
                  <button type="button" onClick={() => setShowAddModal(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Users;