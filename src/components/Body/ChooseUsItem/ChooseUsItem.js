import React from 'react';
import './chooseUsItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ChooseUsItem = ({ chooseItem }) => {
    const { id, title, bottomImg, topImg, description, seeMore } = chooseItem;
    
    return (
        <div className="col">
            <div className="card chooseUs-item">
                <img src={topImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={bottomImg} className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-9">
                            <h6 className="card-title">{title}</h6>
                            <p className="card-text">{description}.</p>
                            <Link className='fw-bold see-more '><FontAwesomeIcon icon={faArrowRight} /> {seeMore}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUsItem;