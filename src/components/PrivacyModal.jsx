import React, { useState } from 'react';
import { X, ShieldCheck, Check } from 'lucide-react';
import { SONG_DATA } from '../data/songData';

export default function PrivacyModal({ isOpen, onClose, onSavePrivacy }) {
  const [allowPerformance, setAllowPerformance] = useState(true);
  const [allowAds, setAllowAds] = useState(true);

  if (!isOpen) return null;

  const handleSave = () => {
    onSavePrivacy({ allowPerformance, allowAds });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={20} color="#2563EB" />
            <span>Privacy & Cookie Preferences</span>
          </h3>
          <button className="modal-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: '0.825rem', color: '#64748B', marginBottom: '1.25rem' }}>
          On behalf of <strong>{SONG_DATA.legal.dataController}</strong>, <strong>{SONG_DATA.legal.dataProcessor}</strong> sets cookies to personalize your music experience and measure release performance.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ padding: '0.9rem', background: '#F8FAFC', borderRadius: '14px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0F172A' }}>Performance Cookies</div>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Helps measure campaign performance and visit statistics.</div>
            </div>
            <input 
              type="checkbox" 
              checked={allowPerformance} 
              onChange={(e) => setAllowPerformance(e.target.checked)}
              style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#2563EB' }}
            />
          </div>

          <div style={{ padding: '0.9rem', background: '#F8FAFC', borderRadius: '14px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0F172A' }}>Marketing & Ad Cookies</div>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Delivers personalized recommendations and music ads.</div>
            </div>
            <input 
              type="checkbox" 
              checked={allowAds} 
              onChange={(e) => setAllowAds(e.target.checked)}
              style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#2563EB' }}
            />
          </div>
        </div>

        <button 
          onClick={handleSave}
          style={{
            width: '100%',
            padding: '0.85rem',
            borderRadius: '9999px',
            background: '#0F172A',
            color: '#FFFFFF',
            border: 'none',
            fontSize: '0.875rem',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
        >
          <Check size={16} />
          <span>Save Privacy Settings</span>
        </button>
      </div>
    </div>
  );
}
