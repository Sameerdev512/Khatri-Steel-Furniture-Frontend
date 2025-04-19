import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/scss/Auth.scss";
import Navbar from "../components/Navbar";
import config from '../config/config';
import toast from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    phone: '',
    password: ''
  });

  const validatePhone = (phone) => {
    // Remove all spaces and special characters except + sign
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    
    // Check if it's a valid Indian phone number
    const phoneRegex = /^(?:(?:\+91)|(?:91)|(?:0))?[6-9]\d{9}$/;
    
    if (!phoneRegex.test(cleanPhone)) {
      return 'Please enter a valid Indian phone number';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Real-time validation for phone
    if (name === 'phone') {
      const phoneError = validatePhone(value);
      setErrors(prev => ({
        ...prev,
        phone: phoneError
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone before submission
    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      setErrors(prev => ({
        ...prev,
        phone: phoneError
      }));
      return;
    }

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      setErrors(prev => ({
        ...prev,
        password: 'Passwords do not match'
      }));
      return;
    }

    try {
      // Clean phone number before sending to backend
      const cleanPhone = formData.phone.replace(/[^\d+]/g, '');
      
      const response = await fetch(`${config.apiUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: formData.email,
          password: formData.password,
          name: formData.name,
          phone: cleanPhone, // Send cleaned phone number
          role: "USER"
        })
      });

      const result = await response.text();
      console.log(result);
      
      if (result === "User registered successfully!") {
        toast.success("Account created successfully!");
        navigate("/login");
      } else {
        toast.error(result);
        setErrors(prev => ({
          ...prev,
          general: result
        }));
      }
    } catch (err) {
      setErrors(prev => ({
        ...prev,
        general: 'Failed to create account'
      }));
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-container">
        <div className="auth-box">
          <h2>Create Account</h2>
          <p className="subtitle">Join Khatri Steel Furniture</p>
          
          {errors.general && <div className="error-message">{errors.general}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                required
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>

            <button type="submit" className="auth-button">
              Create Account
            </button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;



