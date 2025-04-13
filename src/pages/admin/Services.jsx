import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import '../../assets/scss/admin/Services.scss';

const Services = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Custom Furniture Manufacturing",
      price: "Custom",
      status: "Active",
      bookings: 15,
      description: "",
      features: [],
      image: null
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    price: '',
    features: '',
    image: null,
    imagePreview: null
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewService({
        ...newService,
        image: file,
        imagePreview: URL.createObjectURL(file)
      });
    }
  };

  const handleEdit = (service) => {
    setIsEditing(true);
    setSelectedService(service);
    setNewService({
      title: service.title,
      description: service.description,
      price: service.price,
      features: service.features.join(', '),
      image: service.image,
      imagePreview: service.image
    });
    setShowAddModal(true);
  };

  const handleAddService = (e) => {
    e.preventDefault();
    
    const featuresArray = newService.features
      .split(',')
      .map(feature => feature.trim())
      .filter(feature => feature !== '');

    const serviceData = {
      id: isEditing ? selectedService.id : services.length + 1,
      title: newService.title,
      description: newService.description,
      price: newService.price,
      features: featuresArray,
      status: isEditing ? selectedService.status : 'Active',
      bookings: isEditing ? selectedService.bookings : 0,
      image: newService.image
    };

    // Log the service data object
    console.log('Service Data:', {
      ...serviceData,
      image: newService.image ? {
        name: newService.image.name,
        type: newService.image.type,
        size: newService.image.size
      } : null
    });

    if (isEditing) {
      setServices(services.map(service => 
        service.id === selectedService.id ? serviceData : service
      ));
      console.log('Service Edited:', serviceData);
    } else {
      setServices([...services, serviceData]);
      console.log('New Service Added:', serviceData);
    }

    resetForm();
  };

  const resetForm = () => {
    setNewService({
      title: '',
      description: '',
      price: '',
      features: '',
      image: null,
      imagePreview: null
    });
    setShowAddModal(false);
    setIsEditing(false);
    setSelectedService(null);
  };

  return (
    <AdminLayout>
      <div className="admin-services">
        <div className="header">
          <h1>Service Management</h1>
          <button className="add-btn" onClick={() => setShowAddModal(true)}>
            Add New Service
          </button>
        </div>

        <div className="services-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Status</th>
                <th>Bookings</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service.id}>
                  <td>{service.id}</td>
                  <td>{service.title}</td>
                  <td>{service.price}</td>
                  <td>{service.status}</td>
                  <td>{service.bookings}</td>
                  <td>
                    <button 
                      className="edit-btn"
                      onClick={() => handleEdit(service)}
                    >
                      Edit
                    </button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showAddModal && (
          <div className="service-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>{isEditing ? 'Edit Service' : 'Add New Service'}</h2>
                <button 
                  className="close-btn"
                  onClick={resetForm}
                >
                  ×
                </button>
              </div>
              <form className="service-form" onSubmit={handleAddService}>
                <div className="form-group">
                  <label>Service Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input"
                    required={!isEditing}
                  />
                  {newService.imagePreview && (
                    <div className="image-preview">
                      <img src={newService.imagePreview} alt="Preview" />
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={newService.title}
                    onChange={(e) => setNewService({...newService, title: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={newService.description}
                    onChange={(e) => setNewService({...newService, description: e.target.value})}
                    required
                  />
                </div>
                {/* <div className="form-group">
                  <label>Price</label>
                  <input
                    type="text"
                    value={newService.price}
                    onChange={(e) => setNewService({...newService, price: e.target.value})}
                    required
                  />
                </div> */}
                <div className="form-group">
                  <label>Features (comma-separated)</label>
                  <textarea
                    value={newService.features}
                    onChange={(e) => setNewService({...newService, features: e.target.value})}
                    required
                  />
                </div>
                <div className="form-actions">
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="save-btn">
                    {isEditing ? 'Save Changes' : 'Add Service'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Services;


