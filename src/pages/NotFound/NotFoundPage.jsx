import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [count, setCount] = useState(10);

  // Auto-redirect countdown
  useEffect(() => {
    if (count <= 0) {
      navigate('/');
      return;
    }
    const t = setTimeout(() => setCount(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count, navigate]);

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Products', path: '/products' },
    { label: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: 'var(--bg-primary, #fcfaf6)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-body, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
        padding: 'clamp(40px, 8vw, 100px) clamp(24px, 6vw, 80px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background large 404 watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(180px, 35vw, 420px)',
          fontWeight: 700,
          letterSpacing: '-0.06em',
          color: 'rgba(0,0,0,0.04)',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
          fontFamily: 'var(--font-heading)',
          whiteSpace: 'nowrap'
        }}
      >
        404
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '560px' }}>
        {/* Label */}
        <div
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#888888',
            marginBottom: '20px'
          }}
        >
          Page Not Found
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.8rem)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: '#000000',
            margin: '0 0 20px 0',
            fontFamily: 'var(--font-heading)'
          }}
        >
          This page doesn't exist.
        </h1>

        {/* Path shown */}
        <div
          style={{
            display: 'inline-block',
            backgroundColor: 'rgba(0,0,0,0.06)',
            borderRadius: '6px',
            padding: '6px 14px',
            fontSize: '0.88rem',
            fontFamily: 'monospace',
            color: '#555555',
            marginBottom: '28px',
            letterSpacing: '0.02em'
          }}
        >
          {location.pathname}
        </div>

        <p
          style={{
            fontSize: '1rem',
            color: '#666666',
            lineHeight: 1.65,
            margin: '0 0 40px 0'
          }}
        >
          The link may be broken, moved, or the page was never created.
          Redirecting to home in{' '}
          <span style={{ fontWeight: 600, color: '#000000' }}>{count}s</span>.
        </p>

        {/* Primary CTA */}
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 32px',
            backgroundColor: '#000000',
            color: '#ffffff',
            border: 'none',
            borderRadius: '9999px',
            fontSize: '0.96rem',
            fontWeight: 600,
            cursor: 'pointer',
            marginBottom: '48px',
            transition: 'background 0.25s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#333333'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#000000'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Home
        </button>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '32px' }}>
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#aaaaaa',
              marginBottom: '18px'
            }}
          >
            Or go to
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {links.map(link => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '9999px',
                  border: '1.5px solid rgba(0,0,0,0.18)',
                  background: 'transparent',
                  fontSize: '0.9rem',
                  color: '#333333',
                  cursor: 'pointer',
                  fontWeight: 500,
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#000000';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#000000';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#333333';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.18)';
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
