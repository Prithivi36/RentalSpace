import React from 'react'
import { bookNow } from '../../api/Api'

function Spaces(props) {
  const [date,setDate]=React.useState({start:null,end:null})
    function handleBooking(id){
        const data = {
            spaceId:id,
            userId:localStorage.getItem('user'),
            startTime:date.start,
            endTime:date.end
        }
        console.log(data);
        bookNow(data).then(res=>alert(res))
    }
    function handleChange(e){
      const {name,value}=e.target
      setDate((p)=>({...p,[name]:value}))
    }
    console.log(date)
  return (
    <div className="list-storage-items p-3 mb-3">
        <div className="list-storage-top">
          <div className="lsit-storage-top-left">
          <p><span className='fw-bold'>Owner Name: </span>{props.spaces.ownerName}</p>
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
          <p><span className='fw-bold'>Start Date:</span> <input onChange={handleChange} name='start' type="datetime-local" /></p>
          <p><span className='fw-bold'>End Date:</span> <input onChange={handleChange} name='end' type="datetime-local" /></p>
         
          <button onClick={()=>handleBooking(props.spaces._id)} className='booknow-btn'>Book Now</button>
        </div>
      </div>
  )
}

export default Spaces