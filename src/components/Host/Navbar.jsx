import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">Sarkar Space</div>
            
        </div>
    );
};

export default Navbar;
