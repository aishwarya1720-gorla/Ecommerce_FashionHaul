import React from 'react';
import '../App.css'; // Make sure to import your CSS file

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} FashionHaul. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
