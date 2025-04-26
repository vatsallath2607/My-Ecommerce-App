// src/components/CartItem.js
import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 5px;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const ItemName = styled.h4`
  margin-bottom: 5px;
  font-size: 1em;
`;

const ItemPrice = styled.p`
  color: #007bff;
  font-weight: bold;
  font-size: 0.9em;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const QuantityButton = styled.button`
  background: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 8px;
  cursor: pointer;
  font-size: 0.8em;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const QuantityDisplay = styled.span`
  font-size: 1em;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  font-size: 1em;
  margin-left: 15px;
  &:hover {
    text-decoration: underline;
  }
`;

function CartItem({ item }) {
  return (
    <ItemContainer>
      <ItemImage src={item.imageUrl} alt={item.name} />
      <ItemDetails>
        <ItemName>{item.title}</ItemName>
        <ItemPrice>${item.price}</ItemPrice>
      </ItemDetails>
      <QuantityControls>
        <QuantityButton>-</QuantityButton>
        <QuantityDisplay>{item.quantity}</QuantityDisplay>
        <QuantityButton>+</QuantityButton>
      </QuantityControls>
      <RemoveButton>&#10006;</RemoveButton>
    </ItemContainer>
  );
}

export default CartItem;