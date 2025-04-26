// src/components/HeroBanner.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background: linear-gradient(to right, #a7d1eb, #7dd3ca);
  color: white;
  text-align: center;
  padding: 100px 0;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
`;

const ShopNowButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e7e34;
  }
`;

function HeroBanner({ onShopNowClick }) {
  return (
    <HeroContainer>
      <Title>Discover Your Style</Title>
      <Subtitle>Explore our latest collections for Men, Women, and Kids. Quality fashion delivered to your doorstep.</Subtitle>
      <ShopNowButton onClick={onShopNowClick}>Shop Now</ShopNowButton>
    </HeroContainer>
  );
}

export default HeroBanner;