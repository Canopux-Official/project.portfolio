import React, { useEffect, useRef } from 'react';
import '../styles/privacyPolicy.css';

const PrivacyPolicy = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="privacy-page">
      <div className="floating-bg">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>
      <div className="privacy-container">
        {/* Header */}
        <div className="privacy-header">
          <h1 className="privacy-title">Privacy Policy</h1>
          <div className="effective-date">Effective Date: June 15, 2025</div>
          <p className="privacy-intro">
            Welcome to <span className="brand-highlight">Canopux</span>. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website or use any of our services.
          </p>
        </div>

        {/* Content Sections */}
        <div className="privacy-content">
          {/* Section 1 */}
          <div className="privacy-section animate-on-scroll accent-blue" ref={addToRefs}>
            <h2 className="section-title">1. Information We Collect</h2>
            <div className="section-content">
              <p>We collect the following types of information:</p>

              <div className="subsection">
                <h3 className="subsection-title">a. Information You Provide to Us</h3>
                <ul>
                  <li><strong>Contact details</strong> such as your name, email address, and phone number.</li>
                  <li><strong>User-submitted content</strong> such as messages, inquiries, and feedback.</li>
                  <li><strong>Resume or portfolio data</strong> if you apply for freelance or collaboration opportunities.</li>
                </ul>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">b. Automatically Collected Information</h3>
                <ul>
                  <li><strong>Usage Data:</strong> Your interactions with our website (e.g., pages visited, time spent).</li>
                  <li><strong>Device & Log Data:</strong> IP address, browser type, operating system, and device information.</li>
                  <li><strong>Cookies & Tracking Technologies:</strong> Used to enhance user experience and analytics.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="privacy-section animate-on-scroll accent-purple" ref={addToRefs}>
            <h2 className="section-title">2. How We Use Your Information</h2>
            <div className="section-content">
              <p>We use the collected data to:</p>
              <ul>
                <li>Provide and improve our services and user experience.</li>
                <li>Respond to your inquiries or requests.</li>
                <li>Communicate updates, offers, or relevant opportunities.</li>
                <li>Analyze website traffic and trends for performance optimization.</li>
                <li>Ensure security and prevent fraudulent activities.</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="privacy-section animate-on-scroll accent-indigo" ref={addToRefs}>
            <h2 className="section-title">3. Sharing of Information</h2>
            <div className="section-content">
              <p>We do <strong>not sell</strong> your personal data. However, we may share your information with:</p>
              <ul>
                <li><strong>Service providers</strong> who assist in running our website (e.g., hosting, analytics).</li>
                <li><strong>Legal authorities,</strong> when required to comply with laws or protect rights.</li>
                <li><strong>Collaborators or clients,</strong> only with your consent, in case of project-based engagements.</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="privacy-section animate-on-scroll accent-emerald" ref={addToRefs}>
            <h2 className="section-title">4. Data Security</h2>
            <div className="section-content">
              <p>We take data protection seriously and implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, disclosure, or misuse.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="privacy-section animate-on-scroll accent-rose" ref={addToRefs}>
            <h2 className="section-title">5. Your Choices & Rights</h2>
            <div className="section-content">
              <p>You have the right to:</p>
              <ul>
                <li>Access or correct your personal information.</li>
                <li>Opt-out of receiving promotional communications.</li>
                <li>Request deletion of your personal data, where applicable.</li>
              </ul>
              <p>To make such requests, please contact us at <a href="mailto:canopus.incglobe@gmail.com" className="contact-highlight">canopus.incglobe@gmail.com</a>.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="privacy-section animate-on-scroll accent-amber" ref={addToRefs}>
            <h2 className="section-title">6. Third-Party Links</h2>
            <div className="section-content">
              <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before sharing any personal data.</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="privacy-section animate-on-scroll accent-cyan" ref={addToRefs}>
            <h2 className="section-title">7. Children's Privacy</h2>
            <div className="section-content">
              <p>Our website is not directed at children under the age of 13. We do not knowingly collect personal data from children without parental consent.</p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="privacy-section animate-on-scroll accent-violet" ref={addToRefs}>
            <h2 className="section-title">8. Changes to This Policy</h2>
            <div className="section-content">
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Effective Date."</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="privacy-footer">
          <div className="footer-message">
            Thank you for trusting <span className="brand-highlight">Canopux</span>. We're committed to building meaningful, secure, and transparent digital experiences.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;