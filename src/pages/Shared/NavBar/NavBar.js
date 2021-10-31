import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './NavBar.css'

const NavBar = () => {

    const { user, logOut } = useAuth();
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                    <Container>
                        <Navbar.Brand href="#home" className="text-uppercase">
                            <span style={{ fontSize: '30px', fontWeight: 'bold' }}> World Tour BD</span>.com
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="me-auto ">
                                <Nav.Link >
                                    <Link to="/home" className="navItems">Home</Link>
                                </Nav.Link>
                                <Nav.Link >
                                    <Link to="/services" className="navItems">Services</Link>
                                </Nav.Link>
                                {
                                    user?.email && <Nav.Link >
                                        <Link to="/myOrders" className="navItems">My Orders</Link>
                                    </Nav.Link>
                                }
                                {
                                    user?.email && <Nav.Link >
                                        <Link to="/manageAllOrders" className="navItems">Manage All Orders</Link>
                                    </Nav.Link>
                                }
                                {
                                    user?.email && <Nav.Link >
                                        <Link to="/addNewService" className="navItems">Add New Service</Link>
                                    </Nav.Link>
                                }
                                <Nav.Link >
                                    <Link to="/about" className="navItems">About</Link>
                                </Nav.Link>
                            </Nav>

                            {
                                user.email ? (
                                    <div>
                                        <Navbar.Text className="text-dark">Hello, {user?.displayName}</Navbar.Text>
                                        <button className="btn btn-warning ms-2 login-register-btn" onClick={logOut}>logout</button>
                                    </div>
                                ) : (
                                    <Nav.Link >
                                        <Link to="/login">
                                            <button className="btn btn-warning login-register-btn" >Login</button>
                                        </Link>
                                    </Nav.Link>
                                )
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default NavBar;