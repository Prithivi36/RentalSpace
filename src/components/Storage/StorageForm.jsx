import React, { useState } from 'react';
import MapWithClick from '../User/Map';

const StorageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    size: '',
    pricePerHour: '',
    cctvAvailable: false,
    available: false,
  });

  const [showForm, setShowForm] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };




  const toggleAvailability = () => {
    setFormData((prevData) => ({
      ...prevData,
      available: !prevData.available,
    }));
  };

  const handleMapClick = () => {
    setShowMap((prevShow) => !prevShow);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowForm(false); // Hide the form after submission
  };


  

  return (
    <div>
      {!showForm ? (
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Add Storage
        </button>
      ) : (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <h5 className="modal-title">Add Storage</h5>
                <button
                  type="button"
                  className="close p-2 btn btn-danger"
                  onClick={() => setShowForm(false)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group text-start">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group text-start">
                    <label>Address</label>
                    <textarea
                      className="form-control"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                    ></textarea>
                    <button
                      type="button"
                      className="btn btn-primary mt-1 mb-3"
                      onClick={handleMapClick}
                    >
                      {!showMap ? 'Search by Map' : 'Ok'}
                    </button>
                    {showMap && (
                      <Map onSelect={(lat, lng) => setFormData((prev) => ({ ...prev, lat, lng }))} />
                    )}
                  </div>
                  <div className="form-group text-start">
                    <label>Size (sq ft)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="size"
                      required
                      value={formData.size}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group text-start">
                    <label>CCTV Available</label>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="cctv"
                        name="cctvAvailable"
                        checked={formData.cctvAvailable}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="cctv">Yes</label>
                    </div>
                  </div>
                  <div className="form-group text-start">
                    <label>Price per Hour</label>
                    <input
                      type="number"
                      className="form-control"
                      name="pricePerHour"
                      required
                      value={formData.pricePerHour}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group text-start">
                    <label>Available</label>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="available"
                        checked={formData.available}
                        onChange={toggleAvailability}
                      />
                      <label className="form-check-label" htmlFor="available">
                        {formData.available ? 'Yes' : 'No'}
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorageForm;
