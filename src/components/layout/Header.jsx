import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { isLowRamDevice } from '../../utils/devicePerformance';

export default function Header({ onBookClick, onSelfCheckClick, onNavClick, activePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState('other-products');
  const location = useLocation();
  const navigate = useNavigate();

  const isLightPage = isScrolled || location.pathname !== '/' || activePage !== 'home';
  const lowRam = isLowRamDevice();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (window.innerHeight ? window.innerHeight - 80 : 560)) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaMenuColumns = [
    {
      id: 'main-boards',
      title: 'MAIN BOARDS',
      items: ['HEER-CTRL-32', 'HEER-SER-01', 'HEER-SER-02', 'HEER-INV-01', 'HEER-DEST-01']
    },
    {
      id: 'control-panels',
      title: 'CONTROL PANELS',
      items: ['HEER-FIX-01', 'HEER-FIX-02', 'HEER-KEY-01']
    },
    {
      id: 'push-buttons',
      title: 'PUSH BUTTONS',
      items: ['HEER-BTN-01', 'HEER-FIX-ACC']
    },
    {
      id: 'displays',
      title: 'DISPLAYS',
      items: ['HEER-DIS-01', 'HEER-APP-01']
    },
    {
      id: 'other-products',
      title: 'OTHER PRODUCTS',
      items: ['CL24', 'GSM105', 'SNV201', 'HEER-DRV-01', 'HEER-COMM-IOT']
    }
  ];

  const aboutMenuColumns = [
    {
      id: 'ethics',
      title: 'COMPANY RESPONSIBILITY & FACILITY',
      items: [
        { label: 'Company Ethics', path: '/company-ethics' },
        { label: 'Manufacturing & Assembly', path: '/manufacturing' },
        { label: 'Heer Lab (R&D)', path: '/heer-lab' }
      ]
    }
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: isLightPage ? '14px 0' : '22px 0',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isLightPage ? (lowRam ? '#fcfaf6' : 'rgba(252, 250, 246, 0.96)') : 'transparent',
        backdropFilter: isLightPage && !lowRam ? 'blur(16px)' : 'none',
        borderBottom: isLightPage ? '1px solid rgba(28, 32, 22, 0.08)' : '1px solid transparent'
      }}
      onMouseLeave={() => { setMegaMenuOpen(false); setAboutMenuOpen(false); }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            if (onNavClick) onNavClick('home');
            else navigate('/');
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '6px',
            backgroundColor: isLightPage ? '#000000' : '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            color: isLightPage ? '#ffffff' : '#000000',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}>
            H
          </div>
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '1.25rem', 
            fontWeight: 700, 
            letterSpacing: '-0.03em',
            color: isLightPage ? '#000000' : '#ffffff',
            transition: 'color 0.3s ease'
          }}>
            Heer <span style={{ fontSize: '0.9rem', fontWeight: 400, color: isLightPage ? '#333333' : 'rgba(255, 255, 255, 0.85)' }}>Technology & Control</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', gap: '36px', alignItems: 'center', position: 'relative' }} className="desktop-nav">
          {[
            { label: 'About Us', id: 'about-us' },
            { label: 'Products', id: 'products' },
            { label: 'Contact Us', id: 'contact-us' }
          ].map((item) => (
            <div 
              key={item.id} 
              style={{ position: 'relative', paddingBottom: '10px', paddingTop: '10px' }}
              onMouseEnter={() => {
                if (item.id === 'products') { setMegaMenuOpen(true); setAboutMenuOpen(false); }
                else if (item.id === 'about-us') { setAboutMenuOpen(true); setMegaMenuOpen(false); }
                else { setMegaMenuOpen(false); setAboutMenuOpen(false); }
              }}
            >
              <button
                onClick={() => {
                  if (item.id === 'products') {
                    setMegaMenuOpen(!megaMenuOpen);
                    setAboutMenuOpen(false);
                    if (onNavClick) onNavClick('products', 'all');
                    else navigate('/products');
                  } else if (item.id === 'about-us') {
                    setAboutMenuOpen(!aboutMenuOpen);
                    setMegaMenuOpen(false);
                    if (onNavClick) onNavClick(item.id);
                    else navigate(`/${item.id}`);
                  } else if (item.id === 'manufacturing') {
                    setMegaMenuOpen(false);
                    setAboutMenuOpen(false);
                    navigate('/manufacturing');
                  } else {
                    setMegaMenuOpen(false);
                    setAboutMenuOpen(false);
                    if (onNavClick) onNavClick(item.id);
                    else navigate(`/${item.id}`);
                  }
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isLightPage ? '#000000' : '#ffffff',
                  fontSize: '0.95rem',
                  fontWeight: isLightPage || (item.id === 'products' && megaMenuOpen) || (item.id === 'about-us' && aboutMenuOpen) || (item.id === 'manufacturing' && location.pathname.includes('manufacturing')) ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  padding: '4px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = isLightPage ? 'var(--accent-olive)' : '#c6a661'}
                onMouseLeave={(e) => e.currentTarget.style.color = isLightPage ? '#000000' : '#ffffff'}
              >
                <span>{item.label}</span>
                {(item.id === 'about-us' || item.id === 'products') && <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>▼</span>}
              </button>
            </div>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onBookClick}
            className="btn-primary hide-phone"
            style={{ padding: '10px 20px', fontSize: '0.86rem', borderRadius: '6px' }}
          >
            <span>Request Quote</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle mobile-toggle-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isScrolled ? 'var(--text-main)' : '#ffffff',
              padding: '8px',
              display: 'none',
              transition: 'color 0.35s ease'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Full-Width / Large 5-Column Mega Menu positioned dead center of the viewport (50vw) */}
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
            style={{
              position: 'fixed',
              top: isScrolled ? '65px' : '85px',
              left: 0,
              right: 0,
              margin: '0 auto',
              width: '1040px',
              maxWidth: '94vw',
              backgroundColor: '#ffffff',
              borderRadius: '14px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              padding: '32px 36px',
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '24px',
              zIndex: 1001
            }}
          >
            {megaMenuColumns.map((col) => (
              <div key={col.id} style={{ display: 'flex', flexDirection: 'column' }}>
                <h4 
                  onClick={() => {
                    setMegaMenuOpen(false);
                    if (onNavClick) onNavClick('products', col.id);
                  }}
                  style={{
                    fontSize: '0.94rem',
                    fontWeight: 600,
                    color: '#111111',
                    marginBottom: '14px',
                    cursor: 'pointer',
                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                    paddingBottom: '8px',
                    transition: 'color 0.2s ease',
                    letterSpacing: '-0.01em'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#c6a661'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#111111'}
                >
                  {col.title}
                </h4>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.items.map((subItem, idx) => (
                    <li key={idx}>
                      <span
                        onClick={() => {
                          setMegaMenuOpen(false);
                          if (onNavClick) onNavClick('products', col.id);
                          else navigate(`/products/${col.id}`);
                        }}
                        style={{
                          fontSize: '0.84rem',
                          fontWeight: 400,
                          color: '#555555',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'block',
                          lineHeight: 1.35
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#111111';
                          e.currentTarget.style.transform = 'translateX(3px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#555555';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        {subItem}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Width / Large 3-Column Mega Menu for About Us positioned dead center of the viewport */}
      <AnimatePresence>
        {aboutMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onMouseEnter={() => setAboutMenuOpen(true)}
            onMouseLeave={() => setAboutMenuOpen(false)}
            style={{
              position: 'fixed',
              top: isScrolled ? '65px' : '85px',
              left: 0,
              right: 0,
              margin: '0 auto',
              width: '320px',
              maxWidth: '92vw',
              backgroundColor: '#ffffff',
              borderRadius: '14px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              padding: '26px 28px',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '16px',
              zIndex: 1001
            }}
          >
            {aboutMenuColumns.map((col) => (
              <div key={col.id} style={{ display: 'flex', flexDirection: 'column' }}>
                <h4 
                  style={{
                    fontSize: '0.94rem',
                    fontWeight: 600,
                    color: '#111111',
                    marginBottom: '14px',
                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                    paddingBottom: '8px',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {col.title}
                </h4>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.items.map((subItem, idx) => (
                    <li key={idx}>
                      <span
                        onClick={() => {
                          setAboutMenuOpen(false);
                          if (subItem.path.startsWith('/')) navigate(subItem.path);
                          else if (onNavClick) onNavClick(subItem.path);
                        }}
                        style={{
                          fontSize: '0.84rem',
                          fontWeight: 400,
                          color: '#555555',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'block',
                          lineHeight: 1.35
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#111111';
                          e.currentTarget.style.transform = 'translateX(3px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#555555';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        {subItem.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: '#ffffff',
              borderBottom: '1px solid var(--border-color)',
              overflow: 'hidden',
              padding: '24px 20px',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'About Us', id: 'about-us' },
                { label: '↳ Company Ethics', id: 'ethics', path: '/company-ethics' },
                { label: '↳ Manufacturing & Assembly', id: 'manufacturing', path: '/manufacturing' },
                { label: '↳ Heer Lab (R&D)', id: 'heer-lab', path: '/heer-lab' },
                { label: 'Products', id: 'products' },
                { label: 'Contact Us', id: 'contact-us' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (item.path) navigate(item.path);
                    else if (item.id === 'about-us') navigate('/about-us');
                    else if (item.id === 'products') navigate('/products');
                    else if (onNavClick) onNavClick(item.id);
                    else scrollToSection(item.id);
                  }}
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontSize: item.path ? '0.96rem' : '1.1rem',
                    fontWeight: item.path ? 500 : 600,
                    color: item.path ? '#666666' : 'var(--text-main)',
                    padding: item.path ? '6px 4px 6px 16px' : '12px 4px',
                    borderBottom: item.path ? 'none' : '1px solid rgba(0,0,0,0.06)',
                    cursor: 'pointer'
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '14px' }}>
                <button onClick={() => { setMobileMenuOpen(false); onBookClick(); }} className="btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: '8px', padding: '13px' }}>
                  <Calendar size={16} /> Request Quote & Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle, .mobile-toggle-btn { display: block !important; }
          .hide-mobile { display: none !important; }
        }
        @media (max-width: 640px) {
          .hide-phone { display: none !important; }
        }
      `}</style>
    </header>
  );
}
