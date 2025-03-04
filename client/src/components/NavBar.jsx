import React, { useState } from "react";
import "../styles/NavBar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigate = useNavigate();
  const gotoProject = () => {
    navigate("/project");
  };

  const gotoHome = () => {
    navigate("/");
  };

  const gotoAbout = () => {
    navigate("/about");
  };

  const gotoContact = () => {
    navigate("/contact");
  };

  return (
    <nav className="nav-bar">
      <h1 className="logo">Canopux</h1>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <button className="nav-btn" onClick={gotoHome}>
            Home
          </button>
        </li>
        <li>
          <button className="nav-btn" onClick={() => scrollToSection("services")}>
            Services
          </button>
        </li>
        <li>
          <button className="nav-btn" onClick={gotoProject}>
            Projects
          </button>
        </li>
        <li>
          <button className="nav-btn" onClick={gotoAbout}>
            About Us
          </button>
        </li>
        <li>
          <button className="nav-btn" onClick={gotoContact}>
            Contact Us
          </button>
        </li>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;