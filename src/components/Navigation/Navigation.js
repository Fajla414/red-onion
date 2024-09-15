import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { MyContext } from '../../App';

const Navigation = () => {
    const { selectedMenu, setSeletedMenu, cart, setCart, loggedInUser, setLoggedInUser } = useContext(MyContext);
    
    return (
        <ul className="navbar-nav d-flex  align-items-center">
            <li className="nav-item">
                <Link className="nav-link fw-bold mx-2" to={'/home'}>Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link fw-bold mx-2" to={'/cart'}><FontAwesomeIcon icon={faShoppingCart} /> <span className="text-danger">{cart.length}</span> </Link>
            </li>

            {Object.keys(loggedInUser).length !== 0 ? <div>
                <span className='fw-bold mx-2'>{loggedInUser.name}</span>
                {/* <img style={{ borderRadius: '50%' }} src={loggedInUser.photoURL} className='img-fluid' alt="" /> */}
            </div> : <div className='d-flex'>
                <li className="nav-item">
                    <Link className="nav-link  mx-2" to={'/login'}><button className='btn btn-outline-danger fw-bold'>Login</button></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  mx-2" to={'/sign-up'}><button className='btn btn-danger fw-bold'>Sign Up</button></Link>
                </li>
            </div>}
        </ul>
    );
};

export default Navigation;