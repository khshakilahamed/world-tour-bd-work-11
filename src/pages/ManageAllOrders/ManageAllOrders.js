import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const ManageAllOrders = () => {

    
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <h2 className="text-center my-4 bg-primary text-light py-2">Manage All orders</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageAllOrders;