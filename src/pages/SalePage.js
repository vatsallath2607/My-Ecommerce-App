// src/pages/SalePage.js
import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import LimitedTimeSale from '../components/LimitedTimeSale'; // Import the LimitedTimeSale component

const SalePageContainer = styled.div`
  padding: 20px;
`;

const SaleItemsSection = styled.div`
  text-align: center;
  padding: 30px 0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

// Replace this with your actual logic to fetch sale items
const saleProducts = [
  { id: 9, imageUrl: 'https://img.tatacliq.com/images/i21//437Wx649H/MP000000024559790_437Wx649H_202412041120331.jpeg', title: "Summer Dress - Sale", category: "Women", price: 59.99, salePrice: 39.99 },
  { id: 10, imageUrl: 'https://m.media-amazon.com/images/I/51+Kw7oqczL._AC_UF1000,1000_QL80_.jpg', title: "Men's Casual Shorts - Sale", category: "Men", price: 39.99, salePrice: 29.99 },
  { id: 11, imageUrl: 'https://staranddaisy.in/wp-content/uploads/2023/04/police_kids_backpack_green.jpg', title: "Kids' Backpack - Sale", category: "Kids", price: 29.99, salePrice: 19.99 },
  // Add more sale products here
];

function SalePage({ onAddToCart }) {
  return (
    <SalePageContainer>
      <LimitedTimeSale showShopButton={false} /> {/* Include the LimitedTimeSale component */}
      <SaleItemsSection>
        <Title>Sale Items</Title>
        <ProductGrid>
          {saleProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </ProductGrid>
      </SaleItemsSection>
    </SalePageContainer>
  );
}

export default SalePage;