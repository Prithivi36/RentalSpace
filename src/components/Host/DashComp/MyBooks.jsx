import React from 'react'

function MyBooks() {
  return (
    <div className="host-left-bottom">
          <h1>My Bookings</h1>
          <div className="host-left-bottom-table">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Address</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">15/9/2023</th>
                  <td>Coimbatore</td>
                  <td>Virat</td>
                  <td className="text-success">Accepted</td>
                </tr>
                <tr>
                  <th scope="row">18/9/2035</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td className="text-reject">Rejected</td>
                </tr>
                <tr>
                  <th scope="row">14/8/2025</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td className="text-success">Accepted</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default MyBooks