import React from 'react'
import { cancelBookings, getMyBooks, getMyBooksStorage, markCompleted } from '../../../api/Api'

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
  function handleCompleted(id){
    markCompleted(id,props.storage?"sbook":"book").then(
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
                  <th className='text-center' scope="col">Date</th>
                  <th className='text-center' scope="col">Address</th>
                  <th className='text-center' scope="col">Owner</th>
                  <th className='text-center' scope='col'>Total</th>
                  <th className='text-center' scope="col">Status</th>
                  <th className='text-center' scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book)=>(
                  <tr   key={book._id}>
                  <th className='text-center' scope="row">{book.startTime.substring(0,10)}</th>
                  <td className='text-center'>{book.address}</td>
                  <td className='text-center'>{book.ownerName||"Unkown"}</td>
                  <td className='text-center'>{book.totalCost +" ₹"||"error x"}</td>
                  <td className={`text-center ${book.status=="accepted"?"text-success":"text-reject"}`}>{book.status}</td>
                  <td className='text-center'>
                    <div className="d-flex justify-content-center align-items-center">
                      {book.status=="processing"?
                      <button onClick={()=>cancelBooking(book._id)} className='btn btn-outline-danger btn-sm'>cancel</button>:
                      book.status==="accepted"?<button onClick={()=>handleCompleted(book._id)} className='btn btn-outline-primary btn-sm'>Mark as Completed</button>
                      :''
                      
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