import React, { useState, useEffect } from 'react';
import { SONG_DATA } from '../data/songData';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(SONG_DATA.releaseDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTwoDigits = (num) => String(num).padStart(2, '0');

  return (
    <div className="countdown-section">
      <div className="countdown-grid">
        <div className="countdown-box">
          <div className="countdown-num">{formatTwoDigits(timeLeft.days)}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-num">{formatTwoDigits(timeLeft.hours)}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-num">{formatTwoDigits(timeLeft.minutes)}</div>
          <div className="countdown-label">Mins</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-num">{formatTwoDigits(timeLeft.seconds)}</div>
          <div className="countdown-label">Secs</div>
        </div>
      </div>
    </div>
  );
}
