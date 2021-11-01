import React from 'react';
import './Offer.css'

const Offer = () => {
    return (
        <div className="offer-container">
            <div className="container">
                <div className="d-flex pt-4 justify-content-center align-items-center">
                    <div className="mt-5 text-center offer-contents">
                        <h2 className="offer-title fs-1 fw-bold text-light my-3">HOLIDAY SPECIAL 25% OFF !</h2>
                        <input className="input-field" type="email" name="" placeholder="Email" id="" />
                        <button className="input-button btn btn-warning">Register Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;