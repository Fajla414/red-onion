import React from 'react';
import './footer.css';
import footerLogo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className='footer py-5 '>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={footerLogo} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-3">
                        <Link className="footer-link">About Online food</Link><br />
                        <Link className="footer-link">Read our blog</Link><br />
                        <Link className="footer-link">Sign up to deliver</Link><br />
                        <Link className="footer-link">Add your restaurant</Link>
                    </div>
                    <div className="col-md-3">
                        <Link className="footer-link">Get help</Link><br />
                        <Link className="footer-link">Read FAQs</Link><br />
                        <Link className="footer-link">View all cities</Link><br />
                        <Link className="footer-link">Restaurants near me</Link>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <p className="fw-bold text-secondary">Copyright <FontAwesomeIcon icon={faCopyright} /> 2020 Online food</p>
                    </div>
                    <div className="col-md-2">
                        <Link className="footer-link">Privacy Policy.</Link>
                    </div>
                    <div className="col-md-2">
                        <Link className="footer-link">Terms of Use</Link>
                    </div>
                    <div className="col-md-2">
                        <Link className="footer-link">Pricing</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;