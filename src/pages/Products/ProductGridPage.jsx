import React, { useEffect } from 'react';
import { useParams, useNavigate, useNavigationType } from 'react-router-dom';
import ProductGridPageComponent from './components/ProductGrid';

export default function ProductGridPage({ onBookClick }) {
  const { category = 'all' } = useParams();
  const navigate = useNavigate();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== 'POP') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [navType]);

  const decodedCategory = decodeURIComponent(category || 'all');

  const handleSelectCategory = (catId) => {
    if (catId === 'all') {
      navigate('/products');
    } else {
      navigate(`/products/${encodeURIComponent(catId)}`);
    }
  };

  const handleProductClick = (product) => {
    navigate(`/product-detail/${product.code}`, { state: { product } });
  };

  return (
    <div style={{ paddingTop: '10px' }}>
      <ProductGridPageComponent
        selectedCategory={decodedCategory}
        onSelectCategory={handleSelectCategory}
        onProductClick={handleProductClick}
        onBookClick={onBookClick}
      />
    </div>
  );
}
