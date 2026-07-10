import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, CheckCircle2, HeartPulse, Sparkles } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialSpecialist, initialTherapy }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    therapy: initialTherapy || 'Individual Therapy',
    specialist: initialSpecialist || 'David Miller (Dermapsychologist)',
    date: '2026-07-12',
    time: '10:00 AM',
    name: '',
    email: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="booking-modal-box"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          padding: '40px',
          maxWidth: '540px',
          width: 'calc(100% - 24px)',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'var(--bg-secondary)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {step === 1 ? (
          <div>
            <div className="wellness-tag">✦ TECHNICAL CONSULTATION & QUOTE</div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>
              Request Technical Specs / Quote
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
              Connect with Heer Technology & Control engineering specialists regarding microprocessor elevator controllers.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                  Select Elevator Controller Modality
                </label>
                <select
                  value={formData.therapy}
                  onChange={(e) => setFormData({ ...formData, therapy: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid rgba(0,0,0,0.12)',
                    fontSize: '0.92rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <option value="Microprocessor Elevator Controllers">Microprocessor Elevator Controllers</option>
                  <option value="Microcontroller Integrated Systems">Microcontroller Integrated Systems</option>
                  <option value="Custom Project Controller Engineering">Custom Project Controller Engineering</option>
                  <option value="Field Support & Maintenance Package">Field Support & Maintenance Package</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                  Select Lead Engineer / Specialist
                </label>
                <select
                  value={formData.specialist}
                  onChange={(e) => setFormData({ ...formData, specialist: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid rgba(0,0,0,0.12)',
                    fontSize: '0.92rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <option value="Rajesh Heer (Chief Systems Architect)">Rajesh Heer (Chief Systems Architect)</option>
                  <option value="Vikram Mehta (Embedded Firmware Lead)">Vikram Mehta (Embedded Firmware Lead)</option>
                  <option value="Pooja Sharma (Field Commissioning Engineer)">Pooja Sharma (Field Commissioning Engineer)</option>
                  <option value="Amit Patel (Quality & ISO Compliance)">Amit Patel (Quality & ISO Compliance)</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '6px',
                      border: '1px solid rgba(0,0,0,0.12)',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                    Consultation Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '6px',
                      border: '1px solid rgba(0,0,0,0.12)',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="10:00 AM">10:00 AM (IST)</option>
                    <option value="02:00 PM">02:00 PM (IST)</option>
                    <option value="04:30 PM">04:30 PM (IST)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                  Your Name & Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Verma - Apex Elevators"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid rgba(0,0,0,0.12)',
                    fontSize: '0.92rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                  Email / Contact Number
                </label>
                <input
                  type="text"
                  placeholder="name@company.com or +91..."
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid rgba(0,0,0,0.12)',
                    fontSize: '0.92rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none'
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
                  marginTop: '8px',
                  fontSize: '0.98rem',
                  borderRadius: '6px'
                }}
              >
                Submit Consultation Request
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-olive-light)',
              color: 'var(--accent-olive)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
              Quote Request Received!
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
              We have received your specification request for <strong>{formData.therapy}</strong> with <strong>{formData.specialist.split(' ')[0]}</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>. Our R&D desk will reach out to <strong>{formData.email || 'your email'}</strong> shortly.
            </p>
            <button
              onClick={() => { setStep(1); onClose(); }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', borderRadius: '6px' }}
            >
              Return to Website
            </button>
          </div>
        )}
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          .booking-modal-box {
            padding: 24px 18px !important;
            width: calc(100% - 16px) !important;
          }
        }
      `}</style>
    </div>
  );
}
