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
            <Link className="navbar-logo"  to=""><div className="navbar-logo">Sarkar Space</div></Link>
            
        </div>
    );
};

export default Navbar;
