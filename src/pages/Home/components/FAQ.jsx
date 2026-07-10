import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { WELLNESS_DATA } from '../../../data/wellnessData';

export default function FAQ() {
  const { title, items } = WELLNESS_DATA.faq;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: '#faf8f2' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="wellness-tag">✦ FREQUENTLY ASKED QUESTIONS</div>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.12,
            color: 'var(--text-main)'
          }}>
            {title}
          </h2>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  overflow: 'hidden',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-btn"
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    {item.question}
                  </span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'var(--accent-olive-light)' : 'var(--bg-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0
                  }}>
                    <ChevronDown size={18} color="var(--accent-olive)" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq-answer" style={{
                        padding: '0 28px 26px 28px',
                        fontSize: '0.98rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.65,
                        borderTop: '1px solid rgba(0,0,0,0.04)',
                        paddingTop: '18px'
                      }}>
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .faq-btn {
            padding: 18px 16px !important;
          }
          .faq-btn span {
            font-size: 1.02rem !important;
          }
          .faq-answer {
            padding: 0 16px 20px 16px !important;
            font-size: 0.92rem !important;
          }
        }
      `}</style>
    </section>
  );
}
