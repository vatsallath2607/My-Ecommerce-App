import React, { forwardRef } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

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

const products = [
  { id: 1, imageUrl: 'https://m.media-amazon.com/images/I/51Dufg4UKjL._AC_UY1100_.jpg', title: "Men's Classic Blue Shirt", category: "Men", price: 49.99 },
  { id: 2, imageUrl: 'https://www.urbanofashion.com/cdn/shop/files/epsjean-iceblu-1.png?v=1727019897', title: "Men's Slim Fit Jeans", category: "Men", price: 79.99 },
  { id: 3, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhdkxzQj84z83P_xKw4MgIyOxg--Us4JPvg&s', title: "Men's Leather Sneakers", category: "Men", price: 120.00 },
  { id: 4, imageUrl: 'https://rukminim2.flixcart.com/image/550/650/xif0q/dress/q/n/d/xxl-f-b-flower-fashion2wear-original-imah2p63qazkgmrn.jpeg?q=90&crop=false', title: "Women's Floral Maxi Dress", category: "Women", price: 89.99 },
];

const FeaturedProducts = forwardRef(({ title, onAddToCart }, ref) => {
  return (
    <Section ref={ref}>
      <Title>{title}</Title>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </ProductGrid>
    </Section>
  );
});


export default FeaturedProducts;
