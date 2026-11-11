"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { trackLeadSubmission } from "@/lib/analytics";

interface QuickLeadFormProps {
  className?: string;
  sourcePage?: string;
}

export function QuickLeadForm({ className = "", sourcePage = "Homepage" }: QuickLeadFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    topic: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validate 10-digit phone number
  const validatePhone = (num: string) => {
    const cleaned = num.replace(/[\s\-\(\)]/g, "");
    return /^(?:(?:\+|0{0,2})91)?[6789]\d{9}$/.test(cleaned);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (at least 2 letters).";
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number.";
    }

    if (!formData.topic) {
      newErrors.topic = "Please select a consultation service.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Track in GA4
    trackLeadSubmission(formData.topic, `Quick Lead Form (${sourcePage})`);

    // GTM / dataLayer push
    if (typeof window !== "undefined") {
      const win = window as unknown as { dataLayer?: Record<string, unknown>[] };
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: "generate_lead",
        lead_name: formData.fullName,
        service_requested: formData.topic,
        source_page: sourcePage,
      });
    }

    // Prepare WhatsApp message
    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
    const waText = encodeURIComponent(
      `*New Consultation Enquiry (Astro Siddhi)*\n` +
      `• *Name*: ${formData.fullName.trim()}\n` +
      `• *Phone*: +91 ${cleanPhone.slice(-10)}\n` +
      `• *Topic*: ${formData.topic}\n` +
      `• *Source*: ${sourcePage}\n` +
      `\nPlease let me know available slots for consultation with Sri Raghavendra Siddhanti garu.`
    );

    // Open WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(`https://wa.me/919652412221?text=${waText}`, "_blank");
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ fullName: "", phone: "", topic: "" });

    // Optional subtle redirection to /success after 1.5s
    setTimeout(() => {
      router.push("/success");
    }, 1500);
  };

  return (
    <div
      className={`relative w-full max-w-lg mx-auto bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gold/30 text-midnight ${className}`}
      id="quick-consultation-form"
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-saffron/10 border border-gold/40 text-saffron text-xs font-bold tracking-wide uppercase mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>100% Confidential • 25+ Yrs Experience</span>
        </div>
        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-midnight tracking-tight">
          Schedule Your Vedic Consultation
        </h3>
        <p className="font-cormorant text-base sm:text-lg text-midnight/70 mt-1.5 leading-snug">
          Speak with Sri Raghavendra Siddhanti garu in Visakhapatnam (MVP Colony) or worldwide via video call.
        </p>
      </div>

      {isSuccess ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-in fade-in duration-300">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          </div>
          <h4 className="font-cinzel text-xl font-bold text-emerald-900">
            Request Received 🙏
          </h4>
          <p className="font-cormorant text-emerald-800 text-base mt-2 leading-relaxed">
            Opening WhatsApp to confirm your slot with Sri Raghavendra Siddhanti garu&apos;s desk. You will be redirected shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="ql-name" className="block text-xs font-semibold text-midnight/80 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="ql-name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g., K. Venkata Rao"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-midnight bg-ivory/30 focus:bg-white focus:outline-none transition ${
                errors.fullName
                  ? "border-red-500 bg-red-50/30"
                  : "border-gold/30 focus:border-gold focus:ring-2 focus:ring-gold/20"
              }`}
            />
            {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
          </div>

          {/* WhatsApp / Phone */}
          <div>
            <label htmlFor="ql-phone" className="block text-xs font-semibold text-midnight/80 uppercase tracking-wider mb-1.5">
              WhatsApp / Phone Number <span className="text-red-500">*</span>
            </label>
            <div
              className={`flex rounded-xl border overflow-hidden transition ${
                errors.phone
                  ? "border-red-500 bg-red-50/30"
                  : "border-gold/30 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/20"
              }`}
            >
              <span className="bg-ivory border-r border-gold/30 px-3.5 py-3 text-sm font-semibold text-midnight/70 flex items-center select-none">
                +91
              </span>
              <input
                type="tel"
                id="ql-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="98765 43210"
                className="w-full px-4 py-3 text-sm text-midnight bg-ivory/30 focus:bg-white focus:outline-none"
              />
            </div>
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>

          {/* Consultation Topic */}
          <div>
            <label htmlFor="ql-topic" className="block text-xs font-semibold text-midnight/80 uppercase tracking-wider mb-1.5">
              Consultation Topic <span className="text-red-500">*</span>
            </label>
            <select
              id="ql-topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-midnight bg-ivory/30 focus:bg-white focus:outline-none transition ${
                errors.topic
                  ? "border-red-500 bg-red-50/30"
                  : "border-gold/30 focus:border-gold focus:ring-2 focus:ring-gold/20"
              }`}
            >
              <option value="" disabled>Select service required...</option>
              <option value="Kundali Matching (Marriage Compatibility)">Kundali Matching (Telugu / Vedic Marriage Compatibility)</option>
              <option value="Vastu Consultation (Apartment / House / Commercial)">Vastu Consultation (Residential / Commercial - Non-Demolition)</option>
              <option value="Career & Business Horoscope Analysis">Career &amp; Business Horoscope Analysis</option>
              <option value="General Vedic Guidance & Dosha Parihara">General Vedic Guidance &amp; Dosha Parihara</option>
            </select>
            {errors.topic && <p className="text-xs text-red-600 mt-1">{errors.topic}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-3 bg-gradient-to-r from-saffron via-gold to-saffron text-midnight font-cinzel font-bold text-sm tracking-widest uppercase py-4 px-6 rounded-xl shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
          >
            <span>{isSubmitting ? "Connecting to Desk..." : "Schedule My Confidential Consultation"}</span>
            <ArrowRight className="w-4 h-4 text-midnight" />
          </button>

          {/* Trust Guarantees */}
          <div className="pt-2 text-center text-xs text-midnight/70 font-cormorant space-y-0.5">
            <p>✓ Direct consultation with <strong>Sri Raghavendra Siddhanti garu</strong></p>
            <p>✓ Available in <strong>Telugu (తెలుగు) &amp; English</strong> &bull; Sector 10, MVP Colony &amp; Online Worldwide</p>
          </div>
        </form>
      )}
    </div>
  );
}

