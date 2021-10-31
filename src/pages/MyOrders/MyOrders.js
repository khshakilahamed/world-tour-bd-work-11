import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]) || "";
    const [isTrue, setIsTrue] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                const userMatchedOrder = data?.filter(singleData => singleData?.userEmail == user?.email);
                setOrders(userMatchedOrder);
            })
    }, [orders, isTrue]);


    // delete an order
    const handleDeleteOrder = id => {

        const proceed = window.confirm("Are your sure? Order will be permanently deleted!");

        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
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
                <h2 className="text-center my-3">My order</h2>
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
                        <h4 className="text-center">Update / Delete</h4>
                    </div>
                </div>

                {/* display orders */}
                {
                    orders.map(order => <div key={order._id} className="row bg-info py-2 mb-3">
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
                            <Link to={`myOrder/updateInformation/${order._id}`}>
                                <button className="btn btn-success">Update Address</button>
                            </Link>
                            <br />
                            <button
                                className="btn btn-danger my-2"
                                onClick={() => handleDeleteOrder(order._id)}
                            >Delete Order</button>
                        </div>
                    </div>)
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrders;