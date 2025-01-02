import React from "react"
import { getUser, messageViewed } from "../../../api/Api"

function Notifications(props) {
    const [msg,setMsg]=React.useState([])
    const usrId=localStorage.getItem("user")
    React.useEffect(
        ()=>{
            console.log("Once")
        getUser(usrId).then(
            res=>setMsg(
                res.data.inbox.map((m)=>(
                        <tr className={`${m.viewed?"":"table-primary"}`}>
                            <td >{m.message}</td>
                        </tr>
                    )
                )
           ) 
        )
        },[]
    )
    const handleClose =()=>{
        props.off(false)
        messageViewed(usrId).then(
            res=>console.log(res.data)
        )
    }
  return (
    <div className="modal show " id='form-mod' style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header d-flex justify-content-between">
                    <h5 className="modal-title ">Notifications</h5>
                </div>
                <div className="modal-body">
                    <table className="table">
                        <tbody>
                            {...msg}
                        </tbody>
                    </table>
                </div>
                <button onClick={handleClose} className="btn btn-primary">Close</button>
                </div>
            </div>
        </div>
  )
}
export default Notifications