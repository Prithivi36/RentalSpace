import React, { useState } from 'react';
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
    navigate('/host-success');  // For example, redirect to success page
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

        <div className="form-group">
          <label>Latitude</label>
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            placeholder="Enter latitude"
            required
          />
        </div>

        <div className="form-group">
          <label>Longitude</label>
          <input
            type="number"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            placeholder="Enter longitude"
            required
          />
        </div>

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
