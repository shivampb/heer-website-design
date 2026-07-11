import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export default function AboutUs({ onExploreProducts }) {
  const navigate = useNavigate();
  const [openAccordion, setOpenAccordion] = useState(0);

  const pillars = [
    {
      id: 0,
      number: '01',
      title: 'Strategic Engineering & Open Architecture',
      desc: 'We design and assemble high-performance 32-bit microprocessor elevator controllers with non-proprietary open architecture. We deliver complete, unredacted electrical wiring schematics and open parameter access right out of the box, giving building owners and independent maintenance crews complete control over their vertical transportation assets.'
    },
    {
      id: 1,
      number: '02',
      title: 'In-House R&D & Firmware Determinism',
      desc: 'Our embedded firmware engineers and hardware specialists work in seamless synergy. By developing our own real-time operating system (RTOS) algorithms for multi-car group dispatching and door trajectory calculation, we eliminate third-party software bottlenecks and achieve sub-millisecond response times.'
    },
    {
      id: 2,
      number: '03',
      title: 'Rigorous 48-Hour Thermal Stress Testing',
      desc: 'Before any controller cabinet leaves our manufacturing bay, it undergoes 48 hours of continuous full-load inductive burn-in at elevated ambient temperatures. Every phase failure relay, surge transformer, and IGBT inverter drive is verified to withstand extreme grid fluctuations and environmental humidity.'
    },
    {
      id: 3,
      number: '04',
      title: 'Lifelong Engineering Partnership & Support',
      desc: 'When field technicians encounter complex architectural interfaces or modernization challenges, they speak directly to the hardware and firmware specialists who designed the logic boards. We eliminate runarounds and provide immediate, accountable lifecycle support across 15,000+ active installations worldwide.'
    }
  ];

  const divisionCards = [
    {
      title: 'Precision Manufacturing Bay',
      label: 'Production & Quality Assurance',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      fallback: '/products/controller-cabinet.jpg',
      desc: 'Explore our heavy-gauge cabinet fabrication floor, automated wave soldering stations, and rigorous 48-hour continuous thermal stress burn-in.',
      path: '/manufacturing'
    },
    {
      title: 'Corporate Responsibility & Ethics',
      label: 'Our Moral & Safety Imperative',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      fallback: '/products/PXL_20260703_123618016.jpg',
      desc: 'Discover our non-proprietary open-architecture commitment, 100% genuine semiconductor component sourcing, and lifelong direct engineering accountability.',
      path: '/company-ethics'
    },
    {
      title: 'Heer Lab — R&D Division',
      label: 'Advanced Research & Prototyping',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      fallback: '/products/PXL_20250829_075540909~2.jpg',
      desc: 'Step into our dedicated 4,500+ sq.ft engineering laboratory where firmware determinism, sub-millisecond control loops, and regenerative drives are pioneered.',
      path: '/heer-lab'
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: '#000000', overflowX: 'hidden', width: '100vw', paddingTop: '65px', fontFamily: 'var(--font-body, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)' }}>
      
      {/* SECTION 1: EDITORIAL HERO & PANORAMIC SCREEN */}
      <section style={{ width: '100vw', padding: 'clamp(20px, 3vw, 36px) clamp(24px, 5vw, 80px) 60px clamp(24px, 5vw, 80px)' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          
          {/* Top Editorial Label & Hero Headline */}
          <div style={{ marginBottom: '48px', maxWidth: '1100px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666666', marginBottom: '24px' }}>
              Strategic Engineering & Manufacturing Overview
            </div>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.4vw, 4.2rem)',
              fontWeight: 500,
              color: '#000000',
              lineHeight: 1.12,
              letterSpacing: '-0.04em',
              fontFamily: 'var(--font-heading)',
              maxWidth: '920px'
            }}>
              Pioneering open-architecture elevator control & precision electronics since 1997.
            </h1>
          </div>

          {/* Full-Width Panoramic Photograph */}
          <div style={{
            width: '100%',
            height: 'clamp(380px, 60vh, 720px)',
            overflow: 'hidden',
            backgroundColor: '#111111',
            borderRadius: '0px',
            marginBottom: '80px'
          }}>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
              onError={(e) => { e.currentTarget.src = '/products/PXL_20250829_075537037~2.jpg'; }}
              alt="Heer Controller Engineering & Testing Facility"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.5s ease'
              }}
            />
          </div>

          {/* Editorial Split Row: Left Label + Right Paragraph */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '40px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
            paddingBottom: '80px',
            marginBottom: '80px'
          }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Who We Are
            </div>
            <div>
              <p style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.95rem)', fontWeight: 500, color: '#000000', lineHeight: 1.35, letterSpacing: '-0.02em', marginBottom: '28px', maxWidth: '780px' }}>
                With over 27 years of dedicated manufacturing expertise, Heer Technology & Control sets the benchmark for open-architecture elevator electronics.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.68, maxWidth: '680px', marginBottom: '32px' }}>
                From our advanced R&D and electronics testing laboratories to our heavy-gauge cabinet fabrication floor, every component is crafted with uncompromising integrity, strict safety compliance, and direct engineering transparency.
              </p>
              {onExploreProducts && (
                <button
                  onClick={onExploreProducts}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 28px',
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '9999px',
                    fontSize: '0.96rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#c6a661';
                    e.currentTarget.style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#000000';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                >
                  <span>Request Consultation & Quote</span>
                  <ArrowUpRight size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Numerical Metrics Row Across Horizontal Dividers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
            gap: 'clamp(24px, 4vw, 50px)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
            paddingBottom: '80px',
            marginBottom: '100px'
          }}>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Active Deployments Worldwide</div>
              <div style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.8rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>15K+</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Years of Engineering Excellence</div>
              <div style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.8rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>27</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Safety Standard Compliance</div>
              <div style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.8rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>100%</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Core Processor Architecture</div>
              <div style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.8rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>32-Bit</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Thermal Burn-In Inspection</div>
              <div style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.8rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>48 Hrs</div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: EDITORIAL ACCORDION PILLARS */}
      <section style={{ width: '100vw', padding: '0 clamp(24px, 5vw, 80px) 100px clamp(24px, 5vw, 80px)' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          
          {/* Section Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Our Philosophy
            </div>
            <div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 500, color: '#000000', letterSpacing: '-0.03em', lineHeight: 1.25 }}>
                Heer Technology & Control combines deterministic firmware logic with uncompromising structural durability for every commercial, residential, and industrial installation.
              </h2>
            </div>
          </div>

          {/* Accordion Rows */}
          <div style={{ borderTop: '1px solid #000000' }}>
            {pillars.map((pillar) => {
              const isOpen = openAccordion === pillar.id;
              return (
                <div 
                  key={pillar.id}
                  style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.15)', transition: 'background-color 0.25s ease' }}
                  onMouseEnter={() => setOpenAccordion(pillar.id)}
                >
                  <button
                    onClick={() => setOpenAccordion(isOpen ? -1 : pillar.id)}
                    style={{
                      width: '100%',
                      padding: '28px 0',
                      background: 'none',
                      border: 'none',
                      display: 'grid',
                      gridTemplateColumns: 'clamp(36px, 8vw, 60px) 1fr auto',
                      alignItems: 'center',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: '#000000',
                      transition: 'opacity 0.2s ease',
                      gap: '12px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#777777' }}>{pillar.number}</span>
                    <span style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', fontWeight: 500, letterSpacing: '-0.02em' }}>{pillar.title}</span>
                    <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 0 36px 60px', maxWidth: '860px' }}>
                          <p style={{ fontSize: '1.08rem', color: '#444444', lineHeight: 1.7, fontWeight: 400 }}>
                            {pillar.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 3: EDITORIAL PROJECTS & CAPABILITIES SHOWCASE */}
      <section style={{ width: '100vw', padding: '0 clamp(24px, 5vw, 80px) 120px clamp(24px, 5vw, 80px)' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '40px',
            borderTop: '1px solid rgba(0, 0, 0, 0.15)',
            paddingTop: '80px',
            marginBottom: '60px'
          }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Explore Divisions
            </div>
            <div>
              <p style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.95rem)', fontWeight: 500, color: '#000000', lineHeight: 1.35, letterSpacing: '-0.02em', maxWidth: '800px' }}>
                Discover our specialized divisions across manufacturing fabrication, corporate responsibility and ethics, and our advanced research and development laboratory.
              </p>
            </div>
          </div>

          {/* Clean Editorial Photo Grid with Clickable Division Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '36px'
          }}>
            {divisionCards.map((item, index) => (
              <div 
                key={index} 
                onClick={() => navigate(item.path)}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '100%',
                  height: 'clamp(240px, 40vw, 340px)',
                  overflow: 'hidden',
                  backgroundColor: '#111111',
                  borderRadius: '12px',
                  marginBottom: '18px',
                  position: 'relative'
                }}>
                  <img
                    src={item.image}
                    onError={(e) => { e.currentTarget.src = item.fallback; }}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000000',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#777777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                  {item.label}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#000000', letterSpacing: '-0.01em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>{item.title}</span>
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#555555', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
