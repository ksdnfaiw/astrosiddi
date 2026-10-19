import React from "react";
import { UserCheck, Award, MapPin } from "lucide-react";

export function AuthorBadge({
  author = "Astro Siddhi Editorial Team — Reviewed by 25+ Year Veteran Vedic Astrologer",
  date = "October 18, 2026",
  readTime = "9 min read"
}: {
  author?: string;
  date?: string;
  readTime?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 px-5 rounded-xl bg-ivory border border-gold/20 shadow-sm text-midnight">
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-full bg-midnight text-gold flex items-center justify-center font-cinzel font-bold text-sm shadow-md border border-gold/30 flex-shrink-0">
          AS
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-xs sm:text-sm text-midnight">
              {author}
            </span>
            <span title="Verified Astrological Reviewer">
              <UserCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            </span>
          </div>
          <div className="text-[11px] text-midnight/60 flex items-center gap-2 mt-0.5">
            <span className="flex items-center gap-1">
              <Award className="w-3 h-3 text-gold" />
              Sri Raghavendra Jyothishalayam
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-gold" />
              MVP Colony, Visakhapatnam
            </span>
          </div>
        </div>
      </div>

      <div className="text-[11px] text-midnight/60 sm:text-right flex sm:flex-col gap-3 sm:gap-0.5">
        <span>Published: {date}</span>
        <span className="text-gold font-medium">{readTime}</span>
      </div>
    </div>
  );
}
