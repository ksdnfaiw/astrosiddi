"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-midnight">
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
            <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">Begin Your Journey</h1>
            <p className="text-xl md:text-2xl opacity-80 font-cormorant font-medium mb-8">Your first consultation is just one message away.</p>
            <p className="text-gold/80 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> MVP Colony, Visakhapatnam</span>
              <span className="hidden sm:inline">&middot;</span>
              <a href="https://www.google.com/maps?q=17.7424617,83.3292402&z=17&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors underline-offset-4 hover:underline">View on Map</a>
              <span className="hidden sm:inline">&middot;</span>
              <span>Online Worldwide</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-32 max-w-7xl mx-auto px-4 w-full relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none z-0"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
          
          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h2 className="font-cinzel text-3xl font-bold mb-8 text-midnight">Direct Contact</h2>
            <p className="font-cormorant text-lg text-midnight/70 mb-10">Reach out directly or use the form to book a detailed consultation. We aim to respond within 24 hours.</p>
            
            <div className="space-y-8">
              <a href="tel:+919652412221" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-midnight transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Phone / WhatsApp</h4>
                  <p className="text-midnight/70 font-cormorant text-lg">+91 96524 12221</p>
                </div>
              </a>
              
              <a href="mailto:info@astrosiddhi.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-midnight transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-midnight/70 font-cormorant text-lg">info@astrosiddhi.com</p>
                </div>
              </a>
              
              <a href="https://www.google.com/maps?q=17.7424617,83.3292402&z=17&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-midnight transition-colors shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-midnight/70 font-cormorant text-lg">MVP Colony Double Road,<br/>Opp. Axis Bank, Visakhapatnam, AP</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            {isSuccess ? (
              <div className="bg-white border border-green-200 text-green-800 p-12 rounded-2xl text-center shadow-xl flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                <h3 className="font-cinzel text-3xl font-bold mb-4">Request Sent Successfully!</h3>
                <p className="font-cormorant text-xl opacity-80">We will contact you shortly via WhatsApp to confirm your consultation time.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-gold/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <h2 className="text-3xl font-bold mb-8 font-cinzel text-midnight">Book a Consultation</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-midnight/60 mb-2">Full Name *</label>
                    <input {...register("name")} className="w-full border-b-2 border-midnight/10 bg-transparent py-3 focus:border-gold focus:outline-none transition-colors font-cormorant text-xl" placeholder="Your Name" />
                    {errors.name && <span className="text-red-500 text-xs mt-1 absolute">{errors.name.message}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-midnight/60 mb-2">Phone Number *</label>
                    <input {...register("phone")} className="w-full border-b-2 border-midnight/10 bg-transparent py-3 focus:border-gold focus:outline-none transition-colors font-cormorant text-xl" placeholder="+91 00000 00000" />
                    {errors.phone && <span className="text-red-500 text-xs mt-1 absolute">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-midnight/60 mb-2">Email</label>
                    <input {...register("email")} className="w-full border-b-2 border-midnight/10 bg-transparent py-3 focus:border-gold focus:outline-none transition-colors font-cormorant text-xl" placeholder="your@email.com" />
                    {errors.email && <span className="text-red-500 text-xs mt-1 absolute">{errors.email.message}</span>}
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
    </div>
  );
}
