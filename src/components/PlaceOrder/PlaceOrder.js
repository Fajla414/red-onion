import React from 'react';
import './placeOrder.css';
import PlaceOrderDeliveryDetail from './PlaceOrderDeliveryDetail/PlaceOrderDeliveryDetail';

const PlaceOrder = () => {
    return (
        <div className='container'>
            <div className="row place-order">
                <div className="col-md-7">
                    <PlaceOrderDeliveryDetail />
                </div>
                <div className="col-md-5">
                    <p>From <span className="fw-bold">Gulshan Plaza Restaura GPR</span></p>
                    <p>Arriving in 20-30 min</p>
                    <p>107 Rd No 8</p>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;