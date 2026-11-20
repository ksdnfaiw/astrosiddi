"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone is required"),
  email: z.string().email("Invalid email"),
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
*Email*: ${data.email}%0A
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
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> Get in Touch
            </span>
            <div className="w-12 h-px bg-gold/50"></div>
          </div>
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">
            Begin Your Journey
          </h1>
          <p className="text-lg md:text-2xl opacity-80 font-medium mb-8">Your first consultation is just one message away.</p>
          <p className="text-gold/90 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" aria-hidden="true" /> MVP Colony, Visakhapatnam
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors underline underline-offset-4">
              View on Map
            </a>
            <span className="hidden sm:inline">&middot;</span>
            <span>Online Worldwide</span>
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 relative z-10">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="font-cinzel text-3xl font-bold mb-8 text-midnight">Direct Contact</h2>
            <p className="text-lg text-midnight/70 mb-10">
              Reach out directly or use the form to book a detailed consultation. We aim to respond within 24 hours.
            </p>

            <div className="space-y-8">
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
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {isSuccess ? (
              <div className="bg-white border border-green-200 text-green-800 p-12 rounded-2xl text-center shadow-xl flex flex-col items-center" role="status">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" aria-hidden="true" />
                <h2 className="font-cinzel text-3xl font-bold mb-4">Request Sent Successfully!</h2>
                <p className="text-xl opacity-80">We will contact you shortly via WhatsApp to confirm your consultation time.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8 bg-white p-6 sm:p-12 rounded-3xl shadow-xl border border-gold/10">
                <h2 className="text-3xl font-bold mb-8 font-cinzel text-midnight">Book a Consultation</h2>

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
                  className="w-full bg-[#0B6E63] text-white font-bold py-5 rounded-xl hover:bg-[#095a51] shadow-lg transition-colors flex justify-center items-center gap-3 text-sm uppercase tracking-widest disabled:opacity-70 mt-8"
                >
                  <Send className="w-5 h-5" aria-hidden="true" />
                  {isSubmitting ? "Opening WhatsApp..." : "Send on WhatsApp"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
