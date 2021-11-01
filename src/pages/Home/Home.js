import React from 'react';
import Activity from '../Activity/Activity';
import Banner from '../Banner/Banner';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import './Home.css'

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
            <Activity></Activity>
            <Offer></Offer>
            <Footer></Footer>
        </div>
    );
};

export default Home;