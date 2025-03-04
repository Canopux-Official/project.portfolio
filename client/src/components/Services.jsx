import React, { useEffect, useRef, useState } from "react";
import "../styles/Services.css";

const servicesData = [
  { title: "Logo Design", description: "Creative logos for a strong brand identity.", icon: "🎨" },
  { title: "Social Media", description: "Boost your online presence with expert handling.", icon: "📱" },
  { title: "E-commerce Websites", description: "Online stores optimized for conversions.", icon: "🛒" },
  { title: "Business Websites", description: "Corporate & small business solutions.", icon: "🏢" },
  { title: "Mobile Apps", description: "iOS & Android apps tailored for your needs.", icon: "📲" },
  { title: "AI & Automation", description: "Smart AI solutions for businesses.", icon: "🤖" },
  { title: "IoT Solutions", description: "Connect and automate with IoT tech.", icon: "🔗" },
  { title: "SEO & Marketing", description: "Grow traffic & visibility organically.", icon: "🚀" },
];

const detailedServices = [
  { title: "E-commerce Websites", description: "Amazon-like stores, Shopify, WooCommerce, etc." },
  { title: "Hotel Management Websites", description: "Booking systems, room management, hospitality tools." },
  { title: "School & College Portals", description: "Student management, online classes, result tracking." },
  { title: "Portfolio Websites", description: "Personal branding, photography, freelancer sites." },
  { title: "Real Estate Websites", description: "Listings, property management, agent portals." },
  { title: "Healthcare Websites", description: "Doctor appointments, hospital management, online pharmacy." },
];

const Services = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollSpeed = 1.5; // Adjust speed if needed

    const scroll = () => {
      if (carousel) {
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0; // Reset scroll to create infinite effect
        }
        carousel.scrollLeft += scrollSpeed; // Move the scroll
      }
      requestAnimationFrame(scroll); // Smooth animation
    };

    const scrollAnimation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(scrollAnimation);
  }, []);

  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Services</h2>

      {/* Auto-Scrolling Infinite Carousel */}
      <div className="carousel-container" ref={carouselRef}>
        {[...servicesData, ...servicesData].map((service, index) => ( // Duplicate for seamless effect
          <div className="carousel-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
           
          </div>
        ))}
      </div>

      {/* Grid Layout for Detailed Services */}
      <div className="grid-container">
        {detailedServices.map((service, index) => (
          <div className="grid-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
