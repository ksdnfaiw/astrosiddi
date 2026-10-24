import React from 'react';

const CANONICAL_HOST = 'https://www.astrosiddi.com';
const BUSINESS_ID = `${CANONICAL_HOST}/#business`;
const FOUNDER_ID = `${CANONICAL_HOST}/#founder`;
const WEBSITE_ID = `${CANONICAL_HOST}/#website`;

export interface FaqItem {
  question: string;
  answer: string;
}

export const HomeSchema = ({ faqs = [] }: { faqs?: FaqItem[] }) => {
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
        '@id': WEBSITE_ID,
        'url': CANONICAL_HOST,
        'name': 'Astro Siddhi',
        'alternateName': 'Sri Raghavendra Jyothishalayam',
        'publisher': { '@id': BUSINESS_ID },
        'inLanguage': ['en-IN', 'te-IN'],
      },
      {
        '@type': 'Person',
        '@id': FOUNDER_ID,
        'name': 'Sri Raghavendra Siddhanti Garu',
        'jobTitle': 'Senior Vedic Astrologer & Vastu Consultant',
        'description': 'Vedic astrologer with 25+ years of experience in horoscope reading, Kundali matching, and Vastu Shastra.',
        'worksFor': { '@id': BUSINESS_ID },
      },
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': BUSINESS_ID,
        'name': 'Astro Siddhi',
        'alternateName': [
          'Sri Raghavendra Jyothishalayam',
          'Sri Raghavendra Jyothishalayam MVP Colony',
          'Astro Siddhi Visakhapatnam',
        ],
        'image': `${CANONICAL_HOST}/icon.svg`,
        'url': CANONICAL_HOST,
        'telephone': '+919652412221',
        'priceRange': '₹₹',
        'hasMap':
          'https://www.google.com/maps/place/Sri+Raghavendra+Jyothishalayam,+P8RQ%2B3P4,+MVP+Double+Rd,+Sector+10,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/@17.740137,83.3393431,17z/',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'P8RQ+3P4, MVP Double Rd, Sector 10, MVP Colony',
          'addressLocality': 'Visakhapatnam',
          'addressRegion': 'Andhra Pradesh',
          'postalCode': '530017',
          'addressCountry': 'IN',
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 17.740137,
          'longitude': 83.3393431,
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          'opens': '09:00',
          'closes': '20:00',
        },
        'sameAs': [
          'https://www.facebook.com/astrosiddi',
          'https://www.instagram.com/astrosiddi',
          'https://www.google.com/maps/place/Sri+Raghavendra+Jyothishalayam,+P8RQ%2B3P4,+MVP+Double+Rd,+Sector+10,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/@17.740137,83.3393431,17z/',
        ],
        'description':
          '25-year veteran-led Vedic astrology practice in MVP Colony, Visakhapatnam (Sri Raghavendra Jyothishalayam). Specializing in Kundali Matching, Vastu, and Career Astrology in English and Telugu.',
        'founder': { '@id': FOUNDER_ID },
      },
    ];

  if (faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${CANONICAL_HOST}/#faq`,
      'mainEntity': faqs.map((f) => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer,
        },
      })),
    });
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ServicePageSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Vedic Astrology Consultations',
    'provider': {
      '@type': 'LocalBusiness',
      '@id': BUSINESS_ID,
      'name': 'Astro Siddhi',
      'url': CANONICAL_HOST,
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Visakhapatnam',
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Astrology Services Catalog',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Kundali Matching (Jathaka Poritham)',
            'description': 'Traditional Vedic horoscope matching for marriage compatibility, Dosha analysis, and longevity guidance.',
            'url': `${CANONICAL_HOST}/services/kundali-matching`,
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Vastu Shastra Consultation',
            'description': 'Vastu inspection and non-demolition remedies for flats, independent houses, and commercial plots in Visakhapatnam.',
            'url': `${CANONICAL_HOST}/services/vastu-visakhapatnam`,
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Career & Business Astrology',
            'description': 'Kundali analysis for job transitions, promotion timing, business partnerships, and financial growth.',
            'url': `${CANONICAL_HOST}/services/career-astrology`,
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const BreadcrumbSchema = ({ items }: { items: { name: string; url: string }[] }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
