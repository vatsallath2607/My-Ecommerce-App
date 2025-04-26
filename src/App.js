// src/App.js
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import KidsPage from './pages/KidsPage';
import SalePage from './pages/SalePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import AllProductsPage from './pages/AllProductsPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState(null);
  const navigate = useNavigate();

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handlePlaceOrder = (address) => {
    setShippingAddress(address);
    const orderId = Math.random().toString(36).substring(7).toUpperCase();
    navigate(`/order-confirmation/${orderId}`);
  };

  return (
    <>
      <Navbar cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/men" element={<MenPage onAddToCart={addToCart} category="Men" />} />
        <Route path="/women" element={<WomenPage onAddToCart={addToCart} category="Women" />} />
        <Route path="/kids" element={<KidsPage onAddToCart={addToCart} category="Kids" />} />
        <Route path="/sale" element={<SalePage onAddToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />} />
        <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage cartItems={cartItems} shippingAddress={shippingAddress} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<AllProductsPage onAddToCart={addToCart} />} />
      </Routes>
    </>
  );
}

export default App;