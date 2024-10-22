import React from 'react'

function Spaces(props) {
    function handleBooking(){
        
    }
  return (
    <div className="list-storage-items p-3 mb-3">
        <div className="list-storage-top">
          <div className="lsit-storage-top-left">
          <p><span className='fw-bold'>Owner Name: </span>{props.spaces.userId}</p>
          <p><span className='fw-bold pe-2'>Address: </span>{props.spaces.address}</p>
          <p><span className='fw-bold'>Vehicles: </span>{props.spaces.vehicleAllowed}</p>
          <p><span className='fw-bold'>Price Per Hour: </span>{props.spaces.pricePerHour}</p>

          </div>
          <div className="lsit-storage-top-right">
          <div className="list-storage-img">
          <i className={`bi bi-car-front ${props.spaces.available?"text-success":"text-danger"}`}></i>
          </div>
          </div>
            
        </div>
        <div className="list-storage-bottom">
          <p><span className='fw-bold'>Start Date:</span> <input type="datetime-local" /></p>
          <p><span className='fw-bold'>End Date:</span> <input type="datetime-local" /></p>
         
          <button className='booknow-btn'>Book Now</button>
        </div>
      </div>
  )
}

export default Spaces