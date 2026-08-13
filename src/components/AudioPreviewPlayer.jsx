import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { SONG_DATA } from '../data/songData';

export default function AudioPreviewPlayer({ isPlaying, onTogglePlay }) {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play error:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <audio 
        ref={audioRef} 
        src={SONG_DATA.audioSampleUrl} 
        loop
        preload="auto"
      />
      <button 
        className="play-overlay-btn"
        onClick={onTogglePlay}
        title={isPlaying ? "Pause Preview" : "Listen to Preview"}
      >
        <div className="play-icon-circle">
          {isPlaying ? <Pause size={15} fill="#FFFFFF" /> : <Play size={15} fill="#FFFFFF" style={{ marginLeft: 2 }} />}
        </div>
        <span>{isPlaying ? "Playing Preview" : "Listen Preview"}</span>
        {isPlaying && (
          <div className="waveform-bars">
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
          </div>
        )}
      </button>
    </div>
  );
}
