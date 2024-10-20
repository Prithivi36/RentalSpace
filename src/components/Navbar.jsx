import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="navbar">
            <Link className="navbar-logo"  ><div className="navbar-logo">Sarkar Space</div></Link>
            
            <div className="navbar-items">
                <div className="dropdown">
                    <button className="dropbtn" onClick={toggleDropdown}>
                        Parking Types
                        <span className={`dropdown-icon ${dropdownOpen ? "open" : ""}`}>
                            <i className={`fas fa-chevron-down`}></i>
                        </span>
                    </button>
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <Link to="/user" className="nav-drop-li"><a >Car</a></Link>
                            <Link to="/user" className="nav-drop-li"><a >Bike</a></Link>

                            <Link to="/user" className="nav-drop-li"><a >Truck</a></Link>

                            <Link to="/user" className="nav-drop-li"><a >Jeep</a></Link>

                            
                            
                            
                            
                        </div>
                    )}
                </div>
                <Link to="/host"><a>Become a Host</a></Link>
                
                <a href="#login">Login</a>
                <a href="#signup">Signup</a>
            </div>
        </div>
    );
};

export default Navbar;
