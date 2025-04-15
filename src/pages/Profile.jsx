import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../assets/scss/Profile.scss';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com', // This will be fetched from backend/auth state
    phone: '+91 98765 43210',
    city: 'Mumbai',
    address: '123 Main Street, Andheri West',
    pincode: '400053'
  });

  const [formData, setFormData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the user data
    setUserData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(userData);
    setIsEditing(false);
  };

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <h1>My Profile</h1>
            {!isEditing && (
              <button 
                className="edit-button"
                onClick={() => setIsEditing(true)}
              >
                <i className="fas fa-edit"></i> Edit Profile
              </button>
            )}
          </div>

          <div className="profile-content">
            {!isEditing ? (
              <div className="profile-details">
                <div className="detail-group">
                  <div className="detail-item">
                    <label>First Name</label>
                    <p>{userData.firstName}</p>
                  </div>
                  <div className="detail-item">
                    <label>Last Name</label>
                    <p>{userData.lastName}</p>
                  </div>
                </div>

                <div className="detail-group">
                  <div className="detail-item">
                    <label>Email</label>
                    <p className="email-value">{userData.email}</p>
                    <span className="email-note">Email cannot be changed</span>
                  </div>
                  <div className="detail-item">
                    <label>Phone</label>
                    <p>{userData.phone}</p>
                  </div>
                </div>

                <div className="detail-group">
                  <div className="detail-item">
                    <label>City</label>
                    <p>{userData.city}</p>
                  </div>
                  <div className="detail-item">
                    <label>Pincode</label>
                    <p>{userData.pincode}</p>
                  </div>
                </div>

                <div className="detail-group full-width">
                  <div className="detail-item">
                    <label>Address</label>
                    <p>{userData.address}</p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-group">
                  <div className="form-item">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-item">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      className="readonly-input"
                      readOnly
                      disabled
                    />
                    <span className="email-note">Email cannot be changed</span>
                  </div>
                  <div className="form-item">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-item">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label>Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <div className="form-item">
                    <label>Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="cancel-button" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button type="submit" className="save-button">
                    Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;