import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>MoodyTravels</h2>
          <p>Explore the world based on your mood. Discover the best destinations that suit your current feelings and emotions.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/how-it-works">How it works</a></li>
            <li><a href="/mission">Our Mission</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <p>Email: support@moodytravels.com</p>
          <p>Phone: +49 00000000000</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MoodyTravels. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
