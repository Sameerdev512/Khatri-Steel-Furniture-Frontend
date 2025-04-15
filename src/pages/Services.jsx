import React from "react";
import Navbar from "../components/Navbar";
import "../assets/scss/Services.scss";

import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Custom Furniture Manufacturing",
    description:
      "We design and manufacture custom steel furniture tailored to your specific needs and preferences.",
    features: [
      "Customized designs",
      "High-quality materials",
      "Professional finishing",
      "Durability guaranteed",
      "On-time delivery",
    ],
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Furniture Repair & Restoration",
    description:
      "Expert repair and restoration services to bring your old furniture back to life.",
    features: [
      "Structural repairs",
      "Surface restoration",
      "Paint refinishing",
      "Hardware replacement",
      "Preventive maintenance",
    ],
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Welding Services",
    description:
      "Professional welding services for all types of metal work and fabrication needs.",
    features: [
      "Gas welding",
      "Electric Welding",
      "On-shop welding",
      "On-site welding",
    ],
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Commercial Solutions",
    description:
      "Comprehensive steel furniture and fixture solutions for commercial spaces.",
    features: [
      "Office furniture",
      "Industrial storage",
      "Shop fixtures",
      "Custom installations",
      "Bulk orders",
    ],
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const transformations = [
  {
    id: 1,
    title: "Steel Almirah Restoration",
    description: "Complete restoration of a vintage steel almirah with modern finishing",
    beforeImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Industrial Cabinet Makeover",
    description: "Transformation of a damaged industrial cabinet into a modern storage solution",
    beforeImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Steel Bed Frame Upgrade",
    description: "Complete overhaul of an old steel bed frame with contemporary design elements",
    beforeImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <Navbar />
      <div className="services-container">
        
        <section className="hero-section">
          <h1>Our Services</h1>
          <p>Professional Steel Furniture Solutions for Every Need</p>
        </section>

        <section className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <center><h2>{service.title}</h2></center>
                <p>{service.description}</p>
                <ul className="features-list ">
                  {service.features.map((feature, index) => (
                    <li key={index} className="list-style-none">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section className="process-section">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>
                Initial meeting to understand your requirements and preferences
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design</h3>
              <p>Creating detailed designs and specifications</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Manufacturing</h3>
              <p>Crafting your furniture with precision and care</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Quality Check</h3>
              <p>Thorough inspection to ensure perfect finishing</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Delivery</h3>
              <p>Safe delivery and installation at your location</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss your requirements</p>
          <Link to="/contact">
            <button className="cta-button">Contact Us</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Services;



