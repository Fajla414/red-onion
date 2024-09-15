import React from 'react';
import topBanner from '../../../images/bannerbackground3.png';
import './topBanner.css';

const TopBanner = () => {
    return (
        <div className="card mb-5 top-banner " style={{ border: 'none' }}>
            <img src={topBanner} className="card-img" alt="..." />
            <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                <h1 className="card-title text-center mb-4">Best food waiting for your belly</h1>
                <div className="input-group mb-3"  >
                    <input type="text" className="form-control" placeholder="Search food item" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-danger" type="button" id="button-addon2">Button</button>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;