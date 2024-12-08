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
    console.log(date)
  return (
    <div className="list-storage-items p-3 mb-3">
        <div className="list-storage-top">
          <div className="lsit-storage-top-left">
          <p><span className='fw-bold'>Owner Name: </span>{props.spaces.ownerName||"Loading"}</p>
          <p><span className='fw-bold text-wrap pe-2'>Address: </span>{props.spaces.address}</p>
          {!props.storage?<p><span className='fw-bold'>Vehicles: </span>{props.spaces.vehicleAllowed}</p>
          :<p><span className='fw-bold'>Total Space: </span>{props.spaces.size} sqft</p>}
          <p><span className='fw-bold'>Price Per Hour: </span>{props.spaces.pricePerHour}</p>
          </div>
          <div className="lsit-storage-top-right">
          <div className="list-storage-img">
          <i className={`bi ms-md-5 ${props.storage?"bi-inboxes":"bi-car-front"} ${props.spaces.available?"text-success":"text-danger"}`}></i>
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
            <button onClick={()=>handleBooking(props.spaces._id)} className='btn btn-primary rounded-5'>Book Now</button>
          </div>
        </div>
      </div>
  )
}

export default Spaces