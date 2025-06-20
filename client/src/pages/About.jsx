import React, { useState, useEffect, useRef } from 'react'
import {
    Users,
    Target,
    Rocket,
    Calendar,
    Mail,
    Github,
    Linkedin,
    ExternalLink,
    MapPin,
    Trophy,
    Code,
    Heart,
    Lightbulb,
    ArrowRight
} from 'lucide-react'
import '../styles/About.css'
import user from "../assets/user.png"
import { Link } from "react-router-dom"

const members = [
    {
        image: user,
        name: "Archit Mishra",
        role: "SEO & UI/UX Designer",
        bio: "Combining technical expertise with design thinking to create scalable solutions with outstanding user experiences.",
        skills: ["React+Vite", "Node JS", "Docker", "MongoDB", "UI-UX Design", "Tailwind CSS", "Material UI"],
        linkedin: "#",
        github: "#"
    },
    {
        image: user,
        name: "Paresh Chandra Pothal",
        role: "AI/ML Engineer",
        bio: "Leveraging machine learning and data science to build intelligent solutions that solve real-world problems.",
        skills: ["React", "Node JS", "MongoDB", "Streamlit", "Python", "ML"],
        linkedin: "#",
        github: "#"
    },
    {
        image: user,
        name: "Prem Chandra Prasad",
        role: "Full Stack Developer",
        bio: "Building robust web applications from frontend to backend with modern technologies and scalable architectures.",
        skills: ["Java", "Javascript", "React+Vite", "Next.Js", "Node Js", "Tailwind UI", "MongoDB"],
        linkedin: "#",
        github: "#"
    },
    {
        image: user,
        name: "Ashish Mittal",
        role: "Frontend Specialist",
        bio: "Creating beautiful, responsive user interfaces that deliver exceptional user experiences across all devices.",
        skills: ["HTML", "Tailwind CSS", "Javascript", "React", "Node Js", "ShadCn UI"],
        linkedin: "#",
        github: "#"
    },
    {
        image: user,
        name: "Jagannath Adhikari",
        role: "Mobile Developer",
        bio: "Crafting seamless mobile experiences with modern Android development techniques and user-centric design principles.",
        skills: ["Android Development With Kotlin", "Jet Pack Compose", "Firebase"],
        linkedin: "#",
        github: "#"
    },
    
    {
        image: user,
        name: "Akhilesh Choudhary",
        role: "IoT & Hardware Lead",
        bio: "Passionate about bridging the digital and physical worlds through innovative IoT solutions and cutting-edge hardware development.",
        skills: ["IOT", "Arduino", "3D Printing", "Frontend Development"],
        linkedin: "#",
        github: "#"
    },
    {
        image: user,
        name: "Pratik Sourav Panda",
        role: "Project Manager & Strategy Lead",
        bio: "Leading projects from conception to delivery while driving business strategy and creative marketing initiatives.",
        skills: ["Management", "C/C++", "Python", "Marketing", "Finance", "Content Writing", "Graphic Designing"],
        linkedin: "#",
        github: "#"
    }
]

const milestones = [
    {
        year: "2023",
        title: "Foundation",
        description: "Started as a group of passionate developers with a shared vision",
        icon: <Rocket />
    },
    {
        year: "2024",
        title: "First Major Project",
        description: "Delivered our first enterprise-level solution, establishing our reputation",
        icon: <Trophy />
    },
    {
        year: "2025",
        title: "Innovation Focus",
        description: "Focusing on AI, IoT, and cutting-edge technologies",
        icon: <Lightbulb />
    }
]

const About = () => {
    const [isVisible, setIsVisible] = useState({
        intro: false,
        vision: false,
        team: false,
        journey: false,
        cta: false
    })

    const [activeTab, setActiveTab] = useState(0)

    const refs = {
        intro: useRef(null),
        vision: useRef(null),
        team: useRef(null),
        journey: useRef(null),
        cta: useRef(null)
    }

    useEffect(() => {
        const sections = [
            ['intro', refs.intro],
            ['vision', refs.vision],
            ['team', refs.team],
            ['journey', refs.journey],
            ['cta', refs.cta]
        ]

        const onScroll = () => {
            const h = window.innerHeight
            sections.forEach(([key, ref]) => {
                if (ref.current && ref.current.getBoundingClientRect().top < h - 100) {
                    setIsVisible(v => ({ ...v, [key]: true }))
                }
            })
        }

        const timer = setTimeout(onScroll, 100)

        window.addEventListener('scroll', onScroll)
        onScroll()
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', onScroll);
        };
    }, [])

    return (
        <div className='about-page'>
            {/* Floating Background */}
            <div className="floating-bg">
                <div className="bg-shape bg-shape-1" />
                <div className="bg-shape bg-shape-2" />
                <div className="bg-shape bg-shape-3" />
            </div>

            {/* Hero Section - Who We Are */}
            <div
                ref={refs.intro}
                className={`about-hero ${isVisible.intro ? 'visible' : ''}`}
            >
                <div className="about-hero-content">
                    <div className="hero-badge">
                        <Heart className="hero-badge-icon" />
                        <span>Meet the Team</span>
                    </div>
                    <h1 className="about-hero-title">
                        We Are <span className="gradient-text">Canopux</span>
                    </h1>
                    <p className="about-hero-subtitle">
                        A passionate team of developers, designers, and strategists dedicated to
                        transforming ideas into exceptional digital experiences. We combine
                        technical expertise with creative thinking to deliver solutions that make a difference.
                    </p>
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <Users className="hero-stat-icon" />
                            <div>
                                <div className="hero-stat-number">7</div>
                                <div className="hero-stat-label">Core Members</div>
                            </div>
                        </div>
                        <div className="hero-stat">
                            <Code className="hero-stat-icon" />
                            <div>
                                <div className="hero-stat-number">15+</div>
                                <div className="hero-stat-label">Technologies</div>
                            </div>
                        </div>
                        <div className="hero-stat">
                            <MapPin className="hero-stat-icon" />
                            <div>
                                <div className="hero-stat-number">India</div>
                                <div className="hero-stat-label">Based</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div
                ref={refs.vision}
                className={`about-vision ${isVisible.vision ? 'visible' : ''}`}
            >
                <div className="about-container">
                    <div className="vision-content">
                        <div className="vision-text">
                            {/* <div className="section-badge">
                                <Target className="badge-icon" />
                                <span>Our Vision</span>
                            </div> */}
                            <h2 className="section-title">
                                Building the Future, One Project at a Time
                            </h2>
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
                        <div className="vision-visual">
                            <div className="vision-circle">
                                <div className="vision-circle-inner">
                                    <Rocket className="vision-main-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div
                ref={refs.team}
                className={`about-team ${isVisible.team ? 'visible' : ''}`}
            >
                <div className="about-container">
                    <div className="section-header">
                        <div className="section-badge">
                            <Users className="badge-icon" />
                            <span>Our Team</span>
                        </div>
                        <h2 className="section-title">Meet Our Core Members</h2>
                        <p className="section-subtitle">
                            Each member brings unique skills and perspectives, united by our passion for innovation
                        </p>
                    </div>

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
                                            <div className="member-overlay">
                                                <div className="member-social">
                                                    <a href={member.linkedin} className="social-link">
                                                        <Linkedin />
                                                    </a>
                                                    <a href={member.github} className="social-link">
                                                        <Github />
                                                    </a>
                                                </div>
                                            </div>
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
            </div>

            {/* Journey Section */}
            <div
                ref={refs.journey}
                className={`about-journey ${isVisible.journey ? 'visible' : ''}`}
            >
                <div className="about-container">
                    <div className="section-header">
                        <div className="section-badge">
                            <Calendar className="badge-icon" />
                            <span>Our Journey</span>
                        </div>
                        <h2 className="section-title">Our Story So Far</h2>
                        <p className="section-subtitle">
                            From humble beginnings to where we are today - every milestone shaped who we are
                        </p>
                    </div>

                    <div className="timeline">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
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
            </div>

            {/* CTA Section */}
            <div
                ref={refs.cta}
                className={`about-cta ${isVisible.cta ? 'visible' : ''}`}
            >
                <div className="about-container">
                    <div className="cta-content">
                        <div className="cta-text">
                            <h2 className="cta-title">
                                Want to Collaborate? <span className="cta-emoji">🤝</span>
                            </h2>
                            <p className="cta-subtitle">
                                We're always excited to work on new projects and meet like-minded individuals.
                                Let's create something amazing together!
                            </p>
                        </div>
                        <div className="cta-buttons">
                            <Link to="/contact" className="cta-btn primary">
                                Get In Touch
                                <ArrowRight className="btn-icon" />
                            </Link>
                            <Link to="/project" className="cta-btn secondary">
                                View Our Work
                                <ExternalLink className="btn-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About