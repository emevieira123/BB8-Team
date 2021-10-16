import React from 'react';
import './styles.css';
import Ilustration from '../../assets/Ilustration.svg';

const Apresentation = () => {
    return (
        <div className="containerApresentation">

            <div className="textApresentation">
                <h2>Quality for <br />Cheap.</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
                <button>Hire us</button>
            </div>

            <div className="imgApresentation">
                <img src={Ilustration} alt="" />
            </div>

        </div>
    );
}

export default Apresentation;