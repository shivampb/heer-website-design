import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductGridPageComponent from './components/ProductGrid';

export default function ProductGridPage({ onBookClick }) {
  const { category = 'all' } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
