import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import './ConfirmBooking.css';

const ConfirmOrder = () => {

    const { user } = useAuth();

    // const [email, setEmail] = useState('');

    const [service, setService] = useState({});
    const nameRef = useRef();
    const phoneNumberRef = useRef();
    const addressRef = useRef();


    const handleConfirm = e => {
        const userName = nameRef.current.value;
        const userPhoneNumber = phoneNumberRef.current.value;
        const userEmail = user.email;
        const useAddress = addressRef.current.value;
        const { title, country, _id, cost } = service;

        const serviceId = _id;

        const orderStatus = "pending";

        const order = { serviceId, orderStatus, userName, userPhoneNumber, userEmail, useAddress, title, cost, country };



        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Order Successfully Confirm!!!");
                    e.target.reset();
                }
            })

        e.preventDefault();
    }

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <h2 className="text-center my-5">Provide us some information to confirm the Booking</h2>
                <div className="row my-4">
                    <div className="col-md-6">
                        <img className="img-fluid w-100" src={service.img} alt="" />
                        <p className="text-center bg-primary text-light py-2">{service.country}</p>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-center bg-primary text-light py-2">Please, fill up the form</h4>

                        <form onSubmit={handleConfirm} className="customer-form">
                            <input type="text" ref={nameRef} placeholder="Name" required />
                            <input type="number" ref={phoneNumberRef} name="" id="" placeholder="Phone Number" required />
                            {/* <input type="email" value={user.email} placeholder="Email Address" required /> */}
                            <textarea type="text" ref={addressRef} placeholder="Home Address" required />

                            <input className="btn btn-warning" type="submit" value="Submit & confirm" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ConfirmOrder;