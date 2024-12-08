import React from 'react'
import { getMyBooks, getMyBooksStorage } from '../../../api/Api'

function MyBooks(props) {
  const [books,setBooks]=React.useState([])
  React.useEffect(() => {
    props.storage?getMyBooksStorage(localStorage.getItem('user'),true).then(res=>setBooks(res.data)):
    getMyBooks(localStorage.getItem('user')).then(res=>setBooks(res.data))
  }, [])
  return (
    <div className="host-left-bottom">
          <div className="host-left-bottom-table table-responsive">
            {books.length==0?"No Bookings book now ?":
            <table className="table">
              <thead className="thead-">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Address</th>
                  <th scope="col">Owner</th>
                  <th scope='col'>Total</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book)=>(
                  <tr  key={book._id}>
                  <th  scope="row">{book.startTime.substring(0,10)}</th>
                  <td>{book.address}</td>
                  <td>{book.ownerName||"Unkown"}</td>
                  <td>{book.cost||"INR 20"}</td>
                  <td className={book.status=="accepted"?"text-success":"text-reject"}>{book.status}</td>
                  <td><button className='btn btn-outline-danger btn-sm'>cancel</button></td>
                </tr>
                ))}
                
              </tbody>
            </table>}
          </div>
        </div>
  )
}

export default MyBooks