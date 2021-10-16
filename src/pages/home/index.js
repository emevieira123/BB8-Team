import React from 'react'
import './styles.css';
import Header from '../../components/header';
import Apresentation from '../../components/apresentation';
import Companies from '../../components/companies';
import Agency from '../../components/agency';

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
        </>
    );
}

export default Home;