import React, { useRef } from 'react';
import HeroBanner from '../components/HeroBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import LimitedTimeSale from '../components/LimitedTimeSale';
import ProductSection from '../components/ProductSection';

function HomePage({ onAddToCart }) {
  const featuredProductsRef = useRef(null);

  const scrollToFeaturedProducts = () => {
    console.log('Shop Now button clicked!');
    featuredProductsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroBanner onShopNowClick={scrollToFeaturedProducts} />
      <LimitedTimeSale />
      {/* Pass ref properly */}
      <FeaturedProducts
        title="Featured Products"
        onAddToCart={onAddToCart}
        ref={featuredProductsRef}
      />
      <ProductSection title="More Products" onAddToCart={onAddToCart} />
    </div>
  );
}

export default HomePage;
