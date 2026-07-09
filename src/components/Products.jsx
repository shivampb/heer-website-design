import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Cpu, Sparkles, Home, Users, X, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { WELLNESS_DATA } from '../data/wellnessData';

export default function Products({ onRequestQuote }) {
  const { tag, title, items } = WELLNESS_DATA.services;
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Brain':
        return <Cpu size={28} color="var(--accent-olive)" />;
      case 'Sparkles':
        return <Sparkles size={28} color="var(--accent-olive)" />;
      case 'Home':
        return <Home size={28} color="var(--accent-olive)" />;
      default:
        return <Users size={28} color="var(--accent-olive)" />;
    }
  };

  return (
    <section id="products" className="section-padding" style={{ backgroundColor: '#faf8f2' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="wellness-tag">✦ OUR PRODUCTS & SYSTEMS</div>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.12,
            color: 'var(--text-main)'
          }}>
            Microprocessor & Micro Controller Elevator Systems
          </h2>
        </div>

        {/* 4 Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px'
        }}>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                padding: '36px',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div>
                {/* Icon Box */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-olive-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  {getIcon(item.icon)}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--accent-olive)',
                    backgroundColor: 'var(--accent-olive-light)',
                    padding: '4px 10px',
                    borderRadius: '6px'
                  }}>
                    {item.format}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    {item.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '14px', color: 'var(--text-main)', lineHeight: 1.3 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
                  {item.desc}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <button
                  onClick={() => setSelectedProduct(item)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '6px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    color: 'var(--text-main)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--accent-olive-light)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--bg-primary)'}
                >
                  View Tech Specs
                </button>

                <button
                  onClick={() => onRequestQuote && onRequestQuote(item.title)}
                  className="btn-primary"
                  style={{ padding: '12px 18px', fontSize: '0.88rem', borderRadius: '6px' }}
                >
                  Quote <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Spec Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  padding: '40px',
                  maxWidth: '560px',
                  width: '100%',
                  position: 'relative',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  style={{
                    position: 'absolute',
                    top: '24px',
                    right: '24px',
                    background: 'var(--bg-secondary)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <X size={18} />
                </button>

                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-olive-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {getIcon(selectedProduct.icon)}
                </div>

                <div className="wellness-tag" style={{ marginBottom: '12px' }}>
                  ✦ {selectedProduct.duration}
                </div>

                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-main)' }}>
                  {selectedProduct.title}
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
                  {selectedProduct.desc}
                </p>

                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '20px', borderRadius: '10px', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.88rem', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--accent-olive)" /> Application: {selectedProduct.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', fontWeight: 600 }}>
                    <Cpu size={16} color="var(--accent-olive)" /> Logic Architecture: {selectedProduct.format}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <button
                    onClick={() => {
                      const prodTitle = selectedProduct.title;
                      setSelectedProduct(null);
                      if (onRequestQuote) onRequestQuote(prodTitle);
                    }}
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: 'center', borderRadius: '6px', padding: '14px' }}
                  >
                    Request Specs & Quote <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
