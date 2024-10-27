import React, { useState } from 'react';
import './SimpleToggle.css';

const SimpleToggle = () => {
  const [available, setAvailable] = useState(true);

  const handleToggle = () => {
    setAvailable(!available);
  };

  return (
    <div className="toggle-wrapper">
      {/* Status Text */}
      <p className={`status-text ${available ? "text-success" : "text-danger"}`}>
        {available ? "Available" : "Not Available"}
      </p>

      {/* Toggle Button */}
      <div
        className={`toggle-container ${available ? 'active' : ''}`}
        onClick={handleToggle}
      >
        <div className="toggle-circle"></div>
      </div>
    </div>
  );
};

export default SimpleToggle;
