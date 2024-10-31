import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HostDashboard.css";
import Navbar from "./Navbar";
import { acceptBooking, addSpace, getUser, getUserRequest, getUserSpace, rejectBooking } from "../../api/Api";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import UserDash from "./DashComp/UserDash";
import MyBooks from "./DashComp/MyBooks";
import Requests from "./DashComp/Requests";
import SpaceComp from "./DashComp/SpaceComp";
import Map from '../User/Map'
import StorageForm from "../Storage/StorageForm";


const HostDashboard = () => {

  const Switcher3 = () => {
    const [isChecked, setIsChecked] = useState(false)
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
    }
  }


  
  const [current,setCurrent] = React.useState({ lat: null, lng:null });
  const [show, setShow] = useState(false);
  React.useEffect(()=>{
    console.log("Getting current location")
    navigator.geolocation.getCurrentPosition(pos=>{
      setCurrent({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      })
    })
  },[])
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
    const data={
      userId:localStorage.getItem('user'),
      address:formData.Address,
      location:{
        type:"Point",
        coordinates:[formData.lat,formData.lng]
      },
      vehiclesAllowed: formData.vehiclesAllowed.car?formData.vehiclesAllowed.bike?["car","bike"]:["car"]:["bike"],
      available: formData.Available,
      pricePerHour: formData.pricePerHour

    }
    addSpace(data).then(res=>alert(res.data));

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




  

  // Function to toggle the map's visibility
  const handleMapClick = () => {
    setShow((prevShow) => !prevShow);
  };

  const [currentUser, setCurrentUser] = useState({});
  const [userRequest, setUserRequest] = useState([]);
  const [mySpace, setMySpace] = useState([]);

  useEffect(() => {
    getUser(localStorage.getItem('user')).then(res => setCurrentUser(res.data));
    getUserRequest(localStorage.getItem('user')).then(res => setUserRequest(res.data.filter((f) => (f.status != "rejected"))));
  }, []);


  useEffect(() => {
    getUserSpace(localStorage.getItem('user')).then(res => setMySpace(res.data));
  }, []);

  // Handle acceptance logic
  function handleAccept(id) {
    acceptBooking(id)
    location.reload()
  }

  // Handle rejection logic    
  function handleReject(id) {
    rejectBooking(id);
    location.reload();
  }

  console.log(formData)

  return (
    <div className="dashboard-container">
      <div className="host-left">
        <UserDash currentUser={currentUser} />
        <hr />
        <MyBooks/>
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
                    <StorageForm/>
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
                                    <Map current={current} lat = {setFormData} />
                                    // <MapContainer
                                    //   center={[current.lat,current.lng]} // Use formData lat/lng or current
                                    //   zoom={13}
                                    //   style={{ height: '200px', width: '100%' }}
                                    //   onClick={(e) => {
                                    //     const { lat, lng } = e.latlng; // Get latitude and longitude from the click event
                                    //     setFormData((prevData) => ({
                                    //       ...prevData,
                                    //       lat, // Update the latitude
                                    //       lng  // Update the longitude
                                    //     }));
                                    //   }}
                                    // >
                                    //   <TileLayer
                                    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    //     attribution="&copy; OpenStreetMap contributors"
                                    //   />
                                    //   {formData.lat && formData.lng && (
                                    //     <Marker position={[formData.lat, formData.lng]} icon={locationIcon}>
                                    //       <Popup>Your selected location</Popup>
                                    //     </Marker>
                                    //   )}
                                    // </MapContainer>
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
                  <SpaceComp key={space._id} space={space} />
                );
              })
            }
          </div>
        </div>
        <hr />
        <Requests userRequest={userRequest} handleAccept={handleAccept} handleReject={handleReject} />
      </div>
    </div>
  );
};

export default HostDashboard;
