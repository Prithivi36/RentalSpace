import React from 'react'
import { acceptBooking, acceptBookingStorage, getUserRequest, getUserRequestStorage, rejectBooking, rejectBookingStorage } from '../../../api/Api';

function Requests(props) {

  const [userRequest, setUserRequest] = React.useState([]);

  // Handle acceptance logic
  function handleAccept(id) {
    props.storage?acceptBookingStorage(id):
    acceptBooking(id)
    location.reload()
  }

  // Handle rejection logic    
  function handleReject(id) {
    props.storage?rejectBookingStorage(id):
    rejectBooking(id);
    location.reload();
  }

  React.useEffect(() => {
    props.storage?getUserRequestStorage(localStorage.getItem('user')).then(res => setUserRequest(res.data.filter((f) => (f.status != "rejected")))):
    getUserRequest(localStorage.getItem('user')).then(res => setUserRequest(res.data.filter((f) => (f.status != "rejected"))));
  }, []);

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