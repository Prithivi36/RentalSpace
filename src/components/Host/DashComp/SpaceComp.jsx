import React from 'react'

function SpaceComp({space}) {
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
  )
}

export default SpaceComp