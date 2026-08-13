import React from 'react';
import ServiceIcon from './ServiceIcons';
import { SONG_DATA } from '../data/songData';

export default function ServiceList({ onServiceClick }) {
  return (
    <div className="services-container" style={{ paddingTop: '1rem' }}>
      {SONG_DATA.services.map((service) => {
        const directUrl = service.url ? service.url.replace('/sl/e/ps/', '/sl/e/p/') : service.destUrl;
        const targetUrl = directUrl || service.destUrl;
        return (
          <a
            key={service.id}
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="service-row"
            onClick={(e) => onServiceClick(service, e, targetUrl)}
          >
            <div className="service-logo-wrap">
              <ServiceIcon id={service.id} size={22} color="#000000" />
              <span className="service-title-text">{service.name}</span>
            </div>

            <div className="service-cta-btn">
              <span>{service.cta}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
