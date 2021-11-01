import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const About = () => {
    return (
        <div>
            <NavBar></NavBar>
            <AboutBanner></AboutBanner>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6">
                        <h2 className="fs-1 fw-bold text-uppercase">About <span className="text-danger">World tour bd</span> <br /> travel agency</h2>
                        <p>World tour bd is a trusted and reliable tour and travel agency among all the leading and updated tour operating services in Bangladesh. We are here to bring the luxury to your traveling. World tour bd is a proud member of Association of Travel Agents of Bangladesh-ATAB and Tour Operators Association of Bangladesh. Safe traveling, your security, and your enjoyment are our focus during your travels. Our experienced and expert traveling guides ensure that you do not need to move an inch from your comfort zone and make sure that you always have a beautiful satisfactory smile on your face. We believe that your smile is our success and World tour bd will do anything to keep you smiling.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid w-100" src="https://i.ibb.co/RYwZrcd/about-3.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;