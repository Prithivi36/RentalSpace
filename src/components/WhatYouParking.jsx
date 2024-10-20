// WhatYouParking.jsx

import React from 'react';
import './WhatYouParking.css';
import { FaCar, FaMotorcycle, FaTruck } from 'react-icons/fa'; // Removed FaSuv

const WhatYouParking = () => {
    return (
        <div className="what-you-parking">
            <h1 className="heading">What are you parking?</h1>
            <div className="vehicle-options">
                <div className="vehicle-option">
                    <FaCar className="vehicle-icon" />
                    <span>Car</span>
                </div>
                <div className="vehicle-option">
                    <FaMotorcycle className="vehicle-icon" />
                    <span>Bike</span>
                </div>
                <div className="vehicle-option">
                    <FaTruck className="vehicle-icon" />
                    <span>Truck</span>
                </div>
                {/* Replace FaSuv with another relevant icon if needed */}
                <div className="vehicle-option">
                    <FaCar className="vehicle-icon" /> {/* Using car icon for Jeep */}
                    <span>Jeep</span>
                </div>
            </div>
            <div className="map-container">
                <div className="map-placeholder">
                    <button>Search Near You</button>
                </div>
            </div>
        </div>
    );
};

export default WhatYouParking;
