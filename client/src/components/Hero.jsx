import React, { useEffect, useState } from "react";
import "../styles/Hero.css";
import logo from "../assets/logo.jpeg";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero");
      if (heroSection) {
        const position = heroSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`hero ${isVisible ? "visible" : ""}`}>
      <div className="hero-container">
        <div className="hero-left">
          <img src={logo} alt="Cannopux Logo" className="hero-img" />
        </div>
        <div className="hero-right">
          <h1>Welcome to <span>Canopux</span></h1>
          <p>
            We provide <strong className="bold">end-to-end tech solutions</strong> for businesses,  
            leveraging the power of <strong className="bold">MERN stack development, AI, IoT</strong> and <strong className="bold">mobile app development</strong>
          </p>
          <p>
            Our mission is to  <strong className="bold">transform ideas into scalable, efficient, and innovative tech solutions </strong>
            that cater to diverse industry needs. Whether it's a <strong className="bold">custom web application</strong>,  
            an  <strong className="bold">AI-powered automation system</strong>, or an  <strong className="bold">IoT-driven product</strong>, we've got you covered!  
          </p>
          <p className="highlight">🚀 Your vision. Our expertise. Limitless possibilities.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
