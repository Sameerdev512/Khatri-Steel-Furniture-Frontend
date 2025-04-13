import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import '../../assets/scss/admin/Enquiries.scss';

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      productName: "almirah",
      subject: "Product Inquiry",
      message: "I would like to know more about your steel almirahs.",
      status: "New",
      phone: "4545454545",
      date: "2024-01-20",
      response: "", 
      lastUpdated: null
    },
    // Add more sample enquiries
  ]);

  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [response, setResponse] = useState("");

  // Update this to set the initial response when opening the modal
  const handleViewDetails = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setResponse(enquiry.response || ""); // Set initial response from enquiry
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

  const handleSaveChanges = () => {
    const updatedEnquiries = enquiries.map(enquiry =>
      enquiry.id === selectedEnquiry.id ? 
      {
        ...enquiry,
        response: response,
        lastUpdated: new Date().toISOString()
      } : enquiry
    );

    setEnquiries(updatedEnquiries);
    
    // Log the updated enquiry
    const updatedEnquiry = updatedEnquiries.find(e => e.id === selectedEnquiry.id);
    console.log('Enquiry Updated:', {
      id: updatedEnquiry.id,
      status: updatedEnquiry.status,
      response: updatedEnquiry.response,
      lastUpdated: updatedEnquiry.lastUpdated
    });

    // Close the modal
    setShowDetailsModal(false);
    setSelectedEnquiry(null);
    setResponse("");
  };

  return (
    <AdminLayout>
      <div className="admin-enquiries">
        <div className="header">
          <h1>Enquiry Management</h1>
          <div className="filters">
            <select defaultValue="all">
              <option value="all">All Enquiries</option>
              <option value="new">New</option>
              <option value="inProgress">In Progress</option>
              <option value="resolved">Resolved</option>
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
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td>{enquiry.id}</td>
                  <td>{enquiry.name}</td>
                  <td>{enquiry.email}</td>
                  <td>{enquiry.productName}</td>
                  <td>{enquiry.date}</td>
                  <td>
                    <span className={`status-${enquiry.status.toLowerCase()}`}>
                      {enquiry.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="view-btn"
                      onClick={() => handleViewDetails(enquiry)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
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
                  <p>{selectedEnquiry.name}</p>
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
                  <p>{selectedEnquiry.date}</p>
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
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>
                <div className="detail-group">
                  <label>Previous Response:</label>
                  {selectedEnquiry.response ? (
                    <p className="previous-response">{selectedEnquiry.response}</p>
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
                    <p>{new Date(selectedEnquiry.lastUpdated).toLocaleString()}</p>
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


