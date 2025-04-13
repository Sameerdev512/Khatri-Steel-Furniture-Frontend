import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import '../../assets/scss/admin/Orders.scss';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      customer: "John Doe",
      items: ["Modern Steel Almirah"],
      total: 15999,
      status: "Pending",
      date: "2024-01-20"
    },
    // Add more sample orders
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleStatusChange = (orderId, newStatus) => {
    // Update order status logic here
  };

  return (
    <AdminLayout>
      <div className="admin-orders">
        <div className="header">
          <h1>Order Management</h1>
          <div className="filters">
            <select defaultValue="all">
              <option value="all">All Orders</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>₹{order.total}</td>
                  <td>{order.date}</td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className={`status-${order.status.toLowerCase()}`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td>
                    <button 
                      className="view-btn"
                      onClick={() => {
                        setSelectedOrder(order);
                        setShowDetailsModal(true);
                      }}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showDetailsModal && selectedOrder && (
          <div className="modal">
            <div className="modal-content">
              <h2>Order Details - {selectedOrder.id}</h2>
              <div className="order-details">
                <div className="detail-group">
                  <label>Customer:</label>
                  <p>{selectedOrder.customer}</p>
                </div>
                <div className="detail-group">
                  <label>Items:</label>
                  <ul>
                    {selectedOrder.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="detail-group">
                  <label>Total:</label>
                  <p>₹{selectedOrder.total}</p>
                </div>
                <div className="detail-group">
                  <label>Status:</label>
                  <p>{selectedOrder.status}</p>
                </div>
                <div className="detail-group">
                  <label>Date:</label>
                  <p>{selectedOrder.date}</p>
                </div>
              </div>
              <button onClick={() => setShowDetailsModal(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Orders;