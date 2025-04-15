import React from "react";
import "../assets/scss/Home.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Button = ({ children, variant = "primary" }) => {
  return (
    <button className={`button ${variant}`}>
      {children}
    </button>
  );
};

const products = [
  {
    id: 1,
    name: "Modern Steel Almirah",
    image: "../src/assets/images/almari.png",
    description:
      "Contemporary 3-door steel almirah with advanced locking system. Features adjustable shelves, mirror, and premium finish that resists scratches and corrosion.",
  },
  {
    id: 2,
    name: "Desert Air Cooler",
    image: "../src/assets/images/almari.png",
    description:
      "High-capacity desert cooler with 85L water tank. Equipped with honeycomb cooling pads, powerful motor, and castor wheels for easy mobility.",
  },
  {
    id: 3,
    name: "Metal Double Bed",
    image: "../src/assets/images/al2.png",
    description:
      "Sturdy metal double bed with elegant headboard design. Features powder-coated finish, anti-rust treatment, and supports up to 400kg weight.",
  },
  {
    id: 4,
    name: "Steel Kitchen Rack",
    image: "../src/assets/images/almari.png",
    description:
      "Multi-tier stainless steel kitchen rack with adjustable shelves. Perfect for organizing utensils and appliances, with anti-slip feet and wall-mounting option.",
  },
];

const transformations = [
  {
    id: 1,
    title: "Steel Almirah Restoration",
    description:
      "Complete restoration of a vintage steel almirah with modern finishing",
    beforeImage: "../src/assets/images/almari.png",
    afterImage: "../src/assets/images/almari.png",
  },
  {
    id: 2,
    title: "Steel Bed Frame Upgrade",
    description:
      "Complete overhaul of an old steel bed frame with contemporary design elements",
    beforeImage:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Metal Cabinet Makeover",
    description:
      "Transforming a worn-out metal cabinet into a modern storage solution",
    beforeImage:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];



const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/home");
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="announcement-bar">
        <span>🌟 Explore Our Special Collection</span>
        <Link to="/free-energy-products" className="highlight-link">
          Free Energy Products
          <span className="arrow">→</span>
        </Link>
      </div>
      {/* Hero Section */}
      <section className="hero-section mt-5">
        <h1>Custom Furniture, Repairs & Welding Services</h1>
        <p>We craft almirahs, coolers, beds & more — tailored to your needs.</p>
        <div className="button-group" >
          <span>
          <Link to="/products">
            <Button >View Products</Button>
          </Link>
          </span>
          <Link to="/contact">
            <Button  variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
        {/* <div className="gallery-cta">
          <Link to="/services#transformation-gallery" className="gallery-button">
            <span className="icon">✨</span>
            View Transformation Gallery
            <span className="arrow">→</span>
          </Link>
        </div> */}
        <div className="auth-links">
          {localStorage.getItem("token") ? (
            <span
              style={{ cursor: "pointer" }}
              className="auth-link"
              onClick={handleLogout}
            >
              Logout
            </span>
          ) : (
            <Link to="/login" className="auth-link">
              Login
            </Link>
          )}

          <span className="auth-separator">|</span>
          <Link to="/signup" className="auth-link">
            Sign Up
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="card-inner">
                <div className="card-front">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div className="product-title">
                    <h3>{product.name}</h3>
                  </div>
                </div>
                <div className="card-back">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link to="/products">
                    <Button variant="primary">View More</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transformation Gallery Section */}
      <section className="transformation-gallery" id="transformation-gallery">
        <h2>Transformation Gallery</h2>
        <p className="section-description">
          See the amazing transformations we've achieved through our repair and
          restoration services
        </p>

        <div className="transformations-grid">
          {transformations.map((item) => (
            <div key={item.id} className="transformation-card">
              <h3>{item.title}</h3>
              <div className="image-comparison">
                <div className="before">
                  <span className="label">Before</span>
                  <img src={item.beforeImage} alt={`${item.title} before`} />
                </div>
                <div className="after">
                  <span className="label">After</span>
                  <img src={item.afterImage} alt={`${item.title} after`} />
                </div>
              </div>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Custom Furniture</h3>
            <p>
              We build beds, almirahs, coolers & more based on your design and
              size needs.
            </p>
          </div>
          <div className="service-card">
            <h3>Repairs & Makeovers</h3>
            <p>
              We fix and transform your old furniture into like-new condition.
            </p>
            {/* <Link to="/services#transformation-gallery" className="gallery-link">
              View Transformation Gallery →
            </Link> */}
          </div>
          <div className="service-card">
            <h3>Welding & Metal Works</h3>
            <p>
              We offer all types of general welding and fabrication services.
            </p>
          </div>
        </div>
      </section>

      {/* Free Energy Section */}
      <section className="free-energy-section">
        <div className="section-header">
          <h2>Discover Our Free Energy Products</h2>
          <p>
            Explore our collection of fascinating self-balancing and perpetual
            motion decorative pieces
          </p>
        </div>

        <div className="featured-items">
          <div className="featured-item">
            <img
              src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Self Balancing Bird"
            />
            <h3>Self Balancing Bird</h3>
            <p>Perfect balance point demonstration</p>
          </div>
          <div className="featured-item">
            <img
              src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Perpetual Motion Wheel"
            />
            <h3>Perpetual Motion Wheel</h3>
            <p>Elegant demonstration of momentum</p>
          </div>
          <div className="featured-item">
            <img
              src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Magnetic Levitation Display"
            />
            <h3>Magnetic Levitation Display</h3>
            <p>Stunning floating display piece</p>
          </div>
        </div>

        <div className="cta-container">
          <p>Experience the magic of physics with our unique collection</p>
          <Link to="/free-energy-products" className="cta-button">
            Explore Free Energy Products
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-section">
        <h2>Want to place an order or need a repair?</h2>
        <p>Reach out to us directly for quick support and expert advice.</p>
        <span style={{ cursor: "pointer" }}>
          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </span>
      </section>
    </div>
  );
};

export default Home;
