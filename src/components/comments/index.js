import React from 'react';
import './styles.css';
import Aspas from '../../assets/aspas-duplas.svg';

const Comments = () => {
    return (
        <div className="containerComments">

            <div className="commentsGrid">
                <img src={Aspas} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit,
                    sed eiusmod tempor incidunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ulla.
                </p>
                <span>Jonh Doe</span>
            </div>

            <div className="commentsGrid">
                <img src={Aspas} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit,
                    sed eiusmod tempor incidunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ulla.
                </p>
                <span>Jonh Doe</span>
            </div>

            <div className="commentsGrid">
                <img src={Aspas} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit,
                    sed eiusmod tempor incidunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ulla.
                </p>
                <span>Jonh Doe</span>
            </div>

        </div>
    );
}

export default Comments;