import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Filter, ChevronRight, Search, Layers, Grid, SlidersHorizontal, X } from 'lucide-react';

export const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'style', label: 'Style & Fixtures' },
  { id: 'control', label: 'Control Systems' },
  { id: 'security', label: 'Security & Sensors' },
  { id: 'doors', label: 'Doors Control' },
  { id: 'communication', label: 'Communication' }
];

export const allProducts = [
  {
    id: 'p1',
    code: 'HEER-FIX-01',
    title: 'Obsidian Glass Touch COP Panel',
    category: 'style',
    subCategory: 'Fixtures',
    spec: 'Tempered Glass | Gold Rim | Micro-Touch',
    price: '$1,450',
    image: '/products/PXL_20260610_125817426.jpg'
  },
  {
    id: 'p2',
    code: 'HEER-FIX-02',
    title: 'Champagne Gold Landing LOP Array',
    category: 'style',
    subCategory: 'Fixtures',
    spec: 'Multi-Floor Matrix | High Contrast LED',
    price: '$620',
    image: '/products/PXL_20260617_060017914.jpg'
  },
  {
    id: 'p3',
    code: 'HEER-DIS-01',
    title: 'High-Contrast OLED Floor Display',
    category: 'style',
    subCategory: 'Display',
    spec: '7-Inch IPS | Custom Telemetry Graphics',
    price: '$340',
    image: '/products/PXL_20260617_060025536.jpg'
  },
  {
    id: 'p4',
    code: 'HEER-BTN-01',
    title: 'Micro-Stroke Stainless Push Buttons',
    category: 'style',
    subCategory: 'Push buttons',
    spec: 'Tactile Click Feedback | Braille Embedded',
    price: '$120',
    image: '/products/IMG-20260523-WA0053.jpg'
  },
  {
    id: 'p5',
    code: 'HEER-FIX-ACC',
    title: 'Braille & Audio Announcer Accessory',
    category: 'style',
    subCategory: 'Accessories',
    spec: 'Multi-Language Voice | High Clarity Speaker',
    price: '$290',
    image: '/products/IMG-20260523-WA0054.jpg'
  },
  {
    id: 'p6',
    code: 'HEER-CTRL-32',
    title: '32-Bit Microprocessor Controller Cabinet',
    category: 'control',
    subCategory: 'Control boards',
    spec: 'Dual Core | Zero Jerk Acceleration | VVVF',
    price: '$4,800',
    image: '/products/PXL_20260703_123618016.jpg'
  },
  {
    id: 'p7',
    code: 'HEER-SER-01',
    title: 'Car Top Serial Inspection Board',
    category: 'control',
    subCategory: 'Car serial boards',
    spec: 'CAN-Bus High Speed | Plug & Play Harness',
    price: '$890',
    image: '/products/PXL_20260703_123745971.jpg'
  },
  {
    id: 'p8',
    code: 'HEER-SER-02',
    title: 'Landing Serial Communication Node',
    category: 'control',
    subCategory: 'Landing serial boards',
    spec: 'Low-Voltage Telemetry Hub | Shielded Ports',
    price: '$450',
    image: '/products/1760038432879.jpg'
  },
  {
    id: 'p9',
    code: 'HEER-INV-01',
    title: 'Integrated VVVF Vector Drive & ARD Unit',
    category: 'control',
    subCategory: 'Inverter and emergency rescue',
    spec: 'Direct Torque Control | Automatic Rescue Power',
    price: '$3,200',
    image: '/products/PXL_20250618_145429848.jpg'
  },
  {
    id: 'p10',
    code: 'HEER-CTRL-ACC',
    title: 'Spike Protection Relay Array',
    category: 'control',
    subCategory: 'Accessories',
    spec: 'Multi-Stage Surge Protection | Fast Trip Breaker',
    price: '$310',
    image: '/products/IMG-20260523-WA0056.jpg'
  },
  {
    id: 'p11',
    code: 'HEER-APP-01',
    title: 'Heer Smart System Control App Gateway',
    category: 'control',
    subCategory: 'System control app',
    spec: 'Bluetooth & WiFi Diagnostic Interface Dongle',
    price: '$750',
    image: '/products/1782586074854.png'
  },
  {
    id: 'p12',
    code: 'HEER-DEST-01',
    title: 'Multi-Tower Destination Control Hub',
    category: 'control',
    subCategory: 'Destination control',
    spec: 'AI Traffic Dispatching | Peak Hour Optimization',
    price: '$6,500',
    image: '/products/PXL_20250829_070702553~2.jpg'
  },
  {
    id: 'p13',
    code: 'HEER-SEC-180',
    title: 'Infrared 180-Beam Light Curtain Array',
    category: 'security',
    subCategory: 'Light curtains',
    spec: '10mm Detection Grid | Sun/Dust Resistant Array',
    price: '$680',
    image: '/products/1782586642582.png'
  },
  {
    id: 'p14',
    code: 'HEER-SEC-EN81',
    title: 'EN81-20 Certified Safety Edge Curtains',
    category: 'security',
    subCategory: 'EN81 Light curtains',
    spec: 'Full European Compliance | Instant Door Reverse',
    price: '$820',
    image: '/products/1782587711453.png'
  },
  {
    id: 'p15',
    code: 'HEER-SEC-3D',
    title: '3D Volumetric Sensor Kit',
    category: 'security',
    subCategory: '3D Sensor Kit',
    spec: 'Approaching Passenger Radar | Touchless Door Hold',
    price: '$1,150',
    image: '/products/1782588403324.png'
  },
  {
    id: 'p16',
    code: 'HEER-DRV-01',
    title: 'Permanent Magnet Door Drive Motor',
    category: 'doors',
    subCategory: 'Door drive',
    spec: 'Whisper Quiet Operation | Vector Closed Loop',
    price: '$1,350',
    image: '/products/PXL_20250829_071044956~2.jpg'
  },
  {
    id: 'p17',
    code: 'HEER-KEY-01',
    title: 'Direct Touch Diagnostics Keypad',
    category: 'doors',
    subCategory: 'Keypads',
    spec: 'Handheld Parameter Programmer | LCD Readout',
    price: '$240',
    image: '/products/1782654258745.png'
  },
  {
    id: 'p18',
    code: 'HEER-MTR-01',
    title: 'High-Torque Synchronous Door Motor',
    category: 'doors',
    subCategory: 'Motors',
    spec: 'Heavy Duty Commercial Grade | Low Thermal Heat',
    price: '$920',
    image: '/products/PXL_20250829_071143333~2.jpg'
  },
  {
    id: 'p19',
    code: 'HEER-APP-DRV',
    title: 'Bluetooth Door Parameter App Dongle',
    category: 'doors',
    subCategory: 'Door drive app',
    spec: 'Instant Phone Tuning Curve Adjustments',
    price: '$190',
    image: '/products/1783175256133.png'
  },
  {
    id: 'p20',
    code: 'HEER-DRV-ACC',
    title: 'Door Encoder & Tensioner Kit',
    category: 'doors',
    subCategory: 'Accessories',
    spec: 'Precision Optical Pulse Encoder & Pulley',
    price: '$160',
    image: '/products/1783269412408.png'
  },
  {
    id: 'p21',
    code: 'HEER-COMM-IOT',
    title: 'Real-Time Cloud Supervision IoT Gateway',
    category: 'communication',
    subCategory: 'Cloud based supervision',
    spec: '24/7 Cellular Telemetry | Predictive Diagnostics',
    price: '$1,850',
    image: '/products/PXL_20250829_075537037~2.jpg'
  },
  {
    id: 'p22',
    code: 'HEER-COMM-HUB',
    title: 'Emergency Intercom & CAN-Bus Hub',
    category: 'communication',
    subCategory: 'Accessories',
    spec: '3-Way Emergency Audio | Battery Backup Line',
    price: '$420',
    image: '/products/1783270316824.png'
  },
  {
    id: 'p23',
    code: 'HEER-GSM-01',
    title: 'Digital GSM & Intercom Emergency Communicator',
    category: 'communication',
    subCategory: 'Intercom & GSM units',
    spec: 'HD Voice | Dual SIM Backup | Instant Dispatch Relay',
    price: '$580',
    image: '/products/1783401578792.png'
  },
  {
    id: 'p24',
    code: 'HEER-MON-01',
    title: '24/7 Elevator Fleet Remote Monitoring Node',
    category: 'communication',
    subCategory: 'Remote monitoring',
    spec: 'Predictive Maintenance AI | Secure API Dashboard Node',
    price: '$1,250',
    image: '/products/PXL_20250829_075540909~2.jpg'
  }
];

export const categoryMap = {
  all: { id: 'all', label: 'All Products', subCategories: [] },
  style: { id: 'style', label: 'Style & Fixtures', subCategories: ['All Style', 'Fixtures', 'Display', 'Push buttons', 'Accessories'] },
  control: { id: 'control', label: 'Control Systems', subCategories: ['All Control', 'Control boards', 'Car serial boards', 'Landing serial boards', 'Inverter and emergency rescue', 'Accessories', 'System control app', 'Destination control'] },
  security: { id: 'security', label: 'Security & Sensors', subCategories: ['All Security', 'Light curtains', 'EN81 Light curtains', '3D Sensor Kit'] },
  doors: { id: 'doors', label: 'Doors Control', subCategories: ['All Doors Control', 'Door drive', 'Keypads', 'Motors', 'Door drive app', 'Accessories'] },
  communication: { id: 'communication', label: 'Communication & IoT', subCategories: ['All Communication', 'Intercom & GSM units', 'Remote monitoring', 'Cloud based supervision', 'Accessories'] }
};

export default function ProductGridPage({ selectedCategory = 'all', onSelectCategory, onProductClick, onBookClick }) {
  const [searchQuery, setSearchQuery] = useState('');

  const lowerSelected = (selectedCategory || 'all').toLowerCase();
  let activeMainCat = 'all';
  let activeSubCat = 'all';

  if (categoryMap[lowerSelected]) {
    activeMainCat = lowerSelected;
    activeSubCat = 'all';
  } else {
    for (const [mainKey, mainObj] of Object.entries(categoryMap)) {
      const foundSub = mainObj.subCategories.find(sub => sub.toLowerCase() === lowerSelected);
      if (foundSub) {
        activeMainCat = mainKey;
        activeSubCat = foundSub;
        break;
      }
    }
  }

  // Filtered products for specific category/subcategory or search
  const filteredProducts = allProducts.filter(p => {
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchQuery = p.title.toLowerCase().includes(q) || p.spec.toLowerCase().includes(q) || p.code.toLowerCase().includes(q) || p.subCategory.toLowerCase().includes(q);
      if (!matchQuery) return false;
    }
    if (activeMainCat === 'all') return true;
    if (p.category !== activeMainCat) return false;
    if (activeSubCat === 'all' || activeSubCat.startsWith('All ')) return true;
    return p.subCategory.toLowerCase() === activeSubCat.toLowerCase();
  });

  const currentHeading = searchQuery.trim() !== ''
    ? `Search Results for "${searchQuery}"`
    : activeSubCat !== 'all' && !activeSubCat.startsWith('All ')
    ? activeSubCat.toLowerCase()
    : categoryMap[activeMainCat]?.label.toLowerCase() || 'all products';

  const isMultiRowView = activeMainCat === 'all' && activeSubCat === 'all' && searchQuery.trim() === '';

  const renderProductCard = (product) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.18 } }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      key={product.id}
      onClick={() => {
        if (onProductClick) onProductClick(product);
      }}
      className="gallery-card"
      style={{
        backgroundColor: '#ffffff',
        borderRight: '1px solid rgba(0,0,0,0.1)',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        padding: '22px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        minHeight: '235px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#faf8f3';
        const img = e.currentTarget.querySelector('.grid-product-img');
        if (img) img.style.transform = 'scale(1.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#ffffff';
        const img = e.currentTarget.querySelector('.grid-product-img');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      <div style={{
        width: '100%',
        height: '140px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '6px 0 16px 0',
        position: 'relative',
        flex: 1
      }}>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          decoding="async"
          className="grid-product-img"
          style={{
            maxHeight: '100%',
            maxWidth: '85%',
            objectFit: 'contain',
            transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
            filter: 'drop-shadow(0 10px 18px rgba(0,0,0,0.1))'
          }}
        />
      </div>

      <div style={{ 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        gap: '14px',
        borderTop: '1px solid rgba(0,0,0,0.08)', 
        paddingTop: '14px' 
      }}>
        <div>
          <span style={{ fontSize: '0.72rem', color: '#c6a661', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
            {product.subCategory}
          </span>
          <h3 style={{
            fontSize: '1.02rem',
            fontWeight: 600,
            color: '#111111',
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
            margin: '2px 0 0 0'
          }}>
            {product.title}
          </h3>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onProductClick) onProductClick(product);
          }}
          style={{
            padding: '8px 14px',
            borderRadius: '6px',
            backgroundColor: '#111111',
            color: '#ffffff',
            fontSize: '0.8rem',
            fontWeight: 500,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            flexShrink: 0,
            transition: 'background-color 0.25s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c6a661'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111111'}
        >
          <span>View Spec</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </motion.div>
  );

  return (
    <div style={{ paddingTop: '130px', paddingBottom: '120px', minHeight: '100vh', backgroundColor: '#fcfaf6', color: '#111111' }}>
      <div className="container" style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Top Header & Breadcrumb Bar matching lapakbaju / Reference Image 2 */}
        <div style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              <span onClick={() => { setSearchQuery(''); onSelectCategory('all'); }} style={{ cursor: 'pointer' }}>Products</span>
              <ChevronRight size={14} />
              <span style={{ color: '#c6a661' }}>{currentHeading}</span>
            </div>

            {!isMultiRowView && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  onSelectCategory('all');
                }}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(0,0,0,0.06)',
                  color: '#111111',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  border: '1px solid rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#111111'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.color = '#111111'; }}
              >
                <span>← Back to All Categories Overview</span>
              </button>
            )}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px' }}>
            <h1 style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: '#111111',
              textTransform: 'lowercase',
              margin: 0
            }}>
              {currentHeading}
            </h1>

            {/* Quick Keyword & Spec Filter Search Bar */}
            <div style={{ position: 'relative', minWidth: '300px', flex: '1', maxWidth: '420px' }}>
              <Search size={17} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#888888' }} />
              <input
                type="text"
                placeholder="Search specs, models, or codes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 42px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(0,0,0,0.15)',
                  backgroundColor: '#ffffff',
                  fontSize: '0.9rem',
                  color: '#111111',
                  outline: 'none',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#c6a661'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
              />
              {searchQuery && (
                <X
                  size={16}
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#666666', cursor: 'pointer' }}
                />
              )}
            </div>
          </div>
        </div>

        {/* lapakbaju inspired layout: Left Sidebar + Right Main Showcase */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '36px', alignItems: 'flex-start' }}>
          
          {/* Left Category & Filter Sidebar (lapakbaju style) */}
          <div style={{
            width: '270px',
            flexShrink: 0,
            backgroundColor: '#ffffff',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '16px',
            padding: '24px 20px',
            position: 'sticky',
            top: '110px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.02)'
          }}>
            <div>
              <h3 style={{ fontSize: '0.92rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111111', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={16} color="#c6a661" />
                <span>Categories</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {categories.map((cat) => {
                  const isCatActive = activeMainCat === cat.id && !searchQuery;
                  const itemCount = cat.id === 'all' ? allProducts.length : allProducts.filter(p => p.category === cat.id).length;
                  const hasSubCats = cat.id !== 'all' && categoryMap[cat.id]?.subCategories.length > 0;

                  return (
                    <li key={cat.id} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          onSelectCategory(cat.id);
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          fontSize: '0.88rem',
                          fontWeight: isCatActive ? 600 : 400,
                          backgroundColor: isCatActive ? '#111111' : 'transparent',
                          color: isCatActive ? '#ffffff' : '#444444',
                          border: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => !isCatActive && (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)')}
                        onMouseLeave={(e) => !isCatActive && (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <span>{cat.label}</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, backgroundColor: isCatActive ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.06)', padding: '2px 8px', borderRadius: '9999px', color: isCatActive ? '#ffffff' : '#777777' }}>
                          {itemCount}
                        </span>
                      </button>

                      {/* Show ALL Subcategories permanently inside the Side Nav tree at once! */}
                      {hasSubCats && (
                        <ul style={{
                          listStyle: 'none',
                          padding: '4px 0 6px 12px',
                          margin: '2px 0 6px 6px',
                          borderLeft: isCatActive ? '2px solid #c6a661' : '1px solid rgba(0,0,0,0.12)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '3px'
                        }}>
                          {categoryMap[cat.id].subCategories.map((subItem) => {
                            const isSubSelected = (activeMainCat === cat.id && activeSubCat === subItem) || (activeMainCat === cat.id && activeSubCat === 'all' && subItem.startsWith('All '));
                            return (
                              <li key={subItem}>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (subItem.startsWith('All ')) {
                                      onSelectCategory(cat.id);
                                    } else {
                                      onSelectCategory(subItem);
                                    }
                                  }}
                                  style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    padding: '6px 12px',
                                    borderRadius: '6px',
                                    fontSize: '0.81rem',
                                    fontWeight: isSubSelected ? 600 : 400,
                                    backgroundColor: isSubSelected ? 'rgba(198, 166, 97, 0.16)' : 'transparent',
                                    color: isSubSelected ? '#111111' : '#666666',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    transition: 'all 0.15s ease'
                                  }}
                                  onMouseEnter={(e) => !isSubSelected && (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)')}
                                  onMouseLeave={(e) => !isSubSelected && (e.currentTarget.style.backgroundColor = 'transparent')}
                                >
                                  {isSubSelected && <CheckCircle2 size={12} color="#c6a661" style={{ flexShrink: 0 }} />}
                                  <span>{subItem}</span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Division Highlights */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '20px' }}>
              <h3 style={{ fontSize: '0.86rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111111', margin: '0 0 12px 0' }}>
                Engineering Focus
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: '#666666' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#c6a661" />
                  <span>32-Bit Microprocessors</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#c6a661" />
                  <span>CAN-Bus Serial Harness</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#c6a661" />
                  <span>EN81-20/50 Compliance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#c6a661" />
                  <span>Cloud Telemetry IoT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Showcase Display Area */}
          <div style={{ flex: 1, minWidth: 0 }}>
            
            {/* SCENARIO 1: Multi-Category Row-by-Row Showcase with "View All ->" options */}
            {/* SCENARIO 1: Multi-Category Row-by-Row Showcase with exactly 3 cards and View All btn */}
            {isMultiRowView ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', margin: '0 5px' }}>
                {categories.filter(c => c.id !== 'all').map((cat) => {
                  const catProducts = allProducts.filter(p => p.category === cat.id);

                  return (
                    <div
                      key={cat.id}
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid rgba(0,0,0,0.09)',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.02)',
                        margin: '0 5px'
                      }}
                    >
                      {/* Section Row Header with clean title & View All Button (No Top Subcategory Navbar!) */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        padding: '24px 28px',
                        borderBottom: '1px solid rgba(0,0,0,0.08)',
                        backgroundColor: '#faf8f3'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#111111', margin: 0 }}>
                            {cat.label}
                          </h2>
                          <span style={{ fontSize: '0.8rem', fontWeight: 600, backgroundColor: '#111111', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px' }}>
                            {catProducts.length} items
                          </span>
                        </div>

                        {/* "View All [Category]" prominent button right at row header */}
                        <button
                          onClick={() => onSelectCategory(cat.id)}
                          style={{
                            padding: '10px 24px',
                            borderRadius: '9999px',
                            backgroundColor: '#111111',
                            color: '#ffffff',
                            fontSize: '0.88rem',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            flexShrink: 0,
                            transition: 'all 0.25s ease',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c6a661'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111111'}
                        >
                          <span>View All ({catProducts.length})</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>

                      {/* Exactly 3 Products Grid for this Category Row */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                        backgroundColor: '#ffffff'
                      }}>
                        {catProducts.slice(0, 3).map((product) => renderProductCard(product))}
                      </div>

                      {catProducts.length > 3 && (
                        <div style={{ padding: '14px 28px', backgroundColor: '#faf8f3', borderTop: '1px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
                          <span onClick={() => onSelectCategory(cat.id)} style={{ fontSize: '0.85rem', fontWeight: 600, color: '#c6a661', cursor: 'pointer' }}>
                            + {catProducts.length - 3} more {cat.label.toLowerCase()} items available when viewing all →
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* SCENARIO 2: Specific Category/Subcategory or Search Drill-Down Grid (No Top Navbar, 3 Cards Per Row, 5px margin from widths) */
              <div style={{ margin: '0 5px' }}>
                <motion.div
                  layout
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                    borderLeft: '1px solid rgba(0,0,0,0.1)'
                  }}
                >
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product) => renderProductCard(product))}
                  </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                  <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111111', margin: '0 0 8px 0' }}>No products match your filter</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666666', margin: '0 0 20px 0' }}>Try clearing your search keyword or selecting another division.</p>
                    <button
                      onClick={() => { setSearchQuery(''); onSelectCategory('all'); }}
                      style={{ padding: '10px 22px', borderRadius: '9999px', backgroundColor: '#111111', color: '#ffffff', border: 'none', fontWeight: 600, cursor: 'pointer' }}
                    >
                      View All Categories
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Call to Action for Upcoming Product Little Page / Custom Request */}
        <div style={{
          marginTop: '70px',
          padding: '44px 36px',
          backgroundColor: '#1a1d17',
          color: '#ffffff',
          borderRadius: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
        }}>
          <div>
            <span style={{ fontSize: '0.82rem', color: '#c6a661', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>✦ Custom Architecture Engineering</span>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 600, marginTop: '8px', color: '#ffffff' }}>Need custom microprocessor specifications or specific cabinet dimensions?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '6px', maxWidth: '640px' }}>
              Clicking any item in the grid will transition to your dedicated product little page on upcoming request. Or talk with our chief engineers today.
            </p>
          </div>

          <button
            onClick={onBookClick}
            style={{
              padding: '14px 28px',
              borderRadius: '8px',
              backgroundColor: '#c6a661',
              color: '#111111',
              fontSize: '0.95rem',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 8px 24px rgba(198, 166, 97, 0.35)'
            }}
          >
            <span>Talk to Senior R&D Lead</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
