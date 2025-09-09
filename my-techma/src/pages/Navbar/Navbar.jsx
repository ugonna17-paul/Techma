import React, { useState } from 'react'
// import logo from '../../assets/Images/logo.png'
import brand from '../../assets/Images/BrandNestLogo.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className='navbar'>
            <img src={brand} alt="Logo" />

            {/* Hamburger Icon for Mobile */}
            <div className="hamburger-icon" onClick={toggleMenu}>
                &#9776;
            </div>

            <div className={`nav-right ${menuOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CAREERS</a></li>
                </ul>
                <button className="btn">GET IN TOUCH</button>
            </div>
        </div>
    )
}


export default Navbar
