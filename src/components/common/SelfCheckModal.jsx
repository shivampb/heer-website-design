import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle, ArrowRight, RefreshCw } from 'lucide-react';

export default function SelfCheckModal({ isOpen, onClose, onBookConsultation }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      question: "What is your primary elevator controller application?",
      options: [
        "Residential & Low-Rise Commercial Passenger Elevators",
        "High-Speed High-Rise Commercial Towers",
        "Heavy-Duty Industrial Freight & Hospital Bed Elevators",
        "Modernization & Retrofit of Existing Old Control Systems"
      ]
    },
    {
      question: "What control architecture or drive interface do you require?",
      options: [
        "Microprocessor Based Closed-Loop VFD Drive Interface",
        "Microcontroller Integrated Header & Serial CANbus Comm",
        "Geared / Gearless Machine Room Less (MRL) Controller",
        "Hydraulic or Dual-Speed Relay/Micro Controller Logic"
      ]
    },
    {
      question: "What is your biggest operational priority for the control system?",
      options: [
        "Simple installation and plug-and-play field parameter adjustment",
        "Solid-state dependability with 15,000+ unit proven track record",
        "Comprehensive after-sales technical support & troubleshooting",
        "Custom engineering tailored to specialized architectural requirements"
      ]
    }
  ];

  const handleSelect = (optionIdx) => {
    const newAnswers = [...answers, optionIdx];
    setAnswers(newAnswers);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  const getRecommendation = () => {
    if (answers[0] === 1 || answers[1] === 1) {
      return {
        title: "Microcontroller Integrated CANbus System",
        reason: "Ideal for high-reliability serial communication and simplified wiring, offering robust diagnostics and smooth gearless/geared performance.",
        modality: "Microcontroller Integrated Systems"
      };
    } else if (answers[0] === 3 || answers[2] === 3) {
      return {
        title: "Custom Modernization & Retrofit Controller",
        reason: "Engineered specifically to interface seamlessly with existing hoistways, providing modern microprocessor safety and solid-state control.",
        modality: "Custom Project Controller Engineering"
      };
    } else {
      return {
        title: "Microprocessor Based Closed-Loop Controller",
        reason: "Our flagship microprocessor control architecture with proven field reliability across 15,000+ active elevator installations nationwide.",
        modality: "Microprocessor Elevator Controllers"
      };
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          padding: '40px',
          maxWidth: '540px',
          width: '100%',
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

        {!isCompleted ? (
          <div>
            <div className="wellness-tag">✦ CONTROLLER DIAGNOSTIC SELECTOR</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                Step {currentQ + 1} of {questions.length}
              </span>
              <div style={{ display: 'flex', gap: '6px' }}>
                {questions.map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: '28px',
                      height: '6px',
                      borderRadius: '3px',
                      backgroundColor: idx <= currentQ ? 'var(--accent-olive)' : 'var(--bg-tertiary)',
                      transition: 'background-color 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text-main)', lineHeight: 1.35 }}>
              {questions[currentQ].question}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {questions[currentQ].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    textAlign: 'left',
                    fontSize: '0.96rem',
                    fontWeight: 500,
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-olive-light)';
                    e.currentTarget.style.borderColor = 'var(--accent-olive)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
                    e.currentTarget.style.transform = 'translateX(0px)';
                  }}
                >
                  <span>{option}</span>
                  <ArrowRight size={16} color="var(--accent-olive)" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div style={{
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-olive-light)',
              color: 'var(--accent-olive)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <Sparkles size={32} />
            </div>

            <div className="wellness-tag">✦ RECOMMENDED SYSTEM ARCHITECTURE</div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>
              {getRecommendation().title}
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
              {getRecommendation().reason}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={() => {
                  onClose();
                  onBookConsultation(getRecommendation().modality);
                }}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '14px', borderRadius: '6px' }}
              >
                <span>Request Specs & Quote for {getRecommendation().modality}</span>
                <div className="btn-icon-circle">
                  <ArrowRight size={14} />
                </div>
              </button>

              <button
                onClick={handleReset}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-light)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '8px'
                }}
              >
                <RefreshCw size={14} /> Restart System Diagnostics
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
