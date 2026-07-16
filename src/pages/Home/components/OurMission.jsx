import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WELLNESS_DATA } from '../../../data/wellnessData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Word({ children, progress, range, isBold }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{
        opacity: opacity,
        fontWeight: isBold ? 600 : 400,
        color: isBold ? 'var(--text-main)' : '#2d3748',
        display: 'inline-block',
        marginRight: '0.28em',
        transition: 'color 0.2s ease'
      }}
    >
      {children}
    </motion.span>
  );
}

const panels = [
  {
    id: 'control-panels',
    name: 'Control Panel',
    label: 'CONTROLLER CABINETS & DRIVE SYSTEMS',
    tagline: '32-bit multi-processor architecture with open-parameter access, non-proprietary firmware, and EN81-compliant safety logic.',
    image: '/products/PXL_20250618_145413258.jpg',
    path: '/products/control-panels'
  },
  {
    id: 'cop-lop',
    name: 'LOP & COP',
    label: 'LANDING & CAR OPERATING PANELS',
    tagline: 'Obsidian glass touch panels, stainless micro-stroke buttons, and high-contrast floor telemetry displays.',
    image: '/COP_LOP/COP_LOP/Unibody/Unibody_01.jpg',
    path: '/products/cop-lop'
  }
];

export default function OurMission({ onMeetSpecialists }) {
  const navigate = useNavigate();
  const { tag, headlineText, boldText, trailingText } = WELLNESS_DATA.philosophy;
  const [hovered, setHovered] = useState(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.25"]
  });

  const headlineWords = (headlineText || '').trim().split(/\s+/).filter(Boolean).map(w => ({ text: w, isBold: false }));
  const boldWords = (boldText || '').trim().split(/\s+/).filter(Boolean).map(w => ({ text: w, isBold: true }));
  const trailingWords = (trailingText || '').trim().split(/\s+/).filter(Boolean).map(w => ({ text: w, isBold: false }));
  const allWords = [...headlineWords, ...boldWords, ...trailingWords];

  return (
    <section id="philosophy" ref={sectionRef} className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ width: '100%', padding: '0 5px', margin: '0 auto', textAlign: 'center' }}>

        {/* Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="wellness-tag"
        >
          {tag}
        </motion.div>

        {/* Large Statement Text with Scroll Word-by-Word Opacity */}
        <p
          ref={containerRef}
          style={{
            fontSize: 'clamp(1.15rem, 2vw, 1.55rem)',
            maxWidth: '780px',
            margin: '0 auto 64px auto',
            lineHeight: 1.6,
            letterSpacing: '-0.01em',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {allWords.map((wordObj, i) => {
            const start = i / allWords.length;
            const end = start + (1 / allWords.length);
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                isBold={wordObj.isBold}
              >
                {wordObj.text}
              </Word>
            );
          })}
        </p>

        {/* ── Vega-style 2-Panel Product Showcase ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            width: '100%',
            marginBottom: '64px'
          }}
        >
          {panels.map((panel, i) => (
            <motion.div
              key={panel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate(panel.path)}
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                borderRight: i === 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                textAlign: 'left'
              }}
            >
              {/* Photo */}
              <div style={{
                width: '100%',
                height: 'clamp(280px, 38vw, 520px)',
                overflow: 'hidden',
                backgroundColor: '#111111',
                position: 'relative'
              }}>
                <img
                  src={panel.image}
                  alt={panel.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    transform: hovered === i ? 'scale(1.04)' : 'scale(1)',
                    transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </div>

              {/* Text Row Below Photo */}
              <div style={{
                padding: 'clamp(18px, 2.5vw, 32px) clamp(18px, 3.5vw, 44px)',
                borderTop: '1px solid rgba(0,0,0,0.1)',
                backgroundColor: 'var(--bg-primary)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '20px'
              }}>
                {/* Left text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.7rem, 2.8vw, 2.6rem)',
                    fontWeight: 400,
                    color: '#000000',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                    margin: '0 0 8px 0',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {panel.name}
                  </h2>
                  <div style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#888888',
                    marginBottom: '10px'
                  }}>
                    {panel.label}
                  </div>
                  <p style={{
                    fontSize: 'clamp(0.86rem, 1.2vw, 0.98rem)',
                    color: '#555555',
                    lineHeight: 1.65,
                    margin: 0,
                    maxWidth: '440px'
                  }}>
                    {panel.tagline}
                  </p>
                </div>

                {/* Arrow button */}
                <button
                  onClick={(e) => { e.stopPropagation(); navigate(panel.path); }}
                  aria-label={`Explore ${panel.name}`}
                  style={{
                    flexShrink: 0,
                    alignSelf: 'flex-start',
                    marginTop: '4px',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(0,0,0,0.22)',
                    background: hovered === i ? '#000000' : 'transparent',
                    color: hovered === i ? '#ffffff' : '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.28s ease, color 0.28s ease'
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button Below Panels */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button
            onClick={onMeetSpecialists}
            className="btn-glass"
            style={{ padding: '12px 26px', fontSize: '0.92rem', borderRadius: '6px' }}
          >
            <span>Explore Product Categories</span>
            <div className="btn-icon-circle">
              <ArrowRight size={13} />
            </div>
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          #philosophy .vega-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
