'use client';

import { useState, useEffect } from 'react';
import './CookieBanner.css';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = sessionStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    sessionStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-container">
      <div className="cookie-banner-inner">
        <div className="cookie-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 13v.01" />
          </svg>
        </div>
        <div className="cookie-content">
          <p>Sütiket használunk a legjobb élmény érdekében.</p>
        </div>
        <div className="cookie-actions">
          <button onClick={handleDecline} className="cookie-btn-decline">Nem</button>
          <button onClick={handleAccept} className="cookie-btn-accept">Elfogadom</button>
        </div>
      </div>
    </div>
  );
}
