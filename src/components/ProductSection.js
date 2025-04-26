// src/components/ProductSection.js
import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Section = styled.div`
  padding: 30px 20px;
  text-align: center;
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

const ViewAllButton = styled.button`
  background-color: transparent;
  color: #007bff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const products = [
  { id: 5, imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20230808/xaMr/64d16e86eebac147fcb0e466/-473Wx593H-466429631-purple-MODEL.jpg', title: "Women's Silk Blouse", category: "Women", price: 65.50 },
  { id: 6, imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20230905/lZXa/64f74028ddf77915199b34b7/-473Wx593H-469542404-darkgrey-MODEL.jpg', title: "Women's Stiletto Heels", category: "Women", price: 95.00 },
  { id: 7, imageUrl: 'https://www.hijibizi.in/cdn/shop/products/IMG-20220912-WA0014.jpg?v=1663006183', title: "Kids' Graphic T-Shirt", category: "Kids", price: 24.99 },
  { id: 8, imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20241108/A9hG/672db6f6260f9c41e8c90195/-473Wx593H-442702822-blue-MODEL.jpg', title: "Kids' Denim Shorts", category: "Kids", price: 35.00 },
];

function ProductSection({ title, onAddToCart }) {
  const navigate = useNavigate(); // Get the navigate function

  const handleViewAllProductsClick = () => {
    navigate('/products'); // Replace '/products' with the actual path to your all products page
  };

  return (
    <Section>
      <Title>{title}</Title>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </ProductGrid>
      <ViewAllButton onClick={handleViewAllProductsClick}>View All Products →</ViewAllButton> {/* Added onClick handler */}
    </Section>
  );
}

export default ProductSection;