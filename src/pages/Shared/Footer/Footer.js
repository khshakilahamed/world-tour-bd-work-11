import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Footer.css';

const Footer = () => {
    const { user } = useAuth();

    return (
        <div className=" text-light bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-3 px-3">
                        <h4 className="text-uppercase mb-3">World Tour BD</h4>
                        <p>Word Tour BD is trusted and reliable tour and travel agency among all the leading and updated tour-operating services in Bangladesh. We are here to bring the luxury to your traveling. World Tour BD is a proud member of Association of Travel Agents of Bangladesh-ATAB and Tour Operations Association of Bangladesh. Safe traveling, your security, and you enjoyment are our focus during your travels.</p>



                        <div>
                            <i className="fab fa-facebook-square fa-2x me-3"></i>
                            <i className="fab fa-twitter-square fa-2x me-3"></i>
                            <i className="fab fa-instagram-square fa-2x me-3"></i>
                            <i className="fab fa-linkedin fa-2x me-3"></i>
                        </div>

                        <p className="mt-3">@ 2021 World Tour BD designed by Kh. Shakil</p>
                    </div>
                    <div className="col-md-5 mt-3  px-3">
                        <h4 className="text-uppercase mb-3">Let us know your Suggestion</h4>
                        <div className="user-feedback-container">
                            <input type="text" placeholder="Name" />
                            <input type="email" name="" id="" placeholder="Email" />
                            <textarea name="" id="" cols="30" rows="5" placeholder="Write your suggestion" />
                        </div>
                    </div>
                    <div className="col-md-3 mt-3">
                        <h4 className="text-center text-uppercase mb-3">Quick Links</h4>
                        <div className="quick-links text-center">
                            <Link to="/home" className="navItems text-light">Home</Link>
                            {
                                user?.email && <Nav.Link >
                                    <Link to="/myOrders" className="navItems text-light">My Orders</Link>
                                </Nav.Link>
                            }
                            {
                                user?.email && <Nav.Link >
                                    <Link to="/manageAllOrders" className="navItems text-light">Manage All Orders</Link>
                                </Nav.Link>
                            }
                            {
                                user?.email && <Nav.Link >
                                    <Link to="/addNewService" className="navItems text-light">Add New Service</Link>
                                </Nav.Link>
                            }
                            <Link to="/about" className="navItems text-light">About Us</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;