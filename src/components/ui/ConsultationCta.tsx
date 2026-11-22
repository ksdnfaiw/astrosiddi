import React from "react";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/site";

interface ConsultationCtaProps {
  title?: string;
  text?: string;
  /** Pre-filled WhatsApp message. */
  whatsappText?: string;
  /** Marks where the link came from; useful when reading analytics. */
  className?: string;
}

/** Standard call-to-action block linking to the consultation (/contact) page and WhatsApp. */
export function ConsultationCta({
  title = "Get a Personal Birth-Chart Consultation",
  text = "A Moon sign is only one layer of a horoscope. Share your date, time and place of birth for a detailed reading in Telugu or English, in person in Visakhapatnam or online.",
  whatsappText = "Hello Astro Siddhi, I would like to book a horoscope consultation.",
  className = "",
}: ConsultationCtaProps) {
  return (
    <aside className={`bg-deepPurple text-ivory rounded-2xl p-8 sm:p-10 text-center ${className}`} aria-label="Book a consultation">
      <h2 className="text-gold font-cinzel text-2xl sm:text-3xl mb-4">{title}</h2>
      <p className="mb-8 text-ivory/85 max-w-xl mx-auto leading-relaxed">{text}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-midnight font-bold rounded-full hover:bg-saffron transition-colors"
        >
          Book a Consultation <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </Link>
        <a
          href={`${BUSINESS.whatsappUrl}?text=${encodeURIComponent(whatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 border border-gold/50 text-ivory rounded-full hover:bg-gold/10 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-gold" aria-hidden="true" /> WhatsApp Us
        </a>
      </div>
    </aside>
  );
}
