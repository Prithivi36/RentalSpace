import React from 'react'
import { addSpace, addStorage } from '../../api/Api';
import Map from '../User/Map'

function MySpaceForm(props) {

    const [current,setCurrent] = React.useState({ lat: null, lng:null });
    const [show, setShow] = React.useState(false);
    React.useEffect(()=>{
        console.log("Getting current location")
        navigator.geolocation.getCurrentPosition(pos=>{
            console.log(pos)
          setCurrent({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          })
        })
      },[])
    const [formData, setFormData] = React.useState({
        Address: "",
        vehiclesAllowed: {
          car: true,
          bike: true
        },
        Available: true,
        pricePerHour: 0,
        lat: null, // Initialize latitude
        lng: null
      })

    const handleClose = () => {
        props.setFormShow(false);
        setFormData({
          Address: "",
          vehiclesAllowed: {
            car: true,
            bike: true
          },
          size:0,
          Available: true,
          pricePerHour: 0
        });
      };
    
    
    
      //After Submit the Add space
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
          setFormData((prevData) => ({
            ...prevData,
            vehiclesAllowed: { ...prevData.vehiclesAllowed, [name]: checked },
          }));
        } else {
          setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
      };
    
      const addSpaceSubmit = (e) => {
        e.preventDefault();
    
        // Log the current form data to the console
        console.log("Form Data:", formData);
        const data={
          userId:localStorage.getItem('user'),
          address:formData.Address,
          location:{
            type:"Point",
            coordinates:[formData.lat,formData.lng]
          },
          vehiclesAllowed: formData.vehiclesAllowed.car?formData.vehiclesAllowed.bike?["car","bike"]:["car"]:["bike"],
          size:formData.size,
          available: formData.Available,
          pricePerHour: formData.pricePerHour
    
        }
        props.storage?addStorage(data).then(res=>alert(res.data)):addSpace(data).then(res=>alert(res.data));
    
        // Reset form data to initial state
        setFormData({
          Address: "",
          vehiclesAllowed: {
            car: true,
            bike: true
          },
          size:0,
          Available: true,
          pricePerHour: 0,
          lat: 0, // Reset latitude
          lng: 0  // Reset longitude
        });
    
        // Optionally hide the form or perform other actions
        props.setFormShow(false);
      };
    
    
    console.log(formData)
    console.log(props.storage)
    
      
    
      // Function to toggle the map's visibility
      const handleMapClick = () => {
        setShow((prevShow) => !prevShow);
      };
    return (
        <div className="modal show " id='form-mod' style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header d-flex justify-content-between">
                    <h5 className="modal-title ">Add Space</h5>

                    <button type="button" dataDismiss="modal" className="close p-2 btn btn-danger " onClick={handleClose}>
                    <span>&times;</span>
                    </button>

                </div>
                <div className="modal-body">
                    <form>
                    <div className="form-group text-start">
                        <label>Address</label>
                        <textarea
                        className="form-control border-3"
                        name="Address"
                        required
                        value={formData.Address}
                        onChange={handleChange}
                        ></textarea>
                        <button type="button" className="btn btn-primary mt-1 mb-3" onClick={handleMapClick}>
                        {!show ? 'Search by Map' : 'Ok'}
                        </button>
                        {show && (
                        <Map wid="200px" current={current} lat = {setFormData} />
                        )}
                    </div>

                    <div className="form-group text-start">
                        {!props.storage?<>
                        <p>Vehicles Allowed</p>
                        <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="car"
                            name="car"
                            checked={formData.vehiclesAllowed.car}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="car">Car</label>
                        </div>
                        <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="bike"
                            name="bike"
                            checked={formData.vehiclesAllowed.bike}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="bike">Bike</label>
                        </div></>:<>
                        <label className='form-check-label' htmlFor="size">Size</label>
                        <input className='f form-control border-3' name='size' onChange={handleChange} id='size' type="number" /></>}
                    </div>

                    <div className="form-group text-start">
                        <label>Price per Hour</label>
                        <input
                        type="number"
                        className="form-control border-3"
                        name="pricePerHour"
                        required
                        value={formData.pricePerHour}
                        onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3 " onClick={addSpaceSubmit}>
                        Submit
                    </button>
                    </form>
                </div>

                </div>
            </div>
        </div>
  )
}

export default MySpaceForm