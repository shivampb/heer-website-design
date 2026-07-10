import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isOnDark, setIsOnDark] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Responsive spring physics for natural pointer tracking
  const pointerX = useSpring(mouseX, { stiffness: 700, damping: 35, mass: 0.3 });
  const pointerY = useSpring(mouseY, { stiffness: 700, damping: 35, mass: 0.3 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (isHidden) setIsHidden(false);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseLeaveViewport = () => setIsHidden(true);
    const handleMouseEnterViewport = () => setIsHidden(false);

    const checkElementHoverAndDark = (target) => {
      if (!target || target === document) return;

      // Check interactive hover states
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest?.('a') ||
        target.closest?.('button') ||
        target.classList?.contains('gallery-card') ||
        target.classList?.contains('spec-row') ||
        target.getAttribute?.('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }

      // Check if over dark background / black overlay
      if (
        target.closest?.('.carousel-image-panel') ||
        target.closest?.('.image-clip-container') ||
        target.closest?.('.gallery-card') ||
        target.closest?.('.philosophy-card-gsap') ||
        target.closest?.('footer') ||
        target.closest?.('.dark-overlay') ||
        target.closest?.('[data-theme="dark"]')
      ) {
        setIsOnDark(true);
      } else {
        let el = target;
        let foundDark = false;
        let count = 0;
        while (el && el !== document.body && count < 5) {
          const style = window.getComputedStyle(el);
          const bg = style.backgroundColor;
          if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (match) {
              const r = parseInt(match[1], 10);
              const g = parseInt(match[2], 10);
              const b = parseInt(match[3], 10);
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              if (brightness < 115 && style.opacity !== '0') {
                foundDark = true;
                break;
              }
            }
          }
          el = el.parentElement;
          count++;
        }
        setIsOnDark(foundDark);
      }
    };

    const handleMouseOver = (e) => checkElementHoverAndDark(e.target);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeaveViewport);
    document.addEventListener('mouseenter', handleMouseEnterViewport);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeaveViewport);
      document.removeEventListener('mouseenter', handleMouseEnterViewport);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isHidden]);

  if (isTouchDevice || isHidden) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* 3D Pillowed Pointer Arrow (Auto Switches Dark Matte <-> White Matte on Black Overlays) */}
      <motion.div
        className="custom-3d-arrow-cursor"
        style={{
          x: pointerX,
          y: pointerY,
          translateX: '-14%',
          translateY: '-14%',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          pointerEvents: 'none',
          zIndex: 999999
        }}
        animate={{
          scale: isPressed ? 0.88 : isHovered ? 1.14 : 1,
          rotate: isHovered ? -12 : 0
        }}
        transition={{
          scale: { type: 'spring', stiffness: 500, damping: 25 },
          rotate: { type: 'spring', stiffness: 400, damping: 22 }
        }}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <defs>
            {/* Pristine Deep Charcoal Matte Gradient for Light Backgrounds */}
            <linearGradient id="perfectMatte" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#36393d" />
              <stop offset="35%" stopColor="#1e2023" />
              <stop offset="75%" stopColor="#101113" />
              <stop offset="100%" stopColor="#070708" />
            </linearGradient>

            {/* Hover Gold-Tinted Matte Gradient for Light Backgrounds */}
            <linearGradient id="perfectHoverMatte" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#544837" />
              <stop offset="35%" stopColor="#24211d" />
              <stop offset="80%" stopColor="#111112" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>

            {/* Glowing White/Silver Matte Gradient specifically for Black Overlays */}
            <linearGradient id="whiteMatte" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#eaf0f8" />
              <stop offset="75%" stopColor="#ced6e2" />
              <stop offset="100%" stopColor="#a5aebc" />
            </linearGradient>

            {/* Hover Gold-Tinted White Matte Gradient for Black Overlays */}
            <linearGradient id="whiteHoverMatte" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#f8f1e6" />
              <stop offset="80%" stopColor="#e4d4bd" />
              <stop offset="100%" stopColor="#c8a97e" />
            </linearGradient>

            {/* Top-Edge Sheen Highlight matching exact screenshot top shine */}
            <linearGradient id="topRidgeShine" x1="0%" y1="0%" x2="60%" y2="60%">
              <stop offset="0%" stopColor={isOnDark ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.7)"} />
              <stop offset="40%" stopColor={isOnDark ? "rgba(255, 255, 255, 0.45)" : "rgba(255, 255, 255, 0.22)"} />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>

            {/* Precise Drop Shadow */}
            <filter id="perfectDropShadow" x="-35%" y="-35%" width="180%" height="180%">
              <feDropShadow dx="3" dy="6" stdDeviation="4.5" floodColor={isOnDark ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0.45)"} />
              <feDropShadow dx="1" dy="2" stdDeviation="1.2" floodColor={isOnDark ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.28)"} />
            </filter>
          </defs>

          {/* Mathematically Perfect Rounded Triangle Chevron Path (No White Border) */}
          <path
            d="M 5.2,3.8 C 4.0,3.3 3.3,4.0 3.8,5.2 L 12.6,29.4 C 13.3,31.2 15.6,31.2 16.3,29.4 L 18.8,20.8 C 19.0,20.0 19.6,19.4 20.4,19.2 L 29.0,16.7 C 30.8,16.0 30.8,13.7 29.0,13.0 L 5.2,3.8 Z"
            fill={
              isOnDark
                ? (isHovered ? "url(#whiteHoverMatte)" : "url(#whiteMatte)")
                : (isHovered ? "url(#perfectHoverMatte)" : "url(#perfectMatte)")
            }
            stroke="none"
            filter="url(#perfectDropShadow)"
            style={{ transition: 'fill 0.25s ease' }}
          />

          {/* Crisp Top Ridge Sheen Highlight overlay */}
          <path
            d="M 5.5,4.2 C 4.6,3.9 4.1,4.4 4.4,5.3 L 13.0,28.8 C 13.5,30.2 15.0,30.2 15.5,28.8 L 18.8,20.2 C 19.2,19.2 19.8,18.6 20.8,18.2 L 28.5,16.0 C 29.8,15.5 29.8,14.0 28.5,13.5 L 5.5,4.2 Z"
            fill="url(#topRidgeShine)"
            style={{ pointerEvents: 'none' }}
          />
        </svg>
      </motion.div>
    </>
  );
}
