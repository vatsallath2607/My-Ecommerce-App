// src/components/ProductList.js
import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard'; // Assuming ProductCard is in the same directory

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

function ProductList({ products, onAddToCart }) {
  return (
    <ListContainer>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </ListContainer>
  );
}

export default ProductList;