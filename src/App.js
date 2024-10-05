import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Product from './Components/Products';
import Item from './Components/Items';
import Cart from './Components/Cart';
import Login from './Components/Login'; 

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem.id === item.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const incrementQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Product" exact element={<Product addToCart={addToCart} />} />
        <Route path="/Items/:id" exact element={<Item addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart 
          cartItems={cartItems} 
          incrementQuantity={incrementQuantity} 
          decrementQuantity={decrementQuantity} 
          removeItem={removeItem} 
        />} />
         <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
