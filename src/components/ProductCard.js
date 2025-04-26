// src/components/ProductCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 15px;
  text-align: center;
`;

const Title = styled.h3`
  margin-bottom: 5px;
  font-size: 1.2em;
`;

const PriceContainer = styled.div`
  margin-bottom: 10px;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #777;
  margin-right: 5px;
`;

const SalePrice = styled.span`
  color: #dc3545; /* Example sale price color */
  font-weight: bold;
`;

const Price = styled.span`
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1e7e34;
  }
`;

function ProductCard({ product, onAddToCart }) {
  return (
    <Card>
      <ImageContainer>
        <Image src={product.imageUrl} alt={product.title} />
      </ImageContainer>
      <Details>
        <Title>{product.title} {product.salePrice && <span style={{ color: '#dc3545', fontWeight: 'bold' }}>(Sale)</span>}</Title>
        <PriceContainer>
          {product.salePrice !== undefined && product.salePrice !== null ? (
            <>
              <OriginalPrice>${product.price.toFixed(2)}</OriginalPrice>
              <SalePrice>${product.salePrice.toFixed(2)}</SalePrice>
            </>
          ) : (
            <Price>${product.price.toFixed(2)}</Price>
          )}
        </PriceContainer>
        <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
      </Details>
    </Card>
  );
}

export default ProductCard;