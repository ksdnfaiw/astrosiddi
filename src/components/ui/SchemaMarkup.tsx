import React from 'react';

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Astro Siddhi",
    "image": "https://astrosiddi.com/icon.svg",
    "@id": "https://astrosiddi.com",
    "url": "https://astrosiddi.com",
    "telephone": "+919014163994", // Placeholder, waiting for client
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Visakhapatnam",
      "addressRegion": "AP",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.6868,
      "longitude": 83.2185
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/astrosiddi",
      "https://www.instagram.com/astrosiddi"
    ],
    "description": "25-year veteran-led Vedic astrology practice serving Visakhapatnam. Specializing in Kundali Matching, Vastu, and Career Astrology in English and Telugu.",
    "founder": {
      "@type": "Person",
      "name": "Sri Raghavendra Siddhanti Garu"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Vedic Astrology Consultations",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Astro Siddhi"
    },
    "areaServed": {
      "@type": "City",
      "name": "Visakhapatnam"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Astrology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kundali Matching"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vastu Consultation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Career Astrology"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
