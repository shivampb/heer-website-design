import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    controllerType: 'Microprocessor Lift Controller',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-us" className="section-padding" style={{ backgroundColor: '#faf8f2' }}>
      <div className="container">
        {/* Top Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="wellness-tag">✦ GET IN TOUCH WITH HEER R&D DESK</div>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.12,
            color: 'var(--text-main)'
          }}>
            Contact Our Engineering Team
          </h2>
          <p style={{
            fontSize: '1.08rem',
            color: 'var(--text-muted)',
            maxWidth: '680px',
            margin: '18px auto 0 auto',
            lineHeight: 1.6
          }}>
            Whether you need custom specifications for a 30-story commercial tower or rapid technical assistance for field adjustment, our specialists are ready.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Left Contact Info & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#ffffff',
              padding: '40px',
              borderRadius: '10px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(0,0,0,0.04)'
            }}
          >
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '20px' }}>
              Direct Engineering Support
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '32px' }}>
              We pride ourselves on responsive, direct communication with elevator contractors and technicians nationwide. Reach out via phone or email for immediate R&D assistance.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-olive-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={22} color="var(--accent-olive)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '2px' }}>
                    Technical Helpline & Orders
                  </h4>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    +91 (0) 98200-XXXXX / +91 (0) 79-XXXX-XXXX
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-olive-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={22} color="var(--accent-olive)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '2px' }}>
                    Email Engineering Desk
                  </h4>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    info@heertechnology.com | support@heertechnology.com
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-olive-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={22} color="var(--accent-olive)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '2px' }}>
                    Factory & R&D Headquarters
                  </h4>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Plot No. 12/B, Industrial Estate, Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-olive-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Clock size={22} color="var(--accent-olive)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '2px' }}>
                    Support Hours
                  </h4>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Monday – Saturday: 9:00 AM – 7:30 PM (IST)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Inquiry / Quote Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#ffffff',
              padding: '40px',
              borderRadius: '10px',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(0,0,0,0.04)'
            }}
          >
            {!submitted ? (
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                  Send us an Inquiry / Quote Request
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
                  Fill out the specification details below and our technical coordinator will get back to you immediately.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '6px',
                          border: '1px solid rgba(0,0,0,0.12)',
                          fontSize: '0.92rem',
                          outline: 'none',
                          fontFamily: 'var(--font-body)'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Elevators"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '6px',
                          border: '1px solid rgba(0,0,0,0.12)',
                          fontSize: '0.92rem',
                          outline: 'none',
                          fontFamily: 'var(--font-body)'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '6px',
                          border: '1px solid rgba(0,0,0,0.12)',
                          fontSize: '0.92rem',
                          outline: 'none',
                          fontFamily: 'var(--font-body)'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+91..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '6px',
                          border: '1px solid rgba(0,0,0,0.12)',
                          fontSize: '0.92rem',
                          outline: 'none',
                          fontFamily: 'var(--font-body)'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                      System Architecture / Product Requirement
                    </label>
                    <select
                      value={formData.controllerType}
                      onChange={(e) => setFormData({ ...formData, controllerType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '6px',
                        border: '1px solid rgba(0,0,0,0.12)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        fontFamily: 'var(--font-body)',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <option value="Microprocessor Lift Controller (32-Bit Closed Loop)">Microprocessor Lift Controller (32-Bit Closed Loop)</option>
                      <option value="Integrated VVVF Drive Controller">Integrated VVVF Drive Controller</option>
                      <option value="Microcontroller Serial CANbus System">Microcontroller Serial CANbus System</option>
                      <option value="Custom Modernization / Retrofit Package">Custom Modernization / Retrofit Package</option>
                      <option value="General Technical Inquiry & Field Support">General Technical Inquiry & Field Support</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Project Specifications / Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify number of floors, geared/gearless traction, or special customization requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '6px',
                        border: '1px solid rgba(0,0,0,0.12)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        fontFamily: 'var(--font-body)',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '14px',
                      fontSize: '0.98rem',
                      borderRadius: '6px',
                      marginTop: '6px'
                    }}
                  >
                    Send Inquiry to R&D Desk <Send size={15} style={{ marginLeft: '6px' }} />
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-olive-light)',
                  color: 'var(--accent-olive)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px auto'
                }}>
                  <CheckCircle2 size={38} />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                  Inquiry Received!
                </h3>
                <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                  Thank you, <strong>{formData.name}</strong> from <strong>{formData.company}</strong>. Our R&D desk has logged your requirement for <strong>{formData.controllerType}</strong> and will contact you shortly at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', borderRadius: '6px', padding: '12px 24px' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
