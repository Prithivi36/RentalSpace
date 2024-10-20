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
            <div className="navbar-logo">Sarkar Space</div>
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
                            <a href="#type1">Type 1</a>
                            <a href="#type2">Type 2</a>
                            <a href="#type3">Type 3</a>
                            <a href="#type4">Type 4</a>
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
