import React from 'react';
import ServiceIcon from './ServiceIcons';
import { SONG_DATA } from '../data/songData';

const PRESAVE_URL = 'https://too.fm/eo9oxo0';

export default function ServiceList() {
  return (
    <div className="services-container" style={{ paddingTop: '1rem' }}>
      {SONG_DATA.services.map((service) => (
        <a
          key={service.id}
          href={PRESAVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="service-row"
        >
          <div className="service-logo-wrap">
            <ServiceIcon id={service.id} size={22} color="#000000" />
            <span className="service-title-text">{service.name}</span>
          </div>
          <div className="service-cta-btn">
            <span>{service.cta}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
