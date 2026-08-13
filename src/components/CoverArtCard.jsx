import React from 'react';
import animatedCover from '../assets/animated-cover.mp4';
import stillImg from '../assets/still.jpg';

export default function CoverArtCard() {
  return (
    <div className="cover-art-container">
      <video 
        src={animatedCover} 
        poster={stillImg}
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
