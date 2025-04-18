import React, { useState,useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import '../../assets/scss/admin/Enquiries.scss';
import config from '../../config/config';

const Enquiries = () => {
  //to load the updated enquiries
  const [loading, setLoading] = useState(false);
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      username: "John Doe",
      email: "john@example.com",
      productName: "almirah",
      message: "I would like to know more about your steel almirahs.",
      status: "New",
      phone: "4545454545",
      date: "2024-01-20",
      responseMessage: "", 
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
    setResponse(enquiry.responseMessage || ""); // Set initial response from enquiry
    setShowDetailsModal(true);
  };

  const handleStatusChange = (enquiryId, newStatus) => {
    setEnquiries(prevEnquiries =>
      prevEnquiries.map(enquiry =>
        enquiry.id === enquiryId ? 
        { 
          ...enquiry, 
          status: newStatus,
          // lastUpdated: new Date().toISOString()
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
        // lastUpdated: new Date().toISOString()
      } : enquiry
    );

    setEnquiries(updatedEnquiries);
    
    // Log the updated enquiry
    const updatedEnquiry = updatedEnquiries.find(e => e.id === selectedEnquiry.id);
    console.log('Enquiry Updated:', {
      id: updatedEnquiry.id,
      status: updatedEnquiry.status,
      responseMessage: updatedEnquiry.responseMessage,
      lastUpdated: updatedEnquiry.lastUpdated
    });

    //send updated response to backend and alert saced successfully
    handleResponse(updatedEnquiry)
    alert("Enquiry Updated Successfully!");
    // Close the modal
    setShowDetailsModal(false);
    setSelectedEnquiry(null);
    setResponse("");

    //load the updated enquiries
    setLoading(true);
  };

    const loadEnquiries = async () => {
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

      const result = await response.json();
      console.log(result);
      setEnquiries(result);
    };

    const handleResponse =async(updatedEnquiry)=>{
      //send updated data to backend to updated the enquiry
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

      const result = await response.json();
      console.log(result);

      return "Enquiry Updated Sucessfully!";
    }


    useEffect(() => {
      loadEnquiries();
    }, [loading]);

  return (
    <AdminLayout>
      <div className="admin-enquiries">
        <div className="header">
          <h1>Enquiry Management</h1>
          <div className="filters">
            <select defaultValue="all">
              <option value="all">All Enquiries</option>
              <option value="new">Pending</option>
              <option value="inProgress">Responded</option>
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
                  <td>{enquiry.username}</td>
                  <td>{enquiry.email}</td>
                  <td>{enquiry.productName}</td>
                  <td>{new Date(enquiry.enquiredAt).toLocaleDateString()}</td>
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



