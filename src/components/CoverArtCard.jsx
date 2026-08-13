import React from 'react';
import { SONG_DATA } from '../data/songData';

export default function CoverArtCard() {
  return (
    <div className="cover-art-container">
      <video 
        src="/assets/animated-cover.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="cover-art-image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
