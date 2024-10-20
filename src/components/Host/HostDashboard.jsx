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
  const [earnings, setEarnings] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Automatically get user's location on component mount
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setNewSpace((prevData) => ({
              ...prevData,
              latitude,
              longitude,
            }));
          },
          (error) => {
            console.error("Error getting location:", error);
            setLocationError("Unable to fetch location. Please check your browser settings.");
          }
        );
      } else {
        setLocationError("Geolocation is not supported by this browser.");
      }
    };
    getLocation();
  }, []);

  // Fetch spaces listed by the host
  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const response = await fetch("/api/spaces");
        const data = await response.json();
        setSpaces(data);

        // Calculate total earnings
        const totalEarnings = data.reduce((sum, space) => sum + (space.moneyEarned || 0), 0);
        setEarnings(totalEarnings);
      } catch (error) {
        console.error("Error fetching spaces:", error);
      }
    };

    fetchSpaces();
  }, []);

  // Handle form submission to add a new space
  const handleAddSpace = async () => {
    if (!newSpace.vehicleAllowed.length || !newSpace.pricePerHour || !newSpace.imageUrl) {
      alert("Please fill all fields before submitting.");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await axios.post("/api/host/addSpace", newSpace);
      setSpaces([...spaces, response.data]); // Add the new space to the list
      setShowForm(false); // Hide the form after adding
      setIsSubmitting(false);

      // Recalculate earnings after adding the new space
      setEarnings((prevEarnings) => prevEarnings + response.data.moneyEarned);
    } catch (error) {
      console.error("Error adding space", error);
      setIsSubmitting(false);
    }
  };

  return (
    
    <div className="dashboard-container">
        
      <h2>Host Dashboard</h2>

      {/* Earnings Section */}
      <section className="earnings-section">
        <h3>Total Earnings</h3>
        <p>${earnings.toFixed(2)}</p>
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
          <h3>Add a New Space</h3>
          {locationError && <p style={{ color: "red" }}>{locationError}</p>}

          <label>Vehicles Allowed:</label>
          <input
            type="text"
            placeholder="Enter vehicles (e.g., bike, car)"
            onChange={(e) =>
              setNewSpace({
                ...newSpace,
                vehicleAllowed: e.target.value.split(",").map((v) => v.trim()),
              })
            }
          />

          <label>Price per Hour:</label>
          <input
            type="number"
            value={newSpace.pricePerHour}
            onChange={(e) => setNewSpace({ ...newSpace, pricePerHour: Number(e.target.value) })}
          />

          <label>Image URL:</label>
          <input
            type="text"
            value={newSpace.imageUrl}
            onChange={(e) => setNewSpace({ ...newSpace, imageUrl: e.target.value })}
          />

          <button onClick={handleAddSpace} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
};

export default HostDashboard;
