import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { WELLNESS_DATA } from '../data/wellnessData';

function ReviewCard({ review, index, hoveredId, setHoveredId }) {
  const isHovered = hoveredId === review.id + '-' + index;

  return (
    <div
      onMouseEnter={() => setHoveredId(review.id + '-' + index)}
      onMouseLeave={() => setHoveredId(null)}
      style={{
        position: 'relative',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        padding: '20px 22px',
        boxShadow: isHovered
          ? '0 14px 36px rgba(0,0,0,0.07)'
          : '0 2px 14px rgba(0,0,0,0.03)',
        border: isHovered
          ? '1px solid rgba(197, 216, 164, 0.8)'
          : '1px solid rgba(0, 0, 0, 0.05)',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border 0.4s ease',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0px)',
        cursor: 'pointer',
        marginBottom: '16px'
      }}
    >
      {/* Top Header: Minimalist Avatar + Author Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
        <img
          src={review.avatar}
          alt={review.name}
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1.5px solid rgba(0,0,0,0.06)'
          }}
        />
        <div>
          <h4 style={{
            fontSize: '0.92rem',
            fontWeight: 600,
            color: 'var(--text-main)',
            marginBottom: '2px',
            lineHeight: 1.25
          }}>
            {review.name}
          </h4>
          <p style={{
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            fontWeight: 400,
            margin: 0
          }}>
            {review.role}
          </p>
        </div>
      </div>

      {/* Minimalist Paragraph Quote Sized to Requirement */}
      <p style={{
        fontSize: '0.86rem',
        color: 'var(--text-main)',
        lineHeight: 1.58,
        margin: 0,
        fontWeight: 400
      }}>
        {review.text}
      </p>
    </div>
  );
}

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState(null);
  const { items } = WELLNESS_DATA.reviews;

  // Split testimonials into 2 columns for the dual vertical slow carousel grid
  const col1Items = items.filter((_, i) => i % 2 === 0);
  const col2Items = items.filter((_, i) => i % 2 !== 0);

  // Duplicate arrays for continuous endless vertical loop
  const loopCol1 = [...col1Items, ...col1Items, ...col1Items];
  const loopCol2 = [...col2Items, ...col2Items, ...col2Items];

  return (
    <section id="reviews" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
      <style>{`
        @keyframes testimonialsScrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes testimonialsScrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .col-scroll-up {
          animation: testimonialsScrollUp 70s linear infinite;
        }
        .col-scroll-down {
          animation: testimonialsScrollDown 75s linear infinite;
        }
        .col-scroll-up:hover, .col-scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{ width: '100%', padding: '0 16px', margin: '0 auto', maxWidth: '1400px' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '56px',
          alignItems: 'flex-start',
          justifyContent: 'space-between'
        }}>
          {/* Left Sticky Information Column (660px height matching right column to split top heading and bottom stats) */}
          <div style={{
            flex: '1 1 420px',
            maxWidth: '520px',
            position: 'sticky',
            top: '100px',
            paddingTop: '0px',
            marginTop: '0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '660px'
          }}>
            {/* Top Block: Tag, Heading, Paragraph */}
            <div>
              <div className="wellness-tag" style={{ marginBottom: '16px', marginTop: '0px' }}>
                ✦ INDUSTRY TESTIMONIALS
              </div>

              <h2 style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                color: 'var(--text-main)',
                marginBottom: '24px'
              }}>
                What our clients say
              </h2>

              <p style={{
                fontSize: '1.02rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                marginBottom: '0px',
                fontWeight: 400
              }}>
                We've worked with the best elevator contractors across the nation to power over 15,000+ active vertical installations. We do away with the inefficiencies & nuisance faults that plague most controller boards.
              </p>
            </div>

            {/* Bottom Block: Stats Row lifted down to the bottom edge of left side */}
            <div style={{ display: 'flex', gap: '56px', alignItems: 'flex-start', marginTop: 'auto', paddingBottom: '10px' }}>
              <div>
                <div style={{
                  fontSize: 'clamp(2.1rem, 3.5vw, 2.8rem)',
                  fontWeight: 400,
                  color: 'var(--text-main)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05
                }}>
                  300+
                </div>
                <div style={{
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginTop: '8px'
                }}>
                  TESTIMONIALS
                </div>
              </div>

              <div>
                <div style={{
                  fontSize: 'clamp(2.1rem, 3.5vw, 2.8rem)',
                  fontWeight: 400,
                  color: 'var(--text-main)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05
                }}>
                  15,000+
                </div>
                <div style={{
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginTop: '8px'
                }}>
                  ACTIVE UNITS
                </div>
              </div>
            </div>
          </div>

          {/* Right Dual-Column Slow Marquee Carousel Grid */}
          <div style={{
            flex: '1.4 1 560px',
            display: 'flex',
            gap: '16px',
            height: '660px',
            overflow: 'hidden',
            position: 'relative',
            maskImage: 'linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)'
          }}>
            {/* Vertical Column 1 (Scrolling Up Slowly) */}
            <div className="col-scroll-up" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
              {loopCol1.map((review, idx) => (
                <ReviewCard
                  key={`col1-${review.id}-${idx}`}
                  review={review}
                  index={idx}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                />
              ))}
            </div>

            {/* Vertical Column 2 (Scrolling Down/Up Slowly with Stagger) */}
            <div className="col-scroll-down" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
              {loopCol2.map((review, idx) => (
                <ReviewCard
                  key={`col2-${review.id}-${idx}`}
                  review={review}
                  index={idx}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
