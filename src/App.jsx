import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BookingModal from './components/common/BookingModal';
import SelfCheckModal from './components/common/SelfCheckModal';
import CustomCursor from './components/common/CustomCursor';
import AppRoutes from './routes/AppRoutes';
import { isLowRamDevice } from './utils/devicePerformance';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selfCheckModalOpen, setSelfCheckModalOpen] = useState(false);
  const [initialTherapy, setInitialTherapy] = useState('Microprocessor Lift Controller (32-Bit Closed Loop)');
  const [initialSpecialist, setInitialSpecialist] = useState('Senior R&D Lead Specialist');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // If low RAM device or budget mobile phone, bypass heavy JS scroll loop to save CPU & RAM
    if (isLowRamDevice()) {
      document.documentElement.style.scrollBehavior = 'smooth';
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2
    });

    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const openBookingModal = () => {
    navigate('/contact-us');
  };

  const handleNavClick = (pageId, categoryId = 'all') => {
    if (pageId === 'home') navigate('/');
    else if (pageId === 'about-us') navigate('/about-us');
    else if (pageId === 'contact-us') navigate('/contact-us');
    else if (pageId === 'products') {
      if (categoryId && categoryId !== 'all') navigate(`/products/${categoryId}`);
      else navigate('/products');
    }
  };

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="wellness-app">
      <CustomCursor />
      {/* Interactive Scroll Progress Momentum Bar matching official Heer logo colors */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2185b0 0%, #3ac1f4 100%)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 99999,
          boxShadow: '0 2px 14px rgba(33, 133, 176, 0.55)'
        }}
      />

      {/* Global Top Ambient Glow Light Beam Across All Pages */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '240px',
          background: 'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(198, 166, 97, 0.16) 0%, rgba(33, 120, 156, 0.08) 50%, rgba(255, 255, 255, 0) 100%)',
          pointerEvents: 'none',
          zIndex: 900
        }}
      />

      {/* Sticky Luxury Header with exact URL routing */}
      <Header
        activePage={location.pathname === '/' ? 'home' : location.pathname.replace('/', '')}
        onNavClick={handleNavClick}
        onBookClick={() => openBookingModal()}
        onSelfCheckClick={() => setSelfCheckModalOpen(true)}
      />

      {/* Recommended React 2025 Routing Architecture */}
      <AppRoutes
        onBookClick={() => openBookingModal()}
        onSelfCheckClick={() => setSelfCheckModalOpen(true)}
        scrollToSection={scrollToSection}
        handleNavClick={handleNavClick}
      />

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Footer
          onBookClick={() => openBookingModal()}
        />
      </motion.div>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialTherapy={initialTherapy}
        initialSpecialist={initialSpecialist}
      />

      {/* Interactive Guided Mindful Self-Check Modal */}
      <SelfCheckModal
        isOpen={selfCheckModalOpen}
        onClose={() => setSelfCheckModalOpen(false)}
        onBookConsultation={(modality) => openBookingModal(modality)}
      />

      {/* Global Floating "Scroll to Top" Instant Widget Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'fixed',
              bottom: '28px',
              right: '28px',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: '#111111',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 9999,
              transition: 'background-color 0.2s ease, transform 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#c6a661';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#111111';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            title="Scroll to top"
            aria-label="Scroll to top instantly"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
