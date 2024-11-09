import React, { useState } from 'react';
import './HeroSection.css';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import car from "../assets/car-on-road-unscreen.gif"


const HeroSection = () => {
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/user'); // Use navigate function to go to /user
    }



    return (
        <div className="hero-section">

            <div className="hero-container">
                <div className="hero-left">
                    <div className="hero-text">Parking & Storage<br /> made easy</div>
                    <p>Find secure and convenient parking spaces or storage facilities near you.</p>
                    <div className="search-bar">
                        <FaLocationArrow className="location-icon" />
                        <input
                            type="text"
                            placeholder="Enter address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className='hero-input'
                        />
                        <button className="find-parking-button" onClick={handleClick}>
                            Find Parking
                        </button>

                    </div>
                </div>
                <div className="hero-right">
                    <img src={car} alt="" />
                </div>

            </div>
            {/* <Navbar /> */}



        </div>
    );
};

export default HeroSection;
