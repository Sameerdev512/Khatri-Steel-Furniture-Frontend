import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/scss/MyEnquiries.scss';

const MyEnquiries = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Dummy data for enquiries
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      productName: "Modern Steel Almirah",
      status: "New",
      createdAt: "2024-01-20T10:30:00",
      message: "I'm interested in the 3-door steel almirah. Could you provide more details about its dimensions and color options?",
      response: null,
      respondedAt: null
    },
    {
      id: 2,
      productName: "Desert Air Cooler",
      status: "In Progress",
      createdAt: "2024-01-18T15:45:00",
      message: "What is the water tank capacity and power consumption of this cooler?",
      response: "Thank you for your interest. The Desert Air Cooler has an 85L water tank capacity and consumes 220W power. Would you like to know more specific details?",
      respondedAt: "2024-01-19T09:20:00"
    },
    {
      id: 3,
      productName: "Metal Double Bed",
      status: "Resolved",
      createdAt: "2024-01-15T08:15:00",
      message: "Do you provide installation service for the metal double bed?",
      response: "Yes, we provide free installation service within city limits. Installation will be done by our expert team within 24 hours of delivery.",
      respondedAt: "2024-01-16T11:30:00"
    },
    {
      id: 4,
      productName: "Steel Kitchen Rack",
      status: "New",
      createdAt: "2024-01-21T14:20:00",
      message: "Is the kitchen rack adjustable? What's the maximum weight capacity per shelf?",
      response: null,
      respondedAt: null
    }
  ]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <>
      <Navbar />
      <div className="my-enquiries-container">
        <h1>My Enquiries</h1>
        
        {enquiries.length === 0 ? (
          <div className="no-enquiries">
            <p>You haven't made any enquiries yet.</p>
            <Link to="/products" className="browse-products-btn">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="enquiries-list">
            {enquiries.map((enquiry) => (
              <div key={enquiry.id} className="enquiry-card">
                <div className="enquiry-header">
                  <h3>{enquiry.productName}</h3>
                  <span className={`status ${enquiry.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {enquiry.status}
                  </span>
                </div>
                <div className="enquiry-details">
                  <p><strong>Date:</strong> {new Date(enquiry.createdAt).toLocaleDateString()}</p>
                  <p><strong>Message:</strong> {enquiry.message}</p>
                  {enquiry.response && (
                    <div className="response-section">
                      <p><strong>Response:</strong> {enquiry.response}</p>
                      <p><strong>Responded on:</strong> {new Date(enquiry.respondedAt).toLocaleDateString()}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyEnquiries;
