import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HostDashboard.css";
import Navbar from "./Navbar";
import { getUser, getUserSpace } from "../../api/Api";

const HostDashboard = () => {


 
  const [cuurentUser,setCurrentUser]=React.useState({

  })
  
  React.useEffect(()=>{
    getUser(localStorage.getItem('user')).then(res=>setCurrentUser(res.data))
  })
  
  
  const [mySpace,setMySpace]=React.useState([]);

  React.useEffect(()=>{
    getUserSpace(localStorage.getItem('user')).then(res=>setMySpace(res.data))
  })

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
              <p><span className="fw-bold">Name: </span>{cuurentUser.name}</p>
              <p><span className="fw-bold">Address: </span>Kalapatti,Coimbatore</p >
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
            {mySpace.length==0?
            <div className="text-center">
                <h3>No Space , Add now ??</h3>
                <div className="d-flex align-items-center justify-content-center">
                  <button className="btn btn-primary p-3 m-3 d-block">
                    Add Now
                  </button>
                </div>
            </div>
            :
            mySpace.map((space)=>{
              return(
                <div key={space._id} className="myspace-container">
                  <h3>Local Garage</h3>
                  <p><span className="fw-bold">Located in : </span>{space.address}</p>
                  <div className="vehicles-allowed">
                    <span className="fw-bold">Vehicles Allowed: </span>{space.vehiclesAllowed}
                  </div>
                  <p className={space.available?"text-success":"text-danger"}>{space.available?"available":"Not Available"}</p>
                </div>
              )
            })
            }
          </div>

        </div>
        <hr />
        <div className="host-right-bottom">
          <div className="notifications">
            <h1>Notifications</h1>
            <div className="notification-table">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td>Mark</td>
                    <td>Otto</td>
                    <td><div className="action-btn-p"><i className="bi bi-check-square-fill"></i></div>
                      <div className="action-btn-n"><i className="bi bi-x-square-fill"></i></div>
                    </td>
                  </tr>
                  <tr>

                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td><div className="action-btn-p"><i className="bi bi-check-square-fill"></i></div>
                      <div className="action-btn-n"><i className="bi bi-x-square-fill"></i></div>
                    </td>
                  </tr>
                  <tr>

                    <td>Larry</td>
                    <td>the Bird</td>
                    <td><div className="action-btn-p"><i className="bi bi-check-square-fill"></i></div>
                      <div className="action-btn-n"><i className="bi bi-x-square-fill"></i></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
};

export default HostDashboard;
