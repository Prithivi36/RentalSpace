import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigator=useNavigate();
    return (

<<<<<<< HEAD
                            <Link to="/user" className="nav-drop-li">Truck</Link>

                            <Link to="/user" className="nav-drop-li">Jeep</Link>

                            
                            
                            
                            
                        </div>
                    )}
                </div>
                <Link to="/host">Become a Host</Link>
                <Link to="/login"><a href="#login">Login</a></Link>
                <Link to="/signup"><a href="#signup">Signup</a></Link>

                
                
=======
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Rental Space</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" onClick={()=>navigator("/host")}>Become a Host</a>
            <a className="nav-item nav-link" onClick={()=>navigator("/login")}>Login</a>
            <a className="nav-item nav-link" onClick={()=>navigator("/signup")}>Signup</a>
>>>>>>> 0e6f1e03a2e21467a76ba888f2d100db3f8a066f
            </div>
        </div>
        </nav>


        // <div className="navbar">
        //     <Link className="navbar-logo"  ><div className="navbar-logo">Sarkar Space</div></Link>
            
        //     <div className="navbar-items">
        //         <Link to="/host">Become a Host</Link>
                
        //         <a href="#login">Login</a>
        //         <a href="#signup">Signup</a>
        //     </div>
        // </div>
    );
};

export default Navbar;
