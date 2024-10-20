import React, { useState } from 'react';
import './WhatYouParking.css';
import { FaCar, FaMotorcycle, FaTruck } from 'react-icons/fa'; 

const WhatYouParking = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState('');
    const [data, setData] = useState(null);

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
        
        // Send location data to your backend to fetch matching data
        try {
            const response = await fetch('/api/search-location', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ latitude, longitude }),
            });

            if (response.ok) {
                const result = await response.json();
                setData(result); // Set the matching data here
            } else {
                setError('Failed to fetch matching data.');
            }
        } catch (err) {
            setError('Error fetching data from server.');
        }
    };

    const errorCallback = (error) => {
        setError('Unable to retrieve your location. Please enable location services.');
    };

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
                <div className="vehicle-option">
                    <FaCar className="vehicle-icon" />
                    <span>Jeep</span>
                </div>
            </div>
            <div className="map-container">
                <div className="map-placeholder">
                    <button onClick={handleLocationRequest}>Search Near You</button>
                </div>
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
