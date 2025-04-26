// src/pages/CheckoutPage.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 30px;
`;

const ShippingAddress = styled.div`
  flex: 1;
`;

const OrderSummary = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
`;

const CheckoutTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
`;

const PlaceOrderButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  width: 100%;
  &:hover {
    background-color: #1e7e34;
  }
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 4px;
`;

const ItemName = styled.span`
  font-size: 0.9em;
`;

const ItemQuantity = styled.span`
  font-size: 0.8em;
  color: #777;
  margin-left: 5px;
`;

const ItemPrice = styled.span`
  font-weight: bold;
  color: #333;
  font-size: 0.9em;
`;

const SummaryValue = styled.span`
  font-weight: bold;
  color: #333;
`;

function CheckoutPage({ cartItems, onPlaceOrder }) {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobile, setMobile] = useState('');

  const subtotal = Array.isArray(cartItems) ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2) : '0.00';
  const shipping = 0;
  const total = (parseFloat(subtotal) + shipping).toFixed(2);

  const handlePlaceOrderClick = () => {
    const shippingDetails = {
      name: fullName,
      address: address,
      pincode: pincode,
      mobile: mobile,
    };
    onPlaceOrder(shippingDetails);
  };

  return (
    <CheckoutContainer>
      <ShippingAddress>
        <CheckoutTitle>Shipping Address</CheckoutTitle>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormLabel htmlFor="fullName">Full Name</FormLabel>
          <FormInput type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <FormLabel htmlFor="address">Street Address</FormLabel>
          <FormInput type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
          <FormLabel htmlFor="pincode">Pincode</FormLabel>
          <FormInput type="text" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
          <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
          <FormInput type="tel" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          <PlaceOrderButton type="button" onClick={handlePlaceOrderClick}>Place Order</PlaceOrderButton>
        </form>
      </ShippingAddress>
      <OrderSummary>
        <CheckoutTitle>Order Summary</CheckoutTitle>
        {Array.isArray(cartItems) && cartItems.map(item => (
          <SummaryItem key={item.id}>
            <ItemDetails>
              <ItemImage src={item.imageUrl} alt={item.title} />
              <ItemName>{item.title}</ItemName>
              {item.quantity > 1 && <ItemQuantity>x {item.quantity}</ItemQuantity>}
            </ItemDetails>
            <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
          </SummaryItem>
        ))}
        <SummaryItem>
          <span>Subtotal</span>
          <SummaryValue>${subtotal}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <span>Shipping</span>
          <SummaryValue>FREE</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <span>Total</span>
          <SummaryValue>${total}</SummaryValue>
        </SummaryItem>
      </OrderSummary>
    </CheckoutContainer>
  );
}

export default CheckoutPage;