import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, Calendar } from 'lucide-react';

export default function Header({ onBookClick, onSelfCheckClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (window.innerHeight ? window.innerHeight - 80 : 560)) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: isScrolled ? '14px 0' : '22px 0',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isScrolled ? 'rgba(252, 250, 246, 0.96)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(28, 32, 22, 0.08)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            if (onNavClick) onNavClick('home');
            else scrollToSection('home');
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '6px',
            backgroundColor: isScrolled ? '#000000' : '#ffffff',
            color: isScrolled ? '#ffffff' : '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1rem',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.35s ease'
          }}>
            H
          </div>
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 700, 
            fontSize: '1.45rem', 
            letterSpacing: '-0.03em',
            color: isScrolled ? '#000000' : '#ffffff',
            transition: 'color 0.35s ease'
          }}>
            Heer <span style={{ fontSize: '0.9rem', fontWeight: 400, color: isScrolled ? '#333333' : 'rgba(255, 255, 255, 0.85)' }}>Technology & Control</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="desktop-nav">
          {[
            { label: 'About Us', id: 'about-us' },
            { label: 'Contact Us', id: 'contact-us' },
            { label: 'Products', id: 'products' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (onNavClick) onNavClick(item.id);
                else scrollToSection(item.id);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: isScrolled ? '#000000' : '#ffffff',
                fontSize: '0.95rem',
                fontWeight: isScrolled ? 600 : 500,
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                padding: '4px 0'
              }}
              onMouseEnter={(e) => e.target.style.color = isScrolled ? 'var(--accent-olive)' : '#c6a661'}
              onMouseLeave={(e) => e.target.style.color = isScrolled ? '#000000' : '#ffffff'}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onSelfCheckClick}
            className="btn-glass hide-mobile"
            style={{
              padding: '10px 18px',
              fontSize: '0.86rem',
              borderRadius: '6px',
              backgroundColor: isScrolled ? 'var(--glass-bg)' : 'rgba(255, 255, 255, 0.15)',
              color: isScrolled ? 'var(--text-main)' : '#ffffff',
              border: isScrolled ? '1px solid var(--glass-border)' : '1px solid rgba(255, 255, 255, 0.35)',
              transition: 'all 0.35s ease'
            }}
          >
            <Sparkles size={14} color={isScrolled ? 'var(--accent-olive)' : '#ffffff'} />
            <span>Diagnostics</span>
          </button>

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
                { label: 'Contact Us', id: 'contact-us' },
                { label: 'Products', id: 'products' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onNavClick) onNavClick(item.id);
                    else scrollToSection(item.id);
                  }}
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    padding: '12px 4px',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    cursor: 'pointer'
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '14px' }}>
                <button onClick={() => { setMobileMenuOpen(false); onSelfCheckClick(); }} className="btn-glass" style={{ width: '100%', justifyContent: 'center', borderRadius: '8px', padding: '13px' }}>
                  <Sparkles size={16} /> Interactive Diagnostics Check
                </button>
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
