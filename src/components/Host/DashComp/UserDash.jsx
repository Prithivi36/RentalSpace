import React from 'react'

function UserDash({currentUser}) {
  return (
    <div className="host-left-top">
          <div className="user-details">
            <div className="userdetails-left">
              <i className="bi bi-person"></i>
            </div>
            <div className="userdetails-right">
              <h1>My Profile</h1>
              <p><span className="fw-bold">Name: </span>{currentUser.name}</p>
              <p><span className="fw-bold">Address: </span>Kalapatti, Coimbatore</p>
            </div>
          </div>
        </div>
  )
}

export default UserDash