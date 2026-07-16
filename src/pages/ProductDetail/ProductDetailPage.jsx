import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import ProductShowcase from './components/ProductShowcase';
import { allProducts } from '../Products/components/ProductGrid';

export default function ProductDetailPage({ onBookClick }) {
  const { code } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [code]);

  const product = location.state?.product || allProducts.find(p => p.code.toLowerCase() === (code || '').toLowerCase() || p.subCategory.toLowerCase() === (code || '').toLowerCase() || p.title.toLowerCase() === (code || '').toLowerCase()) || null;

  const handleBack = () => {
    navigate('/products');
  };

  const handleInquire = (prod) => {
    if (onBookClick) onBookClick(prod);
  };

  return (
    <div style={{ paddingTop: '10px' }}>
      <ProductShowcase
        product={product}
        onBack={handleBack}
        onInquire={handleInquire}
      />
    </div>
  );
}
