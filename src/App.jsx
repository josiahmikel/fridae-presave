import React, { useState } from 'react';
import CoverArtCard from './components/CoverArtCard';
import CountdownTimer from './components/CountdownTimer';
import ServiceList from './components/ServiceList';
import Toast from './components/Toast';
import { SONG_DATA } from './data/songData';
import stillImg from './assets/still.jpg';
import stickerImg from './assets/fridae-sticker.jpg';
import zineImg from './assets/zine.jpg';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="app-container" style={{ paddingTop: '2.5rem' }}>
      <main className="main-card">
        <CoverArtCard />

        <div className="song-info-header" style={{ padding: '1.25rem 1.5rem 1rem 1.5rem' }}>
          <h1 className="song-title">RIGHT NOW</h1>
          <p className="artist-name">{SONG_DATA.artist}</p>
        </div>

        <CountdownTimer />

        <ServiceList />
      </main>

      {/* Zine section */}
      <div style={{ width: '100%', maxWidth: '440px', textAlign: 'center', padding: '2.5rem 0 0 0' }}>
        <a
          href="https://forms.gle/mTULuhfHLPMHjNoW8"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#A1A1AA',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            marginBottom: '1.25rem',
          }}
        >
          get a free zine
        </a>
        <img
          src={zineImg}
          alt="April Fridae Zine"
          style={{ width: '100%', display: 'block' }}
          loading="lazy"
          decoding="async"
        />
      </div>

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

      <Toast message={toastMessage} />
    </div>
  );
}
