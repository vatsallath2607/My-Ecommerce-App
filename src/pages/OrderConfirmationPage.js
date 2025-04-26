// src/pages/OrderConfirmationPage.js
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ConfirmationContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 40px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ConfirmationIcon = styled.div`
  background-color: #4CAF50;
  color: white;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  line-height: 80px;
  font-size: 2.5em;
  margin: 0 auto 20px;
`;

const ConfirmationTitle = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

const ConfirmationMessage = styled.p`
  margin-bottom: 30px;
  color: #555;
`;

const OrderSummaryContainer = styled.div`
  text-align: left;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
`;

const SummaryTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
`;

const ShippingInfo = styled.div`
  margin-bottom: 15px;
`;

const ShippingTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
`;

const ShippingAddressItem = styled.p`
  margin-bottom: 5px;
  color: #555;
`;

const ItemsOrderedList = styled.ul`
  list-style: none;
  padding: 0;
`;

const OrderedItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemName = styled.span`
  flex-grow: 1;
  margin-right: 10px;
  color: #333;
`;

const ItemQuantity = styled.span`
  color: #777;
  margin-right: 10px;
`;

const ItemPrice = styled.span`
  font-weight: bold;
  color: #333;
`;

const TotalAmount = styled.p`
  text-align: right;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
`;

function OrderConfirmationPage({ cartItems, shippingAddress }) {
  const { orderId } = useParams();

  const totalAmount = Array.isArray(cartItems) ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2) : '0.00';

  return (
    <ConfirmationContainer>
      <ConfirmationIcon>&#10004;</ConfirmationIcon>
      <ConfirmationTitle>Order Confirmed!</ConfirmationTitle>
      <ConfirmationMessage>Thank you for your purchase. Your order ID is: {orderId}</ConfirmationMessage>

      <OrderSummaryContainer>
        <SummaryTitle>Order Summary</SummaryTitle>

        {shippingAddress && (
          <ShippingInfo>
            <ShippingTitle>Shipping To:</ShippingTitle>
            <ShippingAddressItem>Name: {shippingAddress.name}</ShippingAddressItem>
            <ShippingAddressItem>Address: {shippingAddress.address}</ShippingAddressItem>
            <ShippingAddressItem>Pincode: {shippingAddress.pincode}</ShippingAddressItem>
            <ShippingAddressItem>Mobile: {shippingAddress.mobile}</ShippingAddressItem>
          </ShippingInfo>
        )}

        <div>
          <ShippingTitle>Items Ordered:</ShippingTitle>
          <ItemsOrderedList>
            {Array.isArray(cartItems) && cartItems.map(item => (
              <OrderedItem key={item.id}>
                <ItemName>{item.title}</ItemName>
                <ItemQuantity>Qty: {item.quantity}</ItemQuantity>
                <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
              </OrderedItem>
            ))}
          </ItemsOrderedList>
        </div>

        <TotalAmount>Total: ${totalAmount}</TotalAmount>
      </OrderSummaryContainer>

      <ConfirmationMessage>You will receive an email with further details shortly.</ConfirmationMessage>
    </ConfirmationContainer>
  );
}

export default OrderConfirmationPage;