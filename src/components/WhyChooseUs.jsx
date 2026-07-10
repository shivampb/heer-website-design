import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { WELLNESS_DATA } from '../data/wellnessData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs({ onBookClick }) {
  const { image } = WELLNESS_DATA.whyChooseUs;
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const slides = [
    {
      id: 0,
      title: "Precision Controller Cabinets & Touch Operating Panels.",
      quote: "Engineered for any scale installation and backed by direct engineering service—every Heer controller cabinet and touch operating panel eliminates unnecessary complexity to deliver rock-solid vertical transportation and rapid field diagnostics.",
      badgeTitle: "Heer Flagship Series",
      badgeSub: "32-Bit Microprocessor Lift Controller (Closed Loop)",
      image: image || "/products/cop-touch-panel.jpg",
      specs: [
        { label: "Category", value: "Controller Cabinets & Touch COP/LOP Panels" },
        { label: "Installations", value: "15,000+ Active Units Globally" },
        { label: "Architecture", value: "32-Bit Solid-State Logic & VVVF" },
        { label: "Support Model", value: "Direct Engineering Schematics Desk" }
      ]
    },
    {
      id: 1,
      title: "Integrated VVVF Drive Systems & Spike Protection.",
      quote: "Featuring heavy-duty phase failure relays, surge protection, and ultra-smooth VVVF drive integration. Our microprocessor logic ensures zero-jerk acceleration and millimeter-perfect floor leveling across high-rise installations.",
      badgeTitle: "Power & Control Division",
      badgeSub: "Heavy-Duty Drive & Multi-Stage Protection Unit",
      image: "/products/controller-cabinet.jpg",
      specs: [
        { label: "Motor Control", value: "Vector VVVF Drive Integration" },
        { label: "Protection", value: "Multi-Stage Spike & Phase Failure Relays" },
        { label: "Leveling", value: "Millimeter-Precise Closed Loop Feedback" },
        { label: "Reliability", value: "Zero Nuisance Fault Architecture" }
      ]
    },
    {
      id: 2,
      title: "Glass Touch COP/LOP Arrays & Field Telemetry.",
      quote: "Tempered champagne gold and obsidian black glass panels with high-contrast digital directional arrows. Combined with our plug-and-play wiring harnesses for rapid 24-hour deployment and remote diagnostic monitoring.",
      badgeTitle: "Operating Interface Division",
      badgeSub: "Touch Array & Remote Diagnostics Package",
      image: "/products/glass-display-lop.jpg",
      specs: [
        { label: "Interface", value: "Obsidian & Champagne Gold Glass Panels" },
        { label: "Display", value: "High-Contrast Matrix Direction Arrows" },
        { label: "Harness", value: "Plug-and-Play Quick Connect Terminals" },
        { label: "Monitoring", value: "24/7 Field Telemetry & Diagnostic Desk" }
      ]
    }
  ];

  // Auto-advance carousel every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  // GSAP animation when changing slide content
  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.carousel-anim-item',
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.08, ease: 'power3.out' }
      );
    }, contentRef);
    return () => ctx.revert();
  }, [activeSlide]);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const current = slides[activeSlide];

  return (
    <section
      id="why-us"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        backgroundColor: '#f6f4ee',
        padding: '60px 20px 80px 20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      {/* Full Screen Width & Height Container Card matching Reference Image 2 */}
      <div
        className="carousel-main-card"
        style={{
          width: '100%',
          maxWidth: '1600px',
          minHeight: 'calc(100vh - 160px)',
          backgroundColor: '#fcfbf8',
          borderRadius: '44px',
          boxShadow: '0 30px 90px rgba(18, 22, 15, 0.09)',
          border: '1px solid rgba(0,0,0,0.06)',
          display: 'flex',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Left Half: Clean Editorial Typography, Quote, Specs, and Role Attribution (Reference 2 style) */}
        <div
          ref={contentRef}
          className="carousel-text-panel"
          style={{
            flex: '1 1 52%',
            padding: 'clamp(36px, 5.5vw, 76px) clamp(30px, 5vw, 68px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 10
          }}
        >
          <div>
            {/* Top Tag & Slide Counter */}
            <div className="carousel-anim-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
              <span className="wellness-tag" style={{ margin: 0 }}>
                ✦ WHY CHOOSE HEER • SERIES 0{activeSlide + 1}/0{slides.length}
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid #dcdcdc',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#222',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#111'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#dcdcdc'}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Slide"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid #dcdcdc',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#222',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#111'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#dcdcdc'}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Editorial Title */}
            <h2
              className="carousel-anim-item"
              style={{
                fontSize: 'clamp(2rem, 3.1vw, 3.2rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: '#111111',
                marginBottom: '24px'
              }}
            >
              {current.title}
            </h2>

            {/* Editorial Quote matching "Leka Studio completely transformed..." in Reference 2 */}
            <p
              className="carousel-anim-item"
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
                color: '#444444',
                lineHeight: 1.68,
                maxWidth: '640px',
                marginBottom: '36px',
                fontWeight: 400
              }}
            >
              "{current.quote}"
            </p>

            {/* Engineering Specs Table block */}
            <div
              className="carousel-anim-item spec-table-block"
              style={{
                borderTop: '1px solid #e2ded6',
                borderBottom: '1px solid #e2ded6',
                paddingTop: '20px',
                paddingBottom: '14px',
                marginBottom: '36px',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '14px 28px'
              }}
            >
              {current.specs.map((spec, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.78rem', color: '#888888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '3px' }}>
                    {spec.label}
                  </span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#111111' }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Left: Role / Attribution Title ("General Manager / Luxury Resort" style from Ref 2) + Button */}
          <div
            className="carousel-anim-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111111', marginBottom: '3px' }}>
                {current.badgeTitle}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#777777', fontWeight: 400 }}>
                {current.badgeSub}
              </div>
            </div>

            <button
              onClick={() => onBookClick && onBookClick(current.badgeSub)}
              className="btn-primary"
              style={{
                padding: '14px 28px',
                backgroundColor: '#111111',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.94rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
                transition: 'transform 0.2s ease, background 0.2s ease'
              }}
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Right Half: Full Height Photo with distinctive Curved / Rounded Left Edge (Reference 2 style) */}
        <div
          className="carousel-image-panel"
          style={{
            flex: '1 1 48%',
            position: 'relative',
            overflow: 'hidden',
            borderTopLeftRadius: '70px',
            borderBottomLeftRadius: '70px',
            boxShadow: '-12px 0 35px rgba(0,0,0,0.06)'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current.image}
              src={current.image}
              alt={current.title}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </AnimatePresence>

          {/* Subtle overlay gradient on image for richness */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.25) 100%)',
              pointerEvents: 'none'
            }}
          />
        </div>
      </div>

      {/* Three Navigation Dots Below the Section (Exact user requirement) */}
      <div
        className="carousel-dots-wrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          marginTop: '32px',
          zIndex: 20
        }}
      >
        {slides.map((_, idx) => {
          const isActive = activeSlide === idx;
          return (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                height: '10px',
                width: isActive ? '36px' : '10px',
                borderRadius: '999px',
                backgroundColor: isActive ? '#111111' : '#cccccc',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                padding: 0,
                boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.25)' : 'none'
              }}
            />
          );
        })}
      </div>

      {/* Responsive Styles for Mobile and Tablet */}
      <style>{`
        @media (max-width: 960px) {
          .carousel-main-card {
            flex-direction: column !important;
            border-radius: 28px !important;
            min-height: auto !important;
          }
          .carousel-image-panel {
            min-height: 380px !important;
            width: 100% !important;
            border-top-left-radius: 0 !important;
            border-top-right-radius: 0 !important;
            border-bottom-left-radius: 28px !important;
            border-bottom-right-radius: 28px !important;
            order: -1 !important;
          }
          .carousel-text-panel {
            padding: 36px 24px !important;
          }
          .spec-table-block {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
        @media (max-width: 640px) {
          #why-us {
            padding: 40px 12px 60px 12px !important;
          }
          .carousel-main-card {
            border-radius: 22px !important;
          }
          .carousel-image-panel {
            min-height: 280px !important;
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
          }
          .carousel-text-panel {
            padding: 28px 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
