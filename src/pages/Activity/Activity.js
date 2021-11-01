import React from 'react';

const Activity = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h6 className="text-danger fw-bold fs-5 mt-5 "><i class="fas fa-long-arrow-alt-right"></i>TRAVEL BY ACTIVITY</h6>
                <h2 className="title fs-1 fw-bold text-muted my-4">ADVENTURE & ACTIVITY</h2>
                <p className="text-muted">We are offering some special Adventure Choices, a symbol of support for strong effort in implementing the cleanliness, health, safety, and environment protocols across the tourism industry as mandatory precautions. All to assure travelers that InDOnesia CARE for your safety, health, hygiene and comfort.</p>
            </div>
            <div className="text-primary my-5">
                <div className="row text-center">
                    <div className="col-md-2">
                        <h2><i class="fas fa-mountain"></i></h2>
                        <h2>Adventure</h2>
                        <p>15 destination</p>
                    </div>
                    <div className="col-md-2">
                        <h2><i class="fas fa-suitcase-rolling"></i></h2>
                        <h2>Trekking</h2>
                        <p>10 destination</p>
                    </div>
                    <div className="col-md-2">
                        <h2><i class="fab fa-free-code-camp"></i></h2>
                        <h2>Camp Fire</h2>
                        <p>7 destination</p>
                    </div>
                    <div className="col-md-2">
                        <h2><i class="fas fa-road"></i></h2>
                        <h2>Off Road</h2>
                        <p>8 destination</p>
                    </div>
                    <div className="col-md-2">
                        <h2><i class="fas fa-home"></i></h2>
                        <h2>Camping</h2>
                        <p>13 destination</p>
                    </div>
                    <div className="col-md-2">
                        <h2><i class="fas fa-map-marked-alt"></i></h2>
                        <h2>Exploring</h2>
                        <p>25 destination</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;