import React from 'react';
import logo from "./mainlogo.png";
import "./Header.css"
function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
                <h1>AgroBuddy</h1>
            </div>
            <a href="/AboutUs.js"><button>Abous us</button></a>
        </div>
    )
}
export default Header;
