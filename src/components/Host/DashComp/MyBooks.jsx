import React from 'react'
import { getMyBooks } from '../../../api/Api'

function MyBooks() {
  const [books,setBooks]=React.useState([])
  React.useEffect(() => {
    getMyBooks(localStorage.getItem('user')).then(res=>setBooks(res.data))
  }, [])
  return (
    <div className="host-left-bottom">
          <h1>My Bookings</h1>
          <div className="host-left-bottom-table">
            {books.length==0?"No Bookings book now ?":
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
                {books.map((book)=>(
                  <tr  key={book._id}>
                  <th  scope="row">{book.startTime.substring(0,10)}</th>
                  <td>{book.address}</td>
                  <td>{book.ownerName}</td>
                  <td className={book.status=="accepted"?"text-success":"text-reject"}>{book.status}</td>
                </tr>
                ))}
                
              </tbody>
            </table>}
          </div>
        </div>
  )
}

export default MyBooks