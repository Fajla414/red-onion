import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Body/Home/Home';
import MenuItemDetail from './components/Body/MenuItemDetail/MenuItemDetail';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

export const MyContext = createContext();

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState({});
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <MyContext.Provider value={{ selectedMenu, setSelectedMenu, cart, setCart, loggedInUser, setLoggedInUser }}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/menu/:id' element={<MenuItemDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/placeorder' element={<PlaceOrder />} />;
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;


