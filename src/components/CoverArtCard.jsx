import React from 'react';
import { getAssetUrl } from '../utils/assetUrl';

export default function CoverArtCard() {
  return (
    <div className="cover-art-container">
      <video 
        src={getAssetUrl('assets/animated-cover.mp4')} 
        poster={getAssetUrl('assets/still.jpg')}
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
