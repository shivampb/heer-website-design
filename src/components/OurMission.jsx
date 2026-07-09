import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WELLNESS_DATA } from '../data/wellnessData';
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

        {/* Endless Carousel Loop CSS & Track */}
        <style>{`
          @keyframes endlessCarouselScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .endless-carousel-track {
            display: flex;
            gap: 5px;
            width: max-content;
            animation: endlessCarouselScroll 60s linear infinite;
          }
          .endless-carousel-track:hover {
            animation-play-state: paused;
          }
          @media (max-width: 640px) {
            .gallery-card {
              width: 270px !important;
              flex: 0 0 270px !important;
              height: 340px !important;
            }
            .gallery-card h4 {
              font-size: 1.12rem !important;
            }
            .gallery-card p {
              font-size: 0.84rem !important;
            }
          }
        `}</style>

        <div style={{
          width: '100%',
          overflow: 'hidden',
          marginBottom: '56px',
          position: 'relative'
        }}>
          <div className="endless-carousel-track">
            {[...gallery, ...gallery].map((item, index) => {
              const isHovered = hoveredCard === index;
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="philosophy-card-gsap gallery-card"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    position: 'relative',
                    height: '380px',
                    width: '320px',
                    flex: '0 0 320px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: isHovered ? '0 24px 54px rgba(28, 34, 20, 0.45)' : 'var(--shadow-sm)',
                    cursor: 'pointer',
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0px)',
                    transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease',
                    border: isHovered ? '1px solid rgba(197, 216, 164, 0.65)' : '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  {/* Background Image with Liquid Cubic Spring Zoom */}
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: isHovered ? 'scale(1.14)' : 'scale(1)',
                      transition: 'transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  />

                  {/* High-Contrast Bottom Vignette for Perfect Text Legibility */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 48%, rgba(0,0,0,0.85) 100%)',
                    transition: 'background 0.4s ease'
                  }} />

                  {/* Sweeping Liquid Glass Shimmer Wave */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: isHovered ? '160%' : '-160%',
                    width: '120%',
                    height: '100%',
                    background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0) 100%)',
                    transform: 'skewX(-25deg)',
                    transition: 'left 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
                    pointerEvents: 'none',
                    zIndex: 2
                  }} />

                  {/* Card Text Information */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '26px 22px',
                    textAlign: 'left',
                    zIndex: 3,
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0px)',
                    transition: 'transform 0.4s ease'
                  }}>
                    <h4 style={{
                      color: '#ffffff',
                      fontSize: '1.24rem',
                      fontWeight: 600,
                      marginBottom: '6px',
                      textShadow: '0 2px 10px rgba(0,0,0,0.6)'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      color: 'rgba(255,255,255,0.86)',
                      fontSize: '0.88rem',
                      lineHeight: 1.45,
                      margin: 0,
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)'
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
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
