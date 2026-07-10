import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    controllerType: 'Microprocessor Lift Controller (32-Bit Closed Loop)',
    preferredDate: '',
    projectScale: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-us" style={{ backgroundColor: '#fdfdfe', paddingTop: '48px', paddingBottom: '96px', width: '100%', overflowX: 'hidden' }}>
      <div style={{ width: '100%', maxWidth: 'calc(100vw - 10px)', margin: '0 auto', padding: '0 5px' }}>
        
        {/* Top Tag & Header */}
        <div>
          <span style={{
            backgroundColor: '#f1f3f5',
            color: '#333333',
            borderRadius: '9999px',
            padding: '6px 14px',
            fontSize: '0.81rem',
            fontWeight: 600,
            display: 'inline-block',
            marginBottom: '20px'
          }}>
            Technical Consultation
          </span>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '40px'
          }}>
            <h1 style={{
              fontSize: 'clamp(3.2rem, 6.5vw, 5.2rem)',
              fontWeight: 600,
              color: '#111111',
              letterSpacing: '-0.04em',
              lineHeight: 0.98,
              margin: 0
            }}>
              Contact Us
            </h1>

            <p style={{
              fontSize: '1.04rem',
              color: '#555555',
              lineHeight: 1.55,
              maxWidth: '430px',
              margin: 0
            }}>
              Tell us about your elevator controller specifications and project timeline and we'll confirm technical availability within 24 hours.
            </p>
          </div>
        </div>

        {/* Main Split Panel Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: '#f5f6f8',
            borderRadius: '28px',
            padding: '44px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '36px',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Form */}
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* 2-Column Grid Fields */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#222222', marginBottom: '8px' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#e8eaed',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '14px 18px',
                        fontSize: '0.94rem',
                        color: '#111111',
                        outline: 'none',
                        transition: 'background-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.backgroundColor = '#dee1e5'}
                      onBlur={(e) => e.target.style.backgroundColor = '#e8eaed'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#222222', marginBottom: '8px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#e8eaed',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '14px 18px',
                        fontSize: '0.94rem',
                        color: '#111111',
                        outline: 'none',
                        transition: 'background-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.backgroundColor = '#dee1e5'}
                      onBlur={(e) => e.target.style.backgroundColor = '#e8eaed'}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#222222', marginBottom: '8px' }}>
                      Phone Number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+91 98200 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#e8eaed',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '14px 18px',
                        fontSize: '0.94rem',
                        color: '#111111',
                        outline: 'none',
                        transition: 'background-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.backgroundColor = '#dee1e5'}
                      onBlur={(e) => e.target.style.backgroundColor = '#e8eaed'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#222222', marginBottom: '8px' }}>
                      Select Controller Series
                    </label>
                    <select
                      value={formData.controllerType}
                      onChange={(e) => setFormData({ ...formData, controllerType: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#e8eaed',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '14px 18px',
                        fontSize: '0.92rem',
                        color: '#111111',
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="Microprocessor Lift Controller (32-Bit Closed Loop)">Microprocessor Lift Controller (32-Bit)</option>
                      <option value="Integrated VVVF Drive Controller">Integrated VVVF Drive Controller</option>
                      <option value="Touch COP & LOP Buttons (Glass Series)">Touch COP & LOP Buttons (Glass Series)</option>
                      <option value="Elevator Light Curtains & Overload Sensors">Elevator Light Curtains & Overload Sensors</option>
                      <option value="Custom R&D Engineering & Modernization">Custom R&D Engineering & Modernization</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#222222', marginBottom: '8px' }}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#e8eaed',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '14px 18px',
                        fontSize: '0.94rem',
                        color: '#111111',
                        outline: 'none',
                        transition: 'background-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.backgroundColor = '#dee1e5'}
                      onBlur={(e) => e.target.style.backgroundColor = '#e8eaed'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#222222', marginBottom: '8px' }}>
                      Project Scale / Units
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 4 units, 16 floors"
                      value={formData.projectScale}
                      onChange={(e) => setFormData({ ...formData, projectScale: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#e8eaed',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '14px 18px',
                        fontSize: '0.94rem',
                        color: '#111111',
                        outline: 'none',
                        transition: 'background-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.backgroundColor = '#dee1e5'}
                      onBlur={(e) => e.target.style.backgroundColor = '#e8eaed'}
                    />
                  </div>
                </div>

                {/* Full-width Message Field */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#222222', marginBottom: '8px' }}>
                    Message / Special Requests
                  </label>
                  <textarea
                    placeholder="Anything else we should know about motor capacity, serial board specifications, or field requirements?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#e8eaed',
                      border: 'none',
                      borderRadius: '14px',
                      padding: '16px 18px',
                      fontSize: '0.94rem',
                      color: '#111111',
                      outline: 'none',
                      height: '116px',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'background-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.backgroundColor = '#dee1e5'}
                    onBlur={(e) => e.target.style.backgroundColor = '#e8eaed'}
                  />
                </div>

                {/* Buttons Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#111111',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '16px 32px',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease, transform 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#262626';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#111111';
                      e.currentTarget.style.transform = 'translateY(0px)';
                    }}
                  >
                    Submit Inquiry
                  </button>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#111111',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '50%',
                      width: '52px',
                      height: '52px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease, transform 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#262626';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#111111';
                      e.currentTarget.style.transform = 'translateY(0px)';
                    }}
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '48px 36px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(198, 166, 97, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <CheckCircle2 size={36} color="#c6a661" />
                </div>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 700, color: '#111111', marginBottom: '12px' }}>
                  Inquiry Received
                </h3>
                <p style={{ fontSize: '1.02rem', color: '#666666', maxWidth: '420px', margin: '0 auto 28px auto', lineHeight: 1.6 }}>
                  Thank you, <strong style={{ color: '#111111' }}>{formData.name}</strong>. Our R&D desk has received your specifications and will confirm technical availability within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    backgroundColor: '#111111',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '12px 28px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Send Another Request
                </button>
              </motion.div>
            )}
          </div>

          {/* Right Column: High-Tech Architectural Controller Image Card */}
          <div style={{
            borderRadius: '22px',
            overflow: 'hidden',
            position: 'relative',
            height: '100%',
            maxHeight: '520px',
            minHeight: '400px',
            backgroundColor: '#1c1e21',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src="/products/IMG-20250917-WA0073.jpg"
              alt="Heer Precision Controller Architecture & R&D Consultation"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block'
              }}
            />

            {/* Top Right Floating Pill Badge */}
            <div style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.22)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.45)',
              color: '#ffffff',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
            }}>
              Precision R&D
            </div>

            {/* Bottom subtle gradient shadow for depth */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)',
              pointerEvents: 'none'
            }} />
          </div>
        </motion.div>

        {/* Three Circular Contact Info Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          padding: '64px 20px',
          textAlign: 'center'
        }}>
          {/* Column 1 */}
          <div>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: '#f2f3f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}>
              <Phone size={22} color="#111111" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111111', marginBottom: '8px' }}>
              Call & WhatsApp
            </h3>
            <p style={{ fontSize: '0.94rem', color: '#666666', lineHeight: 1.6, margin: 0 }}>
              +91 (0) 98200-XXXXX<br />
              +91 (0) 79-XXXX-XXXX
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: '#f2f3f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}>
              <Clock size={22} color="#111111" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111111', marginBottom: '8px' }}>
              Working Hours
            </h3>
            <p style={{ fontSize: '0.94rem', color: '#666666', lineHeight: 1.6, margin: 0 }}>
              Daily: 9:00 AM – 7:30 PM (IST)<br />
              Sunday: Closed (Emergency Only)
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: '#f2f3f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}>
              <Mail size={22} color="#111111" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111111', marginBottom: '8px' }}>
              Write to Us
            </h3>
            <p style={{ fontSize: '0.94rem', color: '#666666', lineHeight: 1.6, margin: 0 }}>
              info@heertechnology.com<br />
              support@heertechnology.com
            </p>
          </div>
        </div>

        {/* Bottom Discovery Showcase Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: '#f5f6f8',
            borderRadius: '28px',
            padding: '48px 44px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          {/* Left Side Info */}
          <div>
            <span style={{
              backgroundColor: '#e3e6ea',
              color: '#111111',
              borderRadius: '9999px',
              padding: '5px 14px',
              fontSize: '0.8rem',
              fontWeight: 600,
              display: 'inline-block',
              marginBottom: '18px'
            }}>
              Start now
            </span>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
              fontWeight: 600,
              color: '#111111',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}>
              Discover your next precision elevator solution
            </h2>

            <p style={{
              fontSize: '0.98rem',
              color: '#666666',
              lineHeight: 1.6,
              margin: 0
            }}>
              Plan your elevator installation or modernization in minutes and enjoy reliable, fault-tolerant 32-bit closed-loop performance for every project.
            </p>
          </div>

          {/* Right Side 2-Image Grid with wide, balanced real photography */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden', height: '300px', boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}>
              <img
                src="/products/PXL_20260512_114825100.jpg"
                alt="Heer 32-Bit Controller Architecture & Wiring"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.06)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
            <div style={{ borderRadius: '24px', overflow: 'hidden', height: '300px', boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}>
              <img
                src="/products/PXL_20260629_083922448.jpg"
                alt="Heer Touch COP Glass Series Matrix"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.06)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
