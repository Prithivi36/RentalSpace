import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'; 
import Map from './Map';
import MapWithClick from './Map';

const User = ({ isHost, userLocation }) => {
  const [langLat,setLangLat]= React.useState({lat:null,lng:null})
  const [show,setShow]=React.useState(false)
  const handleMapClick=()=>{
      
        setShow(!show);
      
  }

  return (
    <div className="list-storage-container">
      
        {!show?<button onClick={handleMapClick}>Enter Mannually</button>:<button onClick={handleMapClick}>Ok</button> }
        {show && <Map lat={setLangLat}/>}
      {/* <Map lat={setLangLat}/>  */}
      {
        console.log(langLat)
        
      }
      <div className="list-storage-items">
        <div className="list-storage-top">
          <div className="lsit-storage-top-left">
          <p><span className='fw-bold'>Owner Name: </span>Vijay</p>
          <p><span className='fw-bold'>Address: </span>Kalapatti,Coimbatore</p>
          <p><span className='fw-bold'>Vehicles: </span>Car,Bike</p>
          <p><span className='fw-bold'>Price Per Hour: </span>200Rs</p>

          </div>
          <div className="lsit-storage-top-right">
          <div className="list-storage-img">
          <i className="bi bi-car-front"></i>
          </div>
          </div>
            
        </div>
        <div className="list-storage-bottom">
          <p><span className='fw-bold'>Start Date:</span> <input type="datetime-local" /></p>
          <p><span className='fw-bold'>End Date:</span> <input type="datetime-local" /></p>
         
          <button className='booknow-btn'>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default User;
