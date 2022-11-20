import React, { useState } from 'react'
import logo from '../static/images/logo.png'
import '../static/scss/navbar.scss'
export default function Navbar() {
    const [hamburger, sethamburger] = useState(false);
    let hamburgerNav = () => {
        sethamburger(hamburger ? false : true)
    }
    return (
        <nav className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="text">
                <h2>THE SINGLE DESK</h2>
            </div>
            <div className={hamburger ? "hamburger active" : "hamburger"} onClick={() => {
                hamburgerNav()
            }}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className={hamburger ? 'toggle-state active' : 'toggle-state'}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <div className="hamburger-close" onClick={() => {
                    hamburgerNav()
                }}>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </ul>
        </nav>
    )
}
