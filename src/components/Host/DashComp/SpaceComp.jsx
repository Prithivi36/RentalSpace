import React from 'react'
import { useState } from 'react';
import SimpleToggle from './toggle';

function SpaceComp({space}) {

  const AvailabilityToggle = () => {
    const [space, setSpace] = useState({ available: true });
    const [isChecked, setIsChecked] = useState(space.available);
  
    const handleCheckboxChange = () => {
      setSpace(prevSpace => ({ available: !prevSpace.available }));
      setIsChecked(!isChecked);
    };
  }

  return (
    <div key={space._id} className="myspace-container">
        <h3>Local Garage</h3>
        
        <p><span className="fw-bold">Located in: </span>{space.address}</p>
        <div className="vehicles-allowed">
            <span className="fw-bold">Vehicles Allowed: </span>{space.vehiclesAllowed}
            <SimpleToggle/>
        </div>
        
       
        
    </div>
  )
}

export default SpaceComp