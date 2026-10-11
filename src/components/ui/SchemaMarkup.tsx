import React from 'react';

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Astro Siddhi",
    "alternateName": [
      "Sri Raghavendra Jyothishalayam",
      "Sri Raghavendra Jyothishalayam MVP Colony",
      "Astro Siddhi Visakhapatnam"
    ],
    "image": "https://astrosiddi.com/icon.svg",
    "@id": "https://astrosiddi.com",
    "url": "https://astrosiddi.com",
    "telephone": "+919652412221",
    "priceRange": "₹₹",
    "hasMap": "https://www.google.com/maps/place/Sri+Raghavendra+Jyothishalayam,+P8RQ%2B3P4,+MVP+Double+Rd,+Sector+10,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/@17.740137,83.3393431,17z/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "P8RQ+3P4, MVP Double Rd, Sector 10, MVP Colony",
      "addressLocality": "Visakhapatnam",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "530017",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.740137,
      "longitude": 83.3393431
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "414",
      "bestRating": "5",
      "worstRating": "1"
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
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.google.com/maps/place/Sri+Raghavendra+Jyothishalayam,+P8RQ%2B3P4,+MVP+Double+Rd,+Sector+10,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/@17.740137,83.3393431,17z/",
      "https://www.facebook.com/astrosiddi",
      "https://www.instagram.com/astrosiddi"
    ],
    "description": "25-year veteran-led Vedic astrology practice in Visakhapatnam (Sri Raghavendra Jyothishalayam). Specializing in Kundali Matching, Vastu, and Career Astrology in English and Telugu with 4.9-star rating on Google.",
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
