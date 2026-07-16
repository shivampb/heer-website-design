import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Filter, ChevronRight, Search, Layers, Grid, SlidersHorizontal, X } from 'lucide-react';

export const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'control-panels', label: 'Control Panels' },
  { id: 'cop-lop', label: 'COP & LOP Panels' }
];

export const allProducts = [
  // SECTION 1: CONTROL PANELS
  {
    id: 'p1',
    code: 'HEER-CTRL-32',
    title: '32-Bit Microprocessor Controller Cabinet',
    category: 'control-panels',
    subCategory: 'HEER-CTRL-32',
    spec: 'Dual Core | Zero Jerk Acceleration | VVVF Vector Control',
    price: '$4,800',
    image: '/products/PXL_20260703_123618016.jpg'
  },
  {
    id: 'p2',
    code: 'HEER-SER-01',
    title: 'Car Top Serial Inspection Board',
    category: 'control-panels',
    subCategory: 'HEER-SER-01',
    spec: 'CAN-Bus High Speed | Plug & Play Harness Matrix',
    price: '$890',
    image: '/products/PXL_20260703_123745971.jpg'
  },
  {
    id: 'p3',
    code: 'HEER-SER-02',
    title: 'Landing Serial Communication Node Hub',
    category: 'control-panels',
    subCategory: 'HEER-SER-02',
    spec: 'Low-Voltage Telemetry Hub | Shielded RS485 Ports',
    price: '$450',
    image: '/products/1760038432879.jpg'
  },
  {
    id: 'p4',
    code: 'HEER-INV-01',
    title: 'Integrated VVVF Vector Drive & ARD Unit',
    category: 'control-panels',
    subCategory: 'HEER-INV-01',
    spec: 'Direct Torque Control | Automatic Rescue Power Backup',
    price: '$3,200',
    image: '/products/PXL_20250618_145429848.jpg'
  },
  {
    id: 'p5',
    code: 'HEER-DEST-01',
    title: 'Multi-Tower Destination Control Hub',
    category: 'control-panels',
    subCategory: 'HEER-DEST-01',
    spec: 'AI Passenger Routing Logic | 64-Floor Allocation Hub',
    price: '$3,800',
    image: '/products/1782653245464.png'
  },
  {
    id: 'p13',
    code: 'CL24',
    title: 'Spike Protection & Safety Relay Array (CL24)',
    category: 'control-panels',
    subCategory: 'CL24',
    spec: 'Multi-Stage Surge Protection | 24V Line Fast Trip Breaker',
    price: '$310',
    image: '/products/IMG-20260523-WA0056.jpg'
  },
  {
    id: 'p14',
    code: 'GSM105',
    title: 'Digital GSM & Intercom Emergency Communicator (GSM105)',
    category: 'control-panels',
    subCategory: 'GSM105',
    spec: 'HD Voice | Dual SIM Backup | Instant Emergency Relay',
    price: '$580',
    image: '/products/1783401578792.png'
  },
  {
    id: 'p15',
    code: 'SNV201',
    title: 'Precision Optical Pulse Encoder & Tensioner Kit (SNV201)',
    category: 'control-panels',
    subCategory: 'SNV201',
    spec: 'High Accuracy Rotary Encoder | Vibration Damped Pulley',
    price: '$160',
    image: '/products/1783269412408.png'
  },
  {
    id: 'p16',
    code: 'HEER-DRV-01',
    title: 'High-Torque Synchronous Door Motor & Drive',
    category: 'control-panels',
    subCategory: 'HEER-DRV-01',
    spec: 'Heavy Duty Commercial Grade | Ultra Low Thermal Heat',
    price: '$920',
    image: '/products/PXL_20250829_071143333~2.jpg'
  },
  {
    id: 'p17',
    code: 'HEER-COMM-IOT',
    title: 'Real-Time Cloud Supervision IoT Gateway',
    category: 'control-panels',
    subCategory: 'HEER-COMM-IOT',
    spec: '24/7 Cellular Telemetry | Predictive Diagnostics Cloud Node',
    price: '$1,850',
    image: '/products/PXL_20250829_075537037~2.jpg'
  },

  // SECTION 2: COP & LOP PANELS
  {
    id: 'c1',
    code: 'UNIBODY',
    title: 'Unibody Landing & Car Operating Panel',
    category: 'cop-lop',
    subCategory: 'Unibody',
    spec: 'Seamless Monolithic Surface | Touch & Push Button Options | Ultra-Slim Profile',
    price: '$850',
    image: '/COP_LOP/COP_LOP/Unibody/Unibody_01.jpg',
    images: [
      '/COP_LOP/COP_LOP/Unibody/Unibody_01.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_02.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_03.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_04.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_05.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_06.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_07.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_08.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_09.jpg'
    ],
    videos: [
      '/COP_LOP/COP_LOP/Unibody/Unibody_Site_01.mp4',
      '/COP_LOP/COP_LOP/Unibody/Unibody_Site_02.mp4',
      '/COP_LOP/COP_LOP/Unibody/Unibody_Site_03.mp4',
      '/COP_LOP/COP_LOP/Unibody/Unibody_Site_04.mp4'
    ]
  },
  {
    id: 'c2',
    code: 'UNIBODY-ARC',
    title: 'Unibody ARC Curved Contour COP',
    category: 'cop-lop',
    subCategory: 'Unibody ARC',
    spec: 'Ergonomic Arc Profile | High-Clarity Digital Display | Premium Metallic Finish',
    price: '$920',
    image: '/COP_LOP/COP_LOP/Unibody/Unibody_Arc_01.jpg',
    images: [
      '/COP_LOP/COP_LOP/Unibody/Unibody_Arc_01.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_Arc_02.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_Arc_03.jpg'
    ],
    videos: []
  },
  {
    id: 'c3',
    code: 'UNIBODY-RS',
    title: 'Unibody RS Sport & Luxury Touch Panel',
    category: 'cop-lop',
    subCategory: 'Unibody RS',
    spec: 'Rapid Tactile Response | Tempered Obsidian Bezel | VIP Access Ready',
    price: '$980',
    image: '/COP_LOP/COP_LOP/Unibody/Unibody_RS01.jpg',
    images: [
      '/COP_LOP/COP_LOP/Unibody/Unibody_RS01.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_RS02.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_RS03.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_RS04.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_RS05.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_RS06.jpg'
    ],
    videos: [
      '/COP_LOP/COP_LOP/Unibody/Unibody_R01.mp4',
      '/COP_LOP/COP_LOP/Unibody/Unibody_R02.mp4',
      '/COP_LOP/COP_LOP/Unibody/Unibody_R03.mp4'
    ]
  },
  {
    id: 'c4',
    code: 'UNIBODY-STEP',
    title: 'Unibody Step Modular Operating Array',
    category: 'cop-lop',
    subCategory: 'Unibody Step',
    spec: 'Stepped Architectural Profile | Braille Audio Integration | Heavy-Duty Gauge',
    price: '$890',
    image: '/COP_LOP/COP_LOP/Unibody/Unibody_Step_02.jpg',
    images: [
      '/COP_LOP/COP_LOP/Unibody/Unibody_Step_02.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_Step_03.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_Step_04.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_Step_05.jpg'
    ],
    videos: [
      '/COP_LOP/COP_LOP/Unibody/Unibody_Step_01.mp4'
    ]
  },
  {
    id: 'c5',
    code: 'UNIBODY-TOUCH',
    title: 'Unibody Capacitive Touch Interface',
    category: 'cop-lop',
    subCategory: 'Unibody Touch',
    spec: 'Zero-Force Touch Sensors | Custom LED Illumination | Scratch-Resistant Glass',
    price: '$940',
    image: '/COP_LOP/COP_LOP/Unibody/Unibody_Touch_01.jpg',
    images: [
      '/COP_LOP/COP_LOP/Unibody/Unibody_Touch_01.jpg',
      '/COP_LOP/COP_LOP/Unibody/Unibody_Touch_02.jpg'
    ],
    videos: []
  },
  {
    id: 'c6',
    code: 'AURA-LUXURIA',
    title: 'Aura Luxuria Executive COP & LOP',
    category: 'cop-lop',
    subCategory: 'Aura Luxuria',
    spec: 'Luxury Hotel & Tower Grade | Champagne & Mirror Finish | Ambient Halo Illumination',
    price: '$1,250',
    image: '/COP_LOP/COP_LOP/Aura/Aura_Luxuria_01.png',
    images: [
      '/COP_LOP/COP_LOP/Aura/Aura_Luxuria_01.png',
      '/COP_LOP/COP_LOP/Aura/Aura_Luxuria_02.jpg',
      '/COP_LOP/COP_LOP/Aura/Aura_Luxuria_03.jpg',
      '/COP_LOP/COP_LOP/Aura/Aura_Luxuria_04.jpg',
      '/COP_LOP/COP_LOP/Aura/Aura_Luxuria_05.jpg',
      '/COP_LOP/COP_LOP/Aura/Aura_Luxuria_06.jpg'
    ],
    videos: []
  },
  {
    id: 'c7',
    code: 'AURA-TOUCH',
    title: 'Aura Touch Glass Operating Panel',
    category: 'cop-lop',
    subCategory: 'Aura Touch',
    spec: 'Crystal Obsidian Glass | Instant Capacitive Feedback | Weather & Dust Sealed',
    price: '$1,100',
    image: '/COP_LOP/COP_LOP/Aura_Touch/Aura_Touch_001.jpg',
    images: [
      '/COP_LOP/COP_LOP/Aura_Touch/Aura_Touch_001.jpg',
      '/COP_LOP/COP_LOP/Aura_Touch/Aura_Touch_01.jpg',
      '/COP_LOP/COP_LOP/Aura_Touch/Aura_Touch_02.jpg',
      '/COP_LOP/COP_LOP/Aura_Touch/Aura_Touch_03.jpg',
      '/COP_LOP/COP_LOP/Aura_Touch/Aura_Touch_04.jpg',
      '/COP_LOP/COP_LOP/Aura_Touch/Aura_Touch_05.jpg',
      '/COP_LOP/COP_LOP/Aura_Touch/Aura_Touch_06.jpg',
      '/COP_LOP/COP_LOP/Aura_Touch/Aura_Touch_07.jpg'
    ],
    videos: []
  },
  {
    id: 'c8',
    code: 'CURVE-STD',
    title: 'Curve Series Ergonomic LOP & COP',
    category: 'cop-lop',
    subCategory: 'Curve',
    spec: 'Architectural Curved Edge | Stainless Steel Body | Micro-Stroke Button Array',
    price: '$780',
    image: '/COP_LOP/COP_LOP/Curve/Curve_01.png',
    images: [
      '/COP_LOP/COP_LOP/Curve/Curve_01.png',
      '/COP_LOP/COP_LOP/Curve/Curve_02.png',
      '/COP_LOP/COP_LOP/Curve/Curve_03.jpg',
      '/COP_LOP/COP_LOP/Curve/Curve_04.jpg',
      '/COP_LOP/COP_LOP/Curve/Curve_05.jpg'
    ],
    videos: []
  },
  {
    id: 'c9',
    code: 'CURVE-GOODS',
    title: 'Curve Goods / Dumbwaiter LOP Array',
    category: 'cop-lop',
    subCategory: 'Curve Goods',
    spec: 'Industrial Freight Grade | High-Impact Resistance | Clear Call & Send Indication',
    price: '$650',
    image: '/COP_LOP/COP_LOP/Curve/Curve_DW_01.jpg',
    images: [
      '/COP_LOP/COP_LOP/Curve/Curve_DW_01.jpg',
      '/COP_LOP/COP_LOP/Curve/Curve_DW_02.jpg'
    ],
    videos: []
  },
  {
    id: 'c10',
    code: 'CURVE-TOUCH',
    title: 'Curve Touch Seamless Glass Station',
    category: 'cop-lop',
    subCategory: 'Curve Touch',
    spec: 'Curved Glass Face | Touch Indicators | Modern Residential & Commercial Design',
    price: '$860',
    image: '/COP_LOP/COP_LOP/Curve/Curve_Touch_1.jpg',
    images: [
      '/COP_LOP/COP_LOP/Curve/Curve_Touch_1.jpg',
      '/COP_LOP/COP_LOP/Curve/Curve_Touch_2.jpg',
      '/COP_LOP/COP_LOP/Curve/Curve_Touch_3.jpg'
    ],
    videos: []
  },
  {
    id: 'c11',
    code: 'CURVE-DUPLEX',
    title: 'Curve Duplex Dual-Elevator Landing Panel',
    category: 'cop-lop',
    subCategory: 'Curve Duplex LOP',
    spec: 'Multi-Car Dispatch Hub | Up/Down Arrow Arrows | High Contrast Floor Telemetry',
    price: '$910',
    image: '/COP_LOP/COP_LOP/Curve/Duplex_00.png',
    images: [
      '/COP_LOP/COP_LOP/Curve/Duplex_00.png',
      '/COP_LOP/COP_LOP/Curve/Duplex_01.jpg',
      '/COP_LOP/COP_LOP/Curve/Duplex_02.jpg',
      '/COP_LOP/COP_LOP/Curve/Duplex_03.jpg',
      '/COP_LOP/COP_LOP/Curve/Duplex_04.jpg'
    ],
    videos: []
  },
  {
    id: 'c12',
    code: 'KOREAN-SERIES',
    title: 'Korean Minimalist COP & Duplex LOP',
    category: 'cop-lop',
    subCategory: 'Korean',
    spec: 'Refined Korean Architectural Aesthetic | Precision Laser Bezel | Tactile Micro-Strokes',
    price: '$890',
    image: '/COP_LOP/COP_LOP/Korean/Korean_001.png',
    images: [
      '/COP_LOP/COP_LOP/Korean/Korean_001.png',
      '/COP_LOP/COP_LOP/Korean/Korean_01.jpg',
      '/COP_LOP/COP_LOP/Korean/Korean_02.jpg',
      '/COP_LOP/COP_LOP/Korean/Korean_03.jpg',
      '/COP_LOP/COP_LOP/Korean/Korean_Duplex.jpg',
      '/COP_LOP/COP_LOP/Korean/Korean_Duplex_01.jpg'
    ],
    videos: []
  },
  {
    id: 'c13',
    code: 'NEXUS-ARRAY',
    title: 'Nexus Digital & Tactile Panel Suite',
    category: 'cop-lop',
    subCategory: 'Nexus',
    spec: 'Smart IOT Integration | Modular Frame | Crisp TFT LCD Direction Arrows',
    price: '$960',
    image: '/COP_LOP/COP_LOP/Nexus/Nexus_01.png',
    images: [
      '/COP_LOP/COP_LOP/Nexus/Nexus_01.png',
      '/COP_LOP/COP_LOP/Nexus/Nexus_02.jpg',
      '/COP_LOP/COP_LOP/Nexus/Nexus_03.jpg',
      '/COP_LOP/COP_LOP/Nexus/Nexus_04.jpg',
      '/COP_LOP/COP_LOP/Nexus/Nexus_05.jpg',
      '/COP_LOP/COP_LOP/Nexus/Nexus_06.jpg',
      '/COP_LOP/COP_LOP/Nexus/Nexus_07.jpg',
      '/COP_LOP/COP_LOP/Nexus/Nexus_8.jpg'
    ],
    videos: []
  },
  {
    id: 'c14',
    code: 'REGULAR-JUPITER',
    title: 'Regular & Jupiter Standard COP/LOP Array',
    category: 'cop-lop',
    subCategory: 'Regular',
    spec: 'Proven Industry Workhorse | Stainless Steel 304 | Vandal-Proof Push Buttons',
    price: '$680',
    image: '/COP_LOP/COP_LOP/Regular/Jupiter_01.jpg',
    images: [
      '/COP_LOP/COP_LOP/Regular/Jupiter_01.jpg',
      '/COP_LOP/COP_LOP/Regular/Jupiter_02.jpg',
      '/COP_LOP/COP_LOP/Regular/Jupiter_03.jpg',
      '/COP_LOP/COP_LOP/Regular/Jupiter_04.jpg',
      '/COP_LOP/COP_LOP/Regular/Jupiter_05.jpg',
      '/COP_LOP/COP_LOP/Regular/Jupiter_06.jpg',
      '/COP_LOP/COP_LOP/Regular/Jupiter_07.jpg',
      '/COP_LOP/COP_LOP/Regular/Jupiter_08.jpg'
    ],
    videos: []
  },
  {
    id: 'c15',
    code: 'TEJAS-WOOD',
    title: 'Tejas Wood Artisan Cabin COP & LOP',
    category: 'cop-lop',
    subCategory: 'Tejas Wood',
    spec: 'Natural Timber Trim & Accents | Luxury Residential Elevator Suite | Warm Ambient Glow',
    price: '$1,350',
    image: '/COP_LOP/COP_LOP/Tejas_Wood/Tejas_Wood_01.png',
    images: [
      '/COP_LOP/COP_LOP/Tejas_Wood/Tejas_Wood_01.png',
      '/COP_LOP/COP_LOP/Tejas_Wood/Tejas_Wood_02.jpg',
      '/COP_LOP/COP_LOP/Tejas_Wood/Tejas_Wood_03.png',
      '/COP_LOP/COP_LOP/Tejas_Wood/Tejas_Wood_04.jpg'
    ],
    videos: []
  },
  {
    id: 'c16',
    code: 'OTHER-COP-LOP',
    title: 'Specialty COP, Baby LOP & Security Panels',
    category: 'cop-lop',
    subCategory: 'Other Products',
    spec: 'Box-Type COPs | Full Length Pillars | Baby LOP Stations | Integrated RFID Security Systems',
    price: '$720',
    image: '/COP_LOP/COP_LOP/COP_BoxType.jpg',
    images: [
      '/COP_LOP/COP_LOP/COP_BoxType.jpg',
      '/COP_LOP/COP_LOP/Full_Lenght_COP.jpg',
      '/COP_LOP/COP_LOP/Baby_LOP.jpg',
      '/COP_LOP/COP_LOP/Security System.png'
    ],
    videos: []
  }
];

export const categoryMap = {
  all: { id: 'all', label: 'All Products', subCategories: [] },
  'control-panels': { 
    id: 'control-panels', 
    label: 'Control Panels', 
    subCategories: ['All Control Panels', 'HEER-CTRL-32', 'HEER-INV-01', 'HEER-DEST-01', 'HEER-SER-01', 'HEER-SER-02', 'CL24', 'GSM105', 'SNV201', 'HEER-DRV-01', 'HEER-COMM-IOT'] 
  },
  'cop-lop': { 
    id: 'cop-lop', 
    label: 'COP & LOP Panels', 
    subCategories: [
      'All COP & LOP Panels',
      'Unibody',
      'Unibody ARC',
      'Unibody RS',
      'Unibody Step',
      'Unibody Touch',
      'Aura Luxuria',
      'Aura Touch',
      'Curve',
      'Curve Goods',
      'Curve Touch',
      'Curve Duplex LOP',
      'Korean',
      'Nexus',
      'Regular',
      'Tejas Wood',
      'Other Products'
    ] 
  }
};

export default function ProductGridPage({ selectedCategory = 'all', onSelectCategory, onProductClick, onBookClick }) {
  const navigate = useNavigate();
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
        else navigate(`/product-detail/${product.code}`);
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
            else navigate(`/product-detail/${product.code}`);
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
        <div className="product-grid-layout" style={{ display: 'flex', flexDirection: 'row', gap: '36px', alignItems: 'flex-start' }}>
          
          {/* Left Category & Filter Sidebar (lapakbaju style) */}
          <div className="product-sidebar" style={{
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
                                      const matchedProd = allProducts.find(p => p.code.toLowerCase() === subItem.toLowerCase());
                                      if (matchedProd) {
                                        if (onProductClick) onProductClick(matchedProd);
                                        else navigate(`/product-detail/${matchedProd.code}`);
                                      } else {
                                        onSelectCategory(subItem);
                                      }
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

                      {/* Exactly 1 Row (3 Products) Grid for this Category Row */}
                      <div className="products-card-grid" style={{
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
                  className="products-card-grid"
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

        <style>{`
          @media (max-width: 991px) {
            .product-grid-layout {
              flex-direction: column !important;
              gap: 24px !important;
            }
            .product-sidebar {
              width: 100% !important;
              position: static !important;
            }
            .products-card-grid {
              grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)) !important;
            }
          }
          @media (max-width: 640px) {
            .products-card-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
