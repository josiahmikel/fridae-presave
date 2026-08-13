import React, { useState } from 'react';
import CoverArtCard from './components/CoverArtCard';
import CountdownTimer from './components/CountdownTimer';
import ServiceList from './components/ServiceList';
import Toast from './components/Toast';
import { SONG_DATA } from './data/songData';
import stillImg from './assets/still.jpg';
import stickerImg from './assets/fridae-sticker.jpg';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://now.aprilfridae.com');
    showToast('Link copied!');
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

      <button
        onClick={handleCopyLink}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase',
          color: '#71717A', fontFamily: 'var(--font-body)',
          marginTop: '1rem', marginBottom: '2rem',
        }}
      >
        Copy Link
      </button>

      <Toast message={toastMessage} />
    </div>
  );
}
