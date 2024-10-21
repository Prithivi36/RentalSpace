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
                            <Link to="/user" className="nav-drop-li">Car</Link>
                            <Link to="/user" className="nav-drop-li">Bike</Link>

                            <Link to="/user" className="nav-drop-li">Truck</Link>

                            <Link to="/user" className="nav-drop-li">Jeep</Link>

                            
                            
                            
                            
                        </div>
                    )}
                </div>
                <Link to="/host">Become a Host</Link>
                <Link to="/login"><a href="#login">Login</a></Link>
                <Link to="/signup"><a href="#signup">Signup</a></Link>

                
                
            </div>
        </div>
    );
};

export default Navbar;
