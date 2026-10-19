import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, MessageSquare, ArrowLeft, Clock, MapPin, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Consultation Request Received | Astro Siddhi Visakhapatnam",
  description: "Thank you for reaching out to Sri Raghavendra Jyothishalayam (Astro Siddhi). Your consultation request has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      {/* Hero / Confirmation Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-midnight via-deepPurple to-midnight text-ivory border-b border-gold/20 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(52,211,153,0.3)] animate-bounce-slow">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/30 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation Request Confirmed</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-ivory mb-6 tracking-tight">
            Thank You! Your Details Have Been Received
          </h1>

          <p className="text-base sm:text-xl text-ivory/85 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
            Sri Raghavendra Siddhanti Garu and our senior astrological desk at MVP Colony, Visakhapatnam have received your consultation enquiry.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gold/90 font-medium">
            <span className="flex items-center gap-1.5 bg-midnight/80 px-4 py-2 rounded-full border border-gold/25">
              <Clock className="w-4 h-4 text-gold" />
              Response Time: 2 to 4 Hours
            </span>
            <span className="flex items-center gap-1.5 bg-midnight/80 px-4 py-2 rounded-full border border-gold/25">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Confidential Horoscopes
            </span>
            <span className="flex items-center gap-1.5 bg-midnight/80 px-4 py-2 rounded-full border border-gold/25">
              <MapPin className="w-4 h-4 text-gold" />
              MVP Colony, Vizag &amp; Online
            </span>
          </div>
        </div>
      </section>

      {/* Next Steps & Instant Contact Card */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 w-full flex-1">
        <div className="bg-white rounded-3xl border border-gold/25 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <h2 className="font-cinzel text-2xl font-bold text-midnight mb-6 border-b border-gold/15 pb-4">
            What Happens Next?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-5 rounded-2xl bg-ivory border border-gold/15 space-y-2">
              <div className="w-8 h-8 rounded-full bg-midnight text-gold font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-midnight">Horoscope Scrutiny</h3>
              <p className="text-xs text-midnight/70 leading-relaxed">
                Your date, time, and place of birth are verified against astronomical ephemeris (Panchangam).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory border border-gold/15 space-y-2">
              <div className="w-8 h-8 rounded-full bg-midnight text-gold font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-midnight">Appointment Slot</h3>
              <p className="text-xs text-midnight/70 leading-relaxed">
                We will contact you via WhatsApp / Phone to confirm your preferred in-person or online slot.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory border border-gold/15 space-y-2">
              <div className="w-8 h-8 rounded-full bg-midnight text-gold font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-midnight">Detailed Guidance</h3>
              <p className="text-xs text-midnight/70 leading-relaxed">
                Comprehensive Telugu &amp; English reading with practical, ethical Vedic remedies.
              </p>
            </div>
          </div>

          {/* Instant Follow-up Banner */}
          <div className="p-6 rounded-2xl bg-midnight text-ivory border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-cinzel font-bold text-base sm:text-lg text-gold">
                Need an Immediate Consultation?
              </h4>
              <p className="text-xs text-ivory/80">
                You can chat directly with our Jyothishalayam team right now:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/919652412221?text=Hi%20Astro%20Siddhi,%20I%20just%20submitted%20the%20consultation%20form%20and%20would%20like%20to%20confirm%20my%20slot."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider transition-all text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:+919652412221"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-ivory font-semibold text-xs tracking-wider transition-all border border-white/20 text-center"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call +91 96524 12221</span>
              </a>
            </div>
          </div>

          {/* Back Home link */}
          <div className="pt-8 mt-8 border-t border-gold/15 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-midnight hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Home Page</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
