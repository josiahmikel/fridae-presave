import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import CoverArtCard from './components/CoverArtCard';
import CountdownTimer from './components/CountdownTimer';
import ServiceList from './components/ServiceList';
import ShareModal from './components/ShareModal';
import PreSaveSuccessModal from './components/PreSaveSuccessModal';
import Toast from './components/Toast';
import { SONG_DATA } from './data/songData';
import stillImg from './assets/still.jpg';
import stickerImg from './assets/fridae-sticker.jpg';

export default function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [activeSuccessService, setActiveSuccessService] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const popupTimerRef = useRef(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const triggerSuccessConfirmation = (service) => {
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    setActiveSuccessService(service);
  };

  const handleServiceClick = (service, e, targetUrl) => {
    // Just open the real pre-save URL directly — Feature.fm handles everything.
    // No popup polling, no fake success triggers.
    // The success modal is shown only via the postMessage from Feature.fm's callback.
    e.preventDefault();
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    showToast(`Opening ${service.name}…`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://too.fm/eo9oxo0');
    showToast('Link copied!');
    setIsShareOpen(false);
  };

  // Listen for a postMessage from Feature.fm's callback page confirming the pre-save
  useEffect(() => {
    const handleMessage = (event) => {
      if (
        event.data &&
        (event.data.type === 'PRE_SAVE_COMPLETE' || event.data.action === 'complete')
      ) {
        const serviceName = event.data.service || 'your streaming service';
        const matchedService =
          SONG_DATA.services.find((s) => s.id === event.data.service) || SONG_DATA.services[0];
        triggerSuccessConfirmation(matchedService);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

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

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        onCopyLink={handleCopyLink}
      />

      <PreSaveSuccessModal
        isOpen={!!activeSuccessService}
        service={activeSuccessService}
        onClose={() => setActiveSuccessService(null)}
        onShare={() => setIsShareOpen(true)}
      />

      <Toast message={toastMessage} />
    </div>
  );
}
