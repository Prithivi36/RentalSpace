import React from 'react'
import { useState } from 'react';
import SimpleToggle from './toggle';

function SpaceComp(props) {

  // const AvailabilityToggle = () => {
  //   const [space, setSpace] = useState({ available: true });
  //   const [isChecked, setIsChecked] = useState(space.available);
  
  //   const handleCheckboxChange = () => {
  //     setSpace(prevSpace => ({ available: !prevSpace.available }));
  //     setIsChecked(!isChecked);
  //   };
  // }
    // console.log("this ",props.space)
  return (
    <div key={props.space._id} className="myspace-container">
        <h3>{!props.storage?"Parking":"Storage"}</h3>
        
        <p><span className="fw-bold">Located in: </span>{props.space.address||"Loading"}</p>
        <div className="vehicles-allowed">
          <p className='fw-bolder'>Total Revenue: <span className='fw-medium text-success'>{props.space.totalRevenue||"INR" +"12000"}</span></p>
          <p className='fw-bolder'>Price: <span className='fw-medium text-success'>{props.space.pricePerHour||"0"} ₹</span></p>
          <p className='fw-bolder'>Available: <span className={`fw-medium ${props.space.available?"text-success":"text-danger"}`}>{props.space.available?"Available":"Unavailables"}</span></p>
        </div>
        
       
        
    </div>
  )
}

export default SpaceComp