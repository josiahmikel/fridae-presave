import React from 'react';

export default function CoverArtCard() {
  return (
    <div className="cover-art-container">
      <video 
        src="https://josiahmikel.github.io/fridae-presave/assets/animated-cover.mp4" 
        poster="https://josiahmikel.github.io/fridae-presave/assets/still.jpg"
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
