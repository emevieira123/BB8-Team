import React from 'react';
import './styles.scss';
import Logo from '../../assets/Logo.svg';

const Header = () => {
    return (
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="" />
                <h2>BB8 Team</h2>
            </div>
            <div className="menu">
                <button className="btnMenu" href="http://localhost:3000/">Contact</button>
                <button className="btnMenu" href="http://localhost:3000/">Register</button>
                <button className="btnLogin" href="http://localhost:3000/">Log In</button>
            </div>
        </div>
    );
}

export default Header;