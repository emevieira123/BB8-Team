import React from 'react';
import './styles.css';

import { FaRegBuilding } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import LogoMaior from '../../assets/Logo-Maior.svg';

const Fotter = () => {
    return (
        <div className="containerFotter">
            <div className="footerLinks">
                <h1>BB8 Team</h1>
                <span>Quality for cheap</span>

                <a href="http://localhost:3000/">Back to the top</a>
                <a href="http://localhost:3000/">Login</a>
                <a href="http://localhost:3000/">Register</a>

            </div>
            <div className="footerLogo">
                <img src={LogoMaior} alt="" />
                <span>© 2021 BB8 Team. All rights reserved.</span>
            </div>
            <div className="footterAdress">
                <h1>Get in touch</h1>
                {/* <span> <FiPhone /> 209-296-5917</span> */}
                <span> <FiPhone className="icon" /> 209-296-5917 <br /><br />
                    <FaRegBuilding className="icon" /> 2184 Freedom Lane, Suite
                </span>
                <span className="adress">
                    <br />Pine Grove
                    <br /> United States
                </span>

            </div>
        </div>
    );
}

export default Fotter;