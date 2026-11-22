import React from "react";
import type { FaqItem } from "@/data/faqs";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  servicesCatalogSchema,
  websiteSchema,
  serviceSchema,
} from "@/lib/schema";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export type { FaqItem };

const CANONICAL_HOST = SITE_URL;
const BUSINESS_ID = `${CANONICAL_HOST}/#business`;
const FOUNDER_ID = `${CANONICAL_HOST}/#founder`;
const WEBSITE_ID = `${CANONICAL_HOST}/#website`;

/** Renders one JSON-LD block. "<" is escaped so content can never close the script tag. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const WebsiteSchema = () => <JsonLd data={websiteSchema()} />;

/** Emit on Home and Contact (and wherever the business entity itself is described). */
export const LocalBusinessSchema = ({ reviews = false }: { reviews?: boolean }) => (
  <JsonLd data={localBusinessSchema({ reviews })} />
);

export const ServiceSchema = () => <JsonLd data={servicesCatalogSchema()} />;

export const ServicePageSchema = () => <JsonLd data={servicesCatalogSchema()} />;

export const FaqSchema = ({ faqs }: { faqs: FaqItem[] }) => <JsonLd data={faqSchema(faqs)} />;

export const BreadcrumbSchema = ({
  items,
}: {
  items: { name: string; path?: string; url?: string }[];
}) => {
  const normalizedItems = items.map((it) => ({
    name: it.name,
    path: it.path || (it.url ? (it.url.startsWith("http") ? new URL(it.url).pathname : it.url) : "/"),
  }));
  return <JsonLd data={breadcrumbSchema(normalizedItems)} />;
};

export const HomeSchema = ({ faqs = [] }: { faqs?: FaqItem[] }) => (
  <>
    <WebsiteSchema />
    <LocalBusinessSchema reviews />
    {faqs.length > 0 && <FaqSchema faqs={faqs} />}
  </>
);

export const ServiceDetailSchema = ({
  serviceName,
  serviceDescription,
  serviceUrl,
  faqs = [],
}: {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  faqs?: FaqItem[];
}) => {
  const path = serviceUrl.startsWith("http") ? new URL(serviceUrl).pathname : serviceUrl;
  return (
    <>
      <JsonLd data={serviceSchema({ name: serviceName, description: serviceDescription, path })} />
      {faqs.length > 0 && <FaqSchema faqs={faqs} />}
    </>
  );
};
