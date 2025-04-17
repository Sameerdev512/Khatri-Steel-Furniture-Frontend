import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import "../assets/scss/FreeEnergyProducts.scss";

const freeEnergyProducts = [
  {
    id: 1,
    name: "Self Balancing Bird",
    price: 599,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A fascinating desk decoration that demonstrates the principle of center of gravity. This metal bird perfectly balances on any point.",
    features: [
      "Perfect Balance Point",
      "Durable Metal Construction",
      "Educational Tool",
      "Desk Decoration",
      "Hand-crafted Design"
    ],
    specifications: {
      material: "High-quality Steel",
      height: "15 cm",
      weight: "150g",
      finish: "Premium Paint Coating"
    }
  },
  {
    id: 2,
    name: "Perpetual Motion Wheel",
    price: 1299,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "An elegant demonstration of momentum and balance. This decorative wheel creates an illusion of perpetual motion.",
    features: [
      "Smooth Rotation",
      "Precision Bearings",
      "Artistic Design",
      "Long-lasting Movement",
      "Conversation Starter"
    ],
    specifications: {
      material: "Steel and Brass",
      diameter: "25 cm",
      weight: "500g",
      finish: "Polished Metal"
    }
  },
  {
    id: 3,
    name: "Magnetic Levitation Display",
    price: 2499,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A stunning display piece featuring magnetic levitation. Perfect for showcasing small items in mid-air.",
    features: [
      "Magnetic Levitation",
      "LED Lighting",
      "Rotating Display",
      "Strong Electromagnet",
      "Safety Features"
    ],
    specifications: {
      material: "Mixed Materials",
      height: "20 cm",
      weight: "800g",
      powerSource: "AC Adapter"
    }
  }
];

const FreeEnergyProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Navbar />
      <div className="free-energy-page">
        <div className="hero-section">
          <h1>Free Energy & Decorative Items</h1>
          <p>Self-balancing and perpetual motion decorative pieces</p>
        </div>

        <div className="products-container">
          <div className="products-grid">
            {freeEnergyProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
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

          {/* Product Details Modal */}
          {selectedProduct && (
            <div className="product-modal">
              <div className="modal-content">
                <button
                  className="close-btn"
                  onClick={() => setSelectedProduct(null)}
                >
                  ×
                </button>
                <div className="modal-grid">
                  <div className="modal-image">
                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                  </div>
                  <div className="modal-info">
                    <h2>{selectedProduct.name}</h2>
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

                    <div className="specifications">
                      <h3>Specifications:</h3>
                      <table>
                        <tbody>
                          {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                            <tr key={key}>
                              <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                              <td>{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <button 
                      className="enquire-btn"
                      onClick={() => {
                        if (!localStorage.getItem("role")) {
                          alert("Please login to enquire about products");
                        } else {
                          // Handle enquiry logic here
                          alert("Enquiry functionality will be implemented soon!");
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

          <div className="decorative-description">
            <div className="description-content">
              <h2>Key Features</h2>
              <div className="feature-blocks">
                <div className="feature">
                  <h3>Design</h3>
                  <ul>
                    <li>Premium Materials</li>
                    <li>Modern Aesthetics</li>
                    <li>Durable Build</li>
                    <li>Precision Engineering</li>
                  </ul>
                </div>
                <div className="feature">
                  <h3>Function</h3>
                  <ul>
                    <li>Self-Balancing</li>
                    <li>Low Maintenance</li>
                    <li>Energy Efficient</li>
                    <li>Silent Operation</li>
                  </ul>
                </div>
                <div className="feature">
                  <h3>Benefits</h3>
                  <ul>
                    <li>Educational Value</li>
                    <li>Conversation Starter</li>
                    <li>Stress Reducing</li>
                    <li>Desk Friendly</li>
                  </ul>
                </div>
              </div>
              <div className="highlight-text">
                <p>"Discover the beauty of perpetual motion and self-balancing artistry in every carefully crafted piece."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeEnergyProducts;




