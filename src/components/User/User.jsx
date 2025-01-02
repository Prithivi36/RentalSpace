import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'; 
import Map from './Map';
import { findNearby, findNearbyStore } from '../../api/Api';
import Spaces from './Spaces';

const User = ({ isHost, userLocation }) => {
  //from manual data
  const [langLat,setLangLat]= React.useState({lat:null,lng:null})
  const [loading,setLoading]=React.useState(false)
  const [show,setShow]=React.useState(false)
  const [availableSpace,setAvailableSpace]=React.useState([])
  const handleMapClick=()=>{
        setShow(!show);
  }
  //auto detected data
  const [current,setCurrent]=React.useState({lat:0,lng:0})

  const [storage,setStorage]=React.useState(false)

  useEffect(()=>{
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (pos)=>{
        console.log("bilii")
        setCurrent((p)=>({...p,lat:pos.coords.latitude,lng:pos.coords.longitude}))
        storage?findNearbyStore(langLat.lat||pos.coords.latitude,langLat.lng||pos.coords.longitude,5000).then(
          res=>setAvailableSpace(res.data),setLoading(false)
        ).catch(err=>console.log(err),setLoading):
        findNearby(langLat.lat||pos.coords.latitude,langLat.lng||pos.coords.longitude,5000).then(
          res=>setAvailableSpace(res.data),setLoading(false)
        ).catch(err=>console.log(err),setLoading(false))
      }
    )
  },[storage,langLat])
 
console.log(availableSpace)
console.log(localStorage.getItem("user"))

  return (
    <div className='d-md-flex px-2 justify-content-center align-items-center'>
      <div className="d-block d-md-none">
        <Map wid={"40vh"} current={current} lat={setLangLat}/>
      </div>
      <div  className="">
        <div className="change mb-3 mt-3">
          <p className='fw-bolder my-0 d-inline  me-3'>Nearby Spaces</p>
          <button onMouseOver={()=>console.log("Over")} onClick={()=>setStorage(!storage)} className="btn btn-sm btn-primary">{storage?"parking":"storage"}</button>
        </div>
      {loading?<p className="fw-bolder">Loading Hang on...</p>:<div style={{height:"80vh", overflow:"scroll"}}  className="list-storage-container d-block px-3">
        {availableSpace.length==0?
        <h4 className="">
          No nearby parking spaces available, wanna Enter manually ??
        </h4>
        :availableSpace.filter((s)=>s.userId!=localStorage.getItem('user')).map((space)=>(
          <Spaces lat={current.lat} lng={current.lng} storage={storage} spaces={space} key={space._id}/>
        ))}
      </div>}
      </div>
      <div className="col-6 d-none d-md-block ">
        <p className="fw-bolder pt-5">Select in Map</p>
        <Map wid={"80vh"}  current={current} lat={setLangLat}/>
      </div>
    </div>
  );
};

export default User;
