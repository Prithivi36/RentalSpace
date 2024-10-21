import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';

const MapClickHandler = ({ setLatLng }) => {
  // Use map events to capture the latitude and longitude on click
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setLatLng({ lat, lng });  // Update the state with clicked lat and lng
    },
  });

  return null;
};

const MapWithClick = (props) => {
  const [latLng, setLatLng] = useState({ lat: 13.077513575630821, lng: 80.27577218339898 });
  const navigate = useNavigate();

  useEffect(() => {
    // Use navigator.geolocation to get user's current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatLng({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      <h2>Click the map to get latitude and longitude</h2>
      <MapContainer center={[latLng.lat, latLng.lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler setLatLng={setLatLng} />
      </MapContainer>
      {latLng && (
        <p>
          Latitude: {latLng.lat}, Longitude: {latLng.lng}
        </p>
      )}
      {/* Navigate to /dashboard if the latLng is set */}
      {/* {latLng.lat && latLng.lng && navigate('/dashboard')} */}
    </div>
  );
};

export default MapWithClick;
