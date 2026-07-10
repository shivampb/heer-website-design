import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      quote: "Heer Technology & Control completely transformed our vertical transportation reliability. Our commercial towers now experience zero-jerk acceleration and rapid field diagnostics thanks to their 32-bit microprocessor controller cabinets and touch operating panels!",
      roleTitle: "32-Bit Microprocessor Controller",
      roleSub: "Flagship VVVF Lift Cabinet & Touch Logic Array",
      image: image || "/products/cop-touch-panel.jpg"
    },
    {
      id: 1,
      quote: "Our maintenance downtime dropped to virtually zero after upgrading to Heer integrated VVVF drive systems and multi-stage spike protection. Millimeter-perfect floor leveling has made our passenger elevators a major benchmark for quality!",
      roleTitle: "Integrated VVVF Vector Drive",
      roleSub: "Multi-Stage Phase Protection & Spike Relay Unit",
      image: "/products/controller-cabinet.jpg"
    },
    {
      id: 2,
      quote: "The tempered obsidian black and champagne gold glass touch LOP arrays gave our building lobby an ultra-luxury modern aesthetic. Combined with their 24/7 direct telemetry desk, Heer's support model is simply unmatched in the industry.",
      roleTitle: "Glass Touch COP & LOP Array",
      roleSub: "Tempered Obsidian & Champagne Gold Interface",
      image: "/products/glass-display-lop.jpg"
    }
  ];

  // Auto-advance carousel every 4.5 seconds unless paused (balanced auto slide speed)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  // GSAP animation when changing slide content
  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.carousel-anim-item',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
      );
    }, contentRef);
    return () => ctx.revert();
  }, [activeSlide]);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  const current = slides[activeSlide];

  return (
    <section
      id="why-us"
      ref={sectionRef}
      style={{
        backgroundColor: '#f5f3eb',
        minHeight: '100vh',
        height: '100vh',
        padding: '3vh 2vw 2vh 2vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      {/* Exact Reference Image 2 Main Card Structure (Taking ~100VH) */}
      <div
        className="carousel-main-card"
        style={{
          width: '100%',
          maxWidth: '1540px',
          height: 'calc(100vh - 80px)',
          minHeight: 'calc(100vh - 80px)',
          backgroundColor: '#fefdfb',
          borderRadius: '40px',
          boxShadow: '0 24px 70px rgba(20, 24, 16, 0.08)',
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid rgba(0,0,0,0.04)'
        }}
      >
        {/* Left Half: Ultra Minimalist Editorial Quote at TOP & Role at BOTTOM (creating large middle space) */}
        <div
          ref={contentRef}
          className="carousel-text-panel"
          style={{
            width: '48%',
            height: '100%',
            padding: 'clamp(20px, 2.8vw, 36px) clamp(18px, 2.4vw, 32px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 10
          }}
        >
          {/* Top: Large, Airy Editorial Quote fitted at the very top */}
          <div style={{ alignSelf: 'flex-start' }}>
            <p
              className="carousel-anim-item"
              style={{
                fontSize: 'clamp(1.02rem, 1.35vw, 1.22rem)',
                color: '#282828',
                lineHeight: 1.38,
                fontWeight: 400,
                letterSpacing: '-0.01em',
                margin: 0,
                fontFamily: 'inherit'
              }}
            >
              {current.quote}
            </p>
          </div>

          {/* Bottom: Author/Role/Division signature placed at the very bottom left */}
          <div
            className="carousel-anim-item"
            style={{
              alignSelf: 'flex-start',
              cursor: 'pointer'
            }}
            onClick={() => onBookClick && onBookClick(current.roleSub)}
            title="Click to schedule consultation desk for this division"
          >
            <div
              style={{
                fontSize: '1.18rem',
                fontWeight: 600,
                color: '#1a1a1a',
                marginBottom: '3px',
                letterSpacing: '-0.01em'
              }}
            >
              {current.roleTitle}
            </div>
            <div
              style={{
                fontSize: '0.94rem',
                color: '#888888',
                fontWeight: 400
              }}
            >
              {current.roleSub}
            </div>
          </div>
        </div>

        {/* Right Half: Photo with TRUE Diagonal Slant (-11deg) and 90px Curves at Top-Left & Bottom-Left */}
        <div
          className="carousel-image-panel"
          style={{
            position: 'absolute',
            right: '-25px',
            top: 0,
            bottom: 0,
            width: '58%',
            overflow: 'hidden'
          }}
        >
          {/* Skewed container (-11deg) with 90px bilateral curves on left corners */}
          <div
            className="image-clip-container"
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              borderRadius: '90px 40px 40px 90px',
              transform: 'skewX(-11deg)',
              transformOrigin: 'bottom left',
              backgroundColor: '#11130e',
              boxShadow: '-18px 0 45px rgba(0,0,0,0.06)'
            }}
          >
            {/* Counter-skewed upright image container */}
            <div
              style={{
                position: 'absolute',
                inset: '-15%',
                transform: 'skewX(11deg)',
                transformOrigin: 'bottom left',
                overflow: 'hidden'
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.roleTitle}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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

              {/* Subtle light grading overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.18) 100%)',
                  pointerEvents: 'none'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Three Dots Navigation Below the Section */}
      <div
        className="carousel-dots-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '22px',
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
                height: '8px',
                width: isActive ? '32px' : '8px',
                borderRadius: '999px',
                backgroundColor: isActive ? '#1a1a1a' : '#d2cfc6',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                padding: 0,
                boxShadow: isActive ? '0 2px 6px rgba(0,0,0,0.18)' : 'none'
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
            border-radius: 30px !important;
            height: auto !important;
            min-height: auto !important;
          }
          .carousel-text-panel {
            width: 100% !important;
            padding: 40px 28px !important;
          }
          .carousel-image-panel {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            bottom: auto !important;
            min-height: 380px !important;
            height: 380px !important;
            width: 100% !important;
            order: -1 !important;
          }
          .image-clip-container, .image-clip-container > div {
            transform: none !important;
            border-radius: 30px 30px 0 0 !important;
          }
        }
        @media (max-width: 640px) {
          #why-us {
            padding: 30px 14px 50px 14px !important;
          }
          .carousel-main-card {
            border-radius: 24px !important;
          }
          .carousel-image-panel {
            min-height: 280px !important;
            height: 280px !important;
          }
          .image-clip-container {
            border-radius: 24px 24px 0 0 !important;
          }
          .carousel-text-panel {
            padding: 32px 22px !important;
          }
        }
      `}</style>
    </section>
  );
}
