import React, { useRef, useState, useEffect } from 'react';
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

export default function OurMission({ onMeetSpecialists }) {
  const { tag, headlineText, boldText, trailingText, gallery } = WELLNESS_DATA.philosophy;
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.philosophy-card-gsap', 
        { y: 70, opacity: 0, rotateX: 12 }, 
        { 
          y: 0, 
          opacity: 1, 
          rotateX: 0, 
          stagger: 0.18, 
          duration: 1.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

        {/* Clean 3-Column Grid of Cards with 10px total gap, 5px width margin, and 10px curve border */}
        <style>{`
          .mission-grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            width: 100%;
            max-width: calc(100vw - 10px);
            margin: 0 auto 56px auto;
            padding: 0 5px;
            text-align: left;
          }
          @media (max-width: 960px) {
            .mission-grid-container {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .mission-grid-container {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
        <div className="mission-grid-container">
          {gallery.map((item, index) => {
            const isHovered = hoveredCard === index;
            return (
              <div
                key={item.id}
                className="philosophy-card-gsap"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: isHovered ? '0 20px 48px rgba(0, 0, 0, 0.12)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0px)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer'
                }}
              >
                {/* Top Image Area (No text overlay blocking pristine marketing posters) */}
                <div style={{
                  position: 'relative',
                  height: '320px',
                  width: '100%',
                  overflow: 'hidden',
                  backgroundColor: '#111111'
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                  {/* Subtle Shimmer on Hover */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: isHovered ? '160%' : '-160%',
                    width: '120%',
                    height: '100%',
                    background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                    transform: 'skewX(-25deg)',
                    transition: 'left 0.75s ease',
                    pointerEvents: 'none'
                  }} />
                </div>

                {/* Bottom Card Content Box */}
                <div style={{
                  padding: '26px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  backgroundColor: '#ffffff'
                }}>
                  <h4 style={{
                    color: '#111111',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    marginBottom: '8px',
                    letterSpacing: '-0.01em'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    color: '#555555',
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Button Below Gallery */}
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
    </section>
  );
}
