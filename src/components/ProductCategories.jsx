import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function CategoryCard({ category, index, hoveredIndex, setHoveredIndex, onLearnMore }) {
  const isHovered = hoveredIndex === index;
  const isAnyHovered = hoveredIndex !== null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => onLearnMore && onLearnMore(category.title)}
      style={{
        position: 'relative',
        height: '460px',
        borderRadius: '16px',
        overflow: 'hidden',
        flex: isHovered
          ? '2.2 1 480px'
          : (isAnyHovered ? '0.8 1 240px' : '1 1 320px'),
        boxShadow: isHovered ? '0 30px 60px rgba(26, 29, 23, 0.4)' : '0 10px 30px rgba(0,0,0,0.18)',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0px)',
        transition: 'flex 0.55s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
        border: isHovered ? '1px solid rgba(197, 216, 164, 0.6)' : '1px solid rgba(255,255,255,0.15)',
        minWidth: '220px'
      }}
    >
      {/* Background Photography with Liquid Spring Zoom */}
      <img
        src={category.image}
        alt={category.title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transform: isHovered ? 'scale(1.12)' : 'scale(1)',
          transition: 'transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      />

      {/* Subtle Bottom-Only Vignette for Text Contrast (No Black Overlay over Photo) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,0.52) 100%)',
          transition: 'background 0.4s ease'
        }}
      />

      {/* Sweeping Liquid Glass Shimmer Wave */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: isHovered ? '160%' : '-160%',
          width: '120%',
          height: '100%',
          background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%)',
          transform: 'skewX(-25deg)',
          transition: 'left 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
          zIndex: 2
        }}
      />

      {/* Bottom Title Overlay */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          padding: '24px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          height: '100%'
        }}
      >
        <div>
          <h3 style={{
            fontSize: '1.45rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '6px',
            textShadow: '0 2px 10px rgba(0,0,0,0.6)'
          }}>
            {category.title}
          </h3>
          <p style={{
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.86)',
            margin: 0,
            maxWidth: '320px',
            lineHeight: 1.45,
            textShadow: '0 2px 8px rgba(0,0,0,0.6)'
          }}>
            {category.desc}
          </p>
        </div>

        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: isHovered ? 'var(--accent-sage)' : 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isHovered ? '#1a1d17' : '#ffffff',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'rotate(45deg) scale(1.08)' : 'rotate(0deg)',
            flexShrink: 0
          }}
        >
          <ArrowUpRight size={20} />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductCategories({ onBookSpecialist }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Precision Controller Cabinets",
      desc: "32-Bit multi-processor controller cabinets equipped with Heer phase failure relays and Spike transformers.",
      image: "/products/controller-cabinet.jpg"
    },
    {
      id: 2,
      title: "Touch Car Operating Panels (COP)",
      desc: "Champagne gold & black glass car operating panels engineered with zero-jerk logic and touch buttons.",
      image: "/products/cop-touch-panel.jpg"
    },
    {
      id: 3,
      title: "Complete COP & LOP Arrays",
      desc: "Matched sets of car operating panels and landing call boxes built for plug-and-play installation.",
      image: "/products/cop-lop-array.jpg"
    },
    {
      id: 4,
      title: "Glass Landing Call Panels (LOP)",
      desc: "Curved black glass touch landing panels with ultra-clear digital floor direction displays.",
      image: "/products/glass-display-lop.jpg"
    }
  ];

  return (
    <section id="mentors" className="section-padding" style={{ backgroundColor: '#faf8f2' }}>
      <div style={{ width: '100%', padding: '0 5px', margin: '0 auto' }}>
        {/* Minimal Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="wellness-tag">✦ OUR PRODUCT CATEGORIES</div>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.12,
            color: 'var(--text-main)'
          }}>
            Precision Controller Cabinets & Touch Panel Systems
          </h2>
        </div>

        {/* Responsive Flex Accordion Grid tightly joined with 5px margin across entire width */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
          alignItems: 'stretch',
          justifyContent: 'center',
          width: '100%'
        }}>
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              onLearnMore={(catName) => onBookSpecialist ? onBookSpecialist(catName) : null}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
