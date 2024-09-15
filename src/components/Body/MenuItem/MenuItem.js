import React from 'react';
import './MenuItem.css';
import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
    const { id, name, category, price, description, image } = item;
    return (
        <div className="col">
            <div className="card menuitem-card h-100">
                <Link to={`/menu/${id}`}><img src={image} className="card-img-top img-fluid" alt="..." /></Link>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text fw-bold">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;