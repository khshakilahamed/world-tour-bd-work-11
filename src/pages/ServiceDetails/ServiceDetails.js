import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const ServiceDetails = () => {
    const [service, setService] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div>
            <NavBar></NavBar>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <img className="img-fluid w-100" src={service.img} alt="" />
                            <h4 className="text-center bg-primary py-2">{service.country}</h4>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h2>{service.title}</h2>
                            <Link to={`/services/confrimOrder/${service._id}`}>
                                <button className="btn btn-warning">Booking now</button>
                            </Link>
                        </div>
                        <div className="my-4">
                            <h4>Description: </h4>
                            <p>{service.description}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border rounded">
                            <h5 className="bg-primary text-light py-2 px-3 rounded">{service.title}</h5>
                            <div className="py-2 px-3 my-4">
                                <h6>Starts from BDT. {service.cost} per person</h6>
                                <h6>Price Valid Till: 31 December</h6>
                                <p ><span className="bg-secondary text-light px-2 rounded"><small>{service.country}</small></span></p>
                            </div>
                        </div>
                        <div className="border rounded mt-4">
                            <h5 className="bg-primary text-light py-2 px-3 rounded">Contact Us</h5>
                            <div className="py-2 px-3 ">
                                <div className="d-flex border-bottom pb-3">
                                    <h5 className="me-4"><i class="fas fa-headphones text-danger"></i></h5>
                                    <h5>+88-0165555555</h5>
                                </div>
                                <div className="d-flex border-bottom py-3">
                                    <h5 className="me-4"><i class="fas fa-envelope text-danger"></i></h5>
                                    <h5>tour@worldtourbd.com</h5>
                                </div>
                                <div className="d-flex pt-3">
                                    <h5 className="me-4"><i class="fas fa-map-marker-alt text-danger"></i></h5>
                                    <h5>Red Road Zone (Floor 23), <br /> House # 1, Road # 2, Bilash Bari, <br /> Dhaka - 1233, Bangladesh</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;