import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/scss/MyEnquiries.scss';
import config from "../config/config";

const MyEnquiries = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Dummy data for enquiries
  const [enquiries, setEnquiries] = useState([]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  const loadEnquiries = async () => {
    const response = await fetch(
      `${config.apiUrl}/api/enquiries/getUsersEnquiries`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const result = await response.json();
    console.log(result);
    setEnquiries(result);
  };

  // useEffect(() => {window.scrollTo(0, 0)});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                  <span
                    className={`status ${enquiry.status
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {enquiry.status}
                  </span>
                </div>
                <div className="enquiry-details">
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(enquiry.enquiredAt).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Message:</strong> {enquiry.message}
                  </p>
                  {enquiry.responseMessage && (
                    <div className="response-section">
                      <p>
                        <strong>Response:</strong> {enquiry.responseMessage}
                      </p>
                      <p>
                        <strong>Responded on:</strong>{" "}
                        {new Date(enquiry.respondedAt).toLocaleDateString()}
                      </p>
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

