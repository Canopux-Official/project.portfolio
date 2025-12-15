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
import Box from "@mui/material/Box";

const logoContainerSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mx: "auto",
  width: "fit-content",
  padding: { xs: "2rem", sm: "2.5rem", md: "3rem" },
  
  // Border styling
  border: "1px solid",
  borderColor: "rgba(59, 130, 246, 0.3)",
  borderRadius: { xs: "1.5rem", sm: "2rem" },
  
  // Background with transparency and blur
  background: `linear-gradient(135deg, 
    rgba(15, 23, 42, 0.6), 
    rgba(30, 41, 59, 0.5),
    rgba(15, 23, 42, 0.6)
  )`,
  backdropFilter: "blur(20px)",
  
  // Shadow effects
  boxShadow: {
    xs: `
      0 10px 30px rgba(59, 130, 246, 0.15),
      0 5px 15px rgba(59, 130, 246, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.05)
    `,
    sm: `
      0 20px 50px rgba(59, 130, 246, 0.2),
      0 10px 25px rgba(59, 130, 246, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.08)
    `,
  },
  
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  
  // Animated gradient border on hover
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    background: "linear-gradient(135deg, #3b82f6, #60a5fa, #2563eb, #3b82f6)",
    borderRadius: "inherit",
    zIndex: -1,
    opacity: 0,
    transition: "opacity 0.4s ease",
  },
  
  "&:hover::before": {
    opacity: 1,
    animation: "borderGlow 3s ease-in-out infinite",
  },
  
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: {
      xs: `
        0 15px 40px rgba(59, 130, 246, 0.25),
        0 8px 20px rgba(59, 130, 246, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)
      `,
      sm: `
        0 25px 60px rgba(59, 130, 246, 0.3),
        0 15px 35px rgba(59, 130, 246, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.12)
      `,
    },
    background: `linear-gradient(135deg, 
      rgba(15, 23, 42, 0.7), 
      rgba(30, 41, 59, 0.6),
      rgba(15, 23, 42, 0.7)
    )`,
  },
  
  "@keyframes borderGlow": {
    "0%, 100%": {
      background: "linear-gradient(135deg, #3b82f6, #60a5fa, #2563eb, #3b82f6)",
    },
    "50%": {
      background: "linear-gradient(135deg, #2563eb, #3b82f6, #60a5fa, #2563eb)",
    },
  },
};

// Logo image styles with blend mode to remove white background
const logoImageSx = {
  width: { xs: "16rem", sm: "22rem", md: "33rem" },
  height: "auto",
  objectFit: "contain",
  
  // IMPORTANT: This removes the white background
  mixBlendMode: "screen",
  filter: "brightness(1.1) contrast(1.05)",
  
  // Smooth transition
  transition: "all 0.3s ease",
};


// Move refs outside the component to keep them stable across renders
const refs = {
  content: { current: null },
  testimonials: { current: null },
  faq: { current: null },
  process: { current: null },
  cta: { current: null },
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

  // Assign refs on mount
  refs.content = useRef(null);
  refs.testimonials = useRef(null);
  refs.faq = useRef(null);
  refs.process = useRef(null);
  refs.cta = useRef(null);

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
      {/* <Box sx={{ padding: { xs: "2rem 0", sm: "3rem 0", md: "4rem 0" } }}>
      <Box sx={logoContainerSx}>
        <Box 
          component="img" 
          src={LogoAnime} 
          alt="Canopus Logo" 
          sx={logoImageSx} 
        />
      </Box>
    </Box> */}
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
    </div>
  );
};

export default Home;