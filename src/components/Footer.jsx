import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info & Quick Contact */}
          <div className="footer-section company-info">
            <h3>Khatri Steel Furniture</h3>
            <p>Your trusted partner in steel furniture since 2014</p>
            <div className="quick-contact">
              <button className="contact-btn">
                <Link to="/contact">Contact Us Now</Link>
              </button>
              <a href="tel:+919754845158" className="phone-link">
                <i className="fas fa-phone"></i> +91 9754845158
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer-section contact-info">
            <h4>Contact Information</h4>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>59/3 Shiv Bagh Colony behind velocity cinema,<br />near agrawal home, Khajrana, Indore, M.P.</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div className="email-list">
                  <a href="mailto:info@khatristeel.com">info@khatristeel.com</a>
                  <a href="mailto:support@khatristeel.com">support@khatristeel.com</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div className="working-hours">
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/products">Our Products</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Khatri Steel Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
