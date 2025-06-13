import React, { useState, useEffect } from "react";
import "../styles/ProjectPage.css";
import { motion } from "framer-motion";

import pb1 from "../assets/Beatyx/p1.jpg";
import pb2 from "../assets/Beatyx/p2.jpg";
import pb3 from "../assets/Beatyx/p3.jpg";
import pb4 from "../assets/Beatyx/p4.jpg";
import pb5 from "../assets/Beatyx/p5.jpg";

import pa1 from "../assets/ArogSphere/1.png";
import pa2 from "../assets/ArogSphere/2.png";
import pa3 from "../assets/ArogSphere/3.png";
import pa4 from "../assets/ArogSphere/4.png";

import pc1 from "../assets/CreatorConnect/p1.png";

import pt1 from "../assets/Trend/p1.png";
import pt2 from "../assets/Trend/p2.png";
import pt3 from "../assets/Trend/p3.png";

import px1 from "../assets/TechXpert/p1.png";
import px2 from "../assets/TechXpert/p2.png";
import px3 from "../assets/TechXpert/p3.png";
import px4 from "../assets/TechXpert/p4.png";

// Mock icons
const ChevronRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

const Github = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ExternalLink = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15,3 21,3 21,9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Eye = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

// Project data
const projects = [
  {
    title: "ArogSphere",
    images: [pa1, pa2, pa3, pa4],
    description: "ArogSphere is an innovative healthcare platform...",
    shortDesc:
      "A comprehensive healthcare platform with AI-powered features for medicine comparison, disease prediction, and personalized treatment suggestions — ensuring smarter decisions for patients and faster insights for doctors.",
    tech: ["MERN STACK", "AI", "Cloud"],
    github: "https://github.com/yourusername/arogsphere",
    demo: "https://arogsphere.example.com",
  },
  {
    title: "Beatyx",
    images: [pb1, pb2, pb3, pb4, pb5],
    description:
      "Beatyx - Beat The Bits is a full-stack music streaming app...",
    shortDesc:
      "Immersive full-stack music streaming app with real-time audio playback, playlist management, and user-focused features for an uninterrupted musical journey.",

    tech: ["MERN STACK", "Music Streaming"],
    github: "https://github.com/yourusername/beatyx",
    demo: "https://beatyx.example.com",
  },
  {
    title: "Trend",
    images: [pt1, pt2, pt3],
    description:
      "Trend is a modern e-commerce platform for fashion enthusiasts...",
    shortDesc:
      "A modern e-commerce platform tailored for fashion enthusiasts, offering a sleek shopping experience, curated collections, and secure checkout.",
    tech: ["MERN STACK", "E-Commerce"],
    github: "https://github.com/yourusername/trend",
    demo: "https://trend.example.com",
  },
  {
    title: "CreatorConnect",
    images: [pc1],
    description:
      "CreatorConnect is an interactive platform designed to connect creators and fans...",
    shortDesc:
      "A dynamic platform enabling creators to connect with their audience, monetize content, and manage fan engagement through secure payment integration.",
    tech: ["MERN STACK", "Razorpay Integration"],
    github: "https://github.com/yourusername/creatorconnect",
    demo: "https://creatorconnect.example.com",
  },
  {
    title: "TechXpert",
    images: [px1, px2, px3, px4],
    description: "TechXpert is a dynamic learning platform for tech skills...",
    shortDesc:
      "An interactive platform for mastering tech skills through structured learning paths, quizzes, certifications, and career-focused resources.",
    tech: ["MERN STACK", "Certification Programs"],
    github: "https://github.com/yourusername/techxpert",
    demo: "https://techxpert.example.com",
  },
];
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerStagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ProjectPage = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});

  useEffect(() => {
    // Initialize currentImageIndexes for all projects to 0
    const initialIndexes = projects.reduce((acc, project) => {
      acc[project.title] = 0;
      return acc;
    }, {});
    setCurrentImageIndexes(initialIndexes);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const intervals = [];

    projects.forEach((project) => {
      // Only create interval if project has more than 1 image
      if (project.images.length > 1) {
        const interval = setInterval(() => {
          setCurrentImageIndexes((prevIndexes) => ({
            ...prevIndexes,
            [project.title]:
              (prevIndexes[project.title] + 1) % project.images.length,
          }));
        }, 3000); // Change image every 3 seconds

        intervals.push(interval);
      }
    });

    // Cleanup intervals on component unmount
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [currentImageIndexes]); // Re-run when currentImageIndexes changes

  return (
    <div className="project-page">
      <div className="floating-bg">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      <div className="container">
        <motion.div className="header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h1 className="main-title">Innovating Beyond Boundaries</h1>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div className="hero-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="hero-subtitle">Crafting Code with Passion</h2>
          <p className="hero-text">
            Explore a collection of innovative projects built with cutting-edge technologies and driven by curiosity and purpose.
          </p>
          <a href="#projects" className="hero-cta">Dive Into the Work</a>
        </motion.div>

        <motion.div className="projects-grid" id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerStagger}>
          {projects.map((project, index) => (
            <motion.div key={index} className={`project-item ${index % 2 === 1 ? "reverse" : ""}`} variants={fadeInUp}>
              <div className="project-image-container">
                <div className="image-slider-wrapper" style={{ transform: `translateX(-${(currentImageIndexes[project.title] || 0) * 100}%)` }}>
                  {project.images.map((img, i) => (
                    <div key={i} className="image-wrapper">
                      <div className="image-glow"></div>
                      <div className="image-content">
                        <img src={img} alt={`${project.title} ${i}`} className="project-image" />
                        <div className="image-overlay"></div>
                      </div>
                    </div>
                  ))}
                </div>
                {project.images.length > 1 && (
                  <div className="slide-progress">
                    <div className="progress-bar" style={{ width: `${(((currentImageIndexes[project.title] || 0) + 1) / project.images.length) * 100}%` }}></div>
                  </div>
                )}
              </div>

              <div className="project-info">
                <div className="project-content">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.shortDesc}</p>
                </div>

                <div className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="action-buttons">
                  <button className="btn btn-primary">
                    <Eye /> Explore More <ChevronRight />
                  </button>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <Github /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-tertiary">
                    <ExternalLink /> Live Demo
                  </a>
                </div>

                <div className="decorative-line"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="bottom-decoration">
          <div className="status-indicator">
            <div className="status-dot status-dot-1"></div>
            <span className="status-text">More projects coming soon</span>
            <div className="status-dot status-dot-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
