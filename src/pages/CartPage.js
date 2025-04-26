// src/pages/CartPage.js
import React from 'react';
import styled from 'styled-components';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const CartContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CartTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 30px;
  color: #777;
`;

const StartShoppingButton = styled(Link)`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 15px;
  text-decoration: none;
  &:hover {
    background-color: #0056b3;
  }
`;

const CartItemList = styled.div`
  margin-bottom: 20px;
`;

const CartTotal = styled.div`
  text-align: right;
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CheckoutButton = styled(Link)`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  text-decoration: none; /* Remove default link underline */
  &:hover {
    background-color: #1e7e34;
  }
`;

const ClearCartButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  margin-right: 10px;
  &:hover {
    background-color: #d32f2f;
  }
`;

function CartPage({ cartItems, setCartItems }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(cartItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    } else {
      setCartItems(cartItems.filter(item => item.id !== itemId));
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContainer>
      <CartTitle>Your Shopping Cart</CartTitle>
      {cartItems && cartItems.length === 0 ? (
        <EmptyCart>
          <p>Your cart is empty.</p>
          <StartShoppingButton to="/">Continue Shopping</StartShoppingButton>
        </EmptyCart>
      ) : (
        <div>
          <CartItemList>
            {cartItems && cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </CartItemList>
          <CartTotal>Total: ${total}</CartTotal>
          <div>
            <ClearCartButton onClick={handleClearCart}>Clear Cart</ClearCartButton>
            <CheckoutButton to="/checkout">Proceed to Checkout →</CheckoutButton> {/* Made it a Link */}
          </div>
        </div>
      )}
    </CartContainer>
  );
}

export default CartPage;