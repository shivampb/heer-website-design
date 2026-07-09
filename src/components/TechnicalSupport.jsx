import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, X, Pause } from 'lucide-react';
import { WELLNESS_DATA } from '../data/wellnessData';

export default function TechnicalSupport() {
  const { tag, title, cardHeadline, cardSubtext } = WELLNESS_DATA.companion;
  const [modalOpen, setModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Title Top Bar */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="wellness-tag">{tag}</div>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.12
          }}>
            {title}
          </h2>
        </div>

        {/* Minimalist Expansive Diagnostic Feature Split Layout */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          overflow: 'hidden',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: 'var(--shadow-md)',
          padding: 'clamp(28px, 5vw, 48px)'
        }}>
          {/* Left Minimalist Text Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              padding: '12px',
              flex: '1 1 360px',
              maxWidth: '460px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <h3 style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.35rem)',
              fontWeight: 400,
              marginBottom: '20px',
              color: 'var(--text-main)',
              lineHeight: 1.25,
              letterSpacing: '-0.02em'
            }}>
              {cardHeadline}
            </h3>
            <p style={{
              fontSize: '1.02rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              marginBottom: '36px'
            }}>
              {cardSubtext}
            </p>
            <div>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary"
                style={{
                  padding: '14px 26px',
                  fontSize: '0.94rem',
                  backgroundColor: 'var(--accent-olive-dark)',
                  borderRadius: '6px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.18)'
                }}
              >
                <Sparkles size={16} style={{ marginRight: '8px' }} />
                <span>Explore Controller Diagnostics</span>
              </button>
            </div>
          </motion.div>

          {/* Right Expansive Video Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="support-video-box"
            style={{
              position: 'relative',
              height: 'clamp(480px, 65vh, 720px)',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              flex: '2 1 520px',
              backgroundColor: '#1a1d17'
            }}
          >
            <video
              src="https://assets.mixkit.co/videos/256/256-720.mp4"
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
                objectPosition: 'center'
              }}
            >
              <source src="https://assets.mixkit.co/videos/256/256-720.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>

        {/* Diagnostic Modal */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={() => setModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="support-modal"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  padding: '40px',
                  maxWidth: '480px',
                  width: 'calc(100% - 24px)',
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  textAlign: 'center',
                  position: 'relative',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <button
                  onClick={() => setModalOpen(false)}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-muted)'
                  }}
                >
                  <X size={20} />
                </button>

              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-olive-light)',
                color: 'var(--accent-olive)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <Sparkles size={24} />
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Interactive Diagnostic Consultation</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '28px', lineHeight: 1.6 }}>
                Direct telemetry access for elevator field technicians and site engineers. Connect securely with diagnostic support systems below.
              </p>

              {/* Simulated Telemetry Visualizer */}
              <div style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '28px',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.86rem', fontWeight: 600 }}>Real-Time Telemetry Link</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Live Feed</span>
                </div>
                
                {/* Waveform bars */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '36px', justifyContent: 'center', marginBottom: '16px' }}>
                  {[40, 70, 30, 90, 60, 100, 45, 80, 50, 65, 35, 85, 95, 40, 75, 55, 60, 30, 80, 50].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={isPlaying ? { height: [`${h}%`, `${Math.max(20, (h * 1.4) % 100)}%`, `${h}%`] } : { height: `${h * 0.3}%` }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.05 }}
                      style={{
                        width: '4px',
                        backgroundColor: i < 8 ? 'var(--accent-olive)' : 'rgba(0,0,0,0.15)',
                        borderRadius: '2px'
                      }}
                    />
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--text-main)',
                      color: '#ffffff',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }}
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} fill="currentColor" style={{ marginLeft: '3px' }} />}
                  </button>
                </div>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--accent-olive)', fontWeight: 600 }}>
                ✦ 24/7 Field Diagnostic Telemetry for Elevator Technicians
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .support-video-box {
            height: 340px !important;
            min-height: 340px !important;
            flex: 1 1 100% !important;
          }
        }
        @media (max-width: 640px) {
          .support-video-box {
            height: 280px !important;
            min-height: 280px !important;
          }
          .support-modal {
            padding: 24px 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
