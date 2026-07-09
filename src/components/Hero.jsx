import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WELLNESS_DATA } from '../data/wellnessData';

export default function Hero({ onStartJourney }) {
  const { tagline, subtitle } = WELLNESS_DATA.hero;

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: 'calc(100% - 16px)',
        height: 'calc(100vh - 16px)',
        margin: '8px',
        minHeight: '600px',
        overflow: 'hidden',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#11130e',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
      }}
    >
      {/* Background Video Covering Entire Hero Section */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 1,
          borderRadius: '15px'
        }}
      >
        <source src="https://assets.mixkit.co/videos/3093/3093-720.mp4" type="video/mp4" />
      </video>

      {/* Subtle Light Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(12,14,10,0.2) 50%, rgba(12,14,10,0.38) 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Centered Typography Block */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '840px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Tagline Pill */}
          <div
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              marginBottom: '24px'
            }}
          >
            {tagline || "ESTABLISHED IN 2009 • OVER 15,000+ UNITS IN SERVICE"}
          </div>

          {/* Refined Centered Heading */}
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.6rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '20px',
              textShadow: '0 4px 24px rgba(0,0,0,0.5)'
            }}
          >
            Heer Technology & Control<br />
            <span style={{ color: 'var(--accent-olive-light, #c4d1b4)', fontWeight: 400 }}>
              Simple. Solid. Supportable.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '1.02rem',
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: '640px',
              margin: '0 auto 36px auto',
              lineHeight: 1.6,
              textShadow: '0 2px 12px rgba(0,0,0,0.5)'
            }}
          >
            {subtitle}
          </p>

          {/* Centered Action Button with 6px Curve */}
          <button
            onClick={onStartJourney}
            className="btn-primary"
            style={{
              padding: '12px 28px',
              fontSize: '0.94rem',
              borderRadius: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.35)'
            }}
          >
            <span>Explore Systems</span>
            <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
