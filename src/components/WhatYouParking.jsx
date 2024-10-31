import React, { useState } from 'react';
import './WhatYouParking.css';
import { FaCar, FaMotorcycle, FaTruck } from 'react-icons/fa'; 
import { Link, useNavigate } from 'react-router-dom'; // Correct import

const WhatYouParking = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState('');
    const [data, setData] = useState(null);
    const navigate = useNavigate(); // Get the navigate function

    const handleLocationRequest = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            setError('Geolocation is not supported by your browser.');
        }
    };

    const successCallback = async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        
        
         
    };

    const errorCallback = (error) => {
        setError('Unable to retrieve your location. Please enable location services.');
    };

    const handleClick = () => {
        navigate('/user'); // Use navigate function to go to /user
    }

    return (
        <div className="what-you-parking">
            <h1 className="heading">What are you parking?</h1>
            <div className="vehicle-options">
                <div className="vehicle-option" onClick={handleClick}>
                    <FaCar className="vehicle-icon"  />
                    <span>Car</span>
                </div>
                <div className="vehicle-option" onClick={handleClick}>
                    <FaMotorcycle className="vehicle-icon" />
                    <span>Bike</span>
                </div>
                <div className="vehicle-option" onClick={handleClick}>
                    <FaTruck className="vehicle-icon" />
                    <span>Truck</span>
                </div>
                <div className="vehicle-option" onClick={handleClick}>
                    <FaCar className="vehicle-icon" />
                    <span>Jeep</span>
                </div>
            </div>
            <div className="map-container">
                <Link to="/user"><div className="map-placeholder">
                    <button onClick={handleLocationRequest}>Search Near You</button>
                </div></Link>
            </div>
            {location && <p>Your location: {location.latitude}, {location.longitude}</p>}
            {error && <p className="error">{error}</p>}
            {data && <div>
                <h2>Matching Locations:</h2>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item.name} - {item.address}</li>
                    ))}
                </ul>
            </div>}
        </div>
    );
};

export default WhatYouParking;
