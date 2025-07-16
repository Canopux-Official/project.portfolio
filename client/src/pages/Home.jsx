/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* HomeEnhanced.jsx */
import { useState, useEffect, useRef } from "react";
import { Users, Award, Zap, CheckCircle } from "lucide-react";
import LogoAnime from "/Logo-anime.gif";
import {
  Code,
  Smartphone,
  Cloud,
  MonitorSmartphone,
  Settings,
  Database,
} from "lucide-react";
import "../styles/home.css";
import { Link } from "react-router-dom";
// sx prop styles for logo container
const logoContainerSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem auto",
  width: "fit-content",

  // Border styling
  //border: "3px solid",
  borderImage: "linear-gradient(135deg, #4a04eeff, #0062ffff, #0206ffff) 1",
  borderRadius: "2rem",

  // Shadow effects
  boxShadow: `
    0 10px 25px rgba(65, 6, 204, 0.46),
    0 5px 15px rgba(59, 130, 246, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1)
  `,

  // Background with subtle gradient
  background: `linear-gradient(135deg, 
    rgba(139, 92, 246, 0.05), 
    rgba(59, 130, 246, 0.05),
    rgba(99, 102, 241, 0.05)
  )`,

  // Hover effects
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",

  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: `
      0 15px 35px rgba(139, 92, 246, 0.3),
      0 8px 20px rgba(59, 130, 246, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.15)
    `,
  },

  // Animated border effect
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    background: "linear-gradient(135deg, #8b5cf6, #3b82f6, #6366f1, #8b5cf6)",
    borderRadius: "22px",
    zIndex: -1,
    opacity: 0,
    transition: "opacity 0.3s ease",
  },

  "&:hover::before": {
    opacity: 1,
    animation: "borderGlow 2s ease-in-out infinite",
  },

  "@keyframes borderGlow": {
    "0%, 100%": {
      background: "linear-gradient(135deg, #8b5cf6, #3b82f6, #6366f1, #8b5cf6)",
    },
    "50%": {
      background: "linear-gradient(135deg, #6366f1, #8b5cf6, #3b82f6, #6366f1)",
    },
  },
};
const Home = () => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    stats: false,
    content: false,
    testimonials: false,
    faq: false,
    process: false,
    cta: false,
  });

  const refs = {
    content: useRef(null),
    testimonials: useRef(null),
    faq: useRef(null),
    process: useRef(null),
    cta: useRef(null),
  };

  useEffect(() => {
    setIsVisible((v) => ({ ...v, header: true }));

    const sections = [
      ["stats", ".stats-section"],
      ["content", refs.content],
      ["testimonials", refs.testimonials],
      ["faq", refs.faq],
      ["process", refs.process],
      ["cta", refs.cta],
    ];

    const onScroll = () => {
      const h = window.innerHeight;
      sections.forEach(([key, sel]) => {
        const el =
          typeof sel === "string" ? document.querySelector(sel) : sel.current;
        if (el && el.getBoundingClientRect().top < h - 100) {
          setIsVisible((v) => ({ ...v, [key]: true }));
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stats = [
    { icon: Users, number: "5+", label: "Happy Clients" },
    { icon: Award, number: "2+", label: "Years Experience" },
    { icon: Zap, number: "24/7", label: "Support Available" },
    { icon: CheckCircle, number: "92.5%", label: "Success Rate" },
  ];

  const services = [
    { title: "Web Development", icon: <Code /> },
    { title: "Mobile App Development", icon: <Smartphone /> },
    { title: "Cloud Solutions", icon: <Cloud /> },
    { title: "IT Consulting", icon: <MonitorSmartphone /> },
    { title: "Software Maintenance", icon: <Settings /> },
    { title: "Database Management", icon: <Database /> },
  ];

  const testimonials = [
    {
      name: "Abhikalp Srivastava",
      feedback:
        "The project is really good—works well, easy to use, and delivers great results. The UI/UX is very impressive and makes the whole experience smooth and enjoyable.",
      designation: "Technical Intern (Embedded Systems), NXP Semiconductors",
    },
    {
      name: "Aman Modi",
      feedback:
        "The project was very nice, hats off to the team for delivering a smooth website with NLP integration in such a short time. I loved how you guys were available for revision of UI and backend logic when needed.",
      designation: "Engineering Trainee (AI & Technology), AIOrdinate",
    },
    {
      name: "Kirti Padhi",
      feedback:
        "Excellent job! You delivered high-quality work within the deadline, and impressively, the first draft required only minor tweaks - mostly personalized adjustments. Your ability to seamlessly integrate the desired tech stacks was spot on. Your commitment to meeting deadlines is evident, and your rapid response and implementation of changes were truly impressive.",
      designation: "Ex-Software Engineer Trainee, BigBinary",
    },
  ];

  const faqItems = [
    {
      q: "What services do you offer?",
      a: "We provide web & mobile development, cloud, AI/ML solutions, and more.",
    },
    {
      q: "What is your development process?",
      a: "Agile methodology with continuous feedback and delivery.",
    },
    {
      q: "How can I get a quote?",
      a: "Email us at canopus.incglobe@gmail.com. We reply within 2 hours.",
    },
    {
      q: "How do you determine pricing?",
      a: "Pricing is finalized based on the project scope, complexity, and deliverables—once we understand your requirements, we’ll provide a detailed estimate.",
    },
    {
      q: "What is the typical project timeline?",
      a: "Timelines vary by project size, but most engagements run between 4–12 weeks from kickoff to launch.",
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes! We provide 24/7 maintenance and support packages to keep your solution running smoothly.",
    },
    {
      q: "Can you work with our existing team?",
      a: "Absolutely. We integrate seamlessly with your in-house or third‑party teams to ensure cohesive delivery.",
    },
    {
      q: "What if I need changes after the project is complete?",
      a: "We offer flexible support plans and can scope additional work at any time—just reach out and we’ll tailor the next steps.",
    },
  ];

  const steps = [
    {
      icon: <Users />,
      title: "Consultation",
      desc: "We understand your needs through detailed discussions.",
    },
    {
      icon: <Award />,
      title: "Planning",
      desc: "Our team crafts a tailored project roadmap.",
    },
    {
      icon: <Zap />,
      title: "Development",
      desc: "Efficient coding with best practices and QA.",
    },
    {
      icon: <CheckCircle />,
      title: "Delivery",
      desc: "Smooth deployment and continuous support.",
    },
  ];

  return (
    <div className="home-page">
      {/* Floating Background */}
      <div className="floating-bg">
        <div className="bg-shape bg-shape-1" />
        <div className="bg-shape bg-shape-2" />
        <div className="bg-shape bg-shape-3" />
      </div>

      {/* Header */}
      <div className={`header-section ${isVisible.header ? "visible" : ""}`}>
        <h1 className="main-title">Build Your Next Big Idea with Us</h1>
        <p className="main-subtitle">
          We deliver tailored tech solutions using MERN stack, AI, IoT and more.
        </p>
      </div>
      {/* Logo Animation */}
      <div style={logoContainerSx}>
        <img src={LogoAnime} alt="Logo" className="logo-animation" />
      </div>
      {/* Stats */}
      <div className="stats-section">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`stat-card ${isVisible.stats ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <s.icon className="stat-icon" />
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="services-section" ref={refs.content}>
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`service-card ${isVisible.content ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="service-icon">{svc.icon}</div>
              <h3 className="service-title">{svc.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div
        ref={refs.testimonials}
        className={`testimonials-section ${
          isVisible.testimonials ? "visible" : ""
        }`}
      >
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="feedback">"{t.feedback}"</p>
              <p className="name">- {t.name}</p>
              <p className="designation">{t.designation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div
        ref={refs.faq}
        className={`faq-section ${isVisible.faq ? "visible" : ""}`}
      >
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-items">
          {faqItems.map((f, i) => (
            <details key={i} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div
        ref={refs.process}
        className={`process-section ${isVisible.process ? "visible" : ""}`}
      >
        <h2 className="section-title">How It Works</h2>
        <div className="process-grid">
          {steps.map((step, i) => (
            <div
              key={i}
              className="process-card"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="process-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        ref={refs.cta}
        className={`cta-section ${isVisible.cta ? "visible" : ""}`}
      >
        <h2 className="cta-title">
          Ready to Transform Your Business? <span className="cta-icon">🚀</span>
        </h2>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-btn primary">
            Contact Us <span className="btn-arrow">→</span>
          </Link>
          <Link to="/project" className="cta-btn secondary">
            Our Projects <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
