/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react";
import { Users, Award, Zap, CheckCircle, Mail, MapPin, Clock, Send, ArrowRight, Code, Smartphone, Cloud, Settings, Database, Heart, Lightbulb, Trophy, Rocket, Calendar, Github, Linkedin, ExternalLink } from "lucide-react";
import LogoAnime from "/Logo-anime.gif";
import "../styles/space-theme.css";
import Box from "@mui/material/Box";
import emailjs from 'emailjs-com';
import projects from "../components/Projects";
import user from "../assets/user.png";

const logoContainerSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mx: "auto",
  width: "fit-content",
  borderImage: "linear-gradient(135deg, #00bfff, #00ffff, #ff00ff) 1",
  borderRadius: { xs: "1rem", sm: "2rem" },
  boxShadow: {
    xs: `0 6px 12px rgba(0, 191, 255, 0.3), 0 3px 8px rgba(0, 255, 255, 0.15)`,
    sm: `0 10px 25px rgba(0, 191, 255, 0.4), 0 5px 15px rgba(0, 255, 255, 0.2)`,
  },
  background: `linear-gradient(135deg, 
    rgba(0, 191, 255, 0.05), 
    rgba(0, 255, 255, 0.05),
    rgba(255, 0, 255, 0.05)
  )`,
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
};

const logoImageSx = {
  width: { xs: "16rem", sm: "22rem", md: "33rem" },
  height: "auto",
  objectFit: "contain",
};

const members = [
  {
    image: user,
    name: "Archit Mishra",
    role: "SEO & UI/UX Designer",
    bio: "Combining technical expertise with design thinking to create scalable solutions with outstanding user experiences.",
    skills: ["React+Vite", "Node JS", "Docker", "MongoDB", "UI-UX Design", "Tailwind CSS", "Material UI"],
  },
  {
    image: user,
    name: "Paresh Chandra Pothal",
    role: "AI/ML Engineer",
    bio: "Leveraging machine learning and data science to build intelligent solutions that solve real-world problems.",
    skills: ["React", "Node JS", "MongoDB", "Streamlit", "Python", "ML"],
  },
  {
    image: user,
    name: "Prem Chandra Prasad",
    role: "Full Stack Developer",
    bio: "Building robust web applications from frontend to backend with modern technologies and scalable architectures.",
    skills: ["Java", "Javascript", "React+Vite", "Next.Js", "Node Js", "Tailwind UI", "MongoDB"],
  },
  {
    image: user,
    name: "Ashish Mittal",
    role: "Frontend Specialist",
    bio: "Creating beautiful, responsive user interfaces that deliver exceptional user experiences across all devices.",
    skills: ["HTML", "Tailwind CSS", "Javascript", "React", "Node Js", "ShadCn UI"],
  },
  {
    image: user,
    name: "Jagannath Adhikari",
    role: "Mobile Developer",
    bio: "Crafting seamless mobile experiences with modern Android development techniques and user-centric design principles.",
    skills: ["Android Development With Kotlin", "Jet Pack Compose", "Firebase"],
  },
  {
    image: user,
    name: "Akhilesh Choudhary",
    role: "IoT & Hardware Lead",
    bio: "Passionate about bridging the digital and physical worlds through innovative IoT solutions and cutting-edge hardware development.",
    skills: ["IOT", "Arduino", "3D Printing", "Frontend Development"],
  },
  {
    image: user,
    name: "Pratik Sourav Panda",
    role: "Project Manager & Strategy Lead",
    bio: "Leading projects from conception to delivery while driving business strategy and creative marketing initiatives.",
    skills: ["Management", "C/C++", "Python", "Marketing", "Finance", "Content Writing", "Graphic Designing"],
  }
];

const milestones = [
  {
    year: "2024",
    title: "Foundation",
    description: "Started as a passionate student-led community, driven by curiosity and a desire to build meaningful tech from day one.",
    icon: <Rocket />
  },
  {
    year: "2025",
    title: "First Major Project",
    description: "Delivered our first real-world client project, an AI-powered ATS, turning ideas into impact and validating our potential.",
    icon: <Trophy />
  },
  {
    year: "Now",
    title: "Innovation in Motion",
    description: "Actively building AI-powered platforms, creator tools, and community-driven tech, solving real problems, one project at a time.",
    icon: <Lightbulb />
  }
];

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    info: 'canopus.incglobe@gmail.com',
    subtitle: 'We reply within 2 hours',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    info: 'Gothapatana, Bhubaneswar, Odisha 751003',
    subtitle: 'Schedule an appointment',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    info: '< 24 Hours',
    subtitle: 'Average response time',
  }
];

const Home = () => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    stats: false,
    services: false,
    projects: false,
    testimonials: false,
    faq: false,
    about: false,
    team: false,
    journey: false,
    contact: false,
    cta: false,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const formRef = useRef();

  const refs = {
    header: useRef(null),
    stats: useRef(null),
    services: useRef(null),
    projects: useRef(null),
    testimonials: useRef(null),
    faq: useRef(null),
    about: useRef(null),
    team: useRef(null),
    journey: useRef(null),
    contact: useRef(null),
    cta: useRef(null),
  };

  useEffect(() => {
    setIsVisible((v) => ({ ...v, header: true }));

    const sections = [
      ["stats", refs.stats],
      ["services", refs.services],
      ["projects", refs.projects],
      ["testimonials", refs.testimonials],
      ["faq", refs.faq],
      ["about", refs.about],
      ["team", refs.team],
      ["journey", refs.journey],
      ["contact", refs.contact],
      ["cta", refs.cta],
    ];

    const onScroll = () => {
      const h = window.innerHeight;
      sections.forEach(([key, ref]) => {
        const el = ref.current;
        if (el && el.getBoundingClientRect().top < h - 100) {
          setIsVisible((v) => ({ ...v, [key]: true }));
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const initialIndexes = projects.reduce((acc, project) => {
      acc[project.title] = 0;
      return acc;
    }, {});
    setCurrentImageIndexes(initialIndexes);
  }, []);

  useEffect(() => {
    const intervals = [];

    projects.forEach((project) => {
      if (project.images.length > 1) {
        const interval = setInterval(() => {
          setCurrentImageIndexes((prevIndexes) => ({
            ...prevIndexes,
            [project.title]:
              (prevIndexes[project.title] + 1) % project.images.length,
          }));
        }, 3000);

        intervals.push(interval);
      }
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [currentImageIndexes]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({ title: '', email: '', name: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send message.');
        console.error(error);
      });
  };

  const stats = [
    { icon: Users, number: "7+", label: "Team Members" },
    { icon: Award, number: "2+", label: "Years Experience" },
    { icon: Zap, number: "24/7", label: "Support Available" },
    { icon: CheckCircle, number: "6+", label: "Projects Delivered" },
  ];

  const services = [
    { title: "Web Development", icon: <Code /> },
    { title: "Mobile App Development", icon: <Smartphone /> },
    { title: "Cloud Solutions", icon: <Cloud /> },
    { title: "Software Maintenance", icon: <Settings /> },
    { title: "Database Management", icon: <Database /> },
    { title: "AI/ML Solutions", icon: <Lightbulb /> },
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
        "Excellent job! You delivered high-quality work within the deadline, and impressively, the first draft required only minor tweaks - mostly personalized adjustments. Your ability to seamlessly integrate the desired tech stacks was spot on.",
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
      a: "Pricing is finalized based on the project scope, complexity, and deliverables—once we understand your requirements, we'll provide a detailed estimate.",
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
      a: "We offer flexible support plans and can scope additional work at any time—just reach out and we'll tailor the next steps.",
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
    <div className="canopux-single-page">
      {/* Space Background */}
      <div className="space-bg">
        <div className="bg-stars"></div>
        <div className="bg-nebula"></div>
      </div>

      {/* Header Section */}
      <section ref={refs.header} className={`canopux-header ${isVisible.header ? "visible" : ""}`}>
        <div className="header-content">
          <h1 className="header-title">Beyond Limits, Into the Future</h1>
          <p className="header-subtitle">
            We deliver tailored tech solutions using MERN stack, AI, IoT and more.
          </p>
        </div>

        {/* Animated Logo */}
        <Box sx={logoContainerSx} className="logo-wrapper">
          <Box component="img" src={LogoAnime} alt="Canopux Saturn Logo" sx={logoImageSx} className="animated-logo" />
        </Box>
      </section>

      {/* Stats Section */}
      <section ref={refs.stats} className={`stats-section ${isVisible.stats ? "visible" : ""}`}>
        <div className="container">
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
      </section>

      {/* Services Section */}
      <section ref={refs.services} className={`services-section ${isVisible.services ? "visible" : ""}`}>
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`service-card ${isVisible.services ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="service-icon">{svc.icon}</div>
                <h3 className="service-title">{svc.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={refs.projects} className={`projects-section ${isVisible.projects ? "visible" : ""}`}>
        <div className="container">
          <h2 className="section-title">Our Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className={`project-card project-card-${index % 2}`}>
                <div className="project-image-container">
                  <div
                    className="image-slider-wrapper"
                    style={{
                      transform: `translateX(-${
                        (currentImageIndexes[project.title] || 0) * 100
                      }%)`,
                    }}
                  >
                    {project.images.map((img, i) => (
                      <div key={i} className="image-slide">
                        <img
                          src={img}
                          alt={`${project.title} ${i}`}
                          className="project-image"
                        />
                        <div className="image-overlay-hover"></div>
                      </div>
                    ))}
                  </div>
                  {project.images.length > 1 && (
                    <div className="slide-indicators">
                      {project.images.map((_, i) => (
                        <span
                          key={i}
                          className={`indicator ${
                            i === currentImageIndexes[project.title] ? "active" : ""
                          }`}
                        ></span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.introduction}</p>
                  
                  <div className="tech-badges">
                    {Object.values(project.technologies).flat().slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={refs.testimonials} className={`testimonials-section ${isVisible.testimonials ? "visible" : ""}`}>
        <div className="container">
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
      </section>

      {/* FAQ Section */}
      <section ref={refs.faq} className={`faq-section ${isVisible.faq ? "visible" : ""}`}>
        <div className="container">
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
      </section>

      {/* About Section */}
      <section ref={refs.about} className={`about-section ${isVisible.about ? "visible" : ""}`}>
        <div className="container">
          <h1 className="section-title about-title">We Are Canopux</h1>
          <p className="about-subtitle">
            A passionate team of developers, designers, and strategists dedicated to
            transforming ideas into exceptional digital experiences. We combine
            technical expertise with creative thinking to deliver solutions that make a difference.
          </p>
          
          <div className="about-vision">
            <div className="vision-text">
              <h2 className="subsection-title">Building the Future, One Project at a Time</h2>
              <p className="vision-description">
                We envision a world where technology seamlessly integrates with human needs,
                creating solutions that are not just functional, but transformative. Our mission
                is to democratize access to cutting-edge technology and help businesses of all
                sizes achieve their digital transformation goals.
              </p>
              <div className="vision-points">
                <div className="vision-point">
                  <div className="vision-point-icon">
                    <Lightbulb />
                  </div>
                  <div>
                    <h4>Innovation First</h4>
                    <p>Embracing emerging technologies to solve complex challenges</p>
                  </div>
                </div>
                <div className="vision-point">
                  <div className="vision-point-icon">
                    <Heart />
                  </div>
                  <div>
                    <h4>Human-Centered</h4>
                    <p>Designing with empathy and focusing on user experience</p>
                  </div>
                </div>
                <div className="vision-point">
                  <div className="vision-point-icon">
                    <Trophy />
                  </div>
                  <div>
                    <h4>Excellence Driven</h4>
                    <p>Committed to delivering quality that exceeds expectations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={refs.team} className={`team-section ${isVisible.team ? "visible" : ""}`}>
        <div className="container">
          <h2 className="section-title">Meet Our Core Team</h2>
          <p className="team-subtitle">Each member brings unique skills and perspectives, united by our passion for innovation</p>

          <div className="team-grid">
            {members.map((member, index) => (
              <div
                key={index}
                className="team-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="team-card-inner">
                  <div className="team-card-front">
                    <div className="member-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                    </div>
                  </div>
                  <div className="team-card-back">
                    <div className="member-bio">
                      <p>{member.bio}</p>
                    </div>
                    <div className="member-skills">
                      <h4>Skills</h4>
                      <div className="skills-grid">
                        {member.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section ref={refs.journey} className={`journey-section ${isVisible.journey ? "visible" : ""}`}>
        <div className="container">
          <h2 className="section-title">Our Story So Far</h2>
          <p className="journey-subtitle">From humble beginnings to where we are today - every milestone shaped who we are</p>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="timeline-content">
                  <div className="timeline-icon">
                    {milestone.icon}
                  </div>
                  <div className="timeline-info">
                    <div className="timeline-year">{milestone.year}</div>
                    <h3 className="timeline-title">{milestone.title}</h3>
                    <p className="timeline-description">{milestone.description}</p>
                  </div>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={refs.contact} className={`contact-section ${isVisible.contact ? "visible" : ""}`}>
        <div className="container">
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <p className="contact-subtitle">
            Transform your business with our expert IT solutions. Our skilled team is ready to tackle your challenges and deliver exceptional results.
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <h3 className="subsection-title">Get In Touch</h3>
              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="contact-method"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <method.icon className="method-icon" />
                    <h4 className="method-title">{method.title}</h4>
                    <p className="method-info">{method.info}</p>
                    <p className="method-subtitle">{method.subtitle}</p>
                  </div>
                ))}
              </div>

              <div className="why-choose-card">
                <h3 className="card-title">Why Choose Us?</h3>
                <div className="features-list">
                  {[
                    'Expert team with 2+ years of experience',
                    'Custom solutions tailored to your needs',
                    '24/7 support and maintenance',
                    'Competitive pricing with no hidden costs',
                    'Fast turnaround time and reliable delivery',
                    'Latest technologies and best practices'
                  ].map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle className="feature-icon" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h3 className="subsection-title">Start Your Project</h3>

              <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="title"
                      placeholder="Project Title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="form-input form-textarea"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <Send className="btn-icon" />
                  <span>Send Message</span>
                  <ArrowRight className="btn-arrow" />
                </button>
              </form>

              <div className="guarantee-badge">
                <CheckCircle className="guarantee-icon" />
                <div className="guarantee-content">
                  <p className="guarantee-title">Quick Response Guarantee</p>
                  <p className="guarantee-subtitle">We'll respond to your inquiry within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`process-section ${isVisible.contact ? "visible" : ""}`}>
        <div className="container">
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
      </section>

      {/* CTA Section */}
      <section ref={refs.cta} className={`cta-section ${isVisible.cta ? "visible" : ""}`}>
        <div className="container">
          <h2 className="cta-title">
            Ready to Transform Your Business? <span className="cta-emoji">🚀</span>
          </h2>
          <div className="cta-buttons">
            <a href="#contact-section" className="cta-btn primary">
              Contact Us <span className="btn-arrow">→</span>
            </a>
            <a href="#projects-section" className="cta-btn secondary">
              View Projects <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
