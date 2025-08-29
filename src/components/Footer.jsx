import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        © Copyright 2025,  <span className="footer-site">GovSchemes</span>
      </div>
      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
          <span>f</span>
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon x" aria-label="X">
          <span>X</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
          <span>in</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

