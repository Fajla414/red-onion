import React, { useContext } from 'react';
import './menuHeader.css';
import fackData from '../../../fackData/fackData';
import { MyContext  } from '../../../App';


const MenuHeader = () => {
    const { selectedMenu, setSelectedMenu, cart, setCart } = useContext(MyContext);
    const handleSelectedMenu = (event) => {
        const seletedMenuInnerText = event.target.innerText.toLowerCase();
        const filterMenuItem = fackData.filter(item => item.category.toLowerCase() === seletedMenuInnerText)
        setSelectedMenu(filterMenuItem);
    }

    return (
        <nav className="navbar navbar-expand mb-5">
            <div className="container">
                <div className="justify-content-center m-auto" >
                    <ul className="navbar-nav menu-item">
                        <li className="nav-item  fw-bold mx-3" onClick={handleSelectedMenu}>Breakfast</li>
                        <li className="nav-item fw-bold mx-3" onClick={handleSelectedMenu} >Lunch</li>
                        <li className="nav-item fw-bold mx-3" onClick={handleSelectedMenu} >Dinner</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MenuHeader;