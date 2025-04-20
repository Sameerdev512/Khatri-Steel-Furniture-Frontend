import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/scss/Profile.scss';
import config from '../config/config';
import { showToast } from '../utils/toast';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'Sameer',
    lastName: 'Khatri',
    email: 'sameer@gmail.com',
    phone: '999999999',
    city: 'Indore',
    address: '59/3 Shiv Bagh Colony behind velocity cinema,near agrawal home, Khajrana, Indore, M.P.',
    pincode: '452010'
  });

  const [formData, setFormData] = useState(userData);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${config.apiUrl}/api/users/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          setFormData(data);
        } else {
          toast.error('Failed to load profile data');
        }
      } catch (error) {
        toast.error('Error loading profile');
        console.error('Error:', error);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const loadingToast = showToast.loading('Updating profile...');

    try {
      const response = await fetch(`${config.apiUrl}/api/users/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setUserData(formData);
        setIsEditing(false);
        showToast.dismiss(loadingToast);
        showToast.success('Profile updated successfully');
      } else {
        showToast.dismiss(loadingToast);
        showToast.error('Failed to update profile');
      }
    } catch (error) {
      showToast.dismiss(loadingToast);
      showToast.error('Error updating profile');
      console.error('Error:', error);
    }
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

