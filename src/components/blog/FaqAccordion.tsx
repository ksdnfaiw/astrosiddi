"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "@/data/blogPosts";

export function FaqAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="my-10 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-5 h-5 text-gold" />
        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-midnight tracking-wide">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="divide-y divide-gold/15 rounded-2xl border border-gold/20 bg-white/70 backdrop-blur-sm overflow-hidden shadow-sm">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="transition-colors hover:bg-gold/5">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left gap-4"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-sm sm:text-base text-midnight">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gold flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-midnight/80 leading-relaxed border-t border-gold/10 bg-ivory/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
