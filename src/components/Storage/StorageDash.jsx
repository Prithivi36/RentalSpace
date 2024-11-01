import React from 'react';
import SimpleToggle from '../Host/DashComp/toggle';

const StorageDash = () => {
    return (
        <div className="dashboard-container">
            <div className="host-left">
                <div className="host-left-top">
                    <div className="user-details">
                        <div className="userdetails-left">
                            <i className="bi bi-person"></i>
                        </div>
                        <div className="userdetails-right">
                            <h1>My Profile</h1>
                            <p><span className="fw-bold">Name: </span>Vijay</p>
                            <p><span className="fw-bold">Address: </span>Kalapatti, Coimbatore</p>
                        </div>
                    </div>
                </div>

                <hr />

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
            </div>

            <div className="host-right">
                <div className="host-right-top">
                    <div className="myspace-container">
                        <h3>Local Garage</h3>
                        <p><span className="fw-bold">Located in: </span>Chennai</p>
                        <div className="vehicles-allowed">
                            <span className="fw-bold">Storage Size: </span>10 sqft
                            <SimpleToggle />
                        </div>
                    </div>
                </div>

                <div className="host-right-bottom">
                    <div className="notifications">
                        <h1>Notifications</h1>
                        <div className="notification-table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Virat</td>
                                        <td>ABCD</td>
                                        <td>
                                            <p className="text-success">accepted</p>
                                            <div>
                                                <div className="action-btn-p">
                                                    <i className="bi bi-check-square-fill"></i>
                                                </div>
                                                <div className="action-btn-n">
                                                    <i className="bi bi-x-square-fill"></i>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StorageDash;
