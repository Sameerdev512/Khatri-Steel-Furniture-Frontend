import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../assets/scss/TransformationGallery.scss';
import { FaArrowLeft } from 'react-icons/fa';

const TransformationGallery = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: 1,
      category: "Almirah Repair",
      transformations: [
        {
          id: "f1",
          title: "Steel Almirah Restoration",
          description:
            "Complete restoration of a vintage steel almirah, including rust removal, structural repairs, and a modern finish.",
          repairInfo: {
            title: "Restoration Process",
            description:
              "Our comprehensive restoration process brings new life to old furniture.",
            steps: [
              "Complete disassembly and inspection",
              "Rust removal and treatment",
              "Reapaired structure ",
              "Locks and mirror and handle replacement",
              "Premium Custom Paint",
            ],
          },
          images: [
            {
              type: "before",
              url: "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745064460/0005-removebg-preview_zrawja.png",
            },
            {
              type: "after",
              url: "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745064460/0006-removebg-preview_dzfahb.png",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      category: "Double Bed Restoration",
      transformations: [
        {
          id: "g1",
          title: "Double Bed Transformation",
          description:
            "Complete overhaul of a weathered steel gate with reinforced hinges, rust protection, and elegant black finish.",
          repairInfo: {
            title: "Bed Restoration Process",
            description:
              "Professional Bed restoration for long-lasting durability.",
            steps: [
              "Structural assessment",
              "Rust treatment",
              "custom stuructural reinforcement",
              "Premium color finish",
              "Hardware upgrade",
            ],
          },
          images: [
            {
              type: "before",
              url: "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745063285/06-removebg-preview_1_wxtnly.png",
            },
            {
              type: "after",
              url: "https://res.cloudinary.com/commonground/image/upload/v1744786295/palang2_aboocr.png",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      category: "Industrial Equipment",
      transformations: [
        {
          id: "i1",
          title: "Metal Cooler Refinishing",
          description:
            "Professional refinishing of an industrial metal cabinet with anti-rust treatment and premium coating.",
          repairInfo: {
            title: "Metal Cooler Process",
            description:
              "Expert metal cabinet restoration for lasting durability.",
            steps: [
              "Rust removal and treatment",
              "Changed Water Tank ",
              "Replacement of electric motor and parts",
              "Ensure proper electric connection",
              "Premium color finish",
            ],
          },
          images: [
            {
              type: "before",
              url: "https://res.cloudinary.com/commonground/image/upload/v1744787114/cooler-removebg-preview_pi5fhw.png",
            },
            {
              type: "after",
              url: "https://res.cloudinary.com/commonground/image/upload/v1744787114/cooler-removebg-preview_pi5fhw.png",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      category: "Almirah Decor & Repair",
      transformations: [
        {
          id: "s1",
          title: "Almirah Decor & Repair",
          description:
            "Restoration of vintage industrial shelving unit with structural reinforcement and modern finish.",
          repairInfo: {
            title: "Almirah Reapir Process",
            description:
              "Complete restoration process for industrial storage solutions.",
            steps: [
              "Complete disassembly and inspection",
              "Rust removal and treatment",
              "Reapaired structure ",
              "Locks and mirror and handle replacement",
              "Premium Custom Paint",
            ],
          },
          images: [
            {
              type: "before",
              url: "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745066701/21-removebg-preview_ptslsh.png",
            },
            {
              type: "after",
              url: "https://res.cloudinary.com/dcltfqtpb/image/upload/v1745066700/2-removebg-preview_2_hly91e.png",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="transformation-gallery-page">
        <div className="container">
          <button 
            className="back-button"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft /> Back
          </button>
          
          <h1>Transformation Gallery</h1>
          <p className="gallery-description">
            Explore our metal restoration projects across different categories
          </p>
          
          <div className="gallery-grid">
            {categories.map((category) => (
              category.transformations.map((item) => (
                <div key={item.id} className="gallery-row">
                  <div className="category-card">
                    {/* <div className="category-badge">{category.category}</div> */}
                    <div className="transformation-content">
                      <h3>{item.title}</h3>
                      <Carousel
                        showArrows={true}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        className="carousel-container"
                      >
                        {item.images.map((image, index) => (
                          <div key={index} className="carousel-slide">
                            <div className="image-label">{image.type}</div>
                            <img src={image.url} alt={`${item.title} - ${image.type}`} />
                          </div>
                        ))}
                      </Carousel>
                      {/* <p className="description">{item.description}</p> */}
                    </div>
                  </div>
                  
                  {item.repairInfo && (
                    <div className="repair-info">
                      <h3>{item.repairInfo.title}</h3>
                      <p>{item.repairInfo.description}</p>
                      <ul>
                        {item.repairInfo.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))
            ))}
          </div>
        </div>
        <div className="transforming-line">
          <div className="line-text">Transforming Metal, Creating Value</div>
          <div className="animated-line"></div>
        </div>
      </div>
    </>
  );
};

export default TransformationGallery;




