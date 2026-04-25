"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/lib/supabase";

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
      <section className="bg-deepPurple text-ivory py-24 text-center">
        <h1 className="font-cinzel text-5xl font-bold mb-6 text-gold">Begin Your Journey Here</h1>
        <p className="text-xl opacity-80">Your first consultation is just one message away.</p>
      </section>

      <section className="py-24 max-w-3xl mx-auto px-4 w-full">
        {isSuccess ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded text-center">
            <h3 className="text-2xl font-bold mb-2">Request Sent Successfully!</h3>
            <p>We will contact you shortly to confirm your consultation time.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded shadow-sm border border-gold/10">
            <h2 className="text-2xl font-bold mb-6 font-cinzel text-gold">Book a Consultation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input {...register("name")} className="w-full border p-2 rounded" />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input {...register("phone")} className="w-full border p-2 rounded" />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input {...register("email")} className="w-full border p-2 rounded" />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Preferred Language</label>
                <select {...register("language_pref")} className="w-full border p-2 rounded">
                  <option value="English">English</option>
                  <option value="Telugu">Telugu</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Date of Birth</label>
                <input type="date" {...register("dob")} className="w-full border p-2 rounded text-black" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time of Birth</label>
                <input type="time" {...register("tob")} className="w-full border p-2 rounded text-black" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Place of Birth</label>
                <input {...register("pob")} className="w-full border p-2 rounded text-black" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Service Required</label>
                <select {...register("service")} className="w-full border p-2 rounded text-black">
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
              <label className="block text-sm font-medium mb-1">Your Message</label>
              <textarea {...register("message")} rows={4} className="w-full border p-2 rounded text-black"></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-[#25D366] text-white font-bold py-3 rounded hover:bg-[#128C7E] transition-colors flex justify-center items-center">
              {isSubmitting ? "Opening WhatsApp..." : "Send on WhatsApp"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
