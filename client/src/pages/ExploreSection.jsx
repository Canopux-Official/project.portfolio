import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../components/Projects.jsx";
import "../styles/ExploreSection.css";

const ExploreSection = () => {
  const { projectTitle } = useParams();
  const decodedTitle = decodeURIComponent(projectTitle);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const project = projects.find((p) => p.title === decodedTitle);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (project?.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [project?.images]);

  if (!project) {
    return (
      <div className="explores-section">
        <div className="floating-bg">
          <div className="bg-shape bg-shape-1"></div>
          <div className="bg-shape bg-shape-2"></div>
          <div className="bg-shape bg-shape-3"></div>
        </div>
        <div className="nots-found-container">
          <div className="nots-found-animation">
            <div className="nots-found-icon">🔍</div>
            <div className="pulses-ring"></div>
          </div>
          <h1 className="nots-found-title">Project Not Found</h1>
          <p className="nots-found-desc">
            The project you're looking for doesn't exist or may have been moved.
          </p>
        </div>
      </div>
    );
  }

  const { introduction, problemStatement, approach, technologies } = project;

  if (isLoading) {
    return (
      <div className="explores-section loadings">
        <div className="loadings-spinner">
          <div className="spinners"></div>
          <p>Loading amazing project...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="explores-section">
      {/* Background Orbs */}
      <div className="floating-bg">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      <div className="explores-header-actions">
        <Link to="/project" className="backs-button">
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <div className="heros-section">
        <div className="heros-content">
          <div className="heros-text">
            <h1 className="heros-title">{project.title}</h1>
            <p className="heros-description">{introduction}</p>
          </div>
        </div>
      </div>

      {/* Image Showcase */}
      {project.images && project.images.length > 0 && (
        <div className="images-showcase">
          <div className="images-showcase-container">
            <div className="mains-image-container">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} showcase ${currentImageIndex + 1}`}
                className="mains-showcase-image"
                loading="eager"
              />
              <div className="images-overlay">
                <div className="images-controls">
                  {project.images.length > 1 && (
                    <>
                      <button
                        className="images-nav prev"
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === 0 ? project.images.length - 1 : prev - 1
                          )
                        }
                      >
                        ←
                      </button>
                      <button
                        className="images-nav next"
                        onClick={() =>
                          setCurrentImageIndex(
                            (prev) => (prev + 1) % project.images.length
                          )
                        }
                      >
                        →
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {project.images.length > 1 && (
              <div className="images-thumbnails">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnails ${
                      index === currentImageIndex ? "actives" : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Project Content Cards */}
      <div id="problem-section" className="mains-content">
        <div className="contents-grid">
          <div className="contents-card problems-card">
            <div className="cards-decoration problems-decoration"></div>
            <div className="cards-header">
              <div className="cards-icon problems-icon">
                <span className="icons-inner">🧠</span>
              </div>
              <div className="cards-header-text">
                <h2 className="cards-title">Problem Statement</h2>
                <p className="cards-subtitle">What challenge did we solve?</p>
              </div>
            </div>
            <div className="cards-content">
              <p className="cards-text">{problemStatement}</p>
            </div>
          </div>

          <div id="approach-section" className="contents-card approachs-card">
            <div className="cards-decoration approachs-decoration"></div>
            <div className="cards-header">
              <div className="cards-icon approachs-icon">
                <span className="icons-inner">⚡</span>
              </div>
              <div className="cards-header-text">
                <h2 className="cards-title">Our Approach</h2>
                <p className="cards-subtitle">How we tackled the challenge</p>
              </div>
            </div>
            <div className="cards-content">
              <p className="cards-text">{approach}</p>
            </div>
          </div>

          {technologies && (
            <div
              id="techs-section"
              className="contents-card techs-card fulls-width"
            >
              <div className="cards-decoration techs-decoration"></div>
              <div className="cards-header">
                <div className="cards-icon techs-icon">
                  <span className="icons-inner">🔧</span>
                </div>
                <div className="cards-header-text">
                  <h2 className="cards-title">Technologies & Tools</h2>
                  <p className="cards-subtitle">Powering this project</p>
                </div>
              </div>
              <div className="cardscontent">
                <div className="techs-grid">
                  {Object.entries(technologies).map(([category, items]) => (
                    <div key={category} className="techs-category">
                      <h3 className="techs-category-title">
                        <span className="categorys-icon">📦</span> {category}
                      </h3>
                      <div className="techs-items">
                        {items.map((item, i) => (
                          <span key={i} className="techs-item">
                            <span className="techs-dot"></span> {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
