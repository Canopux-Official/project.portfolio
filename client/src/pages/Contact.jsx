

import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Clock, Users, Award, Zap, CheckCircle, ArrowRight, Send } from 'lucide-react';
import '../styles/Contact.css';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        message: ''
    });
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const formRef = useRef();

    useEffect(() => {
        setIsVisible(true);
    }, []);

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
                setFormData({ title: '', email: '', name: '', message: '' }); // Clear form
            })
            .catch((error) => {
                alert('Failed to send message.');
                console.error(error);
            });
    };

    const services = [
        'Web Development',
        'Mobile App Development',
        'Cloud Solutions',
        'IT Consulting',
        'Software Maintenance',
        'Database Management',
        'Cybersecurity',
        'Other'
    ];

    const stats = [
        { icon: Users, number: '5+', label: 'Happy Clients' },
        { icon: Award, number: '2+', label: 'Years Experience' },
        { icon: Zap, number: '24/7', label: 'Support Available' },
        { icon: CheckCircle, number: '92.5%', label: 'Success Rate' }
    ];

    const contactMethods = [
        {
            icon: Mail,
            title: 'Email Us',
            info: 'canopus.incglobe@gmail.com',
            subtitle: 'We reply within 2 hours',
            color: 'blue-cyan'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            info: 'Gothapatana, Bhubaneswar, Odisha 751003',
            subtitle: 'Schedule an appointment',
            color: 'green-emerald'
        },
        {
            icon: Clock,
            title: 'Quick Response',
            info: '< 24 Hours',
            subtitle: 'Average response time',
            color: 'orange-red'
        }
    ];

    return (
        <div className="contact-page">
            {/* Floating Background Elements */}
            <div className="floating-bg">
                <div className="bg-shape bg-shape-1"></div>
                <div className="bg-shape bg-shape-2"></div>
                <div className="bg-shape bg-shape-3"></div>
            </div>

            <div className="content-wrapper">
                {/* Header Section */}
                <div className={`header-section ${isVisible ? 'visible' : ''}`}>
                    <h1 className="main-title">
                        Let's Build Something Amazing
                    </h1>
                    <p className="main-subtitle">
                        Transform your business with our expert IT solutions. Our skilled team is ready to tackle your challenges and deliver exceptional results.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="stats-section">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`stat-card ${isVisible ? 'visible' : ''}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <stat.icon className="stat-icon" />
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    <div className="content-grid">

                        {/* Contact Information */}
                        <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
                            <div className="info-card">
                                <h2 className="section-title">Get In Touch</h2>

                                <div className="contact-methods">
                                    {contactMethods.map((method, index) => (
                                        <div
                                            key={index}
                                            className={`contact-method method-${method.color}`}
                                            onMouseEnter={() => setHoveredCard(index)}
                                            onMouseLeave={() => setHoveredCard(null)}
                                        >
                                            <div className="method-content">
                                                <method.icon className="method-icon" />
                                                <h3 className="method-title">{method.title}</h3>
                                                <p className="method-info">{method.info}</p>
                                                <p className="method-subtitle">{method.subtitle}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="why-choose-card">
                                <h3 className="card-title">Why Choose Our IT Team?</h3>
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

                        {/* Contact Form */}
                        <div className={`contact-form-section ${isVisible ? 'visible' : ''}`}>
                            <div className="form-card">
                                <h2 className="section-title">Start Your Project</h2>

                                <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="title"
                                                placeholder="Enter Title"
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

                                    <button
                                        type="submit"
                                        className="submit-btn"
                                    >
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
                </div>
            </div>
        </div>
    );
};

export default Contact;
