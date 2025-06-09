// import React, { useState } from "react";
// import "../styles/NavBar.css";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const navigate = useNavigate();
//   const gotoProject = () => {
//     navigate("/project");
//   };

//   const gotoHome = () => {
//     navigate("/");
//   };

//   const gotoAbout = () => {
//     navigate("/about");
//   };

//   const gotoContact = () => {
//     navigate("/contact");
//   };

//   return (
//     <nav className="nav-bar">
//       <h1 className="logo">Canopux</h1>
//       <div className={`nav-links ${isOpen ? "active" : ""}`}>
//         <li>
//           <button className="nav-btn" onClick={gotoHome}>
//             Home
//           </button>
//         </li>
//         <li>
//           <button className="nav-btn" onClick={gotoProject}>
//             Projects
//           </button>
//         </li>
//         <li>
//           <button className="nav-btn" onClick={gotoAbout}>
//             About Us
//           </button>
//         </li>
//         <li>
//           <button className="nav-btn" onClick={gotoContact}>
//             Contact Us
//           </button>
//         </li>
//       </div>
//       <div className="hamburger" onClick={toggleMenu}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigate = useNavigate()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.nav-bar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const gotoProject = () => {
    navigate("/project");
    setActiveSection('projects');
    closeMenu();
  };

  const gotoHome = () => {
    navigate("/");
    setActiveSection('home');
    closeMenu();
  };

  const gotoAbout = () => {
    navigate("/about");
    setActiveSection('about');
    closeMenu();
  };

  const gotoContact = () => {
    navigate("/contact");
    setActiveSection('contact');
    closeMenu();
  };

  const navItems = [
    { name: 'Home', action: gotoHome, id: 'home' },
    { name: 'Projects', action: gotoProject, id: 'projects' },
    { name: 'About Us', action: gotoAbout, id: 'about' },
    { name: 'Contact Us', action: gotoContact, id: 'contact' }
  ];

  return (
    <>
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo Section */}
          <div className="logo-section">
            <button className="logo" onClick={gotoHome}>
              <span className="logo-text">Canopux</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <div className="nav-links-container">
              {navItems.map((item, index) => (
                <div key={item.id} className="nav-item">
                  <button 
                    className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                    onClick={item.action}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="nav-btn-text">{item.name}</span>
                    <span className="nav-btn-bg"></span>
                  </button>
                </div>
              ))}
              
              {/* CTA Button */}
              {/* <div className="nav-cta">
                <button className="cta-btn" onClick={gotoContact}>
                  <span className="cta-text">Get Quote</span>
                  <div className="cta-bg"></div>
                </button>
              </div> */}
            </div>

            {/* Mobile Menu Close Button */}
            <button className="mobile-close" onClick={closeMenu}>
              <span className="close-line"></span>
              <span className="close-line"></span>
            </button>
          </div>

          {/* Hamburger Menu */}
          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="nav-gradient"></div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </>
  );
};

export default Navbar;