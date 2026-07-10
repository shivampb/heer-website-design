import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, ShieldCheck, Cpu, HeartHandshake, Leaf, Users, CheckCircle2 } from 'lucide-react';

export default function CompanyEthicsPage() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const pillars = [
    {
      id: 0,
      number: '01',
      title: 'Open Architecture & Terminal Transparency',
      desc: 'We believe that building owners and independent maintenance technicians should never be held hostage by closed software loops, secret passwords, or proprietary diagnostic dongles. Every Heer controller cabinet is delivered with complete, un-redacted electrical schematics, open-source parameter access, and thorough diagnostic error code dictionaries right out of the box.'
    },
    {
      id: 1,
      number: '02',
      title: '100% Genuine Component Sourcing & Anti-Counterfeiting',
      desc: 'We maintain zero tolerance for gray-market, recycled, or counterfeit electronic components. Every 32-bit microprocessor, phase failure relay, Spike surge transformer, and touch COP glass panel is sourced directly from certified semiconductor foundries. All complete controller assemblies undergo 48-hour continuous thermal burn-in under heavy inductive load before leaving our assembly floor.'
    },
    {
      id: 2,
      number: '03',
      title: 'Human Safety Above Commercial Expediency',
      desc: 'Our engineering team prioritizes fail-safe passenger protection above all commercial shortcuts or cost reductions. Every controller architecture adheres strictly to Indian (IS-14665) and European (EN81-20/50) safety regulations, featuring redundant safety chain monitoring, dual microprocessor cross-checking, and automatic emergency rescue dispatching (ARD).'
    },
    {
      id: 3,
      number: '04',
      title: 'Direct Engineering Accountability & Lifecycle Support',
      desc: 'We treat our clients as lifelong technical partners rather than one-time transactions. When field maintenance crews encounter complex elevator anomalies or tricky modernization interfaces, they connect directly with the senior hardware and firmware engineers who designed the logic board—ensuring immediate, honest, and expert resolutions without runarounds.'
    }
  ];

  const caseStudies = [
    {
      title: '32-Bit Multi-Processor Controller Cabinet',
      location: 'Commercial Towers & Hospitals',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
      desc: 'Built with 100% recyclable structural steel and low-power standby circuits.'
    },
    {
      title: 'Obsidian Glass Touch COP Panel Array',
      location: 'Luxury Residential Hubs',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop',
      desc: 'Manufactured without toxic flame retardants, RoHS & REACH compliant.'
    },
    {
      title: 'Integrated VVVF Vector Inverter Drive',
      location: 'High-Speed Vertical Transport',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop',
      desc: 'Regenerative braking returns up to 35% of kinetic energy back to the grid.'
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
              Corporate Responsibility & Manufacturing Ethics
            </div>
            <h1 style={{
              fontSize: 'clamp(2.6rem, 5.8vw, 5.4rem)',
              fontWeight: 500,
              color: '#000000',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              fontFamily: 'var(--font-heading)'
            }}>
              We believe in engineering fail-safe, sustainable vertical transportation and elevator control systems for all people.
            </h1>
          </div>

          {/* Full-Width Panoramic Photograph (Reiulf Ramstad Style Widescreen Image) */}
          <div style={{
            width: '100%',
            height: 'clamp(380px, 60vh, 720px)',
            overflow: 'hidden',
            backgroundColor: '#111111',
            marginBottom: '80px'
          }}>
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
              alt="Sustainable Architectural Engineering & Nature"
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
            paddingBottom: '80px',
            marginBottom: '80px'
          }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Mission Statement
            </div>
            <div>
              <p style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.95rem)', fontWeight: 500, color: '#000000', lineHeight: 1.35, letterSpacing: '-0.02em', marginBottom: '28px', maxWidth: '780px' }}>
                We have a high degree of ethical responsibility across all control systems. Our equipment operates in commercial towers, hospitals, and transit hubs where dependability is non-negotiable.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.68, maxWidth: '680px', marginBottom: '32px' }}>
                Taking inspiration from European responsibility frameworks like VegaLift and strict EN81-20 standards, Heer Technology aligns every step of our manufacturing workflow with human safety, component honesty, and ecological care.
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
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Years of Manufacturing Excellence</div>
              <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>27</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Global Safety Compliance Certifications</div>
              <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>9</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Countries with Active Deployments</div>
              <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>28</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Less Idle Energy via Smart Standby</div>
              <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>60%</div>
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#777777', fontWeight: 500, marginBottom: '12px' }}>Thermal Burn-in Quality Inspection</div>
              <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 400, color: '#000000', letterSpacing: '-0.04em', lineHeight: 1 }}>100%</div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: EDITORIAL ACCORDION PILLARS (Reiulf Ramstad Minimalist List Style) */}
      <section style={{ width: '100vw', padding: '0 clamp(24px, 6vw, 100px) 100px clamp(24px, 6vw, 100px)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          
          {/* Section Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Core Pillars
            </div>
            <div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 500, color: '#000000', letterSpacing: '-0.03em', lineHeight: 1.25 }}>
                Heer Technology & Control’s ethical framework interprets the balance between electrical reliability, human safety, and environmental stewardship in new ways.
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
                  style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.15)' }}
                >
                  <button
                    onClick={() => setOpenAccordion(isOpen ? -1 : pillar.id)}
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
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#777777' }}>{pillar.number}</span>
                    <span style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 500, letterSpacing: '-0.02em' }}>{pillar.title}</span>
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

      {/* SECTION 3: EDITORIAL PROJECTS & SUSTAINABLE PRACTICE SHOWCASE */}
      <section style={{ width: '100vw', padding: '0 clamp(24px, 6vw, 100px) 120px clamp(24px, 6vw, 100px)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            borderTop: '1px solid rgba(0, 0, 0, 0.15)',
            paddingTop: '80px',
            marginBottom: '60px'
          }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Practice
            </div>
            <div>
              <p style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.95rem)', fontWeight: 500, color: '#000000', lineHeight: 1.35, letterSpacing: '-0.02em', maxWidth: '800px' }}>
                We have received high scores in client satisfaction across 15,000+ commercial elevator installations, some operating continuously for over 15 years without logic board failure.
              </p>
            </div>
          </div>

          {/* Clean Editorial Photo Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px'
          }}>
            {caseStudies.map((item, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  width: '100%',
                  height: '340px',
                  overflow: 'hidden',
                  backgroundColor: '#111111',
                  marginBottom: '18px'
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#777777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                  {item.location}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#000000', letterSpacing: '-0.01em', marginBottom: '8px' }}>
                  {item.title}
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
