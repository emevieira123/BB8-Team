import React from 'react'
import './styles.css';
import Header from '../../components/header';
import Apresentation from '../../components/apresentation';
import Companies from '../../components/companies';
import Agency from '../../components/agency';
import Comments from '../../components/comments';
import Fotter from '../../components/footer';

const Home = () => {
    return (
        <>
            <div className="homeApresentation">
                <Header />
                <Apresentation />
            </div>

            <div className="homeContainer">
                <Companies />
                <Agency />
            </div>

            <div className="footerContainer">
                <h2>What our customers are <br />saying...</h2>
                <Comments />
                <Fotter />
            </div>
        </>
    );
}

export default Home;