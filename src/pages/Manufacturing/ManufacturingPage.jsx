import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

// Expanded Modular Gallery Array (18 Full-Color High-Resolution Facility & Manufacturing Images)
// Easily swap these image URLs with your real facility photos whenever ready in the future!
export const manufacturingGalleryItems = [
  // Row 1 (2 Cards: 60% / 40%)
  {
    id: 1,
    title: 'High-Speed SMT Robotic Assembly Bay',
    subtitle: 'Automated placement of 32-bit microprocessors & surface mount components with zero human tolerance error.',
    image: '/products/PXL_20250618_145413258.jpg'
  },
  {
    id: 2,
    title: 'Precision Microprocessor Laser Alignment Node',
    subtitle: 'Optical laser alignment and X-ray soldering verification under 500x magnification.',
    image: '/products/PXL_20250829_075537037~2.jpg'
  },
  // Row 2 (3 Cards: 33% / 33% / 33%)
  {
    id: 3,
    title: 'Automated CNC Fiber Laser Cutting Bay',
    subtitle: 'High-power fiber laser fabrication of structural steel cabinet housings and heavy gauge mounting frames.',
    image: '/products/PXL_20260703_123613237.jpg'
  },
  {
    id: 4,
    title: 'Obsidian Glass Touch COP Assembly Line',
    subtitle: 'Clean-room tempered glass bonding and micro-touch capacitance calibration.',
    image: '/products/PXL_20260703_123618016.jpg'
  },
  {
    id: 5,
    title: '48-Hour Continuous Thermal Burn-In Chamber',
    subtitle: 'Every controller board is subjected to full inductive load at elevated temperatures before certification.',
    image: '/products/PXL_20260703_123745971.jpg'
  },
  // Row 3 (2 Cards: 40% / 60%)
  {
    id: 6,
    title: 'CAN-Bus Shielded Harness Calibration',
    subtitle: 'High-speed communication interface testing with zero electromagnetic interference.',
    image: '/products/PXL_20260505_061028702.jpg'
  },
  {
    id: 7,
    title: '100% Quality Assurance & Final Dispatch Facility',
    subtitle: 'Complete electrical continuity sign-off and packaging according to IS-14665 and EN81 safety standards.',
    image: '/products/PXL_20260512_114825100.jpg'
  },
  // Row 4 (3 Cards: 35% / 30% / 35%)
  {
    id: 8,
    title: 'High-Voltage VVVF Vector Inverter Assembly',
    subtitle: 'Heavy-duty IGBT module mounting and thermal sink coupling.',
    image: '/products/PXL_20260610_125859443~2.jpg'
  },
  {
    id: 9,
    title: 'SMD High-Speed Pick-and-Place Robotics Hub',
    subtitle: 'Ultra-fast component feeding and micro-soldering precision operations.',
    image: '/products/controller-cabinet.jpg'
  },
  {
    id: 10,
    title: 'Environmental Stress Screening Laboratory',
    subtitle: 'Testing hardware resilience against extreme humidity, vibration, and thermal shock.',
    image: '/products/cop-lop-array.jpg'
  },
  // Row 5 (2 Cards: 50% / 50%)
  {
    id: 11,
    title: 'Elevator Main Controller Wiring Hub',
    subtitle: 'Precision terminal crimping and industrial cable routing for 32-bit controller panels.',
    image: '/products/PXL_20250829_070627798.jpg'
  },
  {
    id: 12,
    title: 'Automatic Wave Soldering Station',
    subtitle: 'Consistent, flawless solder joints across multi-layer printed circuit boards.',
    image: '/products/1760038432879.jpg'
  },
  // Row 6 (4 Cards: 25% / 25% / 25% / 25%)
  {
    id: 13,
    title: 'Micro-Stroke Stainless Button Calibration',
    subtitle: 'Tactile force testing and LED backlighting inspection.',
    image: '/products/touch-lop-button.jpg'
  },
  {
    id: 14,
    title: 'Remote IoT Telemetry Gateways Testing',
    subtitle: 'Simulated cloud connectivity and instant dispatch relay checks.',
    image: '/products/PXL_20250829_075540909~2.jpg'
  },
  {
    id: 15,
    title: 'Heavy Gauge Cabinet Structural Fabrication',
    subtitle: 'Automated sheet metal bending and powder coating line.',
    image: '/products/PXL_20260610_125817426.jpg'
  },
  {
    id: 16,
    title: 'Final Packaging & Global Dispatch Terminal',
    subtitle: 'Anti-static protective encapsulation and barcode tracking.',
    image: '/products/PXL_20260610_125828141.jpg'
  }
];

export default function ManufacturingPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{
      backgroundColor: 'var(--bg-primary)',
      color: '#000000',
      minHeight: '100vh',
      width: '100vw',
      overflowX: 'hidden',
      paddingTop: '110px',
      paddingBottom: '80px',
      fontFamily: 'var(--font-body, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)'
    }}>

      {/* Full Width Screen Container */}
      <div style={{ width: '100%', padding: '0 clamp(16px, 3vw, 48px)' }}>

        {/* Top Header Section */}
        <div style={{ marginBottom: '44px', width: '100%', margin: '0 auto 44px' }}>

          {/* Top Pill Badge */}
          <div style={{ marginBottom: '16px' }}>
            <span style={{
              backgroundColor: '#f3f4f6',
              color: '#111111',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              display: 'inline-block'
            }}>
              Our Facility & Precision Lines
            </span>
          </div>

          {/* Title and Right Caption Split Row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
            paddingBottom: '28px'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
              fontWeight: 600,
              color: '#000000',
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              fontFamily: 'var(--font-heading)',
              margin: 0
            }}>
              Manufacturing Gallery
            </h1>

            <p style={{
              maxWidth: '440px',
              fontSize: '0.96rem',
              color: '#555555',
              lineHeight: 1.6,
              margin: 0,
              textAlign: 'right'
            }}>
              Captured moments from our high-precision SMT robotic assembly bays, CNC laser sheet metal cutting hubs, and rigorous thermal burn-in facilities.
            </p>
          </div>
        </div>

        {/* Full Width / Full Height Masonry Gallery Grid (Exact 10px corner curve & JUST IMAGES) */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%'
        }}>

          {/* Row 1: Large (60%) + Small (40%) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '20px',
            width: '100%'
          }}>
            <div style={{ flex: '1 1 58%', minWidth: 'min(100%, 280px)' }}>
              <GalleryCard item={manufacturingGalleryItems[0]} onSelect={() => setSelectedImage(manufacturingGalleryItems[0])} height="520px" />
            </div>
            <div style={{ flex: '1 1 38%', minWidth: 'min(100%, 280px)' }}>
              <GalleryCard item={manufacturingGalleryItems[1]} onSelect={() => setSelectedImage(manufacturingGalleryItems[1])} height="520px" />
            </div>
          </div>

          {/* Row 2: 3 Equal Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
            width: '100%'
          }}>
            <GalleryCard item={manufacturingGalleryItems[2]} onSelect={() => setSelectedImage(manufacturingGalleryItems[2])} height="460px" />
            <GalleryCard item={manufacturingGalleryItems[3]} onSelect={() => setSelectedImage(manufacturingGalleryItems[3])} height="460px" />
            <GalleryCard item={manufacturingGalleryItems[4]} onSelect={() => setSelectedImage(manufacturingGalleryItems[4])} height="460px" />
          </div>

          {/* Row 3: Small (40%) + Large (60%) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '20px',
            width: '100%'
          }}>
            <div style={{ flex: '1 1 38%', minWidth: 'min(100%, 280px)' }}>
              <GalleryCard item={manufacturingGalleryItems[5]} onSelect={() => setSelectedImage(manufacturingGalleryItems[5])} height="520px" />
            </div>
            <div style={{ flex: '1 1 58%', minWidth: 'min(100%, 280px)' }}>
              <GalleryCard item={manufacturingGalleryItems[6]} onSelect={() => setSelectedImage(manufacturingGalleryItems[6])} height="520px" />
            </div>
          </div>

          {/* Row 4: 3 Staggered Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
            width: '100%'
          }}>
            <GalleryCard item={manufacturingGalleryItems[7]} onSelect={() => setSelectedImage(manufacturingGalleryItems[7])} height="460px" />
            <GalleryCard item={manufacturingGalleryItems[8]} onSelect={() => setSelectedImage(manufacturingGalleryItems[8])} height="460px" />
            <GalleryCard item={manufacturingGalleryItems[9]} onSelect={() => setSelectedImage(manufacturingGalleryItems[9])} height="460px" />
          </div>

          {/* Row 5: 2 Equal Columns (50% / 50%) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '20px',
            width: '100%'
          }}>
            <GalleryCard item={manufacturingGalleryItems[10]} onSelect={() => setSelectedImage(manufacturingGalleryItems[10])} height="500px" />
            <GalleryCard item={manufacturingGalleryItems[11]} onSelect={() => setSelectedImage(manufacturingGalleryItems[11])} height="500px" />
          </div>

          {/* Row 6: 4 Equal Columns across full width */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '20px',
            width: '100%'
          }}>
            <GalleryCard item={manufacturingGalleryItems[12]} onSelect={() => setSelectedImage(manufacturingGalleryItems[12])} height="400px" />
            <GalleryCard item={manufacturingGalleryItems[13]} onSelect={() => setSelectedImage(manufacturingGalleryItems[13])} height="400px" />
            <GalleryCard item={manufacturingGalleryItems[14]} onSelect={() => setSelectedImage(manufacturingGalleryItems[14])} height="400px" />
            <GalleryCard item={manufacturingGalleryItems[15]} onSelect={() => setSelectedImage(manufacturingGalleryItems[15])} height="400px" />
          </div>

        </div>

        {/* Lightbox Modal for Zooming into Gallery Photos */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.88)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 3000,
                padding: '30px'
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  maxWidth: '1100px',
                  width: '100%',
                  boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', height: '68vh', backgroundColor: '#111111' }}>
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#000000'
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>
                <div style={{ padding: '24px 30px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#777777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                    Facility Highlight #{selectedImage.id}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#000000', margin: 0 }}>
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

// Card Component: Exactly 10px corner curve (borderRadius: '10px'), FULL WIDTH/HEIGHT, NO TEXT overlays, and lazy-loaded memory optimized!
function GalleryCard({ item, height = '460px', onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%',
        height: height,
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#f3f4f6',
        cursor: 'pointer',
        boxShadow: hovered ? '0 16px 40px rgba(0, 0, 0, 0.16)' : '0 6px 20px rgba(0, 0, 0, 0.06)',
        transition: 'box-shadow 0.35s ease',
        contentVisibility: 'auto',
        containIntrinsicSize: `${height}`
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />
    </div>
  );
}
