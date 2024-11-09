import React, { useState } from 'react';
import './WhatYouParking.css';
import { FaCar, FaMotorcycle, FaTruck ,FaBox} from 'react-icons/fa'; 

import { Link, useNavigate } from 'react-router-dom'; // Correct import
import maploc from "../assets/park.gif"

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

    const handleStorageClick =()=>{
        navigate('/storage')
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

                <div className="vehicle-option" onClick={handleStorageClick}>
                <FaBox className="vehicle-icon" />
                    <span>Storage</span>
                </div>
            </div>
            <div className="map-container">
                <div className="map-left">
               
                <div className="video-overlay">
                <img src={maploc} alt="" />

                </div>
                   
               
                </div>
                <div className="map-right">
                    <h2 className='map-head'>Connecting All Your Parking Solutions.</h2>
                    <p className='map-para'>Our platform breaks down silos, integrating various hardware and software into a seamless, interoperable system. No matter the brand or model, we unify your parking infrastructure to support modern mobility.</p>
                <div className="map-r-btm">
                <Link to="/user"><div className="map-placeholder">
                    <button onClick={handleLocationRequest}>Search Near You</button>
                </div></Link>
                </div>
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
