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
import MySpaces from "./MySpaces";
import MySpaceForm from "./MySpaceForm";


const HostDashboard = () => {

  const [formShow, setFormShow] = useState(false);
  const handleShow = () => setFormShow(true);

  const [userRequest, setUserRequest] = useState([]);

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

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getUser(localStorage.getItem('user')).then(res => setCurrentUser(res.data));
    getUserRequest(localStorage.getItem('user')).then(res => setUserRequest(res.data.filter((f) => (f.status != "rejected"))));
  }, []);

  return (
    <div className="dashboard-container">
      <div className="host-left">
        <div className="top d-md-flex align-items-center mb-4 px-2 px-md-0 mb-md-0 justify-content-between ">
          <UserDash currentUser={currentUser} />
          <div className="d-md-flex mb-4 gap-2">
            <div className="card p-3">
              <p className="fw-bolder text-secondary">Total Earning</p>
              <h6 className="fw-bolder text-primary py-3">INR 1000</h6>
            </div>
            <div className="card p-3">
            <p className="fw-bolder text-secondary">Storages</p>
            <h6 className="fw-bolder text-primary "><span className="text-black fw-light">active :</span > 5</h6>
              <h6 className="fw-bolder text-primary"><span className="text-black fw-light">Inactive :</span > 2</h6>
              <h6 className="fw-bolder text-primary"><span className="text-black fw-light">Total :</span > 7</h6>
            </div>
            <div className="card p-3">
            <p className="fw-bolder text-secondary">Spaces</p>
            <h6 className="fw-bolder text-primary "><span className="text-black fw-light">active :</span > 3</h6>
              <h6 className="fw-bolder text-primary"><span className="text-black fw-light">Inactive :</span > 1</h6>
              <h6 className="fw-bolder text-primary"><span className="text-black fw-light">Total :</span > 4</h6>
            </div>
          </div>
          <div className=" row gap-3 px-4">
            <button onClick={handleShow} className="btn  btn-sm rounded-5 btn-primary">Add Space</button>
            <button className="btn  btn-sm rounded-5 btn-primary">Add Storage</button>
          </div>
        </div>
        {formShow &&(
              <MySpaceForm setFormShow={setFormShow} />
            )}
        <hr />
        <div className="p-4">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" >My Parkings</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" >Bookings</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" >Requests</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-space" type="button" role="tab" >My Spaces</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-space-books" type="button" role="tab" >Space Bookings</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-space-rqst" type="button" role="tab" >Space Request</button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" >
                <MySpaces formShow={formShow} setFormShow={setFormShow} />
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" >
                <MyBooks/>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel">
                <Requests userRequest={userRequest} handleAccept={handleAccept} handleReject={handleReject}/>
              </div>
              <div className="tab-pane fade" id="pills-space" role="tabpanel">
                Spaces
              </div>
              <div className="tab-pane fade" id="pills-space-books" role="tabpanel">
                Spaces books
              </div>
              <div className="tab-pane fade" id="pills-space-rqst" role="tabpanel">
                Spaces Requests
              </div>
            </div>
            </div>
      </div>
    </div>
  );
};

export default HostDashboard;
