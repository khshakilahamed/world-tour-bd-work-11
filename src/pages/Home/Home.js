import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;