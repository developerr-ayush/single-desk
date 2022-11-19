import React from 'react'
import logo from '../images/logo.png'
import '../scss/navbar.scss'
export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="text">
                <h2>THE SINGLE DESK</h2>
            </div>
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    )
}
