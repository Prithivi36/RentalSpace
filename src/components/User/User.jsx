import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'; 
import Map from './Map';
import { findNearby } from '../../api/Api';
import Spaces from './Spaces';

const User = ({ isHost, userLocation }) => {
  //from manual data
  const [langLat,setLangLat]= React.useState({lat:null,lng:null})
  const [show,setShow]=React.useState(false)
  const [availableSpace,setAvailableSpace]=React.useState([])
  const handleMapClick=()=>{
        setShow(!show);
  }
  //auto detected data
  const [current,setCurrent]=React.useState({lat:0,lng:0})


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (pos)=>{
        console.log("bilii")
        setCurrent((p)=>({...p,lat:pos.coords.latitude,lng:pos.coords.longitude}))
        findNearby(langLat.lat||pos.coords.latitude,langLat.lng||pos.coords.longitude,5000).then(
          res=>setAvailableSpace(res.data)
        )
      }
    )
  },[langLat])
 
console.log(availableSpace)
  return (
    <div className="list-storage-container d-block p-3">
      
        {!show?<button onClick={handleMapClick} className='btn btn-primary'>Enter Mannually</button>:<button onClick={handleMapClick} className='btn btn-primary'>Ok</button> }
        {show && <Map current={current} lat={setLangLat}/>}
      {console.log(langLat)}
      {availableSpace.length==0?
      <h4 className="">
        No nearby parking spaces available, wanna Enter manually ??
      </h4>
      :availableSpace.map((space)=>(
        <Spaces spaces={space} key={space._id}/>
      ))}
    </div>
  );
};

export default User;
