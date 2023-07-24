import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        <div className="social-icons">
          {/* Add your social media icons here */}
          <a href="https://www.facebook.com/your-company"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com/your-company"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/company/your-company"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/your-company"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
