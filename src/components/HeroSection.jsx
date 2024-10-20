import React, { useState } from 'react';
import './HeroSection.css';
import { FaLocationArrow } from 'react-icons/fa'; // Location icon from react-icons

const HeroSection = () => {
    const [address, setAddress] = useState('');

    const handleFindParking = () => {
        // Logic to find parking goes here
        alert(`Finding parking for: ${address}`);
    };

    return (
        <div className="hero-section">
            <div className="hero-text">Parking & Storage<br /> made easy</div>
            <div className="search-bar">
                <FaLocationArrow className="location-icon" />
                <input
                    type="text"
                    placeholder="Enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <button onClick={handleFindParking} className="find-parking-button">
                    Find Parking
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
