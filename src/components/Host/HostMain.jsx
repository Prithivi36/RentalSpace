import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HostMain.css';  // For matching the theme

const HostMain = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    address: '',
    latitude: '',
    longitude: '',
    vehicleAllowed: [],
    available: true,
    pricePerHour: '',
  });

  // Automatically get user's location
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setFormData((prevData) => ({
              ...prevData,
              latitude,
              longitude,
            }));
          },
          (error) => {
            console.error('Error getting location:', error);
            // Handle error (e.g., show a message to the user)
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        // Handle case where geolocation is not supported
      }
    };

    getLocation();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle checkbox for vehicleAllowed
  const handleVehicleChange = (e) => {
    const { value, checked } = e.target;
    setFormData({
      ...formData,
      vehicleAllowed: checked
        ? [...formData.vehicleAllowed, value]
        : formData.vehicleAllowed.filter((v) => v !== value),
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Assuming you have an API to send the formData to MongoDB
    // e.g., await axios.post('/api/host', formData);

    // Redirect after submission or show success message
    navigate('/hostdash');  // For example, redirect to success page
  };

  return (
    <div className="host-main-container">
      <h2>Become a Host</h2>
      <form onSubmit={handleSubmit} className="host-form">
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            required
          />
        </div>

        {/* Latitude and Longitude fields hidden from the user */}
        <input
          type="hidden"
          name="latitude"
          value={formData.latitude}
          readOnly
        />
        <input
          type="hidden"
          name="longitude"
          value={formData.longitude}
          readOnly
        />

        <div className="form-group">
          <label>Vehicle Allowed</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="bike"
                onChange={handleVehicleChange}
              /> Bike
            </label>
            <label>
              <input
                type="checkbox"
                value="car"
                onChange={handleVehicleChange}
              /> Car
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Price Per Hour</label>
          <input
            type="number"
            name="pricePerHour"
            value={formData.pricePerHour}
            onChange={handleChange}
            placeholder="Enter price per hour"
            required
          />
        </div>

        <div className="form-group">
          <label>Available</label>
          <select name="available" value={formData.available} onChange={handleChange}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default HostMain;
