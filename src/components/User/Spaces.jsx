import React from 'react'
import './Spaces.css'
import { bookNow, bookNowStorage } from '../../api/Api'

function Spaces(props) {
  const [date,setDate]=React.useState({start:null,end:null})
  const [value,setValue]=React.useState(null)
    function handleBooking(id){
        const data = {
            spaceId:id,
            userId:localStorage.getItem('user'),
            startTime:date.start,
            endTime:date.end
        }
        console.log(data);
        props.storage?bookNowStorage(data).then(res=>alert(res.data)):
        bookNow(data).then(res=>alert(res.data))
    }
    function priceCalc(){
      const start = new Date(date.start)
      const end = new Date(date.end)
      const diff = end-start
      const hours = Math.ceil(diff/(1000*60*60))
      const price = hours*props.spaces.pricePerHour
      setValue(price.toFixed(2)+" INR")
    }
    function handleChange(e){
      setValue(null)
      const {name,value}=e.target
      setDate((p)=>({...p,[name]:value}))
    }
    function calculateDistance(lat1, lon1, lat2, lon2) {
      const R = 6371e3; 
      const φ1 = lat1 * Math.PI/180;
      const φ2 = lat2 * Math.PI/180;
      const Δφ = (lat2-lat1) * Math.PI/180;
      const Δλ = (lon2-lon1) * Math.PI/180;

      const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

      const d = R * c;
      return (d/1000).toFixed(2)+" km";
    }
    console.log(date)
  return (
    <div  className="list-storage-items p-3 mb-3">
        <div className="list-storage-top">
          <div className="lsit-storage-top-left">
          <p><span className='fw-bold'>Owner Name: </span>{props.spaces.ownerName||"Loading"}</p>
          <p><span className='fw-bold text-wrap pe-2'>Address: </span>{props.spaces.address}</p>
          {!props.storage?<p><span className='fw-bold'>Vehicles: </span>{props.spaces.vehicleAllowed}</p>
          :<p><span className='fw-bold'>Total Space: </span>{props.spaces.size} sqft</p>}
          <p className='d-inline'><span className='fw-bold '>Price Per {props.storage?"Sqft" :"Hour"} </span>{props.spaces.pricePerHour}</p>
          <p className='d-inline ms-4 text-primary fw-bolder'><span className='fw-bold '>Distance : </span>{calculateDistance(props.lat,props.lng,props.spaces.location.coordinates[0],props.spaces.location.coordinates[1])}</p>
          </div>
          <div className="lsit-storage-top-right">
           {props.spaces.available || <div className="">
              <p className="fw-bolder text-danger">Currently Unavailable</p>
            </div>}
          <div className="list-storage-img text-center   ms-md-5">
          <i className={`bi ${props.storage?"bi-inboxes":"bi-car-front"} ${props.spaces.available?"text-success":"text-danger"}`}></i>
          <a className='btn btn-dark btn-sm d-block rounded-4' target='_blank' href={`https://www.google.co.in/maps/place/${props.spaces.location.coordinates[0]},${props.spaces.location.coordinates[1]}`}>View in map</a>
          </div>
          </div> 
        </div>
        <div className="list-storage-bottom d-flex align-items-center justify-content-between">
          <div className="">
            <p><span className='fw-bold'>Start Date:</span> <input className='date-time' onChange={handleChange} name='start' type="datetime-local" /></p>
            <p><span className='fw-bold'> End Date : </span> <input className='date-time' onChange={handleChange} name='end' type="datetime-local" /></p> 
          </div>
          <div className="text-end p-3">
            <p className='fw-bolder'>Estimated Fare</p>
            <p className="fw-medium">{value||<button onClick={priceCalc} className='btn btn-sm btn-outline-primary rounded-3'>calculate</button>}</p>
            <button disabled={!props.spaces.available} onClick={()=>handleBooking(props.spaces._id)} className='btn btn-primary rounded-5'>Book Now</button>
          </div>
        </div>
      </div>
  )
}

export default Spaces