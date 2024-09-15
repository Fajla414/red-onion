import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import Menu from '../Menu/Menu';
import MenuHeader from '../MenuHeader/MenuHeader';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <MenuHeader />
            <Menu />
            <ChooseUs />
            <Footer />
        </div>
    );
};

export default Home;