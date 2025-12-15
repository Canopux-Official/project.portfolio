// import React from "react";
// import "../styles/Footer.css";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6"

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-column">
//           <h3>Canopux</h3>
//           <p>Beyond Limits, Into the Future</p>
//         </div>

//         <div className="footer-column">
//           <h4>Company</h4>
//           <ul>
//             <li><a href="#about">About</a></li>
//             <li><a href="#careers">Careers</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h4>Resources</h4>
//           <ul>
//             <li><a href="https://canopux-blog.vercel.app/">Blog</a></li>
//             <li><a href="#privacy">Privacy Policy</a></li>
//             <li><a href="#terms">Terms of Service</a></li>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h4>Follow Us</h4>
//           <div className="social-icons">
//             <a href="https://www.facebook.com/profile.php?id=61573815500432" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//             <a href="https://x.com/Canopux_team" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
//             <a href="https://www.instagram.com/canopux_team/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//             <a href="https://www.linkedin.com/company/canopux/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//             <a href="https://github.com/Canopux-Official" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; 2025 Canopux. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-gradient-bg"></div>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column brand-column">
            <div className="brand-section">
              <h3 className="brand-title">Canopux</h3>
              <p className="brand-tagline">Beyond Limits, Into the Future</p>
              <div className="brand-accent"></div>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="column-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/project">Projects</Link></li>
              <li><Link to="/">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="column-title">Resources</h4>
            <ul className="footer-links">
              <li><Link to="https://canopux-blog.vercel.app/" target="_blank" rel="noopener noreferrer">Blog</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-column social-column">
            <h4 className="column-title">Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61573815500432" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <FaFacebookF />
              </a>
              <a href="https://x.com/Canopux_team" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/canopux_team/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/canopux/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Canopux-Official" target="_blank" rel="noopener noreferrer" className="social-icon github">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2025 Canopux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;