import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HostDashboard.css";
import Navbar from "./Navbar";
import { acceptBooking, getUser, getUserRequest, getUserSpace, rejectBooking } from "../../api/Api";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';


const HostDashboard = () => {
  const [formShow, setFormShow] = useState(false);
  const [formData, setFormData] = useState({
    Address: "",
    vehiclesAllowed: {
      car: true,
      bike: true
    },
    Available: true,
    pricePerHour: 0,
    lat: null, // Initialize latitude
    lng: null
  })


  const handleShow = () => setFormShow(true);
  const handleClose = () => {
    setFormShow(false);
    setFormData({
      Address: "",
      vehiclesAllowed: {
        car: true,
        bike: true
      },
      Available: true,
      pricePerHour: 0
    });
  };



  //After Submit the Add space
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        vehiclesAllowed: { ...prevData.vehiclesAllowed, [name]: checked },
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const addSpaceSubmit = (e) => {
    e.preventDefault();

    // Log the current form data to the console
    console.log("Form Data:", formData);

    // Reset form data to initial state
    setFormData({
      Address: "",
      vehiclesAllowed: {
        car: true,
        bike: true
      },
      Available: true,
      pricePerHour: 0,
      lat: 0, // Reset latitude
      lng: 0  // Reset longitude
    });

    // Optionally hide the form or perform other actions
    setFormShow(false);
  };



  // Functions for Map
  const locationIconUrl = '/geo-alt-fill.svg';
  const locationIcon = L.icon({
    iconUrl: locationIconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  const current = { lat: 12.9716, lng: 77.5946 };
  const [show, setShow] = useState(false);

  // Get user's current location on component mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrent({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting location: ", error);
      }
    );
  }, []);

  // Function to toggle the map's visibility
  const handleMapClick = () => {
    setShow((prevShow) => !prevShow);
  };

  const [currentUser, setCurrentUser] = useState({});
  const [userRequest, setUserRequest] = useState([]);

  useEffect(() => {
    getUser(localStorage.getItem('user')).then(res => setCurrentUser(res.data));
    getUserRequest(localStorage.getItem('user')).then(res => setUserRequest(res.data.filter((f) => (f.status != "rejected"))));
  }, []);

  const [mySpace, setMySpace] = useState([]);

  useEffect(() => {
    getUserSpace(localStorage.getItem('user')).then(res => setMySpace(res.data));
  }, []);

  function handleAccept(id) {
    acceptBooking(id)
    location.reload()// Handle acceptance logic
  }

  function handleReject(id) {
    // Handle rejection logic    
    rejectBooking(id);
    location.reload();
  }

  return (
    <div className="dashboard-container">
      <div className="host-left">
        <div className="host-left-top">
          <div className="user-details">
            <div className="userdetails-left">
              <i className="bi bi-person"></i>
            </div>
            <div className="userdetails-right">
              <h1>My Profile</h1>
              <p><span className="fw-bold">Name: </span>{currentUser.name}</p>
              <p><span className="fw-bold">Address: </span>Kalapatti, Coimbatore</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="host-left-bottom">
          <h1>My Bookings</h1>
          <div className="host-left-bottom-table">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Address</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">15/9/2023</th>
                  <td>Coimbatore</td>
                  <td>Virat</td>
                  <td className="text-success">Accepted</td>
                </tr>
                <tr>
                  <th scope="row">18/9/2035</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td className="text-reject">Rejected</td>
                </tr>
                <tr>
                  <th scope="row">14/8/2025</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td className="text-success">Accepted</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="host-right">
        <div className="host-right-top">
          <div className="myspaces">
            <h1>My Spaces</h1>
            {mySpace.length === 0 ?
              <div className="text-center">
                <h3>No Space, Add now ??</h3>
                <div className="d-flex align-items-center justify-content-center">
                  <div>
                    <button className="btn btn-primary p-3 m-3 d-block" onClick={handleShow}>
                      Add Space
                    </button>
                    {formShow && (
                      <div className="modal show" style={{ display: 'block' }}>
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header d-flex justify-content-between">
                              <h5 className="modal-title ">Add Space</h5>

                              <button type="button" className="close p-2 btn btn-danger " onClick={handleClose}>
                                <span>&times;</span>
                              </button>

                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="form-group text-start">
                                  <label>Address</label>
                                  <textarea
                                    className="form-control"
                                    name="Address"
                                    required
                                    value={formData.Address}
                                    onChange={handleChange}
                                  ></textarea>
                                  {/* Button to toggle map for manual location entry */}
                                  <button type="button" className="btn btn-primary mt-1 mb-3" onClick={handleMapClick}>
                                    {!show ? 'Search by Map' : 'Ok'}
                                  </button>
                                  {show && (
                                    <MapContainer
                                      center={[formData.lat || current.lat, formData.lng || current.lng]} // Use formData lat/lng or current
                                      zoom={13}
                                      style={{ height: '200px', width: '100%' }}
                                      onClick={(e) => {
                                        const { lat, lng } = e.latlng; // Get latitude and longitude from the click event
                                        setFormData((prevData) => ({
                                          ...prevData,
                                          lat, // Update the latitude
                                          lng  // Update the longitude
                                        }));
                                      }}
                                    >
                                      <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution="&copy; OpenStreetMap contributors"
                                      />
                                      {formData.lat && formData.lng && (
        <Marker position={[formData.lat, formData.lng]} icon={locationIcon}>
          <Popup>Your selected location</Popup>
        </Marker>
      )}
                                    </MapContainer>
                                  )}
                                </div>

                                <div className="form-group text-start">
                                  <p>Vehicles Allowed</p>
                                  <div className="form-check">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="car"
                                      name="car"
                                      checked={formData.vehiclesAllowed.car}
                                      onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="car">Car</label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="bike"
                                      name="bike"
                                      checked={formData.vehiclesAllowed.bike}
                                      onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="bike">Bike</label>
                                  </div>

                                  <p className="text-success mt-3">Available</p>
                                </div>

                                <div className="form-group text-start">
                                  <label>Price per Hour</label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    name="pricePerHour"
                                    required
                                    value={formData.pricePerHour}
                                    onChange={handleChange}
                                  />
                                </div>

                                <button type="submit" className="btn btn-primary mt-3 " onClick={addSpaceSubmit}>
                                  Submit
                                </button>
                              </form>
                            </div>

                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              :
              mySpace.map((space) => {
                return (
                  <div key={space._id} className="myspace-container">
                    <h3>Local Garage</h3>
                    <p><span className="fw-bold">Located in: </span>{space.address}</p>
                    <div className="vehicles-allowed">
                      <span className="fw-bold">Vehicles Allowed: </span>{space.vehiclesAllowed}
                    </div>
                    <p className={space.available ? "text-success" : "text-danger"}>
                      {space.available ? "Available" : "Not Available"}
                    </p>
                  </div>
                );
              })
            }
          </div>
        </div>
        <hr />
        <div className="host-right-bottom">
          <div className="notifications">
            <h1>Notifications</h1>
            <div className="notification-table">
              {userRequest.length === 0 ? (
                <h1 className="text-center">You are up to date:</h1>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      userRequest.map((request) => {
                        console.log(request)
                        return (
                          <tr key={request._id}>
                            <td>{request.userName}</td>
                            <td>{request.address}</td>
                            <td>{(request.status === "accepted") ?
                              <p className="text-success">accepted</p> :
                              <div>
                                <div onClick={() => handleAccept(request._id)} className="action-btn-p"><i className="bi bi-check-square-fill"></i></div>
                                <div className="action-btn-n"><i
                                  onClick={() => handleReject(request._id)} className="bi bi-x-square-fill"></i></div>
                              </div>
                            }
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostDashboard;
