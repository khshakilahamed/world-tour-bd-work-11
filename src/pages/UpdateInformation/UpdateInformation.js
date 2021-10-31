import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const UpdateInformation = () => {
    const { id } = useParams();

    const [order, setOrder] = useState({});

    const handleNameChange = e => {
        const updateName = e.target.value;
        const updateOrder = { ...order };
        updateOrder.userName = updateName;
        setOrder(updateOrder);
    };

    const handleNumberChange = e => {
        const updateNumber = e.target.value;
        const updateOrder = { ...order };
        updateOrder.userPhoneNumber = updateNumber;
        setOrder(updateOrder);
    };

    // const handleEmailChange = e => {
    //     const updateEmail = e.target.value;
    //     const updateOrder = { ...order };
    //     updateOrder.userEmail = updateEmail;
    //     setOrder(updateOrder);
    // };

    const handleAddressChange = e => {
        const updateAddress = e.target.value;
        const updateOrder = { ...order };
        updateOrder.userAddress = updateAddress;
        setOrder(updateOrder);
    };


    const handleInformationChange = e => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Information Updated Successfully");
                    setOrder({});
                }
            })
        e.preventDefault();
    }



    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);

    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row my-4">
                    <h4 className="text-center bg-primary text-light py-2">Please Update Your Information</h4>

                    <form onClick={handleInformationChange} className="customer-form">
                        <input type="text" onChange={handleNameChange} value={order.userName || ""} placeholder="Name" required />
                        <input type="number" onChange={handleNumberChange} value={order.userPhoneNumber || ""} name="" id="" placeholder="Phone Number" required />
                        <input type="email" value={order.userEmail || ""} placeholder="Email Address" required />
                        <textarea type="text" onChange={handleAddressChange} value={order.userAddress || ""} placeholder="Home Address" required />

                        <input className="btn btn-warning" type="submit" value="Update" />
                    </form>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateInformation;