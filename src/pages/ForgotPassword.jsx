import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/scss/Auth.scss";
import Navbar from "../components/Navbar";
import config from '../config/config';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${config.apiUrl}/auth/forgot-password?email=${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.text();

      if (response.ok) {
        setIsSuccess(true);
        toast.success('Password reset instructions have been sent to your email. Also check your spam folder.');
      } else {
        toast.error(data || 'Failed to process request. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-container">
        <div className="auth-box">
          <h2>Forgot Password</h2>
          <p className="subtitle">Enter your email to reset your password</p>

          {message && (
            <div className={`message-box ${isSuccess ? 'success' : 'error'}`}>
              {message}
            </div>
          )}

          {!isSuccess && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your registered email"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="auth-button"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Reset Password'}
              </button>
            </form>
          )}

          <div className="auth-footer">
            <p>
              Remember your password? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
