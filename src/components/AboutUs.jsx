import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Cpu, Users, Award, ArrowRight } from 'lucide-react';
import { WELLNESS_DATA } from '../data/wellnessData';

function Word({ children, progress, range, isBold }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{
        opacity: opacity,
        fontWeight: isBold ? 600 : 300,
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

export default function AboutUs({ onExploreProducts }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.88", "end 0.45"]
  });

  const statementText = "Heer Technology & Control, established in 2009, is a recognised manufacturer of precision Elevator Controller Cabinets, Touch Car Operating Panels (COP), and Landing Call Boxes (LOP). With over 15,000 units in service, we are large enough to handle any size project and small enough to deliver the best service in the industry. Our mission is to engineer equipment that is simple, solid, and supportable for customers to install, adjust, and maintain.";
  const boldPhrases = ["Heer", "Technology", "&", "Control,", "established", "in", "2009,", "15,000", "units", "large", "enough", "small", "enough", "simple,", "solid,", "and", "supportable"];
  
  const allWords = statementText.split(/\s+/).filter(Boolean).map(w => ({
    text: w,
    isBold: boldPhrases.some(bp => w.toLowerCase().includes(bp.toLowerCase()))
  }));

  const highlights = [
    {
      icon: <Cpu size={24} color="var(--accent-olive)" />,
      title: "Precision Controller Cabinets",
      desc: "Advanced 32-bit multi-processor cabinet architectures built specifically for geared and gearless vertical transportation."
    },
    {
      icon: <ShieldCheck size={24} color="var(--accent-olive)" />,
      title: "Simple. Solid. Supportable.",
      desc: "Clean terminal layouts, intuitive field parameter adjustments, and crystal-clear diagnostics designed for technicians."
    },
    {
      icon: <Users size={24} color="var(--accent-olive)" />,
      title: "15,000+ Units in Service",
      desc: "Proven operational track record across commercial towers, residential complexes, and heavy industrial freight lifts."
    },
    {
      icon: <Award size={24} color="var(--accent-olive)" />,
      title: "Industry Best Service",
      desc: "Direct engineering support, rapid troubleshooting assistance, and plug-and-play modernization capabilities."
    }
  ];

  return (
    <section id="about-us" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ width: '100%', padding: '0 5px', margin: '0 auto' }}>
        {/* Top Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="wellness-tag">✦ ABOUT HEER TECHNOLOGY & CONTROL</div>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.12,
            color: 'var(--text-main)'
          }}>
            Engineered for Reliability Since 2009
          </h2>
        </div>

        {/* Scroll Word-by-Word Reveal Paragraph */}
        <p
          ref={containerRef}
          style={{
            fontSize: 'clamp(1.4rem, 2.8vw, 2.15rem)',
            maxWidth: '1020px',
            margin: '0 auto 64px auto',
            lineHeight: 1.5,
            letterSpacing: '-0.015em',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            textAlign: 'center'
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

        {/* 4 Cards Grid tightly joined with 5px gap */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '5px',
          marginBottom: '56px'
        }}>
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              style={{
                backgroundColor: '#ffffff',
                padding: '36px 30px',
                borderRadius: '10px',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '10px',
                backgroundColor: 'var(--accent-olive-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        {onExploreProducts && (
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={onExploreProducts}
              className="btn-glass"
              style={{ padding: '14px 30px', fontSize: '0.95rem', borderRadius: '6px' }}
            >
              <span>Explore Our Elevator Controllers</span>
              <div className="btn-icon-circle">
                <ArrowRight size={14} />
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
