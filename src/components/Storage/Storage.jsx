import React, { useState } from 'react';
import StorageForm from './StorageForm';

function Storage() {
  const [date, setDate] = useState({ start: null, end: null });

  // Updated array of storage data with new fields
  const storageDataArray = [
    {
      id: 1,
      ownerName: "John Doe",
      address: "123 Sample Street, City",
      size: "200 sq ft",
      pricePerHour: "$10",
      cctvAvailable: true,
      available: true,
      
    },
    {
      id: 2,
      ownerName: "Jane Smith",
      address: "456 Another Ave, City",
      size: "300 sq ft",
      pricePerHour: "$12",
      cctvAvailable: false,
      available: false,
     
    }

  ];

  

  return (
    <>
      <div className="add-storage m-3 d-flex">
        <p className="mx-3">Add Your Storage</p>
        <StorageForm />
      </div>
      <div className="search-by-map">
        
      </div>
      <div className="storage-container m-3">
        {storageDataArray.map((storage) => (
          <div key={storage.id} className="list-storage-items p-3 mb-3">
            <div className="list-storage-top">
              <div className="list-storage-top-left">
                <p><span className="fw-bold">Owner Name: </span>{storage.ownerName}</p>
                <p><span className="fw-bold">Address: </span>{storage.address}</p>
                <p><span className="fw-bold">Size: </span>{storage.size}</p>
                <p><span className="fw-bold">Price Per Hour: </span>{storage.pricePerHour}</p>
                <p><span className="fw-bold">CCTV Available: </span>{storage.cctvAvailable ? "Yes" : "No"}</p>
              </div>
              <div className="list-storage-top-right">
                <div className="list-storage-img">
                  <i className={`bi bi-inboxes ${storage.available ? "text-success" : "text-danger"}`}></i>
                </div>
              </div>
            </div>
            <div className="list-storage-bottom">
              <p><span className="fw-bold">Booking Start:</span> <input name="start" type="datetime-local" /></p>
              <p><span className="fw-bold">Booking End:</span> <input name="end" type="datetime-local" /></p>
              <button className="booknow-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Storage;
