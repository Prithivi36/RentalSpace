import React from 'react'
import { cancelBookings, getMyBooks, getMyBooksStorage } from '../../../api/Api'

function MyBooks(props) {
  const [books,setBooks]=React.useState([])
  React.useEffect(() => {
    props.storage?getMyBooksStorage(localStorage.getItem('user'),true).then(res=>setBooks(res.data)):
    getMyBooks(localStorage.getItem('user')).then(res=>setBooks(res.data.reverse()))
  }, [])
  function cancelBooking(id){
    cancelBookings(id,props.storage?"sbook":"book").then(
      res=>alert(res.data)
    )
  }
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
                  <td>{book.owner||"Unkown"}</td>
                  <td>{book.totalCost +" ₹"||"error x"}</td>
                  <td className={book.status=="accepted"?"text-success":"text-reject"}>{book.status}</td>
                  <td className=''>
                    <div className="d-flex justify-content-center align-items-center">
                      {book.status=="processing"?
                      <button onClick={()=>cancelBooking(book._id)} className='btn btn-outline-danger btn-sm'>cancel</button>:
                      book.status==="rejected"?<button  className='btn btn-outline-secondary btn-sm'>view</button>:
                      <button className='btn btn-outline-primary btn-sm'>Mark as Completed</button>
                      }
                    </div>
                  </td>
                </tr>
                ))}
                
              </tbody>
            </table>}
          </div>
        </div>
  )
}

export default MyBooks