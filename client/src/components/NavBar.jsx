import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/canopux web logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigate = useNavigate();
  const location = useLocation();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle navigation with menu close
  const handleNavigation = (path) => {
    setIsOpen(false); // Close menu immediately
    navigate(path);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith('/project')) setActiveSection('projects');
    else if (path.startsWith('/about')) setActiveSection('about');
    else if (path.startsWith('/contact')) setActiveSection('contact');
    else setActiveSection('home');
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', action: '/', id: 'home' },
    { name: 'Projects', action: '/project', id: 'projects' },
    { name: 'About Us', action: '/about', id: 'about' },
    { name: 'Contact Us', action: '/contact', id: 'contact' }
  ];

  const gotoHome = () => {
    handleNavigation("/");
  }

  return (
    <>
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo Section */}
          <div className="logo-section">
            <button className="logo" onClick={gotoHome}>
              <span className="logo-text" ><img height={40} width={200} src={logo} alt="Canopux" /></span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <div className="nav-links-container">
              {navItems.map((item, index) => (
                <div key={item.id} className="nav-item" style={{textDecoration: "none"}}>
                  <Link
                    to={item.action}
                    className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    onClick={() => handleNavigation(item.action)}
                  >
                    <span className="nav-btn-text">{item.name}</span>
                    <span className="nav-btn-bg"></span>
                  </Link>
                </div>
              ))}

              {/* CTA Button */}
              {/* <div className="nav-cta">
                <button className="cta-btn" onClick={() => handleNavigation('/contact')}>
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