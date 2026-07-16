import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Download, Check, Image as ImageIcon, Video, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductDetailPage({ product, onBack, onInquire }) {
  const [activeTab, setActiveTab] = useState('MAIN FEATURES');
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [selectedVideoIdx, setSelectedVideoIdx] = useState(0);
  const [mediaType, setMediaType] = useState('image');
  const [formState, setFormState] = useState({ name: '', company: '', email: '', quantity: '1', request: '', privacy: false });
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedImageIdx(0);
    setSelectedVideoIdx(0);
    setMediaType('image');
  }, [product]);

  if (!product) {
    product = {
      id: 'p1',
      code: 'HEER-CTRL-32',
      title: '32-Bit Microprocessor Controller Cabinet',
      category: 'control-panels',
      subCategory: 'HEER-CTRL-32',
      spec: 'Dual Core | Zero Jerk Acceleration | VVVF Vector Control',
      price: '$4,800',
      image: '/products/PXL_20260703_123618016.jpg'
    };
  }

  const imagesList = product.images && product.images.length > 0 ? product.images : [product.image];
  const videosList = product.videos && product.videos.length > 0 ? product.videos : [];
  const currentImage = imagesList[selectedImageIdx] || imagesList[0];
  const currentVideo = videosList[selectedVideoIdx] || videosList[0];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
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

  const goNextImage = () => setSelectedImageIdx(i => (i + 1) % imagesList.length);
  const goPrevImage = () => setSelectedImageIdx(i => (i - 1 + imagesList.length) % imagesList.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (Math.abs(dx) > 40 && dy < 60) {
      if (dx < 0) goNextImage();
      else goPrevImage();
    }
    touchStartX.current = null;
  };

  // ─── Dynamic per-product tab content ──────────────────────────────────────
  const specParts = (product.spec || '').split('|').map(s => s.trim()).filter(Boolean);

  const getTabContents = () => {
    const isCopLop = product.category === 'cop-lop';
    const isControl = product.category === 'control-panels';
    const code = product.code || '';
    const title = product.title || '';

    if (isCopLop) {
      // COP & LOP specific content based on subCategory
      const sub = (product.subCategory || '').toLowerCase();

      const focusMap = {
        'unibody': ['Single-piece seamless panel body engineered for ultra-slim hoistway integration.', 'Available in touch-capacitive and micro-stroke push-button variants for all lift classes.', `Core specification: ${product.spec}.`, 'Suitable for residential, commercial, and premium hospitality elevators.'],
        'unibody arc': ['Contoured arc profile designed for circular or panoramic cabin aesthetics.', 'High-clarity TFT direction display integrated flush within the curved body.', `Core specification: ${product.spec}.`, 'Ideal for glass cabin and premium architectural lift installations.'],
        'unibody rs': ['Sport & luxury grade panel engineered for VIP residential towers and penthouses.', 'Tempered obsidian glass bezel with zero-gap capacitive sensor array.', `Core specification: ${product.spec}.`, 'Compatible with destination control and smart home integration systems.'],
        'unibody step': ['Step-profile modular body enabling multi-section floor button arrays.', 'Heavy-gauge stainless housing with embedded Braille embossing for accessibility.', `Core specification: ${product.spec}.`, 'Designed for high-traffic commercial and public-sector elevator installations.'],
        'unibody touch': ['Full-face capacitive glass touch sensor panel with zero mechanical wear.', 'Custom LED halo illumination ring per button for high-visibility operation.', `Core specification: ${product.spec}.`, 'Scratch-resistant tempered glass face rated for 5 million+ touch cycles.'],
        'aura luxuria': ['Executive grade COP/LOP for 5-star hotels, luxury towers, and corporate headquarters.', 'Champagne gold and mirror-polished stainless trim with ambient halo back-lighting.', `Core specification: ${product.spec}.`, 'Available in custom RAL colour finishes and premium leather accent options.'],
        'aura touch': ['Crystal obsidian glass face with instant capacitive touch response.', 'IP54 weather and dust sealed — suitable for semi-outdoor and rooftop lift shafts.', `Core specification: ${product.spec}.`, 'Integrated digital floor indicator within the touch surface for a clean, unified look.'],
        'curve': ['Architectural curved-edge profile offering a modern visual break from flat panels.', 'Stainless steel 304-grade body with micro-stroke tactile push-button array.', `Core specification: ${product.spec}.`, 'Available in hairline, mirror, and powder-coat finishes to match any cabin interior.'],
        'curve goods': ['Heavy-duty industrial grade panel for freight, dumbwaiter, and goods lifts.', 'High-impact resistant housing rated for forklift-grade loading bay environments.', `Core specification: ${product.spec}.`, 'Large call and send buttons with colour-coded backlit LED for clear operational status.'],
        'curve touch': ['Curved glass face integrating call, floor display, and direction arrow in one unit.', 'Modern residential and light-commercial aesthetic with minimal visible hardware.', `Core specification: ${product.spec}.`, 'Full touch-surface operation — no exposed button edges or mechanical gaps.'],
        'curve duplex lop': ['Dual-elevator dispatch landing panel for corridor and lobby duplex lift installations.', 'Shared Up/Down arrow call buttons with individual floor-position telemetry per car.', `Core specification: ${product.spec}.`, 'Simultaneous multi-car call assignment logic compatible with group controller systems.'],
        'korean': ['Refined minimalist Korean architectural design language — precision laser-engraved bezel.', 'Available in duplex configuration for multi-car landing call stations.', `Core specification: ${product.spec}.`, 'Tactile micro-stroke buttons with LED backlighting in warm white and amber options.'],
        'nexus': ['Smart IOT-ready panel with embedded cloud connectivity for remote monitoring.', 'Modular frame design allows field-level replacement of individual button modules.', `Core specification: ${product.spec}.`, 'Crisp TFT LCD direction arrow display with auto-brightness sensor for day/night lobby conditions.'],
        'regular': ['Industry-proven workhorse design — field-tested across thousands of elevator installations.', 'Stainless steel 304 body with vandal-proof, recessed push-button array.', `Core specification: ${product.spec}.`, 'Jupiter series offers extended floor count configurations up to 32 landings per panel.'],
        'tejas wood': ['Natural hardwood timber trim integrated with precision stainless steel hardware.', 'Warm ambient LED illumination complementing bespoke home lift and residential cabin aesthetics.', `Core specification: ${product.spec}.`, 'Custom wood species available — Teak, Oak, Walnut, and Wenge on request.'],
      };

      const focus = focusMap[sub] || [
        `Engineered for ${title}.`,
        `Key technical attributes: ${product.spec}.`,
        'Designed to integrate seamlessly with Heer controller cabinets and drive systems.',
        'Available in multiple finish and configuration options — contact us for custom specs.'
      ];

      const features = [
        ...specParts.map(s => s),
        'Manufactured to EN81-20/50 safety and accessibility standards.',
        'Compatible with all major elevator controller brands including Heer CTRL series.',
        'Available with Braille embossing and audio announcer integration on request.',
        'Factory-tested and QC-inspected before dispatch — includes 24-month warranty.'
      ];

      const warnings = [
        'Panel installation must be performed by a certified elevator technician only.',
        'Ensure power is fully isolated before any harness connection or panel removal.',
        'Do not exceed rated operating temperature range: 0°C to +55°C.',
        'Clean glass and touch surfaces with a dry microfibre cloth only — no liquid solvents.',
        'Check all terminal connections and earthing continuity at every annual inspection.'
      ];

      return { FOCUS: focus, 'MAIN FEATURES': features, WARNINGS: warnings };
    }

    if (isControl) {
      const focus = [
        `Designed for: ${title}.`,
        `Power supply 230 V AC / 380 V 3-Phase standard options.`,
        `Integrated telemetry attributes: ${product.spec}.`,
        'Full European compliance: EN81-20/50 safety regulations certified.'
      ];

      const featuresByCode = {
        'HEER-CTRL-32': ['Ultra-fast 32-Bit dual microprocessor architecture with real-time diagnostic curves.', 'CAN-Bus high-speed serial communication with full electromagnetic shielding.', 'Zero-jerk VVVF vector drive compatibility for smooth passenger comfort.', 'EN81-20/50 certified fail-safe relay logic and phase-failure protection.', 'Plug-and-play modular harness structure with quick-swap relay terminal blocks.', 'Bluetooth & WiFi IoT gateway ready for cloud remote monitoring and instant phone tuning.'],
        'HEER-INV-01': ['Direct torque control VVVF inverter with automatic rescue device (ARD) on-board.', 'Regenerative power return capability — reduces energy consumption by up to 30%.', 'Compatible with synchronous (PMSM) and induction gearless motor configurations.', 'Isolated CAN-Bus feedback loop to main controller for zero-latency positioning.', 'Built-in soft-start/stop curves eliminates mechanical brake wear.', 'IP20 protection class with internal cooling fan and thermal overload monitoring.'],
        'HEER-DEST-01': ['AI-based passenger routing algorithm for multi-car destination dispatch logic.', 'Supports up to 64 floor allocations per controller node in high-rise towers.', 'Reduces average waiting time by 35% vs. conventional up/down call systems.', 'Integrates with turnstile access control and smart building management systems.', 'Real-time floor occupancy telemetry — displayed on lobby screens and mobile app.', 'Supports group control for 2–8 elevator cars in parallel with automatic load balancing.'],
        'HEER-SER-01': ['CAN-Bus based car-top serial inspection board for real-time diagnostics.', 'Plug-and-play wiring harness eliminates point-to-point relay cabling overhead.', 'Supports remote firmware update via Bluetooth — no panel access required.', 'Isolated RS485 ports for parallel connection of up to 64 landing boards.', 'Built-in fault logger stores last 500 events with timestamps.', 'Compact IP20-rated PCB fits standard car-top junction boxes.'],
        'HEER-SER-02': ['Low-voltage telemetry hub for multi-floor landing call station networks.', 'Shielded RS485 data ports eliminate signal noise in long hoistway runs.', 'Supports up to 64 landing nodes on a single RS485 daisy-chain.', 'LED status indicators for bus active, fault, and power states.', 'Compatible with Heer CTRL-32 and third-party controller serial protocols.', 'Auto-address assignment — no manual DIP switch configuration required.'],
        'CL24': ['Multi-stage surge and spike protection for 24 V DC and 230 V AC elevator circuits.', 'Fast-trip thermal breaker eliminates single-point failures in relay arrays.', 'EN81-20 compliant safety relay with guided-contact force-opening mechanism.', 'Compact DIN-rail mount — fits standard 35mm elevator control cabinet rails.', 'Colour-coded terminal blocks for zero-error field wiring.', 'UL and CE certified — verified for international installation compliance.'],
        'GSM105': ['HD voice-grade GSM emergency communicator with dual SIM backup failover.', 'Instant auto-dial to up to 5 pre-programmed emergency responder numbers.', 'DTMF touch-tone remote monitoring — listen-in and talk-down from any phone.', 'Integrated 72-hour battery backup for grid power failure scenarios.', 'CE and EN81-28 emergency evacuation alarm compliant.', 'Status SMS auto-alert on power failure, low battery, or call fault events.'],
        'SNV201': ['Precision optical rotary pulse encoder for exact cabin position tracking.', 'Vibration-damped pulley tensioner arm eliminates belt-slip positional drift.', 'Output: 1024 PPR quadrature encoder signal — compatible with all VVVF drives.', 'IP54 sealed encoder housing — resistant to hoistway dust and humidity.', 'Stainless steel mounting bracket — rated for -20°C to +80°C operating range.', 'Direct replacement for standard 10 mm shaft elevator encoder kits.'],
        'HEER-DRV-01': ['Heavy-duty synchronous door motor delivering 150 Nm continuous torque output.', 'Ultra-low thermal dissipation — rated for 1 million door open/close cycles.', 'Variable-speed door drive controller with soft-open / soft-close profiles.', 'Obstacle detection reverse logic with adjustable force sensitivity.', 'Compatible with EN81-20 door dwell time and reopening cycle requirements.', 'Plug-and-play harness connection to Heer CTRL-32 door drive output.'],
        'HEER-COMM-IOT': ['24/7 cellular LTE telemetry gateway with real-time cloud data push.', 'Predictive maintenance AI — fault probability scoring updated every 15 minutes.', 'Remote parameter tuning via encrypted API — no on-site technician required.', 'Stores up to 30 days of local operational data in the event of network outage.', 'Push notifications: mobile app, SMS, and e-mail alert channels configurable.', 'Supports multi-elevator fleet monitoring from a single cloud dashboard.'],
      };

      const features = featuresByCode[code] || specParts.map(s => s).concat(['EN81-20/50 safety standard compliant.', 'Compatible with Heer CTRL-32 controller series.', '24-month manufacturer warranty included.', 'Factory-tested and QC-inspected before dispatch.']);

      const warnings = [
        'Always isolate 230 V / 380 V mains power before any harness extraction or terminal work.',
        'Installation must be performed exclusively by certified elevator technicians per local codes.',
        'Max operating ambient temperature: -10°C to +65°C — ensure adequate cabinet ventilation.',
        'Check CAN-Bus shielding and earth ground continuity at every annual inspection.',
        'Never operate the controller with safety relay bypassed or short-circuited.'
      ];

      return { FOCUS: focus, 'MAIN FEATURES': features, WARNINGS: warnings };
    }

    // Fallback
    return {
      FOCUS: [`Product: ${title}.`, `Key specifications: ${product.spec}.`, 'Engineered to integrate with Heer elevator system architecture.', 'Contact us for full technical documentation and custom configuration options.'],
      'MAIN FEATURES': specParts.length > 0 ? specParts : ['Premium quality build — engineered to EN81 safety standards.', '24-month manufacturer warranty included.', 'Factory-tested and QC-inspected before dispatch.'],
      WARNINGS: ['Installation must be performed by a certified elevator technician only.', 'Always isolate mains power before any wiring or terminal work.', 'Refer to the product datasheet for full operating limits.']
    };
  };

  const tabContents = getTabContents();

  // ─── Shared input style ────────────────────────────────────────────────────
  const inputStyle = {
    width: '100%',
    padding: isMobile ? '14px 16px' : '10px 0',
    border: isMobile ? '1px solid rgba(0,0,0,0.18)' : 'none',
    borderBottom: '1px solid rgba(0,0,0,0.25)',
    borderRadius: isMobile ? '10px' : '0',
    backgroundColor: isMobile ? '#fafafa' : 'transparent',
    fontSize: '1rem',
    color: '#111111',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxSizing: 'border-box',
    WebkitAppearance: 'none',
    appearance: 'none',
    boxShadow: 'none'
  };

  return (
    <>
      <style>{`
        /* ── Hero ─────────────────────────────────────────────── */
        .pdp-hero {
          background-color: #f2f2f4;
          border-radius: 24px;
          padding: 60px 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          position: relative;
          box-shadow: 0 10px 40px rgba(0,0,0,0.02);
        }
        /* ── Gallery ──────────────────────────────────────────── */
        .pdp-gallery-thumb-row {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          max-width: 100%;
          padding: 8px 4px;
          scrollbar-width: thin;
          -webkit-overflow-scrolling: touch;
        }
        .pdp-gallery-thumb-row::-webkit-scrollbar { height: 4px; }
        .pdp-gallery-thumb-row::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 4px; }
        /* ── Spec chips ───────────────────────────────────────── */
        .pdp-spec-chips {
          display: none;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }
        .pdp-spec-chip {
          padding: 5px 12px;
          background: rgba(0,0,0,0.06);
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #333;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }
        /* ── Tabs ─────────────────────────────────────────────── */
        .pdp-tabs {
          display: flex;
          gap: 40px;
          border-bottom: 1px solid rgba(0,0,0,0.12);
        }
        /* ── Form input focus ─────────────────────────────────── */
        .pdp-input:focus {
          border-color: #0066cc !important;
          box-shadow: 0 0 0 3px rgba(0,102,204,0.10) !important;
          outline: none !important;
        }
        /* ── Sticky mobile CTA ────────────────────────────────── */
        .pdp-mobile-cta {
          display: none;
          position: fixed;
          bottom: 0; left: 0; right: 0;
          padding: 12px 16px env(safe-area-inset-bottom, 12px);
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid rgba(0,0,0,0.08);
          z-index: 900;
        }
        /* ─────────────────────────── tablet ─── */
        @media (max-width: 991px) {
          .pdp-hero { padding: 36px 28px !important; gap: 24px !important; }
        }
        /* ─────────────────────────── mobile ─── */
        @media (max-width: 767px) {
          .pdp-container { padding-top: 100px !important; padding-bottom: 110px !important; }
          .pdp-container > .container { padding: 0 14px !important; }
          .pdp-hero {
            padding: 20px 16px 24px !important;
            border-radius: 18px !important;
            flex-direction: column !important;
            gap: 0 !important;
            align-items: flex-start !important;
          }
          .pdp-hero h1 { font-size: clamp(1.9rem, 8vw, 2.8rem) !important; }
          .pdp-hero-left {
            min-height: unset !important;
            width: 100% !important;
          }
          .pdp-hero-right {
            width: 100% !important;
            min-height: 220px !important;
            margin-top: 20px !important;
          }
          .pdp-hero-breadcrumb { margin-top: 16px !important; font-size: 0.72rem !important; }
          .pdp-spec-chips { display: flex !important; }
          .pdp-spec-text { display: none !important; }
          .pdp-tabs {
            gap: 0 !important;
            overflow-x: auto !important;
            white-space: nowrap !important;
            scrollbar-width: none !important;
            -webkit-overflow-scrolling: touch;
            margin: 0 -14px !important;
            padding: 0 14px !important;
          }
          .pdp-tabs::-webkit-scrollbar { display: none; }
          .pdp-tabs button { padding: 0 14px 12px !important; flex-shrink: 0; font-size: 0.78rem !important; letter-spacing: 0.06em !important; }
          .pdp-section2 { padding: 0 !important; margin-top: 36px !important; }
          .pdp-section3 { padding-left: 0 !important; padding-right: 0 !important; margin-top: 40px !important; padding-top: 36px !important; }
          .pdp-mobile-cta { display: block !important; }
          .pdp-form-submit-desktop { display: none !important; }
          .pdp-pb-mobile { padding-bottom: 100px !important; }
          .pdp-brochure-row { flex-direction: column !important; gap: 14px !important; align-items: flex-start !important; }
          .pdp-nav { margin-bottom: 12px !important; }
        }
        @media (max-width: 400px) {
          .pdp-hero { border-radius: 14px !important; }
        }
      `}</style>

      <div
        className="pdp-container"
        style={{
          backgroundColor: '#ffffff',
          minHeight: '100vh',
          paddingTop: '135px',
          paddingBottom: '110px',
          color: '#111111',
          fontFamily: 'var(--font-body)'
        }}
      >
        <div
          className="container"
          style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}
        >

          {/* ── Top Nav ────────────────────────────────────────────── */}
          <div
            className="pdp-nav"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}
          >
            <button
              onClick={onBack}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: '#555', fontSize: '0.92rem', fontWeight: 600, cursor: 'pointer', padding: '10px 0', minHeight: '44px' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0066cc'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#555'}
            >
              <ArrowLeft size={17} />
              <span>Back to Products</span>
            </button>

            <div style={{ fontSize: '0.82rem', color: '#999', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>Products</span><span>/</span>
              <span style={{ color: '#111', fontWeight: 600, textTransform: 'capitalize' }}>{product.category}</span>
            </div>
          </div>

          {/* ── Hero Section ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="pdp-hero"
          >
            {/* Left */}
            <div className="pdp-hero-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '360px', flex: '1 1 320px' }}>
              <div>
                <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4.8rem)', fontWeight: 600, color: '#111', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 14px 0' }}>
                  {product.code || product.title.split(' ')[0]}
                </h1>
                <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#444', fontWeight: 500, maxWidth: '450px', lineHeight: 1.4, margin: 0 }}>
                  {product.title}
                </p>
                {product.spec && (
                  <>
                    <p className="pdp-spec-text" style={{ fontSize: '0.84rem', color: '#888', marginTop: '12px', lineHeight: 1.5 }}>
                      {product.spec}
                    </p>
                    <div className="pdp-spec-chips">
                      {specParts.map((sp, idx) => (
                        <span key={idx} className="pdp-spec-chip">{sp}</span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div
                className="pdp-hero-breadcrumb"
                style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', color: '#111', textTransform: 'uppercase', marginTop: '40px' }}
              >
                {product.category.toUpperCase()} / {product.subCategory.toUpperCase()}
              </div>
            </div>

            {/* Right – Gallery */}
            <div
              className="pdp-hero-right"
              style={{ flex: '1.3 1 540px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: isMobile ? '260px' : '520px', width: '100%' }}
            >
              {/* Photos / Videos toggle */}
              {videosList.length > 0 && (
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', backgroundColor: 'rgba(0,0,0,0.06)', padding: '4px', borderRadius: '12px' }}>
                  {['image', 'video'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setMediaType(type)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        padding: '8px 16px', borderRadius: '8px', border: 'none',
                        backgroundColor: mediaType === type ? '#111' : 'transparent',
                        color: mediaType === type ? '#fff' : '#444',
                        fontSize: '0.86rem', fontWeight: 600, cursor: 'pointer',
                        transition: 'all 0.2s ease', minHeight: '36px'
                      }}
                    >
                      {type === 'image' ? <ImageIcon size={15} /> : <Video size={15} />}
                      <span>{type === 'image' ? `Photos (${imagesList.length})` : `Videos (${videosList.length})`}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Main display */}
              <div
                style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: isMobile ? '240px' : '520px', marginBottom: '20px', userSelect: 'none' }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  {mediaType === 'image' ? (
                    <motion.img
                      key={currentImage}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.22 }}
                      src={currentImage}
                      alt={product.title}
                      style={{
                        maxHeight: isMobile ? '280px' : '580px',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.18))',
                        display: 'block',
                        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: isMobile ? 'default' : 'zoom-in'
                      }}
                      onMouseEnter={(e) => { if (!isMobile) e.currentTarget.style.transform = 'scale(1.06)'; }}
                      onMouseLeave={(e) => { if (!isMobile) e.currentTarget.style.transform = 'scale(1)'; }}
                    />
                  ) : (
                    <motion.div
                      key={currentVideo}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                    >
                      <video
                        src={currentVideo}
                        controls autoPlay loop muted playsInline
                        style={{ maxHeight: isMobile ? '260px' : '560px', maxWidth: '100%', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.18)', backgroundColor: '#000' }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Arrow nav (images only, when multiple) */}
                {mediaType === 'image' && imagesList.length > 1 && (
                  <>
                    <button
                      onClick={goPrevImage}
                      style={{ position: 'absolute', left: '-4px', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.9)', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', zIndex: 2, flexShrink: 0 }}
                    >
                      <ChevronLeft size={18} color="#111" />
                    </button>
                    <button
                      onClick={goNextImage}
                      style={{ position: 'absolute', right: '-4px', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.9)', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', zIndex: 2, flexShrink: 0 }}
                    >
                      <ChevronRight size={18} color="#111" />
                    </button>
                  </>
                )}
              </div>

              {/* Dot indicator – mobile only */}
              {mediaType === 'image' && imagesList.length > 1 && isMobile && (
                <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
                  {imagesList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIdx(idx)}
                      style={{ width: idx === selectedImageIdx ? '18px' : '7px', height: '7px', borderRadius: '9999px', backgroundColor: idx === selectedImageIdx ? '#111' : 'rgba(0,0,0,0.2)', border: 'none', padding: 0, cursor: 'pointer', transition: 'all 0.25s ease' }}
                    />
                  ))}
                </div>
              )}

              {/* Thumbnail strip – desktop */}
              {mediaType === 'image' && imagesList.length > 1 && !isMobile && (
                <div className="pdp-gallery-thumb-row">
                  {imagesList.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIdx(idx)}
                      style={{ width: '56px', height: '56px', borderRadius: '10px', padding: '3px', backgroundColor: '#fff', border: idx === selectedImageIdx ? '2px solid #111' : '1px solid rgba(0,0,0,0.12)', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease', boxShadow: idx === selectedImageIdx ? '0 4px 12px rgba(0,0,0,0.14)' : 'none', transform: idx === selectedImageIdx ? 'scale(1.06)' : 'scale(1)' }}
                    >
                      <img src={imgUrl} alt={`Thumb ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px' }} />
                    </button>
                  ))}
                </div>
              )}

              {/* Video selector pills */}
              {mediaType === 'video' && videosList.length > 1 && (
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
                  {videosList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedVideoIdx(idx)}
                      style={{ padding: '7px 16px', borderRadius: '8px', backgroundColor: idx === selectedVideoIdx ? '#111' : 'rgba(0,0,0,0.08)', color: idx === selectedVideoIdx ? '#fff' : '#333', border: 'none', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s ease', minHeight: '36px' }}
                    >
                      Video {idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* ── Section 2: Tabs + Brochure ─────────────────────── */}
          <div className="pdp-section2" style={{ marginTop: '70px', padding: '0 24px' }}>

            {/* Tab bar */}
            <div className="pdp-tabs">
              {Object.keys(tabContents).map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{ background: 'none', border: 'none', padding: '0 0 16px 0', fontSize: '0.88rem', fontWeight: isActive ? 700 : 500, letterSpacing: '0.1em', color: isActive ? '#111' : '#888', borderBottom: isActive ? '2px solid #111' : '2px solid transparent', cursor: 'pointer', transition: 'all 0.2s ease', marginBottom: '-1px', minHeight: '44px', whiteSpace: 'nowrap' }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                style={{ paddingTop: '32px', minHeight: '160px', maxWidth: '960px' }}
              >
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {tabContents[activeTab].map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: 'clamp(0.92rem, 2.2vw, 1rem)', color: '#333', lineHeight: 1.55 }}>
                      <span style={{ fontWeight: 700, color: '#111', flexShrink: 0, marginTop: '1px' }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Brochure */}
            <div style={{ marginTop: '60px', paddingTop: '36px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.16em', color: '#666', textTransform: 'uppercase', marginBottom: '16px' }}>
                BROCHURE
              </div>
              <div className="pdp-brochure-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
                <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: '#444', lineHeight: 1.65, maxWidth: '680px', margin: 0 }}>
                  Download the brochure for complete product information — features, dimensions, models, and available finishes — available on any device.
                </p>
                <button
                  onClick={() => alert(`Downloading brochure for ${product.code}...`)}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer', padding: '10px 14px', borderRadius: '12px', transition: 'background 0.2s ease', minHeight: '44px' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,102,204,0.06)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Download size={30} color="#111" strokeWidth={2} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#111' }}>Get the brochure</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0066cc' }}>Download</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* ── Section 3: Inquiry Form ────────────────────────── */}
          <div
            className="pdp-section3 pdp-pb-mobile"
            style={{ marginTop: '80px', paddingTop: '56px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingLeft: '24px', paddingRight: '24px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', fontWeight: 400, color: '#111', letterSpacing: '-0.02em', margin: '0 0 14px 0', lineHeight: 1.2 }}>
              Interested in this product?{' '}
              <span style={{ color: '#0066cc', fontWeight: 500 }}>Send your request.</span>
            </h2>
            <p style={{ fontSize: 'clamp(0.92rem, 2vw, 1.05rem)', color: '#555', margin: '0 0 40px 0', lineHeight: 1.55 }}>
              Request more information or a free quote — specify the quantity and any special requirements. We'll reply by e-mail.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ backgroundColor: '#f2f9f2', border: '1px solid #4caf50', borderRadius: '16px', padding: isMobile ? '28px 20px' : '36px 40px', textAlign: 'center', maxWidth: '640px' }}
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#4caf50', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                  <Check size={26} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1b5e20', margin: '0 0 8px 0' }}>Request Sent!</h3>
                <p style={{ fontSize: '0.96rem', color: '#2e7d32', margin: '0 0 20px 0', lineHeight: 1.5 }}>
                  Thank you, <strong>{formState.name || 'valued client'}</strong>. Our team has received your inquiry for <strong>{product.title} ({product.code})</strong> and will reply shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ padding: '11px 24px', borderRadius: '9999px', backgroundColor: '#1b5e20', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: '0.95rem', minHeight: '44px' }}
                >
                  Send Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSendRequest}>

                {/* Row 1: Name, Company, Email, Qty */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: isMobile ? '20px' : '32px', marginBottom: '32px' }}>
                  {[
                    { name: 'name', placeholder: 'Name *', type: 'text', required: true },
                    { name: 'company', placeholder: 'Company *', type: 'text', required: true },
                    { name: 'email', placeholder: 'E-mail *', type: 'email', required: true },
                    { name: 'quantity', placeholder: 'Quantity', type: 'number', required: true, min: '1' }
                  ].map((field) => (
                    <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {isMobile && (
                        <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#666', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                          {field.placeholder.replace(' *', '')}
                        </label>
                      )}
                      <input
                        className="pdp-input"
                        type={field.type}
                        name={field.name}
                        placeholder={isMobile ? '' : field.placeholder}
                        required={field.required}
                        min={field.min}
                        value={formState[field.name]}
                        onChange={handleInputChange}
                        style={{ ...inputStyle }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#0066cc'; if (isMobile) e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,102,204,0.10)'; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = isMobile ? 'rgba(0,0,0,0.18)' : 'rgba(0,0,0,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}
                      />
                    </div>
                  ))}
                </div>

                {/* Row 2: Request textarea */}
                <div style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {isMobile && (
                    <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#666', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Request / Details
                    </label>
                  )}
                  <textarea
                    className="pdp-input"
                    name="request"
                    placeholder={isMobile ? '' : 'Request (Please specify any custom requirements, harness specs, or project details...)'}
                    rows={isMobile ? 4 : 3}
                    value={formState.request}
                    onChange={handleInputChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '90px' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#0066cc'; if (isMobile) e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,102,204,0.10)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = isMobile ? 'rgba(0,0,0,0.18)' : 'rgba(0,0,0,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>

                {/* Privacy checkbox */}
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '32px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy-check"
                    checked={formState.privacy}
                    onChange={handleInputChange}
                    style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: '#0066cc', flexShrink: 0, marginTop: '2px' }}
                  />
                  <span style={{ fontSize: 'clamp(0.88rem, 2vw, 0.94rem)', color: '#333', lineHeight: 1.5, userSelect: 'none' }}>
                    I authorise the processing of my personal data as per{' '}
                    <span style={{ textDecoration: 'underline', fontWeight: 600 }}>Privacy Policy</span>
                  </span>
                </label>

                {/* Submit – desktop */}
                <div className="pdp-form-submit-desktop">
                  <button
                    type="submit"
                    style={{ padding: '14px 52px', borderRadius: '9999px', backgroundColor: '#fff', color: '#0066cc', fontSize: '0.98rem', fontWeight: 600, border: '1px solid #d0d0d0', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,0.04)', transition: 'all 0.25s ease', minHeight: '50px' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0066cc'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#0066cc'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#0066cc'; e.currentTarget.style.borderColor = '#d0d0d0'; }}
                  >
                    Send Request
                  </button>
                </div>

                {/* Submit – mobile sticky (rendered inside form so submit works) */}
                <div className="pdp-mobile-cta">
                  <button
                    type="submit"
                    style={{ width: '100%', padding: '15px', borderRadius: '14px', backgroundColor: '#0066cc', color: '#fff', fontSize: '1rem', fontWeight: 700, border: 'none', cursor: 'pointer', letterSpacing: '0.02em', boxShadow: '0 4px 20px rgba(0,102,204,0.30)', transition: 'background 0.2s ease', minHeight: '52px' }}
                  >
                    Send Request →
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
