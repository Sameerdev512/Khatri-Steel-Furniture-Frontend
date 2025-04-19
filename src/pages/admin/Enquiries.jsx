import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import '../../assets/scss/admin/Enquiries.scss';
import config from '../../config/config';
import toast from 'react-hot-toast';

const Enquiries = () => {
  const [loading, setLoading] = useState(false);
  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [response, setResponse] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  
  // Updated filtering logic
  const filteredEnquiries = enquiries.filter(enquiry => {
    switch (filterStatus) {
      case "all":
        return true;
      case "pending":
        return !enquiry.responseMessage; // Show enquiries without a response
      case "resolved":
        return enquiry.responseMessage !== null && enquiry.responseMessage !== undefined;
      default:
        return true;
    }
  });

  // Sort enquiries to show pending ones first
  const sortedEnquiries = [...filteredEnquiries].sort((a, b) => {
    // Sort by status (pending first)
    if (!a.responseMessage && b.responseMessage) return -1;
    if (a.responseMessage && !b.responseMessage) return 1;
    // Then sort by date (newest first)
    return new Date(b.enquiredAt) - new Date(a.enquiredAt);
  });

  const handleViewDetails = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setResponse(enquiry.responseMessage || "");
    setShowDetailsModal(true);
  };

  const handleStatusChange = (enquiryId, newStatus) => {
    setEnquiries(prevEnquiries =>
      prevEnquiries.map(enquiry =>
        enquiry.id === enquiryId ? 
        { 
          ...enquiry, 
          status: newStatus,
          lastUpdated: new Date().toISOString()
        } : enquiry
      )
    );
  };

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSaveChanges = async() => {
    const updatedEnquiries = enquiries.map(enquiry =>
      enquiry.id === selectedEnquiry.id ? 
      {
        ...enquiry,
        responseMessage: response,
        lastUpdated: new Date().toISOString()
      } : enquiry
    );

    setEnquiries(updatedEnquiries);
    
    const updatedEnquiry = updatedEnquiries.find(e => e.id === selectedEnquiry.id);
    console.log('Enquiry Updated:', {
      id: updatedEnquiry.id,
      status: updatedEnquiry.status,
      responseMessage: updatedEnquiry.responseMessage,
      lastUpdated: updatedEnquiry.lastUpdated
    });

    try {
      await handleResponse(updatedEnquiry);
      setEnquiries(updatedEnquiries);
      toast.success('Response saved successfully');
      setShowDetailsModal(false);
    } catch (error) {
      console.error('Error saving response:', error);
      toast.error('Failed to save response. Please try again.');
    }
  };

  const loadEnquiries = async () => {
    try {
      const response = await fetch(
        `${config.apiUrl}/api/enquiries/getAllEnquiries`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch enquiries');
      }

      const result = await response.json();
      setEnquiries(result);
    } catch (error) {
      console.error("Error loading enquiries:", error);
      toast.error("Failed to load enquiries. Please refresh the page.");
    }
  };

  const handleResponse = async(updatedEnquiry) => {
    const response = await fetch(
      `${config.apiUrl}/api/enquiries/respond/${updatedEnquiry.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updatedEnquiry),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to update enquiry');
    }

    const result = await response.json();
    return result;
  };

  useEffect(() => {
    loadEnquiries();
  }, [loading]);

  return (
    <AdminLayout>
      <div className="admin-enquiries">
        <div className="header">
          <h1>Enquiry Management</h1>
          <div className="filters">
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Enquiries</option>
              <option value="pending">Pending </option>
              <option value="resolved">Resolved </option>
            </select>
          </div>
        </div>

        <div className="enquiries-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Product Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedEnquiries.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
                    No {filterStatus === "all" ? "" : filterStatus} enquiries found
                  </td>
                </tr>
              ) : (
                sortedEnquiries.map((enquiry) => (
                  <tr key={enquiry.id} className={!enquiry.responseMessage ? 'pending-row' : ''}>
                    <td>{enquiry.id}</td>
                    <td>{enquiry.username}</td>
                    <td>{enquiry.email}</td>
                    <td>{enquiry.productName}</td>
                    <td>{new Date(enquiry.enquiredAt).toLocaleDateString()}</td>
                    <td>
                      <span className={`status-${!enquiry.responseMessage ? 'pending' : 'resolved'}`}>
                        {`${enquiry.status}`.charAt(0).toUpperCase() + enquiry.status.slice(1)}
                      </span>
                    </td>
                    <td>
                      <button
                        className={`view-btn ${!enquiry.responseMessage ? 'pending-action' : ''}`}
                        onClick={() => handleViewDetails(enquiry)}
                      >
                        {!enquiry.responseMessage ? 'Respond Now' : 'View Details'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {showDetailsModal && selectedEnquiry && (
          <div className="modal">
            <div className="modal-content">
              <button
                className="close-btn"
                onClick={() => {
                  setShowDetailsModal(false);
                  setSelectedEnquiry(null);
                  setResponse("");
                }}
              >
                ×
              </button>
              <h2>Enquiry Details</h2>
              <div className="enquiry-details">
                <div className="detail-group">
                  <label>Name:</label>
                  <p>{selectedEnquiry.username}</p>
                </div>
                <div className="detail-group">
                  <label>Email:</label>
                  <p>{selectedEnquiry.email}</p>
                </div>
                <div className="detail-group">
                  <label>Product Name:</label>
                  <p>{selectedEnquiry.productName}</p>
                </div>
                <div className="detail-group">
                  <label>Phone No:</label>
                  <p>{selectedEnquiry.phone}</p>
                </div>
                <div className="detail-group">
                  <label>Message:</label>
                  <p>{selectedEnquiry.message}</p>
                </div>
                <div className="detail-group">
                  <label>Date:</label>
                  <p>{new Date(selectedEnquiry.enquiredAt).toLocaleDateString()}</p>
                </div>
                <div className="detail-group">
                  <label>Status:</label>
                  <select
                    value={selectedEnquiry.status}
                    onChange={(e) =>
                      handleStatusChange(selectedEnquiry.id, e.target.value)
                    }
                    className={`status-${selectedEnquiry.status.toLowerCase()}`}
                  >
                    <option value="New">Pending</option>
                    <option value="Resolved">Responded</option>
                  </select>
                </div>
                <div className="detail-group">
                  <label>Previous Response:</label>
                  {selectedEnquiry.responseMessage ? (
                    <p className="previous-response">
                      {selectedEnquiry.responseMessage}
                    </p>
                  ) : (
                    <p className="no-response">No previous response</p>
                  )}
                </div>
                <div className="detail-group">
                  <label>New Response:</label>
                  <textarea
                    value={response}
                    onChange={handleResponseChange}
                    placeholder="Enter your response here..."
                    rows="4"
                    className="response-textarea"
                  />
                </div>
                {selectedEnquiry.lastUpdated && (
                  <div className="detail-group">
                    <label>Last Updated:</label>
                    <p>
                      {new Date(selectedEnquiry.lastUpdated).toLocaleString()}
                    </p>
                  </div>
                )}
                <div className="modal-actions">
                  <button className="save-btn" onClick={handleSaveChanges}>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Enquiries;







