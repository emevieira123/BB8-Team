import React from 'react';
import './styles.scss';
import iconPurple from '../../assets/iconPurple.svg';
import iconBlue from '../../assets/iconBlue.svg';
import iconGreen from '../../assets/iconGreen.svg';

const Agency = () => {
    return (
        <div className="containerAgency">

            <h1>More than an agency.</h1>

            <div className="containerGrid">

                <div className="gridAgency purple">
                    <div className="titleIcon">
                        <h2>Writing <br /> </h2>
                        <img src={iconPurple} alt="" />
                    </div>

                    <p className="descriptionAgency">Lorem ipsum dolor sit amet, consectetur adipisci elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                    </p>
                </div>

                <div className="gridAgency blue">
                    <div className="titleIcon">
                        <h2>Graphic <br />Design</h2>
                        <img src={iconBlue} alt="" />
                    </div>
                    <p className="descriptionAgency">Lorem ipsum dolor sit amet, consectetur adipisci elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                    </p>
                </div>

                <div className="gridAgency green">
                    <div className="titleIcon">
                        <h2>Software <br />Development</h2>
                        <img src={iconGreen} alt="" />
                    </div>
                    <p className="descriptionAgency">Lorem ipsum dolor sit amet, consectetur adipisci elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Agency;