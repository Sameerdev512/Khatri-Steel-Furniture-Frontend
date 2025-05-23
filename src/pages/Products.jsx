import React, { useState } from 'react';
import "../assets/scss/Products.scss";
import Navbar from "../components/Navbar";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Modern Steel Almirah",
    category: "Almirah",
    price: 15999,
    image:
      "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745053861/02-removebg-preview_eph9mp.png",
    description:
      "Contemporary 3-door steel almirah with advanced locking system. Features adjustable shelves, mirror, and premium finish that resists scratches and corrosion.",
    features: [
      "3 Door Design",
      "Built-in Mirror",
      "Adjustable Shelves",
      "Premium Lock System",
      "Anti-rust Coating",
    ],
  },
  {
    id: 11,
    name: "Modern Steel Almirah",
    category: "Almirah",
    price: 15999,
    image:
      "https://res.cloudinary.com/commonground/image/upload/v1744786296/al2_qletzo.png",
    description:
      "Contemporary 3-door steel almirah with advanced locking system. Features adjustable shelves, mirror, and premium finish that resists scratches and corrosion.",
    features: [
      "3 Door Design",
      "Built-in Mirror",
      "Adjustable Shelves",
      "Premium Lock System",
      "Anti-rust Coating",
    ],
  },
  {
    id: 8,
    name: "Modern Blue Almirah",
    category: "Almirah",
    price: 15999,
    image:
      "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745067361/WhatsApp_Image_2025-04-19_at_17.56.19_c00d378b-removebg-preview_a2kjcg.png",
    description:
      "Contemporary 3-door steel almirah with advanced locking system. Features adjustable shelves, mirror, and premium finish that resists scratches and corrosion.",
    features: [
      "3 Door Design",
      "Built-in Mirror",
      "Adjustable Shelves",
      "Premium Lock System",
      "Anti-rust Coating",
    ],
  },
  {
    id: 7,
    name: "3 Door Almirah",
    category: "Almirah",
    price: 15999,
    image:
      "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745066088/10-removebg-preview_s5vvvh.png",
    description:
      "Contemporary 3-door steel almirah with advanced locking system. Features adjustable shelves, mirror, and premium finish that resists scratches and corrosion.",
    features: [
      "3 Door Design",
      "Built-in Mirror",
      "Adjustable Shelves",
      "Premium Lock System",
      "Anti-rust Coating",
    ],
  },
  {
    id: 2,
    name: "Desert Air Cooler",
    category: "Coolers",
    price: 8999,
    image:
      "https://res.cloudinary.com/commonground/image/upload/v1744787114/cooler-removebg-preview_pi5fhw.png",
    description:
      "High-capacity desert cooler with 85L water tank. Equipped with honeycomb cooling pads, powerful motor, and castor wheels for easy mobility.",
    features: [
      "85L Capacity",
      "Honeycomb Pads",
      "Powerful Motor",
      "Mobile Design",
      "Low Power Consumption",
    ],
  },

  {
    id: 21,
    name: "Desert Air Cooler",
    category: "Coolers",
    price: 8999,
    image:
      "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745060357/0021-removebg-preview_2_ccxaab.png",
    description:
      "High-capacity desert cooler with 85L water tank. Equipped with honeycomb cooling pads, powerful motor, and castor wheels for easy mobility.",
    features: [
      "85L Capacity",
      "Honeycomb Pads",
      "Powerful Motor",
      "Mobile Design",
      "Low Power Consumption",
    ],
  },
  {
    id: 3,
    name: "Metal Double Bed",
    category: "Beds",
    price: 12999,
    image:
      "https://res.cloudinary.com/commonground/image/upload/v1744786295/palang2_aboocr.png",
    description:
      "Sturdy metal double bed with elegant headboard design. Features powder-coated finish, anti-rust treatment, and supports up to 400kg weight.",
    features: [
      "Elegant Design",
      "Powder Coating",
      "400kg Capacity",
      "Anti-rust Treatment",
      "Easy Assembly",
    ],
  },

  {
    id: 9,
    name: "Metal Two Single Bed",
    category: "Beds",
    price: 3999,
    image:
      "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745067353/WhatsApp_Image_2025-04-19_at_18.02.27_8f8b4e89-removebg-preview_iezppd.png",
    description:
      "Sturdy metal double bed with elegant headboard design. Features powder-coated finish, anti-rust treatment, and supports up to 400kg weight.",
    features: [
      "Adjustable Shelves",
      "Wall Mounting",
      "Anti-slip Feet",
      "Stainless Steel",
      "Easy Clean",
    ],
  },
  {
    id: 4,
    name: "Metal Double Bed",
    category: "Beds",
    price: 3999,
    image:
      "https://res.cloudinary.com/commonground/image/upload/v1744787560/palang-peti-removebg-preview_zom6hj.png",
    description:
      "Sturdy metal double bed with elegant headboard design. Features powder-coated finish, anti-rust treatment, and supports up to 400kg weight.",
    features: [
      "Adjustable Shelves",
      "Wall Mounting",
      "Anti-slip Feet",
      "Stainless Steel",
      "Easy Clean",
    ],
  },
  {
    id: 5,
    name: "Wardrobe Almirah",
    category: "Almirah",
    price: 18999,
    image:
      "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745061373/0002-removebg-preview_atgp31.png",
    description:
      "Spacious wardrobe almirah with 4 doors and dedicated sections for clothes, accessories, and shoes. Features full-length mirror and premium finish.",
    features: [
      "4 Door Design",
      "Full Mirror",
      "Organized Sections",
      "Premium Finish",
      "Durable Hardware",
    ],
  },
  {
    id: 6,
    name: "Locker",
    category: "Other",
    price: 18999,
    image:
      "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745061373/0001-removebg-preview_y4beyo.png",
    description:
      "Spacious wardrobe almirah with 4 doors and dedicated sections for clothes, accessories, and shoes. Features full-length mirror and premium finish.",
    features: [
      "4 Door Design",
      "Full Mirror",
      "Organized Sections",
      "Premium Finish",
      "Durable Hardware",
    ],
  },
  {
    id: 10,
    name: "Iron Rack",
    category: "Other",
    price: 18999,
    image:
      "https://res.cloudinary.com/commonground/image/upload/v1745149014/61UZnpV7mfL._SX679_-removebg-preview_ez8haa.png",
    description:
      "Spacious Iron Rack dedicated sections for clothes, accessories, and shoes. Features full-length and premium finish.",
    features: [
      "4 Door Design",
      "Full Mirror",
      "Organized Sections",
      "Premium Finish",
      "Durable Hardware",
    ],
  },
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
  const navigate = useNavigate();

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
        {/* <center><h1>Explore Products</h1></center> */}
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
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <span className="category">{product.category}</span>
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

          <div className="product-info-section">
            <h2>Why Choose Our Products</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="icon">🛠️</div>
                <h3>Custom Manufacturing</h3>
                <p>
                  Tailored solutions to match your exact specifications and
                  requirements
                </p>
              </div>
              <div className="feature-card">
                <div className="icon">⭐</div>
                <h3>Premium Quality</h3>
                <p>
                  Built with high-grade materials ensuring long-lasting
                  durability
                </p>
              </div>
              <div className="feature-card">
                <div className="icon">🔒</div>
                <h3>Quality Assured</h3>
                <p>
                  Every product undergoes rigorous quality checks and testing
                </p>
              </div>
              <div className="feature-card">
                <div className="icon">🚚</div>
                <h3>Fast Delivery</h3>
                <p>
                  Quick and reliable delivery to your doorstep with careful
                  handling
                </p>
              </div>
            </div>
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
                    <Carousel
                      showArrows={true}
                      showStatus={false}
                      showThumbs={true}
                      infiniteLoop={true}
                      autoPlay={true}
                      interval={3000}
                    >
                      {/* Repeat the same image 4 times */}
                      {[1, 2, 3, 4].map((_, index) => (
                        <div key={index}>
                          <img
                            src={selectedProduct.image}
                            alt={`${selectedProduct.name} - View ${index + 1}`}
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                  <div className="modal-info">
                    <h2>{selectedProduct.name}</h2>
                    <p className="category">{selectedProduct.category}</p>
                    <p className="price">
                      ₹{selectedProduct.price.toLocaleString()}
                    </p>
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









