// src/components/OrderSummary.js
import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
`;

const SummaryTitle = styled.h3`
  margin-bottom: 15px;
  color: #333;
`;

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemQuantity = styled.span`
  margin-left: 10px;
  color: #777;
`;

const ItemPrice = styled.span`
  font-weight: bold;
  color: #007bff;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-weight: bold;
  font-size: 1.1em;
`;

function OrderSummary({ cartItems }) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0; // Replace with actual shipping calculation
  const total = subtotal + shipping;

  return (
    <SummaryContainer>
      <SummaryTitle>Order Summary</SummaryTitle>
      {cartItems.map(item => (
        <ItemRow key={item.id}>
          <ItemName>{item.name}</ItemName>
          <ItemQuantity>x {item.quantity}</ItemQuantity>
          <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
        </ItemRow>
      ))}
      <ItemRow>
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </ItemRow>
      <ItemRow>
        <span>Shipping</span>
        <span>FREE</span> {/* Replace with dynamic value */}
      </ItemRow>
      <TotalRow>
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </TotalRow>
    </SummaryContainer>
  );
}

export default OrderSummary;