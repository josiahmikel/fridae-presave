import React from 'react';
import { Share2, Shield, Sparkles } from 'lucide-react';
import { SONG_DATA } from '../data/songData';

export default function Header({ onOpenShare, onOpenPrivacy }) {
  return (
    <header className="top-nav">
      <div className="brand-badge">
        <img src={SONG_DATA.favicon} alt="TooLost Favicon" />
        <span>TooLost Pre-Save</span>
      </div>

      <div className="top-actions">
        <button 
          className="icon-btn" 
          onClick={onOpenShare}
          title="Share Page"
          aria-label="Share Page"
        >
          <Share2 size={18} />
        </button>

        <button 
          className="icon-btn" 
          onClick={onOpenPrivacy}
          title="Privacy Settings"
          aria-label="Privacy Settings"
        >
          <Shield size={18} />
        </button>
      </div>
    </header>
  );
}
