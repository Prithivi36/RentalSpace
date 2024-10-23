import React from 'react'

function Requests({userRequest, handleAccept, handleReject}) {
  return (
    <div className="host-right-bottom">
          <div className="notifications">
            <h1>Notifications</h1>
            <div className="notification-table">
              {userRequest.length === 0 ? (
                <h1 className="text-center">You are up to date:</h1>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      userRequest.map((request) => {
                        console.log(request)
                        return (
                          <tr key={request._id}>
                            <td>{request.userName}</td>
                            <td>{request.address}</td>
                            <td>{(request.status === "accepted") ?
                              <p className="text-success">accepted</p> :
                              <div>
                                <div onClick={() => handleAccept(request._id)} className="action-btn-p"><i className="bi bi-check-square-fill"></i></div>
                                <div className="action-btn-n"><i
                                  onClick={() => handleReject(request._id)} className="bi bi-x-square-fill"></i></div>
                              </div>
                            }
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
  )
}

export default Requests