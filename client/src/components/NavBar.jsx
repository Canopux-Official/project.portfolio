import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import logo from '../assets/canopux web logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('header');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);

      const sections = ['header', 'projects', 'about', 'contact'];
      for (let section of sections) {
        const element = document.querySelector(`.canopux-${section}, .${section}-section`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToSection = (sectionId) => {
    let selector = '';
    
    switch(sectionId) {
      case 'header':
        selector = '.canopux-header';
        break;
      case 'projects':
        selector = '.projects-section';
        break;
      case 'about':
        selector = '.about-section';
        break;
      case 'contact':
        selector = '.contact-section';
        break;
      default:
        selector = '.canopux-header';
    }

    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      closeMenu();
    }
  };

  const navItems = [
    { name: 'Home', id: 'header' },
    { name: 'Projects', id: 'projects' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <>
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo Section */}
          <div className="logo-section">
            <button className="logo" onClick={() => scrollToSection('header')}>
              <img height={40} width={200} src={logo} alt="Canopux" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <div className="nav-links-container">
              {navItems.map((item, index) => (
                <div key={item.id} className="nav-item">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="nav-btn-text">{item.name}</span>
                    <span className="nav-btn-bg"></span>
                  </button>
                </div>
              ))}
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
    </>
  );
};

export default Navbar;
