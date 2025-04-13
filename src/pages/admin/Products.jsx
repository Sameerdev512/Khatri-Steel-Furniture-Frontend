import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import '../../assets/scss/admin/Products.scss';

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Modern Steel Almirah",
      category: "Almirah",
      price: 15999,
      keyFeatures: ["Advanced locking system", "3-door design", "Durable steel construction"],
      status: "Active",
      description: "Contemporary 3-door steel almirah with advanced locking system",
      image: null
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const categories = ["Cooler", "Almirah", "Bed", "Free Energy Products"];

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    keyFeatures: '',
    description: '',
    image: null,
    imagePreview: null,
    // Additional fields for free energy products
    material: '',
    height: '',
    weight: '',
    powerSource: ''
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file)
      });
    }
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      keyFeatures: product.keyFeatures.join(', '),
      description: product.description,
      image: product.image,
      imagePreview: product.image,
      ...(product.category === 'Free Energy Products' && {
        material: product.specifications?.material || '',
        height: product.specifications?.height || '',
        weight: product.specifications?.weight || '',
        powerSource: product.specifications?.powerSource || ''
      })
    });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const keyFeaturesArray = formData.keyFeatures
      .split(',')
      .map(feature => feature.trim())
      .filter(feature => feature !== '');

    const productData = {
      id: isEditing ? selectedProduct.id : products.length + 1,
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      keyFeatures: keyFeaturesArray,
      status: isEditing ? selectedProduct.status : 'Active',
      description: formData.description,
      image: formData.image,
      ...(formData.category === 'Free Energy Products' && {
        specifications: {
          material: formData.material,
          height: formData.height,
          weight: formData.weight,
          powerSource: formData.powerSource
        }
      })
    };

    // Log the product data object
    console.log('Product Data:', productData);

    // Update products array
    if (isEditing) {
      setProducts(products.map(product => 
        product.id === selectedProduct.id ? productData : product
      ));
    } else {
      setProducts([...products, productData]);
    }

    // Reset form and close modal
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      category: '',
      price: '',
      keyFeatures: '',
      description: '',
      image: null,
      imagePreview: null,
      material: '',
      height: '',
      weight: '',
      powerSource: ''
    });
    setShowModal(false);
    setIsEditing(false);
    setSelectedProduct(null);
  };

  return (
    <AdminLayout>
      <div className="admin-products">
        <div className="header">
          <h1>Product Management</h1>
          <button className="add-btn" onClick={() => setShowModal(true)}>
            Add New Product
          </button>
        </div>

        <div className="products-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Key Features</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>₹{product.price}</td>
                  <td>{product.keyFeatures.join(", ")}</td>
                  <td>{product.status}</td>
                  <td className="actions">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(product)}
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

        {showModal && (
          <div className="product-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>{isEditing ? "Edit Product" : "Add New Product"}</h2>
                <button className="close-btn" onClick={resetForm}>
                  &times;
                </button>
              </div>
              <form className="product-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Product Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="file-input"
                      required={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Conditional Fields for Free Energy Products */}
                  {formData.category === 'Free Energy Products' && (
                    <>
                      <div className="form-group">
                        <label>Material</label>
                        <input
                          type="text"
                          value={formData.material}
                          onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                          required
                          placeholder="e.g., High-quality Steel"
                        />
                      </div>
                      <div className="form-group">
                        <label>Height</label>
                        <input
                          type="text"
                          value={formData.height}
                          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                          required
                          placeholder="e.g., 15 cm"
                        />
                      </div>
                      <div className="form-group">
                        <label>Weight</label>
                        <input
                          type="text"
                          value={formData.weight}
                          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                          required
                          placeholder="e.g., 150g"
                        />
                      </div>
                      <div className="form-group">
                        <label>Power Source</label>
                        <input
                          type="text"
                          value={formData.powerSource}
                          onChange={(e) => setFormData({ ...formData, powerSource: e.target.value })}
                          required
                          placeholder="e.g., AC Adapter"
                        />
                      </div>
                    </>
                  )}

                  <div className="form-group full-width">
                    <label>Key Features (comma-separated)</label>
                    <textarea
                      value={formData.keyFeatures}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          keyFeatures: e.target.value,
                        })
                      }
                      placeholder="Enter features separated by commas"
                      required
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  {formData.imagePreview && (
                    <div className="form-group full-width">
                      <div className="image-preview">
                        <img src={formData.imagePreview} alt="Preview" />
                      </div>
                    </div>
                  )}
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
                    {isEditing ? "Save Changes" : "Add Product"}
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

export default Products;



