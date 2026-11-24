'use client';

import React from 'react';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'Engagement',
        event_label: 'WhatsApp Consultation Initiated',
      });
    }
  };

  return (
    <a
      href="https://wa.me/919652412221?text=Hi%20Astro%20Siddi%2C%20I%20would%20like%20to%20book%20a%202027%20astrology%20consultation"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      aria-label="Chat with Astro Siddi on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: '#FFFFFF',
        padding: '12px 18px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '2px 2px 8px rgba(0,0,0,0.25)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      Chat on WhatsApp
    </a>
  );
}

export default WhatsAppButton;
