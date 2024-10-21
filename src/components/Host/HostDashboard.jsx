import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HostDashboard.css";
import Navbar from "./Navbar";

const HostDashboard = () => {
  const [spaces, setSpaces] = useState([]);
  const [newSpace, setNewSpace] = useState({
    vehicleAllowed: [],
    pricePerHour: 0,
    imageUrl: "",
    latitude: 0,
    longitude: 0,
  });
  const [showForm, setShowForm] = useState(false);

 

  

  

  return (
    
    <div className="dashboard-container">
        
      <h2>Host Dashboard</h2>

      {/* Earnings Section */}
      <section className="earnings-section">
        <h3>Total Earnings</h3>
        <p>122.5</p>
      </section>

      {/* Spaces Section */}
      <section className="spaces-section">
        <h3>Your Listed Spaces</h3>
        {spaces.length > 0 ? (
          <div className="space-list">
            {spaces.map((space) => (
              <div key={space._id} className="space-item">
                <img
                  src={space.imageUrl || "/default-image.jpg"}
                  alt="Space"
                  className="space-image"
                />
                <p>
                  <strong>Vehicles Allowed:</strong> {space.vehicleAllowed.join(", ")}
                </p>
                <p>
                  <strong>Price per Hour:</strong> ${space.pricePerHour}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No spaces listed yet.</p>
        )}
      </section>

      {/* Add Space Button */}
      <button className="add-space-btn" onClick={() => setShowForm(true)}>
        Add New Space
      </button>

      {/* Form to Add New Space */}
      {showForm && (
        
        <div className="add-space-form">
          <p>Lattitude : {newSpace.latitude}</p>
          <p>Longitude : {newSpace.longitude}</p>
          <h3>Add a New Space</h3>
          <label>Vehicles Allowed:</label>
          <input
            type="text"
            placeholder="Enter vehicles (e.g., bike, car)"
            name="vehicleAllowed"
          />
          <label>Price per Hour:</label>
          <input
            type="number"
            value={newSpace.pricePerHour}
            name="pricePerHour"
          />          

          <button >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default HostDashboard;
