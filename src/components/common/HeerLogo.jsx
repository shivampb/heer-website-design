import React, { useState } from 'react';

export default function HeerLogo({ isLightPage = true, className = "", style = {} }) {
  const [imageFailed, setImageFailed] = useState(false);
  const blueColor = '#2185b0';
  const textColor = isLightPage ? '#1a1a1a' : '#ffffff';

  return (
    <div className={`heer-official-logo ${className}`} style={{ display: 'inline-flex', alignItems: 'center', userSelect: 'none', ...style }}>
      {!imageFailed ? (
        <img
          src="/logo.png"
          alt="Heer Technology & Control Official Logo"
          style={{
            height: '36px',
            width: 'auto',
            objectFit: 'contain',
            filter: isLightPage ? 'none' : 'drop-shadow(0 2px 8px rgba(0,0,0,0.75))',
            transition: 'all 0.3s ease'
          }}
          onError={(e) => {
            if (e.target.src.endsWith('/logo.png')) {
              e.target.src = '/logo.jpg';
            } else if (e.target.src.endsWith('/logo.jpg')) {
              e.target.src = '/logo-2.jpg';
            } else {
              setImageFailed(true);
            }
          }}
        />
      ) : (
        /* Crisp Vector Fallback if static image files are missing */
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '3px' }}>
            <svg width="144" height="42" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke={blueColor} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 8 6 L 8 36 C 8 41, 14 41, 14 36 L 14 24 L 28 24 L 28 6 M 28 24 L 28 42" />
                <path d="M 58 6 L 42 6 L 42 38 C 42 42, 46 42, 58 42 M 42 24 L 52 24" />
                <path d="M 92 6 L 76 6 L 76 38 C 76 42, 80 42, 92 42 M 76 24 L 86 24" />
                <path d="M 108 42 L 108 6 L 126 6 C 135 6, 135 23, 126 23 L 114 23 M 122 23 L 134 42" />
              </g>
            </svg>
            <span style={{ fontSize: '0.62rem', fontWeight: 600, color: textColor, fontFamily: 'sans-serif', letterSpacing: '0.04em', marginTop: '2px', opacity: 0.85 }}>
              TM
            </span>
          </div>
          <div style={{ fontFamily: "'Courier New', Courier, 'Roboto Slab', serif", fontWeight: 800, fontSize: '0.68rem', letterSpacing: '0.075em', color: textColor, marginTop: '1px', textTransform: 'uppercase', lineHeight: 1 }}>
            Technology &amp; Control
          </div>
        </div>
      )}
    </div>
  );
}
