import React from 'react';
import videoSrc from '../../public/assets/animated-cover.mp4';

export default function CoverArtCard() {
  return (
    <div className="cover-art-container">
      <video 
        src={videoSrc} 
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
