"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { BreadcrumbSchema } from "@/components/ui/SchemaMarkup";

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

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      language_pref: "English",
      service: "Vedic Horoscope Reading"
    }
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

      window.open(`https://wa.me/919652412221?text=${message}`, '_blank');
      
      setIsSuccess(true);
      setIsSubmitting(false);
      // Redirect to /success for Google Ads Page Load conversion tracking
      router.push("/success");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const breadcrumbs = [
    { name: "Home", url: "https://www.astrosiddi.com" },
    { name: "Contact", url: "https://www.astrosiddi.com/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
      <BreadcrumbSchema items={breadcrumbs} />
      {/* HERO */}
      <section className="relative bg-midnight text-ivory py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity" style={{ backgroundImage: "url('/Untitled design_20260909_011322_0000_page-0001.jpg')" }}></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold/50"></div>
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Get in Touch
              </span>
              <div className="w-12 h-px bg-gold/50"></div>
            </div>
            <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">
              Contact Best Astrologer in Visakhapatnam
            </h1>
            <p className="text-xl md:text-2xl opacity-80 font-cormorant font-medium mb-8">
              Schedule your personalized Vedic astrology, Kundali matching, or Vastu consultation in MVP Colony or online.
            </p>
            <p className="text-gold/80 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> MVP Colony, Visakhapatnam</span>
              <span className="hidden sm:inline">&middot;</span>
              <a href="https://www.google.com/maps/place/Sri+Raghavendra+Jyothishalayam,+P8RQ%2B3P4,+MVP+Double+Rd,+Sector+10,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/@17.740137,83.3393431,17z/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors underline-offset-4 hover:underline">View on Map</a>
              <span className="hidden sm:inline">&middot;</span>
              <span>Online Worldwide</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 w-full relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none z-0"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
          
          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-cinzel text-3xl font-bold mb-4">Direct Contact</h2>
              <p className="text-midnight/70 font-cormorant text-lg">
                Reach out to Sri Raghavendra Siddhanti garu directly via phone, WhatsApp, or email to schedule your appointment.
              </p>
            </div>
            
            <div className="space-y-6">
              <a href="tel:+919652412221" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-midnight transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Phone / WhatsApp</h4>
                  <p className="text-midnight/70 font-cormorant text-lg">+91 96524 12221</p>
                </div>
              </a>
              
              <a href="mailto:info@astrosiddi.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-midnight transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-midnight/70 font-cormorant text-lg">info@astrosiddi.com</p>
                </div>
              </a>
              
              <a href="https://www.google.com/maps/place/Sri+Raghavendra+Jyothishalayam,+P8RQ%2B3P4,+MVP+Double+Rd,+Sector+10,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/@17.740137,83.3393431,17z/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-midnight transition-colors shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-midnight/70 font-cormorant text-lg">P8RQ+3P4, MVP Double Rd, Sector 10,<br/>Opp. Axis Bank, MVP Colony, Visakhapatnam, AP 530017</p>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-midnight/5 border border-gold/20 space-y-3">
              <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Consultation Hours</span>
              </div>
              <p className="text-sm text-midnight/80 font-cormorant text-base leading-relaxed">
                Monday to Saturday: 9:00 AM – 8:00 PM<br/>
                Sunday: By Prior Appointment Only<br/>
                <span className="text-xs text-midnight/60 font-poppins">Typical WhatsApp response: Within 2 hours</span>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gold/10"
          >
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="font-cinzel text-2xl font-bold text-midnight">Consultation Form Sent!</h3>
                <p className="text-midnight/70 font-cormorant text-lg max-w-md mx-auto">
                  Redirecting you to the confirmation page. You may also message us directly on WhatsApp anytime.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-midnight/60 mb-2">Your Name *</label>
                    <input {...register("name")} className="w-full border-b-2 border-midnight/10 bg-transparent py-3 focus:border-gold focus:outline-none transition-colors font-cormorant text-xl" placeholder="Full Name" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-midnight/60 mb-2">Phone / WhatsApp *</label>
                    <input {...register("phone")} className="w-full border-b-2 border-midnight/10 bg-transparent py-3 focus:border-gold focus:outline-none transition-colors font-cormorant text-xl" placeholder="+91 98765 43210" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-midnight/60 mb-2">Email Address *</label>
                    <input {...register("email")} className="w-full border-b-2 border-midnight/10 bg-transparent py-3 focus:border-gold focus:outline-none transition-colors font-cormorant text-xl" placeholder="name@example.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-midnight/60 mb-2">Preferred Language</label>
                    <select {...register("language_pref")} className="w-full border-b-2 border-midnight/10 bg-transparent py-3 focus:border-gold focus:outline-none transition-colors font-cormorant text-xl cursor-pointer">
                      <option value="English">English</option>
                      <option value="Telugu">Telugu</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-midnight/60 mb-2">Date of Birth</label>
                    <input type="date" {...register("dob")} className="w-full border-b-2 border-midnight/10 bg-transparent py-3 focus:border-gold focus:outline-none transition-colors font-cormorant text-xl" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-midnight/60 mb-2">Time of Birth</label>
                    <input type="time" {...register("tob")} className="w-full border-b-2 border-midnight/10 bg-transparent py-3 focus:border-gold focus:outline-none transition-colors font-cormorant text-xl" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-midnight/60 mb-2">Place of Birth</label>
                    <input {...register("pob")} className="w-full border-b-2 border-midnight/10 bg-transparent py-3 focus:border-gold focus:outline-none transition-colors font-cormorant text-xl" placeholder="City, State, Country" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-midnight/60 mb-2">Service Required *</label>
                    <select {...register("service")} className="w-full border-b-2 border-midnight/10 bg-transparent py-3 focus:border-gold focus:outline-none transition-colors font-cormorant text-xl cursor-pointer">
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
                  <label className="block text-xs font-bold uppercase tracking-widest text-midnight/60 mb-2">Your Message</label>
                  <textarea {...register("message")} rows={4} className="w-full border-b-2 border-midnight/10 bg-transparent py-3 focus:border-gold focus:outline-none transition-colors font-cormorant text-xl resize-none" placeholder="Any specific concerns or questions?"></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-[#25D366] text-white font-bold py-5 rounded-xl hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all duration-300 flex justify-center items-center gap-3 text-sm uppercase tracking-widest disabled:opacity-70 group mt-8">
                  <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? "Opening WhatsApp..." : "Send on WhatsApp"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* USEFUL CONSULTATION GUIDE & FAQ SECTION (EXPANDED CONTENT 300+ WORDS) */}
      <section className="py-20 bg-white border-t border-gold/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs">Consultation Guidelines</span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-midnight mt-2">
              How to Book &amp; What to Prepare
            </h2>
            <p className="font-cormorant text-lg text-midnight/70 mt-3">
              We provide both in-person consultations at MVP Colony, Visakhapatnam and remote sessions via WhatsApp video across India and worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-ivory border border-gold/15 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center font-cinzel text-xl font-bold">
                1
              </div>
              <h3 className="font-cinzel text-xl font-bold text-midnight">Consultation Formats</h3>
              <p className="font-cormorant text-base text-midnight/80 leading-relaxed">
                Choose between visiting our traditional practice at <strong>MVP Colony, Visakhapatnam</strong> or booking an online audio/video reading via WhatsApp. Both formats offer equal analytical depth and direct dialogue with Sri Raghavendra Siddhanti garu in English or Telugu.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-ivory border border-gold/15 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center font-cinzel text-xl font-bold">
                2
              </div>
              <h3 className="font-cinzel text-xl font-bold text-midnight">What to Prepare</h3>
              <p className="font-cormorant text-base text-midnight/80 leading-relaxed">
                To cast an accurate Janma Kundali, please have your <strong>exact Date of Birth</strong>, <strong>Time of Birth</strong> (from hospital birth records if available), and <strong>Birth Place</strong>. For Kundali Matching, bring or send birth coordinates for both prospective partners.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-ivory border border-gold/15 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center font-cinzel text-xl font-bold">
                3
              </div>
              <h3 className="font-cinzel text-xl font-bold text-midnight">Response Time &amp; Ethics</h3>
              <p className="font-cormorant text-base text-midnight/80 leading-relaxed">
                Inquiries submitted through our form or WhatsApp are acknowledged within <strong>2 to 4 business hours</strong>. All personal birth details, family charts, and consultation discussions remain strictly confidential under our privacy standards.
              </p>
            </div>
          </div>

          {/* Contact FAQs */}
          <div className="max-w-4xl mx-auto border-t border-gold/15 pt-12">
            <h3 className="font-cinzel text-2xl font-bold text-midnight mb-8 text-center">
              Frequently Asked Questions About Appointments
            </h3>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-ivory border border-gold/10">
                <h4 className="font-bold text-midnight text-base mb-2">
                  Do I need to book an appointment before visiting the MVP Colony office?
                </h4>
                <p className="font-cormorant text-midnight/80 text-base leading-relaxed">
                  Yes, prior appointment booking is strongly recommended to avoid waiting times. Sri Raghavendra Siddhanti garu conducts comprehensive, unrushed sessions, so booking in advance reserves your dedicated time slot.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-ivory border border-gold/10">
                <h4 className="font-bold text-midnight text-base mb-2">
                  Are online video consultations via WhatsApp as accurate as in-person visits?
                </h4>
                <p className="font-cormorant text-midnight/80 text-base leading-relaxed">
                  Yes. Vedic astrology calculations depend on mathematical planetary positions determined by exact birth time and geographic coordinates. The accuracy of chart analysis, dasha timing, and remedies is identical whether in person or online.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-ivory border border-gold/10">
                <h4 className="font-bold text-midnight text-base mb-2">
                  What if my exact birth time is approximate or uncertain?
                </h4>
                <p className="font-cormorant text-midnight/80 text-base leading-relaxed">
                  If your birth time is within a narrow window (e.g., within 15–30 minutes), we perform traditional birth time rectification (Janma Kundali Shodhana) using milestone life events such as marriage, education, or career shifts before reading the chart.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-ivory border border-gold/10">
                <h4 className="font-bold text-midnight text-base mb-2">
                  Can consultations be conducted in Telugu?
                </h4>
                <p className="font-cormorant text-midnight/80 text-base leading-relaxed">
                  Yes, Sri Raghavendra Siddhanti garu conducts consultations fluently in both Telugu and English. You may select your preferred language when submitting the form or on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
