import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/scss/ProductDetails.scss";
import config from '../config/config';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    username: '',
    email: '',
    phone: '',
    message: '',
    productName: ''
  });

  // Move products array outside useEffect
  const products = [
    {
      id: 1,
      name: "Modern Steel Almirah",
      category: "Almirah",
      price: 15999,
      image: [
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745053861/02-removebg-preview_eph9mp.png",
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745053861/01-removebg-preview_ljeply.png",
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745053861/03-removebg-preview_bxr1gh.png",
      ],
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
      image: [
        "https://res.cloudinary.com/commonground/image/upload/v1744786296/al2_qletzo.png",
        "https://res.cloudinary.com/commonground/image/upload/v1744786296/al2_qletzo.png",
        "https://res.cloudinary.com/commonground/image/upload/v1744786296/al2_qletzo.png",
      ],
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
      image: [
        "https://res.cloudinary.com/commonground/image/upload/v1744787114/cooler-removebg-preview_pi5fhw.png",
        "https://res.cloudinary.com/commonground/image/upload/v1744787114/cooler-removebg-preview_pi5fhw.png",
        "https://res.cloudinary.com/commonground/image/upload/v1744787114/cooler-removebg-preview_pi5fhw.png",
      ],
      description:
        "High-capacity desert cooler with 85L water tank. Equipped with honeycomb cooling pads, powerful motor, and castor wheels for easy mobility.",
      features: [
        "85L Capacity",
        "Honeycomb Pads",
        "Powerful Motor",
        "Low Power Consumption",
      ],
    },
    {
      id: 21,
      name: "Desert Air Cooler",
      category: "Coolers",
      price: 8999,
      image: [
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745060357/0021-removebg-preview_2_ccxaab.png",
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745060580/0021-removebg-preview_2_adnt3w.png",
      ],
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
      image: [
        "https://res.cloudinary.com/commonground/image/upload/v1744786295/palang2_aboocr.png",
        "https://res.cloudinary.com/commonground/image/upload/v1744786295/palang2_aboocr.png",
        "https://res.cloudinary.com/commonground/image/upload/v1744786295/palang2_aboocr.png",
      ],
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
      id: 3,
      name: "Metal Double Bed",
      category: "Beds",
      price: 12999,
      image: [
        "https://res.cloudinary.com/commonground/image/upload/v1744786295/palang2_aboocr.png",
      ],
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
      id: 4,
      name: "Metal Double Bed",
      category: "Kitchen",
      price: 3999,
      image: [
        "https://res.cloudinary.com/commonground/image/upload/v1744787560/palang-peti-removebg-preview_zom6hj.png",
        "https://res.cloudinary.com/commonground/image/upload/v1744787560/palang-peti-removebg-preview_zom6hj.png",
        "https://res.cloudinary.com/commonground/image/upload/v1744787560/palang-peti-removebg-preview_zom6hj.png",
      ],
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
      id: 5,
      name: "Wardrobe Almirah",
      category: "Almirah",
      price: 18999,
      image: [
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745061373/0002-removebg-preview_atgp31.png ",
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745061389/0002-removebg-preview_1_uve3bl.png",
      ],
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
      id: 101,
      name: "Hand Carft Dog",
      price: 599,
      category: "freeEnergy",
      image: [
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745055746/104-removebg-preview_kjzis0.png",
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745055331/103-removebg-preview_k1xpqq.png",
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745055943/103-removebg-preview-2_z1m0v7.png",
      ],
      description:
        "A fascinating desk decoration that demonstrates the principle of center of gravity. This metal dog perfectly balances on any point.",
      features: [
        "material: High-quality Steel",
        "Weight : 100gm",
        "height: 15 cm",
        "Desk Decoration",
        "Metal Design Product",
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
      name: "Motionable Mon-Son stechue",
      price: 1299,
      category: "freeEnergy",
      image: [
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745056965/107-removebg-preview_yd0koo.png",
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745056965/106-removebg-preview_uepsdy.png",
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745056839/108-removebg-preview_zbwddx.png",
      ],
      description:
        "An elegant demonstration of momentum and balance. This decorative stechue creates an illusion of mom son.",
      features: [
        "Smooth Rotation",
        "Artistic Metal Design",
        "material: Steel and Brass",
        "weight: 500g",
        "diameter: 25 cm",
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
      name: "Metal Archer",
      price: 2499,
      category: "freeEnergy",
      image: [
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745057809/111-removebg-preview_n4psxk.png",
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745057810/110-removebg-preview_w9pkif.png",
        "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745057811/109-removebg-preview_gbqlis.png",
      ],
      description:
        "A stunning display piece showing an archer. Perfect for showcasing small items for decoration.",
      features: [
        "Artistic Metal Design",
        "material: Mixed Materials",
        "Rotating Stechue",
        "Sheight: 20 cm",
        "weight: 800g",
      ],
      specifications: {
        material: "Mixed Materials",
        height: "20 cm",
        weight: "800g",
        powerSource: "AC Adapter",
      },
    },
    // {
    //   id: 108,
    //   name: "Self Balancing Car",
    //   price: 599,
    //   category: "freeEnergy",
    //   image:[
    //     "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

    //   ],
    //   description:
    //     "A fascinating desk decoration that demonstrates the principle of center of gravity. This metal bird perfectly balances on any point.",
    //   features: [
    //     "Perfect Balance Point",
    //     "Durable Metal Construction",
    //     "Educational Tool",
    //     "Desk Decoration",
    //     "Hand-crafted Design",
    //   ],
    //   specifications: {
    //     material: "High-quality Steel",
    //     height: "15 cm",
    //     weight: "150g",
    //     finish: "Premium Paint Coating",
    //   },
    // },
  ];

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      // Set the product name in enquiry form when product is found
      setEnquiryForm(prev => ({
        ...prev,
        productName: foundProduct.name
      }));
    } else {
      navigate('/products'); // Redirect if product not found
    }
  }, [id, navigate]);

  const handleEnquirySubmit = async(e) => {
    e.preventDefault();
    
    // cannot send enquiry without login
    if (!localStorage.getItem("role")) {
      toast.error("Please login to submit an enquiry");
      return;
    }
    // Handle enquiry submission
    console.log('Enquiry submitted:', enquiryForm);
    toast.success('Enquiry submitted successfully!');
    setShowEnquiryForm(false);
    setEnquiryForm({
      username: '',
      email: '',
      phone: '',
      message: '',
      productName: product.name // Use product from state
    });

    const response = fetch(`${config.apiUrl}/api/enquiries/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(enquiryForm),
    });

    const result = await response.json();
    console.log(result);
    
    if(response.ok) {
      toast.success("Enquiry submitted successfully!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleShare = () => {
    const productUrl = window.location.href;
    const message = `Check out ${product.name} - ₹${product.price.toLocaleString()}\n\n${productUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const getRelatedProducts = () => {
    // Filter out the current product
    const otherProducts = products.filter(p => p.id !== product.id);
    
    // Get products from same category
    const sameCategory = otherProducts.filter(p => p.category === product.category);
    
    // Get products from other categories if we need more
    const otherCategories = otherProducts.filter(p => p.category !== product.category);
    
    // We want 3 related products total
    const numNeeded = 3 - sameCategory.length;
    
    // Combine same category products with others if needed
    return [
      ...sameCategory,
      ...otherCategories.slice(0, numNeeded)
    ].slice(0, 3); // Ensure we only get 3 products total
  };

  const handleBack = (id)=>{()=>
    id > 100 ? navigate("/free-energy-products") : navigate("/products")
  }

  return (
    <>
      <Navbar />
      <div className="product-details-page">
        <div className="back-nav">
          <div className="container">
            <button 
              className="back-button"
              onClick={()=>id > 100 ?navigate("/free-energy-products"):navigate("/products")}
            >
              <FaArrowLeft /> Back to Products
            </button>
          </div>
        </div>

        <div className="container">
          <div className="product-details-grid">
            <div className="product-images">
              <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
              >
                {Array.isArray(product.image) ? (
                  // Handle array of images
                  product.image.map((imageUrl, index) => (
                    <div key={index}>
                      <img
                        src={imageUrl}
                        alt={`${product.name} - View ${index + 1}`}
                      />
                    </div>
                  ))
                ) : (
                  // Handle single image
                  <div>
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                )}
              </Carousel>
            </div>

            <div className="product-info">
              <div className="product-header">
                <span className="category">{product.category}</span>
                <h2>{product.name}</h2>
                <div className="price">₹{product.price.toLocaleString()}</div>
              </div>
              
              <div className="description">
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>

              <div className="features">
                <h3>Key Features</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="action-buttons">
                <button 
                  className="enquire-button primary"
                  onClick={() => setShowEnquiryForm(true)}
                >
                  <i className="fas fa-envelope"></i> Enquire Now
                </button>
                <button className="share-button" onClick={handleShare}>
                  <i className="fab fa-whatsapp fa-lg"></i> Share
                </button>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <section className="related-products">
            <h2>Related Products</h2>
            <div className="products-grid">
              {getRelatedProducts().map((relatedProduct) => (
                <div key={relatedProduct.id} className="product-card">
                  <img src={relatedProduct.image[0]} alt={relatedProduct.name} />
                  <h3>{relatedProduct.name}</h3>
                  <p className="price">₹{relatedProduct.price.toLocaleString()}</p>
                  <button onClick={() => navigate(`/product/${relatedProduct.id}`)}>
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Product Footer */}
          <div className="product-footer">
            <div className="footer-info">
              <div className="info-box">
                <i className="fas fa-truck"></i>
                <h4>Free Delivery</h4>
                <p>On selected products</p>
              </div>
              <div className="info-box">
                <i className="fas fa-shield-alt"></i>
                <h4>2 Year Warranty</h4>
                <p>100% guarantee</p>
              </div>
              <div className="info-box">
                <i className="fas fa-medal"></i>
                <h4>Premium Quality</h4>
                <p>Best materials used</p>
              </div>
              <div className="info-box">
                <i className="fas fa-tools"></i>
                <h4>Installation</h4>
                <p>Expert assembly available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Keep existing enquiry form modal */}
        {showEnquiryForm && (
          <div className="enquiry-form-container">
            <div className="enquiry-form">
              <h2>Product Enquiry</h2>
              <form onSubmit={handleEnquirySubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="username"
                    value={enquiryForm.name}
                    placeholder='your name here'
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={enquiryForm.email}
                    placeholder="your email here"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder='your phone here'
                    value={enquiryForm.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={enquiryForm.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-actions">
                  <button type="submit">Submit Enquiry</button>
                  <button 
                    type="button" 
                    className="cancel"
                    onClick={() => setShowEnquiryForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;





