import React, { useState } from 'react';
import "../assets/scss/Contact.scss";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-container">
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <p>Have questions about our products or services? We're here to help!</p>
          
          <div className="info-items">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Address</h3>
                <p>59/3 Shiv bagh colony behinf velocity cinema,near agrawal home, Khajrana,Indore,M.P.</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+91 97548 45158</p>
                <p>+91 88891 16156</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>info@khatristeel.com</p>
                <p>support@khatristeel.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <div>
                <h3>Working Hours</h3>
                <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
