import React from 'react';

const CartItem = ({ item }) => {
    const { id, name, category, description, price, image } = item;
    
    return (
        <div className="card mb-3 container">
            <div className="row g-0 d-flex align-items-center">
                <div className="col-md-3">
                    <img src={image} className="img-fluid rounded-start " alt="..." />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Price: ${price}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;