import React from 'react';
import Navbar from "../components/Navbar";
import "../assets/scss/About.scss";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-container">
        <section className="hero-section">
          <h1>About Khatri Steel Furniture</h1>
          <p>Crafting Quality Steel Furniture Since 2014</p>
        </section>

        <section className="story-section">
          <h2>Our Story</h2>
          <p>
            Founded over three decades ago, Khatri Steel Furniture has been a
            pioneer in crafting high-quality steel furniture and providing
            exceptional welding services. What started as a small workshop has
            grown into a trusted name in the industry, serving thousands of
            satisfied customers.
          </p>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>
                We never compromise on materials and craftsmanship, ensuring
                every product meets our high standards.
              </p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>
                We continuously adapt and improve our designs to meet modern
                needs while maintaining durability.
              </p>
            </div>
            <div className="value-card">
              <h3>Customer Focus</h3>
              <p>
                Your satisfaction is our priority. We work closely with you to
                understand and fulfill your requirements.
              </p>
            </div>
            <div className="value-card">
              <h3>Reliability</h3>
              <p>
                We stand behind our products with excellent after-sales service
                and support.
              </p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://res.cloudinary.com/commonground/image/upload/v1744364266/pvsqjxugmksloqn36qiz.jpg"
                  alt="Team Member"
                />
              </div>
              <h3>Virendra Khatri</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://res.cloudinary.com/commonground/image/upload/v1744364266/pvsqjxugmksloqn36qiz.jpg"
                  alt="Team Member"
                />
              </div>
              <h3>Narendra Khatri</h3>
              <p>Associate Partner</p>
            </div>
            {/* <div className="team-member">
              <div className="member-image">
                <img
                  src="https://res.cloudinary.com/duyifa20j/image/upload/v1744281798/ulh7jqfzytjtia29ss3t.jpg"
                  alt="Team Member"
                />
              </div>
              <h3>Suresh Patel</h3>
              <p>Chief Designer</p>
            </div> */}
          </div>
        </section>

        <section className="stats-section">
          <div className="stat-card">
            <h3>30+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-card">
            <h3>5000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-card">
            <h3>1000+</h3>
            <p>Products Maded</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;