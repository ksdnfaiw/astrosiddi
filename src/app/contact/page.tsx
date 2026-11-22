"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone is required"),
  email: z.string().email("Invalid email").or(z.literal("")).optional(),
  language_pref: z.enum(["English", "Telugu"]),
  service: z.string().min(1, "Service selection is required"),
  dob: z.string().optional(),
  tob: z.string().optional(),
  pob: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputCls =
  "w-full border-b-2 border-midnight/10 bg-transparent py-3 focus:border-gold focus:outline-none transition-colors text-lg";
const labelCls = "block text-xs font-bold uppercase tracking-widest text-midnight/70 mb-2";

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      language_pref: "English",
      service: "Vedic Horoscope Reading",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const message = `*New Consultation Enquiry*%0A
*Name*: ${data.name}%0A
*Phone*: ${data.phone}%0A
*Email*: ${data.email || "N/A"}%0A
*Service*: ${data.service}%0A
*Language*: ${data.language_pref}%0A
*DOB*: ${data.dob || "N/A"}%0A
*TOB*: ${data.tob || "N/A"}%0A
*POB*: ${data.pob || "N/A"}%0A
*Message*: ${data.message || "N/A"}`;

      window.open(`${BUSINESS.whatsappUrl}?text=${message}`, "_blank");

      setIsSuccess(true);
      setIsSubmitting(false);
      // Redirect to /success for Google Ads Page Load conversion tracking
      router.push("/success");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      {/* HERO */}
      <section className="relative bg-midnight text-ivory py-24 sm:py-32 text-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity"
          style={{ backgroundImage: "url('/images/texture-poster.webp')" }}
        ></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold/50"></div>
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Get in Touch
            </span>
            <div className="w-12 h-px bg-gold/50"></div>
          </div>
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">
            Begin Your Sacred Journey
          </h1>
          <p className="text-lg md:text-2xl opacity-80 font-medium max-w-2xl mx-auto leading-relaxed">
            Reach out directly or send an enquiry below. We are here to guide your path with authentic Vedic wisdom.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 relative z-10">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="font-cinzel text-3xl font-bold mb-4 text-midnight">Direct Contact</h2>
              <p className="text-lg text-midnight/70">
                Reach out to Sri Raghavendra Siddhanti garu directly via phone, WhatsApp, or email to schedule your appointment.
              </p>
            </div>

            <div className="space-y-6">
              <a href={`tel:${BUSINESS.phone}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-midnight transition-colors shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-1">Phone / WhatsApp</h3>
                  <p className="text-midnight/70 text-lg">{BUSINESS.phoneDisplay}</p>
                </div>
              </a>

              <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-midnight transition-colors shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-1">Email</h3>
                  <p className="text-midnight/70 text-lg">{BUSINESS.email}</p>
                </div>
              </a>

              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-midnight transition-colors shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-1">Location</h3>
                  <p className="text-midnight/70 text-lg">
                    P8RQ+3P4, MVP Double Rd, Sector 10,
                    <br />
                    Opp. Axis Bank, MVP Colony, Visakhapatnam, AP 530017
                  </p>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-midnight/5 border border-gold/20 space-y-3">
              <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Consultation Hours</span>
              </div>
              <p className="text-sm text-midnight/80 leading-relaxed">
                Monday to Saturday: 9:00 AM – 8:00 PM<br/>
                Sunday: By Prior Appointment Only<br/>
                <span className="text-xs text-midnight/60 font-poppins">Typical WhatsApp response: Within 2 hours</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gold/10">
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="font-cinzel text-2xl font-bold text-midnight">Consultation Form Sent!</h3>
                <p className="text-midnight/70 text-lg max-w-md mx-auto">
                  Redirecting you to the confirmation page. You may also message us directly on WhatsApp anytime.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="c-name" className={labelCls}>Full Name *</label>
                    <input id="c-name" autoComplete="name" {...register("name")} className={inputCls} placeholder="Your Name" aria-invalid={!!errors.name} />
                    {errors.name && <span role="alert" className="text-red-600 text-xs mt-1 block">{errors.name.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="c-phone" className={labelCls}>Phone Number *</label>
                    <input id="c-phone" type="tel" inputMode="tel" autoComplete="tel" {...register("phone")} className={inputCls} placeholder="+91 00000 00000" aria-invalid={!!errors.phone} />
                    {errors.phone && <span role="alert" className="text-red-600 text-xs mt-1 block">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="c-email" className={labelCls}>Email</label>
                    <input id="c-email" type="email" autoComplete="email" {...register("email")} className={inputCls} placeholder="your@email.com" aria-invalid={!!errors.email} />
                    {errors.email && <span role="alert" className="text-red-600 text-xs mt-1 block">{errors.email.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="c-lang" className={labelCls}>Preferred Language</label>
                    <select id="c-lang" {...register("language_pref")} className={`${inputCls} cursor-pointer`}>
                      <option value="English">English</option>
                      <option value="Telugu">Telugu</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="c-dob" className={labelCls}>Date of Birth</label>
                    <input id="c-dob" type="date" {...register("dob")} className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="c-tob" className={labelCls}>Time of Birth</label>
                    <input id="c-tob" type="time" {...register("tob")} className={inputCls} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="c-pob" className={labelCls}>Place of Birth</label>
                    <input id="c-pob" {...register("pob")} className={inputCls} placeholder="City, State, Country" />
                  </div>
                  <div>
                    <label htmlFor="c-service" className={labelCls}>Service Required *</label>
                    <select id="c-service" {...register("service")} className={`${inputCls} cursor-pointer`}>
                      <option value="Vedic Horoscope Reading">Vedic Horoscope Reading</option>
                      <option value="Kundali Matching">Kundali Matching</option>
                      <option value="Career & Business Astrology">Career & Business Astrology</option>
                      <option value="Love & Relationship Guidance">Love & Relationship Guidance</option>
                      <option value="Vastu Shastra Consultation">Vastu Shastra Consultation</option>
                      <option value="Dosha Parihara & Remedies">Dosha Parihara & Remedies</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="c-message" className={labelCls}>Your Message</label>
                  <textarea id="c-message" {...register("message")} rows={4} className={`${inputCls} resize-none`} placeholder="Any specific concerns or questions?"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-saffron text-midnight font-bold py-5 rounded-full uppercase tracking-widest text-sm transition-all duration-300 shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending..." : "Submit Consultation Request"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
