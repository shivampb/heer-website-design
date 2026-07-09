import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Sparkles, Globe, MessageSquare, Share2 } from 'lucide-react';
import { WELLNESS_DATA } from '../data/wellnessData';

const SocialInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const SocialLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const SocialYouTube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3v6z"/>
  </svg>
);

export default function Footer({ onBookClick }) {
  const { title, subtext, buttonText, image } = WELLNESS_DATA.finalCta;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Final CTA Full-Width Video Banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: 'clamp(520px, 72vh, 760px)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0c0c0c'
      }}>
        {/* Full Width Background Video */}
        <video
          src="https://www.pexels.com/download/video/32386624/"
          poster={image}
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
            zIndex: 1
          }}
        >
          <source src="https://www.pexels.com/download/video/32386624/" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/32386624/32386624-hd_1920_1080_24fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/32386624/32386624-sd_640_360_24fps.mp4" type="video/mp4" />
        </video>

        {/* Subtle Light Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(12,14,10,0.36) 100%)',
          zIndex: 2
        }} />

        {/* Minimalist High-Contrast CTA On Video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="container"
          style={{
            position: 'relative',
            zIndex: 3,
            padding: '80px 24px',
            textAlign: 'center',
            maxWidth: '780px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.18,
            color: '#ffffff',
            margin: 0,
            textShadow: '0 4px 24px rgba(0,0,0,0.65)'
          }}>
            {title}
          </h2>

          <button
            onClick={onBookClick}
            className="btn-primary"
            style={{
              padding: '16px 36px',
              fontSize: '1rem',
              backgroundColor: 'var(--accent-olive-light)',
              color: 'var(--bg-dark)',
              borderRadius: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: 600,
              boxShadow: '0 14px 36px rgba(0,0,0,0.45)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <span>{buttonText || "Request Technical Consultation"}</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Main Luxury Dark Footer Box */}
      <div style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-inverse)',
        paddingTop: '52px',
        paddingBottom: '28px',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div
            className="footer-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '40px',
              marginBottom: '48px',
              alignItems: 'flex-start'
            }}
          >
            {/* Brand Minimalist Column (No long company description) */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: '#ffffff',
                  color: '#111111',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.05rem'
                }}>
                  H
                </div>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.35rem', color: '#ffffff' }}>
                  Heer <span style={{ fontSize: '0.82rem', fontWeight: 400, color: '#aaaaaa' }}>Technology & Control</span>
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                {[SocialInstagram, SocialLinkedIn, SocialYouTube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#social"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = '#111111';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.04em' }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: '#aaaaaa' }}>
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Our Mission', id: 'philosophy' },
                  { label: 'Why Choose Heer', id: 'why-us' },
                  { label: 'Industry Testimonials', id: 'reviews' },
                  { label: 'Product Categories', id: 'mentors' },
                ].map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        fontSize: 'inherit',
                        textAlign: 'left'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                      onMouseLeave={(e) => e.target.style.color = '#aaaaaa'}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Minimal Column */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.04em' }}>
                Technical Updates
              </h4>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  placeholder="Enter engineer email"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    padding: '9px 14px',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.84rem',
                    outline: 'none',
                    flex: 1
                  }}
                />
                <button
                  className="btn-primary"
                  style={{
                    padding: '9px 16px',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                    color: '#111111',
                    fontSize: '0.84rem',
                    fontWeight: 600
                  }}
                  onClick={() => alert('Thank you for subscribing!')}
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Clean Minimalist Bottom Bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.8rem',
            color: '#777777'
          }}>
            <span>© {new Date().getFullYear()} Heer Technology & Control. Established 2009. All rights reserved.</span>
            <span>Simple, Solid & Supportable Elevator Control</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
