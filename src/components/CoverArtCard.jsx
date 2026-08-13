import React from 'react';

export default function CoverArtCard() {
  const isGithub = typeof window !== 'undefined' && window.location.hostname.includes('github.io');
  const basePath = isGithub ? '/fridae-presave/' : '/';

  return (
    <div className="cover-art-container">
      <video 
        src={`${basePath}assets/animated-cover.mp4`} 
        poster={`${basePath}assets/still.jpg`}
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
