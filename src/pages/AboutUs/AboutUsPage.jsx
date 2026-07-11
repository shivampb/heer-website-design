import React from 'react';
import AboutUs from './components/AboutUs';

export default function AboutUsPage({ onBookClick }) {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <AboutUs onExploreProducts={onBookClick} />
    </div>
  );
}
