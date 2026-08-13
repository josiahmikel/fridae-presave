import React from 'react';
import { X, Copy, Twitter, MessageCircle, Send, Check } from 'lucide-react';
import { SONG_DATA } from '../data/songData';

export default function ShareModal({ isOpen, onClose, onCopyLink }) {
  if (!isOpen) return null;

  const shareUrl = "https://too.fm/eo9oxo0";
  const shareText = `Check out "${SONG_DATA.title}" by ${SONG_DATA.artist}! Pre-save now:`;

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareToWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
  };

  const shareToTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Share Release</h3>
          <button className="modal-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: '0.875rem', color: '#64748B' }}>
          Share "<strong>{SONG_DATA.title}</strong>" with your friends and fans!
        </p>

        <div className="share-options-grid">
          <button className="share-option-btn" onClick={onCopyLink}>
            <div className="share-icon-wrap">
              <Copy size={20} />
            </div>
            <span>Copy Link</span>
          </button>

          <button className="share-option-btn" onClick={shareToTwitter}>
            <div className="share-icon-wrap">
              <Twitter size={20} color="#1DA1F2" />
            </div>
            <span>Twitter</span>
          </button>

          <button className="share-option-btn" onClick={shareToWhatsApp}>
            <div className="share-icon-wrap">
              <MessageCircle size={20} color="#25D366" />
            </div>
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
