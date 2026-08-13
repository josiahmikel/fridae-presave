import React from 'react';
import { CheckCircle2, Calendar, Share2, Music, X } from 'lucide-react';
import { SONG_DATA } from '../data/songData';

export default function PreSaveSuccessModal({ isOpen, service, onClose, onShare }) {
  if (!isOpen || !service) return null;

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(`Release Day: ${SONG_DATA.title} by ${SONG_DATA.artist}`);
    const details = encodeURIComponent(`"right now" is now released on ${service.name}! Stream it now.`);
    const location = encodeURIComponent("Worldwide Streaming Services");
    const dates = "20260826T040000Z/20260826T050000Z";
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ textAlign: 'center', padding: '2rem 1.75rem' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" style={{ position: 'absolute', top: '1rem', right: '1rem' }} onClick={onClose}>
          <X size={18} />
        </button>

        {/* Animated Checkmark Circle */}
        <div style={{
          width: '68px',
          height: '68px',
          borderRadius: '50%',
          background: '#DCFCE7',
          color: '#16A34A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem auto',
          boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.25)'
        }}>
          <CheckCircle2 size={38} strokeWidth={2.5} />
        </div>

        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.65rem',
          fontWeight: 800,
          color: '#0F172A',
          marginBottom: '0.5rem'
        }}>
          You're All Set!
        </h2>

        <p style={{
          fontSize: '0.9rem',
          color: '#475569',
          lineHeight: 1.5,
          marginBottom: '1.5rem'
        }}>
          <strong>"{SONG_DATA.title}"</strong> will automatically be saved to your <strong>{service.name}</strong> library on <strong>August 26, 2026</strong>.
        </p>

        {/* Service Badge & Cover Preview */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.9rem',
          padding: '0.9rem 1rem',
          background: '#F8FAFC',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          marginBottom: '1.5rem',
          textAlign: 'left'
        }}>
          <img 
            src={SONG_DATA.coverArt} 
            alt={SONG_DATA.title}
            style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover' }} 
          />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>{SONG_DATA.title}</div>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{SONG_DATA.artist}</div>
          </div>
          <img 
            src={service.logo} 
            alt={service.name}
            style={{ height: '22px', maxWidth: '80px', objectFit: 'contain' }} 
          />
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button 
            onClick={handleAddToCalendar}
            style={{
              width: '100%',
              padding: '0.85rem',
              borderRadius: '9999px',
              background: '#0F172A',
              color: '#FFFFFF',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
              transition: 'all 0.2s ease'
            }}
          >
            <Calendar size={16} />
            <span>Add Release Day to Calendar</span>
          </button>

          <button 
            onClick={() => {
              onClose();
              onShare();
            }}
            style={{
              width: '100%',
              padding: '0.8rem',
              borderRadius: '9999px',
              background: '#F1F5F9',
              color: '#0F172A',
              border: '1px solid #E2E8F0',
              fontSize: '0.875rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease'
            }}
          >
            <Share2 size={16} />
            <span>Share Release Page</span>
          </button>
        </div>
      </div>
    </div>
  );
}
