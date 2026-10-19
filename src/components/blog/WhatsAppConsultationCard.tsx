import React from "react";
import { MessageSquare, Star, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function WhatsAppConsultationCard({
  serviceContext = "Vedic Astrology & Vastu Consultation"
}: {
  serviceContext?: string;
}) {
  const message = encodeURIComponent(`Hi Astro Siddhi, I am reading about ${serviceContext} and would like to book a consultation in Visakhapatnam.`);
  const whatsappUrl = `https://wa.me/919652412221?text=${message}`;

  return (
    <div className="my-8 p-6 sm:p-7 rounded-2xl bg-midnight/95 text-ivory border border-gold/40 shadow-xl relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="flex items-center text-xs text-gold bg-gold/15 px-2.5 py-0.5 rounded-full border border-gold/25 font-medium">
              <Star className="w-3 h-3 fill-gold text-gold mr-1" />
              4.9★ Rated on Google (414+ Reviews)
            </span>
            <span className="text-xs text-ivory/60 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-gold" />
              MVP Colony, Vizag
            </span>
          </div>

          <h4 className="font-cinzel text-lg sm:text-xl font-bold text-ivory">
            Direct Consultation with Sri Raghavendra Siddhanti Garu
          </h4>

          <p className="text-xs sm:text-sm text-ivory/80 max-w-xl leading-relaxed">
            Get personalized horoscope readings, authentic Kundali matching, or non-demolition Vastu remedies. Consult in person at MVP Colony or via secure video call.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ivory/70 pt-1">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              English & Telugu
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              100% Confidential
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              Same-Day Appointments
            </span>
          </div>
        </div>

        <div className="flex-shrink-0 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-0.5 text-center"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat On WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
