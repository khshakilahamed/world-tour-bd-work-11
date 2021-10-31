import React, { useRef } from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import './AddNewService.css'

const AddNewService = () => {

    const serviceTitleRef = useRef();
    const countryRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();


    const handleAddNewService = e => {
        const title = serviceTitleRef.current.value;
        const country = countryRef.current.value;
        const img = imgRef.current.value;
        const cost = priceRef.current.value;
        const description = descriptionRef.current.value;

        const newService = { title, country, img, cost, description };

        const procced = window.confirm("Are you sure, you want to add a ew Service ?")

        if (procced) {
            fetch('http://localhost:5000/services', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newService)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert("Successfully Added a New Service");
                        e.target.reset();
                    }
                    console.log(data);
                })
        }

        e.preventDefault();
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="container my-4">
                <h2 className="text-center my-5 bg-primary py-2 text-light">Please, Add a New Service</h2>
                <form onSubmit={handleAddNewService} className="text-center mb-5 add-service-container">
                    <input type="text" ref={serviceTitleRef} placeholder="Service Title" required />
                    <input type="text" ref={countryRef} placeholder="Country" required />
                    <input type="text" ref={imgRef} placeholder="Image URL" required />

                    <input type="number" ref={priceRef} name="" id="" placeholder="Price" />
                    <textarea ref={descriptionRef} name="" id="" cols="10" rows="5" placeholder="Service Description..."></textarea>
                    <input className="btn btn-warning" type="submit" value="Submit" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddNewService;