import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
//import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/Privateroute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
   
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h3>email: {loggedInUser.email}</h3>
      <Header></Header>
      <BrowserRouter>
        <React.Fragment>
          <Routes>
            <Route path="/shop" element={<Shop/>} />
            <Route path="/review" element={<Review/>} />
            <Route path="/inventory" element={<Inventory/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/shipment" element={<PrivateRoute component={<Shipment/>} />} />
            <Route exact path="/" element={<Shop/>} />
            <Route exact path="/product/:productKey" element={<ProductDetail/>} />
            <Route path="/*" element={<NotFound/>} />
            
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
 