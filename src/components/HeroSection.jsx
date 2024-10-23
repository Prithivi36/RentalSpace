import React, { useState } from 'react';
import './HeroSection.css';
import { FaLocationArrow } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/user'); // Use navigate function to go to /user
    }

               

    return (
        <div className="hero-section">
            {/* <Navbar /> */}
            <div className="hero-text">Parking & Storage<br /> made easy</div>
            <div className="search-bar">
                <FaLocationArrow className="location-icon" />
                <input
                    type="text"
                    placeholder="Enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className='hero-input'
                />
                <button  className="find-parking-button" onClick={handleClick}>
                Find Parking
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
