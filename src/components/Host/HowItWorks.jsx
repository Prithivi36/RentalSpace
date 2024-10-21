import React from 'react';
import { FaHome, FaClipboardCheck, FaCar } from 'react-icons/fa';
import './HowItWorks.css';
import { Link, useNavigate } from 'react-router-dom';

const HowItWorks = () => {

  return (
    <div className="how-it-works-">
      <h2>How Neighbor works</h2>
      <p>Become a host in 3 easy steps</p>

      <div className="steps">
        {/* Step 1 */}
        <div className="step">
          <FaHome className="step-icon" />
          <h3>1. List your spaces</h3>
          <p>Tell us about your spaces and how much you would like to earn.</p>
        </div>

        {/* Step 2 */}
        <div className="step">
          <FaClipboardCheck className="step-icon" />
          <h3>2. Approve who rents</h3>
          <p>Review renter requests (including what they want to store and when) and approve them.</p>
        </div>

        {/* Step 3 */}
        <div className="step">
          <FaCar className="step-icon" />
          <h3>3. Start earning</h3>
          <p>Schedule a move-in time with your renter, and start getting paid.</p>
        </div>
      </div>
      <Link to="/hostdash"> <button className="list-space-btn">List your space</button></Link>
     
    
    </div>
    
  );
};

export default HowItWorks;
