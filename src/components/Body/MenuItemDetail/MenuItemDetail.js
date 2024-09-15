import React, { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import fackData from '../../../fackData/fackData';
import './menuItemDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { MyContext } from '../../../App';

const MenuItemDetail = () => {
    const navigate = useNavigate();
    const { selectedMenu, setSeletedMenu, cart, setCart, loggedInUser, setLoggedInUser } = useContext(MyContext);
    const [storeQuantity, setStoreQuantity] = useState(0);
    const { id } = useParams();
    const findMenu = fackData.find(item => item.id === parseInt(id));
    const { name, image, price, category } = findMenu;

    const handleQuantityCount = (isIncrease) => {
        let inputQuantity = document.getElementById('quantity');
        let changeInputQuantity;
        if (isIncrease) {
            changeInputQuantity = parseInt(inputQuantity.value) + 1;
        }
        if (!isIncrease) {
            changeInputQuantity = parseInt(inputQuantity.value) - 1;
        }
        if (changeInputQuantity < 1) {
            changeInputQuantity = 1;
        }
        inputQuantity.value = changeInputQuantity;

    }


    const addToCart = (addMenu) => {
        if (loggedInUser.name === undefined) {
            navigate('/login');
        }
        if (loggedInUser.name !== undefined) {
            const newCart = [...cart, addMenu];
            setCart(newCart)
        }
    }

    return (
        <div className='container my-3'>
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h1>{name}</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est et sapiente ratione voluptates quisquam eius illo natus iure? Itaque autem esse veritatis, animi numquam nulla! Esse, harum. Voluptas, repellendus nulla Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt odit autem rem omnis ea ex labore expedita amet dignissimos alias!.</p>
                    <div className="input-group number-spinner d-flex align-items-center">
                        <h3 className='me-5'>$55</h3>
                        <button onClick={() => handleQuantityCount(false)} className="btn btn-first"><FontAwesomeIcon icon={faMinus} /></button>
                        <input id="quantity" type="text" className="form-control form-control2 text-center" value={'1'} />
                        <button onClick={() => handleQuantityCount(true)} className="btn btn-second"><FontAwesomeIcon icon={faPlus} /></button>
                    </div>

                    <br />
                    <button onClick={() => addToCart(findMenu)} className='btn btn-danger addToCart-btn'><FontAwesomeIcon icon={faShoppingCart} />  Add</button>
                </div>
                <div className="col-md-6">
                    <img src={image} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
};

export default MenuItemDetail;