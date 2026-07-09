import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WELLNESS_DATA } from '../data/wellnessData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs({ onBookClick }) {
  const { image } = WELLNESS_DATA.whyChooseUs;
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.spec-row',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );

      gsap.fromTo('.why-img-gsap',
        { scale: 1.14, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.why-us-image-box',
            start: 'top 80%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} style={{ backgroundColor: '#fcfbf8', padding: '100px 0', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container">

        {/* Main Split Editorial Layout */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '56px',
          alignItems: 'stretch',
          justifyContent: 'space-between'
        }}>
          {/* Left Side: Editorial Typography & Spec Table Block */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingRight: '24px' }}
          >
            <div>
              {/* Refined Editorial Headline matching reference proportions */}
              <h2 style={{
                fontSize: 'clamp(2rem, 2.8vw, 2.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: '#111111',
                marginBottom: '40px'
              }}>
                Precision Controller Cabinets<br />
                & Touch Operating Panels.
              </h2>

              {/* Editorial Spec Grid / Project Details Table block */}
              <div
                className="spec-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '24px',
                  borderTop: '1px solid #e0e0e0',
                  paddingTop: '20px',
                  marginBottom: '44px'
                }}
              >
                {/* Left Label */}
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111111' }}>
                  Engineering Specs
                </div>

                {/* Right Table Specifications */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="spec-row" style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #e6e6e6', marginBottom: '10px', gap: '16px' }}>
                    <span style={{ color: '#777777', fontSize: '0.82rem', flexShrink: 0 }}>Category</span>
                    <span className="spec-val" style={{ fontWeight: 600, fontSize: '0.82rem', color: '#111111', textAlign: 'right' }}>Controller Cabinets & Touch COP/LOP Panels</span>
                  </div>
                  <div className="spec-row" style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #e6e6e6', marginBottom: '10px', gap: '16px' }}>
                    <span style={{ color: '#777777', fontSize: '0.82rem', flexShrink: 0 }}>Installations</span>
                    <span className="spec-val" style={{ fontWeight: 600, fontSize: '0.82rem', color: '#111111', textAlign: 'right' }}>15,000+ Active Units Globally</span>
                  </div>
                  <div className="spec-row" style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #e6e6e6', marginBottom: '10px', gap: '16px' }}>
                    <span style={{ color: '#777777', fontSize: '0.82rem', flexShrink: 0 }}>Architecture</span>
                    <span className="spec-val" style={{ fontWeight: 600, fontSize: '0.82rem', color: '#111111', textAlign: 'right' }}>32-Bit Solid-State Logic & VVVF</span>
                  </div>
                  <div className="spec-row" style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #e6e6e6', gap: '16px' }}>
                    <span style={{ color: '#777777', fontSize: '0.82rem', flexShrink: 0 }}>Support Model</span>
                    <span className="spec-val" style={{ fontWeight: 600, fontSize: '0.82rem', color: '#111111', textAlign: 'right' }}>Direct Engineering Schematics Desk</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Editorial Paragraph & Minimalist Button */}
            <div>
              <p style={{
                fontSize: '0.88rem',
                color: '#444444',
                lineHeight: 1.64,
                maxWidth: '480px',
                marginBottom: '24px',
                fontWeight: 400
              }}>
                Engineered for any scale installation and backed by direct engineering service—every Heer controller cabinet and touch operating panel eliminates unnecessary complexity to deliver rock-solid vertical transportation and rapid field diagnostics.
              </p>

              <div>
                <button
                  onClick={onBookClick}
                  className="btn-primary"
                  style={{
                    padding: '13px 26px',
                    backgroundColor: '#111111',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.12)'
                  }}
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Side: High-Impact Editorial Feature Image Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="why-us-image-box"
            style={{
              flex: '1 1 460px',
              position: 'relative',
              minHeight: 'clamp(640px, 82vh, 880px)',
              borderRadius: '6px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.08)'
            }}
          >
            <img
              className="why-img-gsap"
              src={image}
              alt="Why Choose Heer Technology & Control"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 6s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.04)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .why-us-image-box {
            min-height: 380px !important;
            height: 380px !important;
          }
        }
        @media (max-width: 640px) {
          .spec-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .spec-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 4px !important;
          }
          .spec-val {
            text-align: left !important;
            font-size: 0.9rem !important;
          }
          .why-us-image-box {
            min-height: 300px !important;
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
