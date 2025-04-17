import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import "../assets/scss/FreeEnergyProducts.scss";

const FreeEnergyProducts = () => {
  const navigate = useNavigate();

  const freeEnergyProducts = [
    {
      id: 101,
      name: "Self Balancing Bird",
      price: 599,

      category: "freeEnergy",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "A fascinating desk decoration that demonstrates the principle of center of gravity. This metal bird perfectly balances on any point.",
      features: [
        "Perfect Balance Point",
        "Durable Metal Construction",
        "Educational Tool",
        "Desk Decoration",
        "Hand-crafted Design",
      ],
      specifications: {
        material: "High-quality Steel",
        height: "15 cm",
        weight: "150g",
        finish: "Premium Paint Coating",
      },
    },
    {
      id: 105,
      name: "Self Balancing Bird",
      price: 599,

      category: "freeEnergy",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "A fascinating desk decoration that demonstrates the principle of center of gravity. This metal bird perfectly balances on any point.",
      features: [
        "Perfect Balance Point",
        "Durable Metal Construction",
        "Educational Tool",
        "Desk Decoration",
        "Hand-crafted Design",
      ],
      specifications: {
        material: "High-quality Steel",
        height: "15 cm",
        weight: "150g",
        finish: "Premium Paint Coating",
      },
    },
    {
      id: 102,
      name: "Perpetual Motion Wheel",
      price: 1299,

      category: "freeEnergy",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "An elegant demonstration of momentum and balance. This decorative wheel creates an illusion of perpetual motion.",
      features: [
        "Smooth Rotation",
        "Precision Bearings",
        "Artistic Design",
        "Long-lasting Movement",
        "Conversation Starter",
      ],
      specifications: {
        material: "Steel and Brass",
        diameter: "25 cm",
        weight: "500g",
        finish: "Polished Metal",
      },
    },
    {
      id: 103,
      name: "Magnetic Levitation Display",
      price: 2499,
      category: "freeEnergy",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "A stunning display piece featuring magnetic levitation. Perfect for showcasing small items in mid-air.",
      features: [
        "Magnetic Levitation",
        "LED Lighting",
        "Rotating Display",
        "Strong Electromagnet",
        "Safety Features",
      ],
      specifications: {
        material: "Mixed Materials",
        height: "20 cm",
        weight: "800g",
        powerSource: "AC Adapter",
      },
    },
  ];

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
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

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





