import React, { useState } from 'react';
import chooseUsData from '../../../fackData/chooseUsData';
import ChooseUsItem from '../ChooseUsItem/ChooseUsItem';

const ChooseUs = () => {
    const [chooseUs, setChooseUs] = useState(chooseUsData);
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <h1>Why you choose us</h1>
                    <p>Barton waited twenty always repair in within we do. An delighted offending <br /> curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
                </div>
                <br /><br /><br /> <br /><br /><br />
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {chooseUs.map(item => <ChooseUsItem key={item.id} chooseItem={item} />)}
            </div>
        </div>

    );
};

export default ChooseUs;