// src/pages/KidsPage.js
import React from 'react';
import ProductList from '../components/ProductList';

function KidsPage({ onAddToCart, category }) {
  // Assume you have access to all your products
  const allProducts = [
    { id: 1, imageUrl: 'https://m.media-amazon.com/images/I/51Dufg4UKjL._AC_UY1100_.jpg', title: "Men's Classic Blue Shirt", category: "Men", price: 49.99 },
  { id: 2, imageUrl: 'https://www.urbanofashion.com/cdn/shop/files/epsjean-iceblu-1.png?v=1727019897', title: "Men's Slim Fit Jeans", category: "Men", price: 79.99 },
  { id: 3, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhdkxzQj84z83P_xKw4MgIyOxg--Us4JPvg&s', title: "Men's Leather Sneakers", category: "Men", price: 120.00 },
  { id: 4, imageUrl: 'https://rukminim2.flixcart.com/image/550/650/xif0q/dress/q/n/d/xxl-f-b-flower-fashion2wear-original-imah2p63qazkgmrn.jpeg?q=90&crop=false', title: "Women's Floral Maxi Dress", category: "Women", price: 89.99 },
  { id: 5, imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20230808/xaMr/64d16e86eebac147fcb0e466/-473Wx593H-466429631-purple-MODEL.jpg', title: "Women's Silk Blouse", category: "Women", price: 65.50 },
  { id: 6, imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20230905/lZXa/64f74028ddf77915199b34b7/-473Wx593H-469542404-darkgrey-MODEL.jpg', title: "Women's Stiletto Heels", category: "Women", price: 95.00 },
  { id: 7, imageUrl: 'https://www.hijibizi.in/cdn/shop/products/IMG-20220912-WA0014.jpg?v=1663006183', title: "Kids' Graphic T-Shirt", category: "Kids", price: 24.99 },
  { id: 8, imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20241108/A9hG/672db6f6260f9c41e8c90195/-473Wx593H-442702822-blue-MODEL.jpg', title: "Kids' Denim Shorts", category: "Kids", price: 35.00 },
  ];

  const kidsProducts = allProducts.filter(product => product.category === category);

  return (
    <div>
      <h1>Kids' Collection</h1>
      <ProductList products={kidsProducts} onAddToCart={onAddToCart} />
    </div>
  );
}

export default KidsPage;