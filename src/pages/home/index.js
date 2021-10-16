import React from 'react'
import './styles.css';
import Header from '../../components/header';
import Apresentation from '../../components/apresentation';

const Home = () => {
    return (
        <>
            <div className="containerHome">
                <Header />
                <Apresentation />
            </div>
        </>
    );
}

export default Home;