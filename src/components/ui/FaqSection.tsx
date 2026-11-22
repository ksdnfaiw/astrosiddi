import React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { FaqItem } from "@/data/faqs";

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  /** Tone of the surrounding section. */
  tone?: "light" | "dark";
  /** Wrap in a padded <section>. Set false when embedding inside an existing container. */
  standalone?: boolean;
  id?: string;
}

/**
 * Zero-JS FAQ list built on <details>. Every answer is in the HTML (visible to crawlers and matching
 * the FAQPage JSON-LD) while only the first stays expanded visually.
 */
export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  tone = "light",
  standalone = true,
  id,
}: FaqSectionProps) {
  if (!faqs?.length) return null;
  const dark = tone === "dark";

  const list = (
    <>
      <div className="flex items-center gap-2 mb-5">
        <HelpCircle className="w-5 h-5 text-gold" aria-hidden="true" />
        <h2 className={`font-cinzel text-2xl sm:text-3xl font-bold ${dark ? "text-ivory" : "text-midnight"}`}>{title}</h2>
      </div>
      <div
        className={`divide-y rounded-2xl border overflow-hidden ${
          dark ? "divide-gold/15 border-gold/20 bg-midnight/60" : "divide-gold/15 border-gold/20 bg-white"
        }`}
      >
        {faqs.map((faq, i) => (
          <details key={faq.question} className="group" open={i === 0}>
            <summary
              className={`flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 text-left font-medium text-sm sm:text-base [&::-webkit-details-marker]:hidden ${
                dark ? "text-ivory hover:bg-gold/5" : "text-midnight hover:bg-gold/5"
              }`}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className="w-4 h-4 shrink-0 text-gold transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className={`px-5 pb-5 sm:px-6 text-sm sm:text-base leading-relaxed ${dark ? "text-ivory/75" : "text-midnight/75"}`}>
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </>
  );

  if (!standalone) return <div id={id}>{list}</div>;

  return (
    <section id={id} className={`py-20 sm:py-24 ${dark ? "bg-deepPurple" : "bg-ivory"}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">{list}</div>
    </section>
  );
}
