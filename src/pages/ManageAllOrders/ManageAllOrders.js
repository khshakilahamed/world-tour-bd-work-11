import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const [isTrue, setIsTrue] = useState(false);

    useEffect(() => {
        fetch('https://frightening-goosebumps-92715.herokuapp.com/orders/')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isTrue]);

    // Approving order
    const handleApproveOrder = id => {

        const matchedOrder = orders.filter(order => order._id == id);
        matchedOrder[0].orderStatus = "Approved";


        const url = `https://frightening-goosebumps-92715.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(matchedOrder[0])
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Order Approved");
                    setIsTrue(true);
                }
            })
    }


    // delete an order
    const handleDeleteOrder = id => {

        const proceed = window.confirm("Are your sure? Order will be permanently deleted!");

        if (proceed) {
            const url = `https://frightening-goosebumps-92715.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setIsTrue(true);
                        alert("Successfully Deleted !!!");
                    }
                })
        }
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <h2 className="text-center my-3 ">Manage All orders</h2>
                <div className="row my-3 bg-primary text-light py-2">
                    <div className="col-md-3 border-right text-center">
                        <h4>Order Title</h4>
                    </div>
                    <div className="col-md-4 text-center">
                        <h4 className="">Address</h4>
                    </div>
                    <div className="col-md-2">
                        <h4 className="text-center">Order Status</h4>
                    </div>
                    <div className="col-md-3">
                        <h4 className="text-center">Approved / Delete</h4>
                    </div>
                </div>
                <div >
                    {
                        orders.map(order => <div className="row bg-info py-2 mb-3">
                            <div className="col-md-3 text-center">
                                <p className="">{order.title}</p>
                                <p>Cost: {order.cost}</p>
                            </div>
                            <div className="col-md-4">
                                <p className="text-center">{order.userAddress}</p>
                                <p className="text-center">Phone Number: {order.userPhoneNumber}</p>
                                <p className="text-center">Email: {order.userEmail}</p>
                            </div>
                            <div className="col-md-2">
                                <p className="text-center text-danger fs-4">{order.orderStatus}</p>
                            </div>
                            <div className="col-md-3 text-center">
                                <button
                                    className="btn btn-success"
                                    onClick={() => handleApproveOrder(order._id)}
                                >Approve</button>
                                <br />
                                <button
                                    className="btn btn-danger my-2"
                                    onClick={() => handleDeleteOrder(order._id)}
                                >Delete</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageAllOrders;