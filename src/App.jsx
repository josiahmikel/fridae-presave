import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import CoverArtCard from './components/CoverArtCard';
import CountdownTimer from './components/CountdownTimer';
import ServiceList from './components/ServiceList';
import ShareModal from './components/ShareModal';
import PreSaveSuccessModal from './components/PreSaveSuccessModal';
import Toast from './components/Toast';
import { SONG_DATA } from './data/songData';

export default function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [activeSuccessService, setActiveSuccessService] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const popupTimerRef = useRef(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const triggerSuccessConfirmation = (service) => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });

    setActiveSuccessService(service);
    showToast(`Pre-save confirmed for ${service.name}!`);
  };

  const handleServiceClick = (service, e, targetUrl) => {
    e.preventDefault();

    const urlToOpen = targetUrl || (service.url ? service.url.replace('/sl/e/ps/', '/sl/e/p/') : service.destUrl);
    
    const width = 600;
    const height = 720;
    const left = Math.max(0, (window.screen.width - width) / 2);
    const top = Math.max(0, (window.screen.height - height) / 2);

    const popupFeatures = `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes,status=yes`;

    const authPopup = window.open(urlToOpen, `Auth_${service.id}`, popupFeatures);

    if (popupTimerRef.current) {
      clearInterval(popupTimerRef.current);
    }

    if (authPopup) {
      authPopup.focus();
      showToast(`Logging into ${service.name}...`);

      popupTimerRef.current = setInterval(() => {
        try {
          if (!authPopup || authPopup.closed) {
            clearInterval(popupTimerRef.current);
            triggerSuccessConfirmation(service);
            return;
          }

          if (authPopup.location && authPopup.location.href) {
            const currentHref = authPopup.location.href;
            if (currentHref.includes('callback') || currentHref.includes('too.fm') || currentHref.includes('presave')) {
              clearInterval(popupTimerRef.current);
              setTimeout(() => {
                try { authPopup.close(); } catch(err){}
                triggerSuccessConfirmation(service);
              }, 400);
            }
          }
        } catch (err) {
          // Cross-origin exception while on auth provider domain is expected
        }
      }, 300);

    } else {
      window.open(urlToOpen, '_blank');
      showToast(`Opening ${service.name} authorization...`);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://too.fm/eo9oxo0");
    showToast("Link copied to clipboard!");
    setIsShareOpen(false);
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && (event.data.type === 'PRE_SAVE_COMPLETE' || event.data.action === 'complete')) {
        if (popupTimerRef.current) clearInterval(popupTimerRef.current);
        triggerSuccessConfirmation(SONG_DATA.services[0]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
      if (popupTimerRef.current) clearInterval(popupTimerRef.current);
    };
  }, []);

  return (
    <div className="app-container" style={{ paddingTop: '2.5rem' }}>
      {/* Main Card */}
      <main className="main-card">
        {/* Cover Art */}
        <CoverArtCard />

        {/* Track Title & Artist */}
        <div className="song-info-header" style={{ padding: '1.25rem 1.5rem 1rem 1.5rem' }}>
          <h1 className="song-title">RIGHT NOW</h1>
          <p className="artist-name">{SONG_DATA.artist}</p>
        </div>

        {/* Release Countdown (Timer digits) */}
        <CountdownTimer />

        {/* Platform Streaming & Pre-Save Links */}
        <ServiceList onServiceClick={handleServiceClick} />
      </main>

      {/* Footer: Still Banner First, Sticker Image at Bottom */}
      <footer className="app-footer">
        <img 
          src="/assets/still.jpg" 
          alt="April Fridae Still" 
          className="full-width-footer-banner" 
        />

        <a 
          href="https://instagram.com/aprilfridae" 
          target="_blank" 
          rel="noopener noreferrer"
          title="April Fridae Instagram"
        >
          <img 
            src="/assets/fridae-sticker.jpg" 
            alt="April Fridae Instagram" 
            className="footer-sticker-img" 
          />
        </a>
      </footer>

      {/* Modals & Toasts */}
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
