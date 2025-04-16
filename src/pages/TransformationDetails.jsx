import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const TransformationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transformation, setTransformation] = useState(null);

  useEffect(() => {
    console.log('TransformationDetails mounted with id:', id); // Debug log
    
    // Mock data - replace with your actual data
    const transformationData = {
      1: {
        title: "Steel Almirah Restoration",
        description: "Complete restoration of a vintage steel almirah with modern finishing",
        beforeImage: "../src/assets/images/almari.png",
        afterImage: "../src/assets/images/almari.png",
        process: "Our restoration process involved completely stripping the old paint...",
        // ... other details
      },
      // Add more transformations as needed
    };

    if (transformationData[id]) {
      setTransformation(transformationData[id]);
    } else {
      console.log('Transformation not found for id:', id); // Debug log
      navigate('/');
    }
  }, [id, navigate]);

  if (!transformation) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="transformation-details-page">
        <div className="container">
          <button className="back-button" onClick={() => navigate(-1)}>
            <i className="fas fa-arrow-left"></i> Back
          </button>

          <h1>{transformation.title}</h1>
          <div className="transformation-content">
            <div className="before-after-images">
              <div className="image-container">
                <h3>Before</h3>
                <img src={transformation.beforeImage} alt="Before transformation" />
              </div>
              <div className="image-container">
                <h3>After</h3>
                <img src={transformation.afterImage} alt="After transformation" />
              </div>
            </div>
            <div className="details-section">
              <h2>About This Transformation</h2>
              <p>{transformation.description}</p>
              <p>{transformation.process}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransformationDetails;
