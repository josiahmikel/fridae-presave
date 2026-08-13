import React, { useState } from 'react';
import CoverArtCard from './components/CoverArtCard';
import CountdownTimer from './components/CountdownTimer';
import ServiceList from './components/ServiceList';
import Toast from './components/Toast';
import { SONG_DATA } from './data/songData';
import stillImg from './assets/still.jpg';
import stickerImg from './assets/fridae-sticker.jpg';

// The Feature.fm pre-save hub for this release
const PRESAVE_URL = 'https://too.fm/eo9oxo0';

export default function App() {
  const [iframeOpen, setIframeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleServiceClick = (service, e) => {
    e.preventDefault();
    setIframeOpen(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://now.aprilfridae.com');
    showToast('Link copied!');
  };

  return (
    <div className="app-container" style={{ paddingTop: '2.5rem' }}>
      {/* Main Card */}
      <main className="main-card">
        <CoverArtCard />

        <div className="song-info-header" style={{ padding: '1.25rem 1.5rem 1rem 1.5rem' }}>
          <h1 className="song-title">RIGHT NOW</h1>
          <p className="artist-name">{SONG_DATA.artist}</p>
        </div>

        <CountdownTimer />

        <ServiceList onServiceClick={handleServiceClick} />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <img
          src={stillImg}
          alt="April Fridae"
          className="full-width-footer-banner"
          loading="lazy"
          decoding="async"
        />
        <a
          href="https://instagram.com/aprilfridae"
          target="_blank"
          rel="noopener noreferrer"
          title="April Fridae on Instagram"
        >
          <img
            src={stickerImg}
            alt="April Fridae Instagram"
            className="footer-sticker-img"
            loading="lazy"
            decoding="async"
          />
        </a>
      </footer>

      {/* Share button */}
      <button
        onClick={handleCopyLink}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#71717A',
          fontFamily: 'var(--font-body)',
          marginTop: '1rem',
          marginBottom: '2rem',
        }}
      >
        Copy Link
      </button>

      <Toast message={toastMessage} />

      {/* Full-screen iframe overlay */}
      {iframeOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Close bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 1.25rem',
              borderBottom: '1px solid #E4E4E7',
              background: '#fff',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#000',
              }}
            >
              Select a service to pre-save
            </span>
            <button
              onClick={() => setIframeOpen(false)}
              style={{
                background: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '0',
                padding: '0.35rem 0.85rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: 'pointer',
              }}
            >
              ✕ Close
            </button>
          </div>

          {/* The iframe */}
          <iframe
            src={PRESAVE_URL}
            title="Pre-Save Right Now — April Fridae"
            style={{
              flex: 1,
              width: '100%',
              border: 'none',
            }}
            allow="fullscreen"
          />
        </div>
      )}
    </div>
  );
}
