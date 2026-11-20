import React from "react";
import type { FaqItem } from "@/data/faqs";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  servicesCatalogSchema,
  websiteSchema,
} from "@/lib/schema";

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

export const FaqSchema = ({ faqs }: { faqs: FaqItem[] }) => <JsonLd data={faqSchema(faqs)} />;

export const BreadcrumbSchema = ({ items }: { items: { name: string; path: string }[] }) => (
  <JsonLd data={breadcrumbSchema(items)} />
);
