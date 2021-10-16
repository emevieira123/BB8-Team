import React from 'react';
import './styles.css';
import imgCompanies from '../../assets/Companies.svg';

const Companies = () => {
    return (
        <div className="containerCompanies">
            <h2>Companies that trust us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor</p>
            <p>incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <img src={imgCompanies} alt="" />
        </div>
    );
}

export default Companies;