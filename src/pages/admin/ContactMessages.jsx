import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import '../../assets/scss/admin/ContactMessages.scss';
import config from '../../config/config';
import toast from 'react-hot-toast';

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${config.apiUrl}/api/contact-us/contact-messages`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }

      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error loading messages:', error);
      toast.error('Failed to load messages. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (messageId) => {
    try {
      const response = await fetch(
        `${config.apiUrl}/api/contact-messages/${messageId}/mark-read`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update message status');
      }

      setMessages(prevMessages =>
        prevMessages.map(msg =>
          msg.id === messageId ? { ...msg, status: 'read' } : msg
        )
      );
    } catch (error) {
      console.error('Error updating message:', error);
      toast.error('Failed to update message status.');
    }
  };

  const handleDelete = async (messageId) => {
    if (!window.confirm('Are you sure you want to delete this message?')) {
      return;
    }

    try {
      const response = await fetch(
        `${config.apiUrl}/api/contact-us/contact-messages/delete/${messageId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete message');
      }

      setMessages(prevMessages => 
        prevMessages.filter(msg => msg.id !== messageId)
      );
      toast.success('Message deleted successfully');
    } catch (error) {
      console.error('Error deleting message:', error);
      toast.error('Failed to delete message.');
    }
  };

  const filteredMessages = messages.filter(message => {
    if (filterStatus === 'all') return true;
    return message.status === filterStatus;
  });

  return (
    <AdminLayout>
      <div className="admin-contact-messages">
        <div className="header">
          <h1>Contact Messages</h1>
          <div className="filters">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Messages</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="loading">Loading messages...</div>
        ) : (
          <div className="messages-table">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMessages.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="no-messages">
                      No messages found
                    </td>
                  </tr>
                ) : (
                  filteredMessages.map((message) => (
                    <tr key={message.id} className={message.status === 'unread' ? 'unread' : ''}>
                      <td>{new Date(message.reportedAt).toLocaleDateString()}</td>
                      <td>{message.name}</td>
                      <td>{message.email}</td>
                      <td>{message.subject}</td>
                      {/* <td>
                        <span className={`status-badge ${message.status}`}>
                          {message.status}
                        </span>
                      </td> */}
                      <td className="actions">
                        <button
                          className="view-btn"
                          onClick={() => {
                            setSelectedMessage(message);
                            setShowDetailsModal(true);
                          }}
                        >
                          View
                        </button>
                        {message.status === 'unread' && (
                          <button
                            className="mark-read-btn"
                            onClick={() => handleMarkAsRead(message.id)}
                          >
                            Mark Read
                          </button>
                        )}
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(message.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {showDetailsModal && selectedMessage && (
          <div className="modal">
            <div className="modal-content">
              <button
                className="close-btn"
                onClick={() => {
                  setShowDetailsModal(false);
                  setSelectedMessage(null);
                }}
              >
                ×
              </button>
              <h2>Message Details</h2>
              <div className="message-details">
                <div className="detail-group">
                  <label>Date:</label>
                  <p>{new Date(selectedMessage.reportedAt).toLocaleString()}</p>
                </div>
                <div className="detail-group">
                  <label>Name:</label>
                  <p>{selectedMessage.name}</p>
                </div>
                <div className="detail-group">
                  <label>Email:</label>
                  <p>{selectedMessage.email}</p>
                </div>
                <div className="detail-group">
                  <label>Phone:</label>
                  <p>{selectedMessage.phone}</p>
                </div>
                <div className="detail-group">
                  <label>Subject:</label>
                  <p>{selectedMessage.subject}</p>
                </div>
                <div className="detail-group">
                  <label>Message:</label>
                  <p className="message-text">{selectedMessage.message}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default ContactMessages;

