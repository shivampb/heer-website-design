import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Award, Zap, Star } from 'lucide-react';
import { WELLNESS_DATA } from '../data/wellnessData';

export default function Quality() {
  const reviews = WELLNESS_DATA.reviews?.items || [];

  const qualityStandards = [
    {
      icon: <Zap size={24} color="var(--accent-olive)" />,
      title: "100% Thermal & Burn-In Testing",
      desc: "Every microprocessor control board undergoes rigorous 72-hour continuous thermal stress and full-load burn-in testing prior to dispatch."
    },
    {
      icon: <Shield size={24} color="var(--accent-olive)" />,
      title: "Multi-Layer Noise Immune PCBs",
      desc: "Industrial-grade multi-layer circuit design with optical isolation to withstand electrical noise, voltage fluctuations, and harsh shaft environments."
    },
    {
      icon: <CheckCircle size={24} color="var(--accent-olive)" />,
      title: "ISO Compliant Safety Logic",
      desc: "Strict adherence to national and international vertical transportation safety codes with redundant hardware safety interlocks."
    },
    {
      icon: <Award size={24} color="var(--accent-olive)" />,
      title: "15,000+ Units Track Record",
      desc: "Our quality metrics are proven in the field across more than 15,000 active elevator installations operating daily without nuisance faults."
    }
  ];

  return (
    <section id="quality" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Top Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="wellness-tag">✦ UNCOMPROMISING ENGINEERING QUALITY</div>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.12,
            color: 'var(--text-main)'
          }}>
            Built to Perform Without Compromise
          </h2>
          <p style={{
            fontSize: '1.08rem',
            color: 'var(--text-muted)',
            maxWidth: '720px',
            margin: '18px auto 0 auto',
            lineHeight: 1.6
          }}>
            Our manufacturing and quality assurance processes ensure every elevator controller is solid, dependable, and ready for decades of heavy duty cycle operation.
          </p>
        </div>

        {/* 4 Quality Benchmarks Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '72px'
        }}>
          {qualityStandards.map((item, index) => (
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

        {/* Industry Testimonials Sub-section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="wellness-tag">✦ CONTRACTOR ENDORSEMENTS</div>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>
            Trusted by Elevator Contractors Nationwide
          </h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{
                backgroundColor: '#ffffff',
                padding: '36px',
                borderRadius: '10px',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(0,0,0,0.04)'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', color: '#e5a823' }}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p style={{
                  fontSize: '0.98rem',
                  color: 'var(--text-main)',
                  lineHeight: 1.6,
                  marginBottom: '28px'
                }}>
                  "{review.text}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <img
                  src={review.avatar}
                  alt={review.name}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '2px' }}>
                    {review.name}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--accent-olive)', fontWeight: 600 }}>
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
