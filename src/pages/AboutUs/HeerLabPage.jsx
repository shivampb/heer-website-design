import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, Cpu, Activity, ShieldCheck, Zap, Layers, Microscope } from 'lucide-react';

export default function HeerLabPage({ onBookClick }) {
  const [openAccordion, setOpenAccordion] = useState(0);

  const labDivisions = [
    {
      id: 0,
      number: '01',
      title: 'High-Power Electromagnetic & CAN-Bus Immunity Lab (EMC/EMI)',
      desc: 'In modern architectural high-rises, elevator controller boards must survive severe electrical interference from variable frequency drives, heavy machinery, and lightning strikes. At Heer Lab, every 32-bit microprocessor and CAN-Bus communication harness undergoes intense electromagnetic compatibility (EMC) testing. We inject high-voltage transients and radio-frequency noise directly into our logic circuits to guarantee zero data packet loss and absolute immunity during live elevator operation.'
    },
    {
      id: 1,
      number: '02',
      title: 'Climatic Stress & 48-Hour Continuous Inductive Burn-In Chamber',
      desc: 'We simulate the harshest global operating environments right inside our laboratory chambers. Controller motherboards, touch COP glass panels, and VVVF vector inverters are subjected to temperature cycles ranging from -20°C up to +70°C, extreme humidity, and constant mechanical vibration. Every single main board undergoes a mandatory 48-hour continuous inductive load burn-in before it is ever cleared for production or client dispatch.'
    },
    {
      id: 2,
      number: '03',
      title: 'Custom Silicon Logic & Real-Time Firmware Architecture',
      desc: 'Unlike conventional assemblers who rely on generic third-party software, Heer Lab writes 100% of our elevator firmware in-house. Our engineering specialists develop real-time closed-loop vector control algorithms that compute exact direct-to-floor trajectories with microsecond latency (0.01 ms). This proprietary firmware eliminates leveling overshoot, minimizes cabin vibration, and maximizes motor efficiency.'
    },
    {
      id: 3,
      number: '04',
      title: 'Digital Twin Hoistway Simulation & Pre-Commissioning Rig',
      desc: 'Before any custom controller cabinet leaves our manufacturing facility, it is connected to our in-house Digital Twin Simulation Tower. We replicate exact shaft heights, cabin loads, door speeds, and emergency rescue conditions in real-time. Field consultants and engineers can verify parameter behavior and test custom modernization logic virtually, ensuring plug-and-play installation when the cabinet arrives on site.'
    }
  ];

  const apparatusCaseStudies = [
    {
      title: '32-Bit Microprocessor Diagnostic Workbench',
      location: 'Advanced Firmware Prototyping Bay',
      image: '/products/PXL_20250618_145413258.jpg',
      desc: 'High-precision oscilloscope trace analysis of dual-core lift controller processing speeds.'
    },
    {
      title: 'Obsidian Touch COP Capacitance Testing Unit',
      location: 'Clean-Room Glass Calibration Lab',
      image: '/products/PXL_20260703_123618016.jpg',
      desc: 'Micro-stroke sensitivity testing and anti-static glass tempering verification.'
    },
    {
      title: 'Thermal & Inductive Load Simulation Rack',
      location: 'Environmental Stress Testing Facility',
      image: '/products/PXL_20260703_123745971.jpg',
      desc: 'Sub-zero and high-heat endurance cycles simulating 25+ years of continuous lift duty.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', overflowX: 'hidden', width: '100vw', paddingTop: '65px', fontFamily: 'var(--font-body, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)' }}>
      
      {/* SECTION 1: SCANDINAVIAN EDITORIAL HERO & PANORAMIC SCREEN */}
      <section style={{ width: '100vw', padding: 'clamp(20px, 3vw, 36px) clamp(24px, 6vw, 100px) 60px clamp(24px, 6vw, 100px)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          
          {/* Top Editorial Label & Hero Headline */}
          <div style={{ marginBottom: '48px', maxWidth: '1100px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666666', marginBottom: '24px' }}>
              Advanced Research & Engineering Division
            </div>
            <h1 style={{
              fontSize: 'clamp(2.6rem, 5.8vw, 5.4rem)',
              fontWeight: 500,
              color: '#000000',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              fontFamily: 'var(--font-heading)'
            }}>
              Heer Lab is our most advanced technical R&amp;D department, where hardware specialists, firmware designers, and power engineers work in synergy.
            </h1>
          </div>

          {/* Full-Width Panoramic Photograph */}
          <div style={{
            width: '100%',
            height: 'clamp(380px, 60vh, 720px)',
            overflow: 'hidden',
            backgroundColor: '#111111',
            borderRadius: '12px',
            marginBottom: '80px'
          }}>
            <img
              src="/products/PXL_20250829_075537037~2.jpg"
              alt="Heer Lab Advanced R&D and Electronics Prototyping"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.5s ease'
              }}
            />
          </div>

          {/* Editorial Split Row: Left Label + Right Paragraph & Action */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '40px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
            paddingBottom: '80px',
            marginBottom: '80px'
          }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              R&amp;D Mission
            </div>
            <div>
              <p style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.95rem)', fontWeight: 500, color: '#000000', lineHeight: 1.35, letterSpacing: '-0.02em', marginBottom: '28px', maxWidth: '780px' }}>
                We believe that the future of vertical transportation is built on continuous technical experimentation, open-source diagnostic clarity, and uncompromised testing standards.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.68, maxWidth: '680px', marginBottom: '32px' }}>
                Inspired by premier European laboratory methodologies, our internal R&amp;D facility operates as an independent testing ground. Here, every circuit topology, CAN-Bus protocol, and high-voltage drive module is tortured beyond its theoretical limits before reaching the commercial market.
              </p>
            </div>
          </div>

          {/* Numerical Metrics Row Across Horizontal Dividers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
            paddingBottom: '80px',
            marginBottom: '100px'
          }}>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Dedicated R&amp;D &amp; Testing Space</div>
              <div style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>4,500+ sq.ft</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Continuous Stress Burn-In</div>
              <div style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>48 Hours</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Control Loop Response Latency</div>
              <div style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>0.01 ms</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>In-House Firmware Logic Design</div>
              <div style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>100%</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Core Processor Architecture</div>
              <div style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>32-Bit Dual</div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: EDITORIAL ACCORDION PILLARS */}
      <section style={{ width: '100vw', padding: '0 clamp(24px, 6vw, 100px) 100px clamp(24px, 6vw, 100px)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          
          {/* Section Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Research Divisions
            </div>
            <div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 500, color: '#000000', letterSpacing: '-0.03em', lineHeight: 1.25 }}>
                Our research and development laboratories push the boundaries of elevator electronics through specialized testing methodologies and custom firmware design.
              </h2>
            </div>
          </div>

          {/* Accordion Rows */}
          <div style={{ borderTop: '1px solid #000000' }}>
            {labDivisions.map((division) => {
              const isOpen = openAccordion === division.id;
              return (
                <div 
                  key={division.id}
                  style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.15)' }}
                >
                  <button
                    onClick={() => setOpenAccordion(isOpen ? -1 : division.id)}
                    style={{
                      width: '100%',
                      padding: '28px 0',
                      background: 'none',
                      border: 'none',
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr auto',
                      alignItems: 'center',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: '#000000',
                      transition: 'opacity 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#777777' }}>{division.number}</span>
                    <span style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 500, letterSpacing: '-0.02em' }}>{division.title}</span>
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
                          <p style={{ fontSize: '1.06rem', color: '#444444', lineHeight: 1.7, margin: 0 }}>
                            {division.desc}
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

      {/* SECTION 3: APPARATUS & TEST RIG SHOWCASE CARDS */}
      <section style={{ width: '100vw', padding: '100px clamp(24px, 6vw, 100px)', backgroundColor: '#fcfaf6', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '60px' }}>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666666', marginBottom: '16px' }}>
                Testing Infrastructure
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 500, color: '#000000', letterSpacing: '-0.03em', margin: 0 }}>
                Specialized Diagnostic &amp; Simulation Apparatus
              </h2>
            </div>
            <div style={{ fontSize: '0.95rem', color: '#666666', maxWidth: '380px' }}>
              Explore the physical instrumentation bays and high-voltage testing benches powering our next-generation controllers.
            </div>
          </div>

          {/* 3-Column Architectural Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '32px'
          }}>
            {apparatusCaseStudies.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{
                  width: '100%',
                  height: '420px',
                  backgroundColor: '#e5e5e5',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: '#000000'
                  }}>
                    {item.location}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#000000', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.96rem', color: '#666666', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
