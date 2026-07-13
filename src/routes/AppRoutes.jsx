import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Route-based code splitting: Only load page chunks when navigated to (`slashes RAM & first-load payload`)
const HomePage = lazy(() => import('../pages/Home/HomePage'));
const AboutUsPage = lazy(() => import('../pages/AboutUs/AboutUsPage'));
const CompanyEthicsPage = lazy(() => import('../pages/CompanyEthics/CompanyEthicsPage'));
const ManufacturingPage = lazy(() => import('../pages/Manufacturing/ManufacturingPage'));
const HeerLabPage = lazy(() => import('../pages/HeerLab/HeerLabPage'));
const ContactUsPage = lazy(() => import('../pages/ContactUs/ContactUsPage'));
const ProductGridPage = lazy(() => import('../pages/Products/ProductGridPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetail/ProductDetailPage'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFoundPage'));

function PageLoader() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#ffffff',
      padding: '110px clamp(24px, 6vw, 100px) 60px clamp(24px, 6vw, 100px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '40px'
    }}>
      <style>{`
        @keyframes skeletonShimmer {
          0% { background-position: -800px 0; }
          100% { background-position: 800px 0; }
        }
        .skeleton-shimmer {
          background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
          background-size: 1600px 100%;
          animation: skeletonShimmer 1.4s ease-in-out infinite;
          border-radius: 8px;
        }
      `}</style>
      {/* Top Label Skeleton */}
      <div className="skeleton-shimmer" style={{ width: '220px', height: '16px', borderRadius: '4px' }} />
      {/* Big Headline Skeleton */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px' }}>
        <div className="skeleton-shimmer" style={{ width: '95%', height: '48px', borderRadius: '6px' }} />
        <div className="skeleton-shimmer" style={{ width: '75%', height: '48px', borderRadius: '6px' }} />
      </div>
      {/* Hero Panoramic Image Skeleton */}
      <div className="skeleton-shimmer" style={{ width: '100%', height: 'clamp(360px, 55vh, 640px)', borderRadius: '14px', marginTop: '12px' }} />
    </div>
  );
}

export default function AppRoutes({
  onBookClick,
  onSelfCheckClick,
  scrollToSection,
  handleNavClick
}) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route
          path="/"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <HomePage
                onStartJourney={() => scrollToSection('philosophy')}
                onExploreNourish={() => scrollToSection('why-us')}
                onMeetSpecialists={() => scrollToSection('mentors')}
                onSelectTherapy={(cat) => handleNavClick('products', cat?.id || cat)}
                onSelfCheckClick={onSelfCheckClick}
              />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <AboutUsPage onBookClick={onBookClick} />
            </motion.div>
          }
        />
        <Route
          path="/about/*"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <AboutUsPage onBookClick={onBookClick} />
            </motion.div>
          }
        />
        <Route
          path="/about-us"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <AboutUsPage onBookClick={onBookClick} />
            </motion.div>
          }
        />
        <Route
          path="/about-us/ethics"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <CompanyEthicsPage onBookClick={onBookClick} />
            </motion.div>
          }
        />
        <Route
          path="/company-ethics"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <CompanyEthicsPage onBookClick={onBookClick} />
            </motion.div>
          }
        />
        <Route
          path="/manufacturing"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <ManufacturingPage />
            </motion.div>
          }
        />
        <Route
          path="/about-us/manufacturing"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <ManufacturingPage />
            </motion.div>
          }
        />
        <Route
          path="/heer-lab"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <HeerLabPage onBookClick={onBookClick} />
            </motion.div>
          }
        />
        <Route
          path="/lab"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <HeerLabPage onBookClick={onBookClick} />
            </motion.div>
          }
        />
        <Route
          path="/about-us/lab"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <HeerLabPage onBookClick={onBookClick} />
            </motion.div>
          }
        />
        <Route
          path="/contact-us"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <ContactUsPage onBookClick={onBookClick} />
            </motion.div>
          }
        />
        <Route
          path="/products/*"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <ProductGridPage onBookClick={onBookClick} />
            </motion.div>
          }
        />
        <Route
          path="/products/:category"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <ProductGridPage onBookClick={onBookClick} />
            </motion.div>
          }
        />
        <Route
          path="/product-detail/:code"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <ProductDetailPage onBookClick={onBookClick} />
            </motion.div>
          }
        />
        {/* Catch-all: renders 404 for any unknown route */}
        <Route
          path="*"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
              <NotFoundPage />
            </motion.div>
          }
        />
      </Routes>
    </Suspense>
  );
}
