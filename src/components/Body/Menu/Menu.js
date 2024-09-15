import React, { useContext, useState } from 'react';
import fackData from '../../../fackData/fackData';
import MenuItem from '../MenuItem/MenuItem';
import './menu.css';
import { MyContext } from '../../../App';

const Menu = () => {
    const { selectedMenu, setSeletedMenu, cart, setCart, loggedInUser, setLoggedInUser } = useContext(MyContext);
    const sliceData = fackData.slice(0, 6);
    const [menu, setMenu] = useState(sliceData);

    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {selectedMenu.length > 0 ? selectedMenu.map(item => <MenuItem key={item.id} item={item} />) : menu.map(item => <MenuItem key={item.id} item={item} />)}
               {cart.length > 0 ?  <button className='m-auto my-5 btn btn-primary checkout-btn' >Checkout Your Food</button> :  <button className='m-auto my-5 btn btn-secondary checkout-btn' disabled>Checkout Your Food</button>}
            </div>
        </div>
    );
};

export default Menu;