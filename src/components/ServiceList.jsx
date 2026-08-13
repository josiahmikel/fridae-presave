import React from 'react';

const PRESAVE_URL = 'https://too.fm/eo9oxo0';

export default function ServiceList() {
  return (
    <div style={{ padding: '1.5rem 1.5rem 2rem 1.5rem', width: '100%' }}>
      <a
        href={PRESAVE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          width: '100%',
          padding: '1rem',
          background: '#000000',
          color: '#ffffff',
          textAlign: 'center',
          textDecoration: 'none',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.85rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          transition: 'background 0.15s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#333'}
        onMouseLeave={e => e.currentTarget.style.background = '#000'}
      >
        Pre Save
      </a>
    </div>
  );
}
