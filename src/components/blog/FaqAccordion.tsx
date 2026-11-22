import React from "react";
import { FaqSection } from "@/components/ui/FaqSection";
import type { FAQItem } from "@/data/blogPosts";

/** Blog FAQ block. Zero-JS <details> list so every answer is in the HTML (matches the FAQPage JSON-LD). */
export function FaqAccordion({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="my-10">
      <FaqSection faqs={faqs} standalone={false} />
    </div>
  );
}
