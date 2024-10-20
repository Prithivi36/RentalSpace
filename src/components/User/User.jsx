import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'; 

const User = ({ isHost, userLocation }) => {
  const [storageOptions, setStorageOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (isHost) {
    return null;
  }

  useEffect(() => {
    // Mock API call for testing
    const fetchStorageOptions = async () => {
      // Replace the API call with sample data
      const mockStorageOptions = [
        {
          id: 1,
          imageUrl: 'https://via.placeholder.com/150',
          isTopHost: true,
          type: 'Storage Unit',
          size: '10x10',
          address: '123 Main St',
          city: 'Chennai',
          state: 'Tamil Nadu',
          rating: 4.5,
          monthsRented: 12,
          pricePerMonth: 100,
          discount: '10% off',
          review: 'Great place to store my stuff!'
        },
        {
          id: 2,
          imageUrl: 'https://via.placeholder.com/150',
          isTopHost: false,
          type: 'Garage',
          size: '12x20',
          address: '456 Elm St',
          city: 'Chennai',
          state: 'Tamil Nadu',
          rating: 4.0,
          monthsRented: 6,
          pricePerMonth: 150,
          discount: '',
          review: 'Convenient location and safe.'
        },
        {
          id: 3,
          imageUrl: 'https://via.placeholder.com/150',
          isTopHost: false,
          type: 'Storage Unit',
          size: '5x5',
          address: '789 Oak St',
          city: 'Chennai',
          state: 'Tamil Nadu',
          rating: 3.8,
          monthsRented: 8,
          pricePerMonth: 80,
          discount: '',
          review: 'Decent storage for small items.'
        },
      ];
      
      // Simulate a delay like an API call
      setTimeout(() => {
        setStorageOptions(mockStorageOptions);
        setLoading(false);
      }, 1000);
    };

    fetchStorageOptions();
  }, [userLocation]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="storage-list-container">
      <h2>Storage near you</h2>
      <p>{storageOptions.length}+ spaces</p>
      <div className="storage-cards">
        {storageOptions.map((storage) => (
          <div key={storage.id} className="storage-card">
            <img src={storage.imageUrl} alt="Storage" className="storage-image" />
            <div className="storage-details">
              <div className="storage-top-section">
                {storage.isTopHost && <span className="top-host-badge">Top Host</span>}
                <span className="storage-type">
                  {storage.type} | {storage.size}
                </span>
              </div>
              <div className="storage-location">
                {storage.address}, {storage.city}, {storage.state}
              </div>
              <div className="storage-rating">
                <span>⭐ {storage.rating}</span> • {storage.monthsRented} months rented
              </div>
              <div className="storage-price">
                {storage.discount && <span className="discount-badge">{storage.discount}</span>}
                <span>${storage.pricePerMonth} per month</span>
              </div>
              <div className="storage-review">"{storage.review}"</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
