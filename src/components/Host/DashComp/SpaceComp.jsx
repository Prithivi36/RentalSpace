import React from 'react'
import { useState } from 'react';
import SimpleToggle from './toggle';
import { toggleAvail } from '../../../api/Api';

function SpaceComp(props) {

 
    function handleAvailability(id){
      toggleAvail(id,props.space.available?"0":"1",props.storage?"store":"park").then(res=>alert(res.data)).then(
        a=>location.reload()
      ).catch(e=>alert("Error Occured"))
      console.log("clicked")
      
    }
  return (
    <div key={props.space._id} className="myspace-container d-flex justify-content-between">
      <div className="">
          <h3 className='fw-bold'>{!props.storage?"Parking":"Storage"}</h3>
          
          <p><span className="fw-bold">Located in: </span>{props.space.address||"Loading"}</p>
          <div className="vehicles-allowed">  
            <p className='fw-bolder'>Total Revenue: <span className='fw-medium text-success'>{props.space.totalRevenue||"0"} ₹</span></p>
            <p className='fw-bolder'>Price: <span className='fw-medium text-success'>{props.space.pricePerHour||"0"} ₹</span></p>
            <p className='fw-bolder'>Available: <span className={`fw-medium ${props.space.available?"text-success":"text-danger"}`}>{props.space.available?"Available":"Unavailables"}</span></p>
          </div>
      </div>
      <div className="form-check  form-switch d-flex d-flex flex-column align-items-center justify-content-center">
        <input style={{height:"30px",width:"45px"}} onChange={()=>handleAvailability(props.space._id)} className={`form-check-input check ${props.space.available?"":"bg-danger"}`} type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={props.space.available}/>
      </div>
       
        
    </div>
  )
}

export default SpaceComp