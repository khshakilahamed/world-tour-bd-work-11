import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import './Home.css'

const Home = () => {


    // console.log(services);
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>

            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;