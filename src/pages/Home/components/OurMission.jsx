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

export default function OurMission({ onMeetSpecialists }) {
  const navigate = useNavigate();
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
        {/* Clean Minimalist 2-Row Architectural Grid with Taller Photos & 2-Card Hover Expansion */}
        <style>{`
          .mission-rows-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            width: 100%;
            max-width: 1280px;
            margin: 0 auto 64px auto;
            padding: 0 16px;
          }
          .mission-row-grid {
            display: grid;
            gap: 20px;
            width: 100%;
            transition: grid-template-columns 0.55s cubic-bezier(0.16, 1, 0.3, 1);
          }
          @media (max-width: 960px) {
            .mission-row-grid {
              grid-template-columns: 1fr !important;
              gap: 16px;
            }
          }
        `}</style>
        <div className="mission-rows-wrapper">
          {/* We render exactly 2 rows of cards (3 cards per row) */}
          {[gallery.slice(0, 3), gallery.slice(3, 6)].map((rowItems, rowIndex) => {
            // Determine active grid columns based on which card is hovered inside this row
            const hoveredInThisRow = rowItems.findIndex((_, idx) => hoveredCard === rowIndex * 3 + idx);
            let gridCols = '1fr 1fr 1fr';
            if (hoveredInThisRow === 0) gridCols = '2.15fr 0.925fr 0.925fr';
            else if (hoveredInThisRow === 1) gridCols = '0.925fr 2.15fr 0.925fr';
            else if (hoveredInThisRow === 2) gridCols = '0.925fr 0.925fr 2.15fr';

            return (
              <div
                key={rowIndex}
                className="mission-row-grid"
                style={{ gridTemplateColumns: gridCols }}
              >
                {rowItems.map((item, colIndex) => {
                  const globalIdx = rowIndex * 3 + colIndex;
                  const isHovered = hoveredCard === globalIdx;
                  const isRowActive = hoveredInThisRow !== -1;
                  const isHiddenByRowHover = isRowActive && !isHovered;

                  return (
                    <div
                      key={item.id}
                      className="philosophy-card-gsap"
                      onMouseEnter={() => setHoveredCard(globalIdx)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => navigate(item.categoryId ? `/products/${item.categoryId}` : '/products')}
                      style={{
                        position: 'relative',
                        height: '480px',
                        backgroundColor: '#ffffff',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        boxShadow: isHovered ? '0 28px 60px rgba(0, 0, 0, 0.18)' : '0 6px 24px rgba(0, 0, 0, 0.05)',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                        transition: 'all 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: isHovered ? 'translateY(-6px)' : 'translateY(0px)',
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer'
                      }}
                    >
                      {/* Product Photo - Exactly 330px when row not hovered, sweeps down to 100% height across the entire card when hovered or when adjacent card in row is hovered! */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: (isHovered || isHiddenByRowHover) ? '100%' : '330px',
                        overflow: 'hidden',
                        backgroundColor: '#111111',
                        borderRadius: (isHovered || isHiddenByRowHover) ? '10px' : '10px 10px 0 0',
                        transition: 'all 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                        zIndex: 1
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
                            transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        />
                        {/* Subtle Shimmer on Hover */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: isHovered ? '160%' : '-160%',
                          width: '120%',
                          height: '100%',
                          background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0) 100%)',
                          transform: 'skewX(-25deg)',
                          transition: 'left 0.75s ease',
                          pointerEvents: 'none'
                        }} />
                      </div>

                      {/* Bottom Text Box - Completely removed/hidden when another card in this row is hovered (isHiddenByRowHover), otherwise clean white or cinematic floating gradient! */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: isHiddenByRowHover ? '0px' : (isHovered ? '170px' : '150px'),
                        opacity: isHiddenByRowHover ? 0 : 1,
                        pointerEvents: isHiddenByRowHover ? 'none' : 'auto',
                        overflow: 'hidden',
                        padding: isHiddenByRowHover ? '0 26px' : '22px 26px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        background: isHovered 
                          ? 'linear-gradient(to top, rgba(10,12,8,0.94) 0%, rgba(10,12,8,0.78) 55%, transparent 100%)' 
                          : '#ffffff',
                        transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                        zIndex: 2
                      }}>
                        <div>
                          <h4 style={{
                            color: isHovered ? '#ffffff' : '#111111',
                            fontSize: isHovered ? '1.38rem' : '1.22rem',
                            fontWeight: 700,
                            marginBottom: '8px',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.25,
                            transition: 'all 0.35s ease',
                            textShadow: isHovered ? '0 2px 6px rgba(0,0,0,0.6)' : 'none'
                          }}>
                            {item.title}
                          </h4>
                          <p style={{
                            color: isHovered ? 'rgba(255, 255, 255, 0.88)' : '#666666',
                            fontSize: '0.94rem',
                            lineHeight: 1.6,
                            margin: 0,
                            transition: 'color 0.35s ease'
                          }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
