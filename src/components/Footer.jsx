import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Popular Cities</h4>
          <ul>
            <li><a href="#">Chennai</a></li>
            <li><a href="#">Coimbatore</a></li>
            <li><a href="#">Madurai</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Search by State</h4>
          <ul>
            <li><a href="#">Tamil Nadu</a></li>
            <li><a href="#">Karnataka</a></li>
            <li><a href="#">Kerala</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Sitemaps</h4>
          <ul>
            <li><a href="#">Self Storage</a></li>
            <li><a href="#">Car Storage</a></li>
            <li><a href="#">Monthly Parking</a></li>
            <li><a href="#">Truck Parking</a></li>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <h4>Stay in the loop!!</h4>
          <p>Useful articles about becoming a successful host.</p>
          <div className="subscribe-input">
            <input type="email" placeholder="Email address" />
            <button>→</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
