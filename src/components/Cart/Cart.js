import React, { useContext } from 'react';
import { MyContext } from '../../App';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { selectedMenu, setSeletedMenu, cart, setCart, loggedInUser, setLoggedInUser } = useContext(MyContext);

    let total = 0;
    for (let a = 0; a < cart.length; a++) {
        let element = cart[a];
        total = total + Number(element.price);
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-7">
                    {cart.map(item => <CartItem key={item.id} item={item} />)}
                </div>
                <div className="col-md-5">
                    <div className="card text-left mb-3 ">
                        <div className="card-body">
                            <h5 className="card-title">Menu Summary</h5>
                            <p className="card-text">Total: ${total}</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart; 