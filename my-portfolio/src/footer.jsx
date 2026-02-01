import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cyberpunk-footer">
      <div className="footer-line"></div>

      <div className="footer-content">
        
        {/* --- LEFT: Brand --- */}
        <div className="footer-brand">
          <h2 className="FooterFont">NAKUL PARNALIA</h2>
          <p className="system-status">
            SYSTEM STATUS: <span className="status-live">CHAOS ONLINE</span>
          </p>
        </div>

        {/* --- CENTER: Social Links (Text/Image Hybrid) --- */}
        <div className="footer-socials">
          
          {/* GitHub */}
          <a href="https://github.com/nakul-parnalia" target="_blank" rel="noopener noreferrer" className="social-btn github">
            <span className="btn-text">GITHUB</span>
            <div className="hover-bg"></div>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/nakul-parnalia-267785250/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
            <span className="btn-text">LINKEDIN</span>
            <div className="hover-bg"></div>
          </a>

          {/* Twitter/X */}
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
            <span className="btn-text">TWITTER</span>
            <div className="hover-bg"></div>
          </a>

          {/* Email */}
          <a href="mailto:nakulparnalia18@gmail.com" className="social-btn email">
            <span className="btn-text">EMAIL</span>
            <div className="hover-bg"></div>
          </a>

        </div>

        {/* --- RIGHT: Legal --- */}
        <div className="footer-legal">
          <p className="copyright-text">
            &copy; {currentYear} ALL RIGHTS RESERVED.
          </p>
          <p className="legal-disclaimer">
            Crafted by <span className="highlight-name">Nakul Parnalia</span>.
            <br />
            Unauthorized duplication will result in <span className="glitch-text">unforeseen consequences</span>.
          </p>
        </div>

      </div>

      <div className="footer-bg-glitch"></div>
    </footer>
  );
};

export default Footer;
