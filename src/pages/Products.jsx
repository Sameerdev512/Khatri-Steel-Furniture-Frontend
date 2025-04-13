import React, { useState } from 'react';
import "../assets/scss/Products.scss";
import Navbar from "../components/Navbar";

const products = [
  {
    id: 1,
    name: "Modern Steel Almirah",
    category: "Almirah",
    price: 15999,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Contemporary 3-door steel almirah with advanced locking system. Features adjustable shelves, mirror, and premium finish that resists scratches and corrosion.",
    features: [
      "3 Door Design",
      "Built-in Mirror",
      "Adjustable Shelves",
      "Premium Lock System",
      "Anti-rust Coating"
    ]
  },
  {
    id: 2,
    name: "Desert Air Cooler",
    category: "Coolers",
    price: 8999,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "High-capacity desert cooler with 85L water tank. Equipped with honeycomb cooling pads, powerful motor, and castor wheels for easy mobility.",
    features: [
      "85L Capacity",
      "Honeycomb Pads",
      "Powerful Motor",
      "Mobile Design",
      "Low Power Consumption"
    ]
  },
  {
    id: 3,
    name: "Metal Double Bed",
    category: "Beds",
    price: 12999,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sturdy metal double bed with elegant headboard design. Features powder-coated finish, anti-rust treatment, and supports up to 400kg weight.",
    features: [
      "Elegant Design",
      "Powder Coating",
      "400kg Capacity",
      "Anti-rust Treatment",
      "Easy Assembly"
    ]
  },
  {
    id: 4,
    name: "Steel Kitchen Rack",
    category: "Kitchen",
    price: 3999,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Multi-tier stainless steel kitchen rack with adjustable shelves. Perfect for organizing utensils and appliances, with anti-slip feet and wall-mounting option.",
    features: [
      "Adjustable Shelves",
      "Wall Mounting",
      "Anti-slip Feet",
      "Stainless Steel",
      "Easy Clean"
    ]
  },
  {
    id: 5,
    name: "Wardrobe Almirah",
    category: "Almirah",
    price: 18999,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Spacious wardrobe almirah with 4 doors and dedicated sections for clothes, accessories, and shoes. Features full-length mirror and premium finish.",
    features: [
      "4 Door Design",
      "Full Mirror",
      "Organized Sections",
      "Premium Finish",
      "Durable Hardware"
    ]
  }
];

const categories = ["All", ...new Set(products.map(product => product.category))];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Enquiry submitted:', {
      product: selectedProduct.name,
      ...enquiryForm
    });
    // Reset form
    setEnquiryForm({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    // Close the enquiry form
    setShowEnquiryForm(false);
    // Optionally show a success message
    alert('Enquiry submitted successfully! We will contact you soon.');
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="products-page">
        <div className="products-container">
          <div className="filters-section">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="categories">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="category">{product.category}</p>
                  <p className="price">₹{product.price.toLocaleString()}</p>
                  <button 
                    className="view-details-btn"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* New sections below the products grid */}
          <div className="product-info-section">
            <div className="quality-assurance">
              <h2>Why Choose Our Products</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="icon">🛠️</div>
                  <h3>Custom Manufacturing</h3>
                  <p>All products can be customized to your specific requirements</p>
                </div>
                <div className="feature-card">
                  <div className="icon">⭐</div>
                  <h3>Premium Quality</h3>
                  <p>Built with high-grade materials for long-lasting durability</p>
                </div>
                <div className="feature-card">
                  <div className="icon">🔒</div>
                  <h3>Quality Assured</h3>
                  <p>Rigorous quality checks for every product</p>
                </div>
                <div className="feature-card">
                  <div className="icon">🚚</div>
                  <h3>Delivery Available</h3>
                  <p>Safe and timely delivery to your doorstep</p>
                </div>
              </div>
            </div>
            
            <div className="ordering-info">
              <h2>How to Order</h2>
              <div className="steps-container">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Browse & Select</h3>
                  <p>Choose from our wide range of products</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Customize</h3>
                  <p>Specify your size and design requirements</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Enquire</h3>
                  <p>Get detailed pricing and delivery information</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h3>Confirm Order</h3>
                  <p>Place your order and track manufacturing progress</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Modal */}
          {selectedProduct && (
            <div className="product-modal">
              <div className="modal-content">
                <button className="close-btn" onClick={() => setSelectedProduct(null)}>×</button>
                <div className="modal-grid">
                  <div className="modal-image">
                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                  </div>
                  <div className="modal-info">
                    <h2>{selectedProduct.name}</h2>
                    <p className="category">{selectedProduct.category}</p>
                    <p className="price">₹{selectedProduct.price.toLocaleString()}</p>
                    <p className="description">{selectedProduct.description}</p>
                    <div className="features">
                      <h3>Key Features:</h3>
                      <ul>
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <button 
                      className="enquire-btn"
                      onClick={() => {
                        if (!localStorage.getItem("role")) {
                          alert("Please login to enquire about products");
                          // Optionally, you can redirect to login page
                          // window.location.href = '/login';
                        } else {
                          setShowEnquiryForm(true);
                        }
                      }}
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enquiry Form Modal */}
          {showEnquiryForm && (
            <div className="enquiry-modal">
              <div className="enquiry-content">
                <button 
                  className="close-btn"
                  onClick={() => setShowEnquiryForm(false)}
                >
                  ×
                </button>
                <h2>Enquire About {selectedProduct.name}</h2>
                <form onSubmit={handleSubmitEnquiry}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={enquiryForm.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={enquiryForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={enquiryForm.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={enquiryForm.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;





