import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Download, Check, ShieldCheck, Cpu, Sliders, CheckCircle2 } from 'lucide-react';

export default function ProductDetailPage({ product, onBack, onInquire }) {
  const [activeTab, setActiveTab] = useState('MAIN FEATURES');
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    quantity: '1',
    request: '',
    privacy: false
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  if (!product) {
    product = {
      id: 'p6',
      code: 'HEER-CTRL-32',
      title: '32-Bit Microprocessor Controller Cabinet',
      category: 'control',
      subCategory: 'Control boards',
      spec: 'Dual Core | Zero Jerk Acceleration | VVVF',
      price: '$4,800',
      image: '/products/controller-cabinet.jpg'
    };
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSendRequest = (e) => {
    e.preventDefault();
    if (!formState.privacy) {
      alert('Please authorise the processing of your personal data as per Privacy policy to send request.');
      return;
    }
    setSubmitted(true);
    if (onInquire) onInquire(product);
  };

  const tabContents = {
    'FOCUS': [
      `Power supply 230 V AC / 380 V 3-Phase standard options.`,
      `Engineered for high-efficiency commercial & residential vertical lift control.`,
      `Integrated telemetry diagnostics: ${product.spec}.`,
      `Full European compliance: EN81-20/50 safety regulations certified.`
    ],
    'MAIN FEATURES': [
      `Ultra-fast 32-Bit dual microprocessor architecture with real-time diagnostic curves.`,
      `Integrated CAN-bus high-speed serial communication with zero electromagnetic interference.`,
      `Smooth VVVF vector drive compatibility guaranteeing zero-jerk start and stop curves.`,
      `EN81-20/50 European Elevator Safety Standard fully certified fail-safe protection.`,
      `Plug-and-play modular harness structure with quick-swap relay terminal blocks.`,
      `Bluetooth & WiFi IoT gateway ready for cloud remote monitoring and instant phone tuning.`
    ],
    'WARNINGS': [
      `Always isolate 230 V / 380 V mains power before harness extraction or terminal inspection.`,
      `Installation must be performed exclusively by certified elevator technicians in accordance with local safety codes.`,
      `Max operating ambient temperature: -10°C to +65°C. Ensure adequate hoistway or control room ventilation.`,
      `Check optical and CAN-Bus shield grounding at every annual inspection interval.`
    ]
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      paddingTop: '135px',
      paddingBottom: '110px',
      color: '#111111',
      fontFamily: 'var(--font-body)'
    }}>
      <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
        
        {/* Top Navigation Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '28px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <button
            onClick={onBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: '#555555',
              fontSize: '0.92rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              padding: '6px 0'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0066cc'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#555555'}
          >
            <ArrowLeft size={17} />
            <span>Back to Products</span>
          </button>

          <div style={{ fontSize: '0.84rem', color: '#888888', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Company</span>
            <span>/</span>
            <span>Products</span>
            <span>/</span>
            <span style={{ color: '#111111', fontWeight: 600, textTransform: 'capitalize' }}>{product.category}</span>
          </div>
        </div>

        {/* SECTION 1: Product Hero Showcase (Exact Reference Image 1 Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="product-showcase-hero"
          style={{
            backgroundColor: '#f2f2f4',
            borderRadius: '28px',
            padding: '60px 70px',
            minHeight: '480px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px',
            position: 'relative',
            boxShadow: '0 10px 40px rgba(0,0,0,0.02)'
          }}
        >
          {/* Left Side: Product Code / Title & Bottom Breadcrumb */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '360px', flex: '1 1 360px' }}>
            <div>
              <h1 style={{
                fontSize: 'clamp(2.8rem, 6.5vw, 4.8rem)',
                fontWeight: 600,
                color: '#111111',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                margin: '0 0 16px 0'
              }}>
                {product.code || product.title.split(' ')[0]}
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: '#444444',
                fontWeight: 500,
                maxWidth: '450px',
                lineHeight: 1.4,
                margin: 0
              }}>
                {product.title}
              </p>
            </div>

            {/* Monospace Uppercase Breadcrumb / Division exact like "DOORS CONTROL / DOOR DRIVE" */}
            <div style={{
              fontSize: '0.88rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: '#111111',
              textTransform: 'uppercase',
              marginTop: '40px'
            }}>
              {product.category.toUpperCase()} / {product.subCategory.toUpperCase()}
            </div>
          </div>

          {/* Right Side: High Resolution Product Image Container with realistic floating shadow */}
          <div style={{
            flex: '1 1 480px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '340px'
          }}>
            <img
              src={product.image}
              alt={product.title}
              style={{
                maxHeight: '380px',
                maxWidth: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 25px 45px rgba(0,0,0,0.18))',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        </motion.div>

        {/* SECTION 2: Interactive Tabs, Technical Bullets & Brochure Download (Exact Reference Image 2) */}
        <div style={{ marginTop: '70px', padding: '0 24px' }}>
          
          {/* Tab Bar: FOCUS | MAIN FEATURES | WARNINGS */}
          <div className="product-showcase-tabs" style={{
            display: 'flex',
            gap: '40px',
            borderBottom: '1px solid rgba(0,0,0,0.12)',
            paddingBottom: '0'
          }}>
            {Object.keys(tabContents).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '0 0 16px 0',
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.12em',
                    color: isActive ? '#111111' : '#777777',
                    borderBottom: isActive ? '2px solid #111111' : '2px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    marginBottom: '-1px'
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Tab Bullet List Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              style={{ paddingTop: '36px', minHeight: '180px', maxWidth: '960px' }}
            >
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {tabContents[activeTab].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', fontSize: '1rem', color: '#333333', lineHeight: 1.5 }}>
                    <span style={{ fontWeight: 600, color: '#111111' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Brochure Download Banner exact matching Reference Image 2 */}
          <div style={{
            marginTop: '60px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.14em', color: '#444444', textTransform: 'uppercase', marginBottom: '18px' }}>
              BROCHURE
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '30px'
            }}>
              <p style={{
                fontSize: '1rem',
                color: '#333333',
                lineHeight: 1.6,
                maxWidth: '780px',
                margin: 0
              }}>
                Would you like to have the main product information to hand on your smartphone, tablet or computer? Download the brochure now and have everything at your fingertips: from product features to dimensions, from models to available finishes.
              </p>

              <button
                onClick={() => alert(`Downloading Comprehensive Brochure & Datasheet for ${product.code} (.PDF)...`)}
                style={{
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,102,204,0.06)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <Download size={32} color="#111111" strokeWidth={2} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.86rem', fontWeight: 600, color: '#111111' }}>Get the brochure</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0066cc' }}>Download</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 3: Inquiry & Quote Request Form (Exact Reference Image 3 Layout) */}
        <div style={{
          marginTop: '80px',
          paddingTop: '60px',
          borderTop: '1px solid rgba(0,0,0,0.1)',
          paddingLeft: '24px',
          paddingRight: '24px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 400,
            color: '#111111',
            letterSpacing: '-0.02em',
            margin: '0 0 16px 0'
          }}>
            Are you interested in this product? <span style={{ color: '#0066cc', fontWeight: 500 }}>Send your request.</span>
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: '#444444',
            margin: '0 0 48px 0',
            lineHeight: 1.5
          }}>
            Request more information or a free quote now, specifying the number of pieces you require. You will receive our reply by e-mail.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                backgroundColor: '#f2f9f2',
                border: '1px solid #4caf50',
                borderRadius: '16px',
                padding: '36px 40px',
                textAlign: 'center',
                maxWidth: '700px'
              }}
            >
              <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#4caf50', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                <Check size={28} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#1b5e20', margin: '0 0 8px 0' }}>Request Successfully Dispatched</h3>
              <p style={{ fontSize: '1rem', color: '#2e7d32', margin: '0 0 20px 0' }}>
                Thank you, {formState.name || 'valued client'}. Our engineering applications team has received your inquiry for <strong>{product.title} ({product.code})</strong> and will send a detailed technical quote to your e-mail shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{ padding: '10px 24px', borderRadius: '9999px', backgroundColor: '#1b5e20', color: '#ffffff', border: 'none', fontWeight: 600, cursor: 'pointer' }}
              >
                Send Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSendRequest}>
              
              {/* Row 1: Underline Inputs - Name | Company | E-mail | Quantity */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '36px',
                marginBottom: '50px'
              }}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px 0',
                      border: 'none',
                      borderBottom: '1px solid rgba(0,0,0,0.25)',
                      backgroundColor: 'transparent',
                      fontSize: '0.95rem',
                      color: '#111111',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderBottomColor = '#0066cc'}
                    onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(0,0,0,0.25)'}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    required
                    value={formState.company}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px 0',
                      border: 'none',
                      borderBottom: '1px solid rgba(0,0,0,0.25)',
                      backgroundColor: 'transparent',
                      fontSize: '0.95rem',
                      color: '#111111',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderBottomColor = '#0066cc'}
                    onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(0,0,0,0.25)'}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px 0',
                      border: 'none',
                      borderBottom: '1px solid rgba(0,0,0,0.25)',
                      backgroundColor: 'transparent',
                      fontSize: '0.95rem',
                      color: '#111111',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderBottomColor = '#0066cc'}
                    onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(0,0,0,0.25)'}
                  />
                </div>

                <div>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    min="1"
                    required
                    value={formState.quantity}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px 0',
                      border: 'none',
                      borderBottom: '1px solid rgba(0,0,0,0.25)',
                      backgroundColor: 'transparent',
                      fontSize: '0.95rem',
                      color: '#111111',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderBottomColor = '#0066cc'}
                    onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(0,0,0,0.25)'}
                  />
                </div>
              </div>

              {/* Row 2: Underline Multiline Text Area - Request */}
              <div style={{ marginBottom: '40px' }}>
                <textarea
                  name="request"
                  placeholder="Request (Please specify any custom firmware, harness requirements, or project details...)"
                  rows="3"
                  value={formState.request}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px 0',
                    border: 'none',
                    borderBottom: '1px solid rgba(0,0,0,0.25)',
                    backgroundColor: 'transparent',
                    fontSize: '0.95rem',
                    color: '#111111',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderBottomColor = '#0066cc'}
                  onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(0,0,0,0.25)'}
                />
              </div>

              {/* Row 3: Privacy Policy Checkbox exact like Reference Image 3 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px' }}>
                <input
                  type="checkbox"
                  id="privacy-check"
                  name="privacy"
                  checked={formState.privacy}
                  onChange={handleInputChange}
                  style={{
                    width: '18px',
                    height: '18px',
                    cursor: 'pointer',
                    accentColor: '#0066cc'
                  }}
                />
                <label htmlFor="privacy-check" style={{ fontSize: '0.92rem', color: '#222222', cursor: 'pointer', userSelect: 'none' }}>
                  I authorise the processing of my personal data as per <span style={{ textDecoration: 'underline', fontWeight: 600 }}>Privacy policy</span>
                </label>
              </div>

              {/* Bottom Capsule Send Button exact like Reference Image 3 */}
              <div>
                <button
                  type="submit"
                  style={{
                    padding: '14px 50px',
                    borderRadius: '9999px',
                    backgroundColor: '#ffffff',
                    color: '#0066cc',
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    border: '1px solid #d0d0d0',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0066cc';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#0066cc';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#0066cc';
                    e.currentTarget.style.borderColor = '#d0d0d0';
                  }}
                >
                  Send
                </button>
              </div>
            </form>
          )}
        </div>

        <style>{`
          @media (max-width: 991px) {
            .product-showcase-hero {
              padding: 36px 28px !important;
              gap: 24px !important;
            }
          }
          @media (max-width: 640px) {
            .product-showcase-hero {
              padding: 24px 18px !important;
            }
            .product-showcase-tabs {
              gap: 18px !important;
              overflow-x: auto !important;
              white-space: nowrap !important;
              padding-bottom: 8px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
