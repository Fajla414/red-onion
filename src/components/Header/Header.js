import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import './header.css';
import Navigation from '../Navigation/Navigation';



const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link to={'/'}><img src={logo} alt="" className='img-fluid' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                        <Navigation />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;