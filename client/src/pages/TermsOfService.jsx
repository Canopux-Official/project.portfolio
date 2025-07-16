
import React, { useEffect, useState } from 'react';
import '../styles/terms.css'

const TermsOfService = () => {
    const [visibleSections, setVisibleSections] = useState(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('.terms-section');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const sections = [
        {
            id: 'acceptance',
            title: '1. Acceptance of Terms',
            accent: 'accent-blue',
            content: (
                <div>
                    <p>By accessing and using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.</p>
                </div>
            )
        },
        {
            id: 'services',
            title: '2. Description of Services',
            accent: 'accent-purple',
            content: (
                <div>
                    <p>We provide a comprehensive platform designed to enhance your digital experience through innovative solutions and user-centric design. Our services may include but are not limited to:</p>
                    <ul>
                        <li>Platform access and core functionality</li>
                        <li>User account management and personalization</li>
                        <li>Interactive features and community tools</li>
                        <li>Technical support and customer assistance</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'eligibility',
            title: '3. User Eligibility',
            accent: 'accent-indigo',
            content: (
                <div>
                    <p>To use our services, you must:</p>
                    <ul>
                        <li>Be at least <strong>18 years of age</strong> or have parental/guardian consent</li>
                        <li>Provide accurate and complete information during registration</li>
                        <li>Maintain the security and confidentiality of your account credentials</li>
                        <li>Comply with all applicable local, state, and international laws</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'conduct',
            title: '4. User Conduct and Responsibilities',
            accent: 'accent-emerald',
            content: (
                <div>
                    <p>When using our platform, you agree to:</p>
                    <div className="subsection">
                        <div className="subsection-title">Acceptable Use</div>
                        <ul>
                            <li>Use our services only for lawful purposes</li>
                            <li>Respect the rights and privacy of other users</li>
                            <li>Provide accurate information and keep your profile updated</li>
                            <li>Report any suspicious or inappropriate behavior</li>
                        </ul>
                    </div>
                    <div className="subsection">
                        <div className="subsection-title">Prohibited Activities</div>
                        <ul>
                            <li>Harassment, abuse, or discrimination against other users</li>
                            <li>Uploading malicious content or attempting to compromise security</li>
                            <li>Impersonating others or providing false information</li>
                            <li>Commercial use without explicit permission</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'intellectual',
            title: '5. Intellectual Property Rights',
            accent: 'accent-rose',
            content: (
                <div>
                    <p>All content, features, and functionality on our platform, including but not limited to text, graphics, logos, images, and software, are the exclusive property of <span className="brand-highlight">our company</span> and are protected by copyright, trademark, and other intellectual property laws.</p>
                    <div className="subsection">
                        <div className="subsection-title">Your Content</div>
                        <p>You retain ownership of content you create and share on our platform. However, by posting content, you grant us a non-exclusive, worldwide license to use, modify, and display such content in connection with our services.</p>
                    </div>
                </div>
            )
        },
        {
            id: 'privacy',
            title: '6. Privacy and Data Protection',
            accent: 'accent-amber',
            content: (
                <div>
                    <p>Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which forms an integral part of these Terms of Service.</p>
                    <p>By using our services, you consent to the collection and use of your information as outlined in our Privacy Policy.</p>
                </div>
            )
        },
        {
            id: 'liability',
            title: '7. Limitation of Liability',
            accent: 'accent-cyan',
            content: (
                <div>
                    <p>To the fullest extent permitted by applicable law:</p>
                    <ul>
                        <li>Our platform is provided <strong>"as is"</strong> without warranties of any kind</li>
                        <li>We shall not be liable for any indirect, incidental, or consequential damages</li>
                        <li>Our total liability shall not exceed the amount paid by you for our services</li>
                        <li>We do not guarantee uninterrupted or error-free service</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'termination',
            title: '8. Termination',
            accent: 'accent-violet',
            content: (
                <div>
                    <p>We reserve the right to suspend or terminate access to our platform without notice if:</p>
                    <ul>
                        <li>You violate these terms</li>
                        <li>Your use poses security, legal, or operational risks</li>
                    </ul>
                    <p>Upon termination, your right to access and use our services will cease immediately.</p>
                </div>
            )
        },
        {
            id: 'modifications',
            title: '9. Modifications',
            accent: 'accent-blue',
            content: (
                <div>
                    <p>We may update these Terms of Service from time to time. Updated versions will be posted with a new <strong>Effective Date</strong>. Continued use of our services implies acceptance of the revised terms.</p>
                    <p>We encourage you to review these terms periodically to stay informed of any changes.</p>
                </div>
            )
        },
        {
            id: 'governing',
            title: '10. Governing Law',
            accent: 'accent-indigo',
            content: (
                <div>
                    <p>These terms shall be governed by and construed in accordance with the laws of <strong>India</strong>, without regard to conflict of law principles.</p>
                    <p>Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in India.</p>
                </div>
            )
        }
    ];

    return (
        <div className="terms-page">
            {/* Floating Background Elements */}
            <div className="floating-bg">
                <div className="bg-shape bg-shape-1"></div>
                <div className="bg-shape bg-shape-2"></div>
                <div className="bg-shape bg-shape-3"></div>
            </div>

            <div className="content-wrapper">
                <div className="terms-container">
                    {/* Header Section */}
                    <header className="terms-header">
                        <h1 className="terms-title">Terms of Service</h1>
                        <p className="terms-subtitle">Your agreement with us</p>
                        <div className="effective-date">
                            Effective Date: January 1, 2025
                        </div>
                        <div className="terms-intro">
                            Welcome to our platform! These Terms of Service outline the rules and regulations
                            for using our services. By accessing our platform, you agree to comply with these
                            terms and our commitment to providing you with an exceptional experience.
                        </div>
                    </header>

                    {/* Content Sections */}
                    <main className="terms-content">
                        {sections.map((section) => (
                            <section
                                key={section.id}
                                id={section.id}
                                className={`terms-section ${section.accent} ${visibleSections.has(section.id) ? 'visible' : ''
                                    }`}
                            >
                                <h2 className="section-title">{section.title}</h2>
                                <div className="section-content">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </main>

                    {/* Footer */}
                    <footer className="terms-footer">
                        <div className="footer-message">
                            <strong>Questions about these terms?</strong> We're here to help.
                            Contact us at <a href="mailto:legal@company.com" className="contact-highlight">canopus.incglobe@gmail.com</a>
                            <br /><br />
                            <em>We're building with purpose, and we're excited to have you along for the journey.
                                Let's create something meaningful, together.</em>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default TermsOfService;