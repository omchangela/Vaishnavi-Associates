"use client";

import React from "react";
import Banner from "@src/components/banner";
import ContactForm from "@src/components/Forms/contactForm";
import { Phone, Mail, MapPin, Clock, ShieldCheck, MessageSquare, ArrowRight } from "lucide-react";
import { InformationData } from "@src/constant";

export default function ContactUs() {
  return (
    <div>
      <Banner
        route="/contact-us"
        name="Contact Us"
        title="Get in Touch with Vaishnavi Associates"
      />

      <section className="py-20 sm:py-28 bg-slate-50/70">
        <div className="mainContainer">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block">
                  Corporate Advisory Office
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy-950 leading-tight">
                  We're Here to Discuss Your <span className="gold-gradient-text">Next Milestone</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Visit our office in Kompally, Hyderabad, or reach out via phone and email. Our financial specialists are available Monday to Saturday.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                
                {/* Address */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900/5 text-gold-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-navy-950 mb-1">Office Address</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {InformationData.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900/5 text-gold-500 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-navy-950 mb-1">Direct Phone</h4>
                    <a
                      href={`tel:${InformationData.contactNumber}`}
                      className="text-xs sm:text-sm font-semibold text-navy-900 hover:text-gold-600 transition"
                    >
                      {InformationData.contactNumber}
                    </a>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Mon - Sat, 9:30 AM to 6:30 PM
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900/5 text-gold-500 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-navy-950 mb-1">Email Correspondence</h4>
                    <a
                      href={`mailto:${InformationData.email}`}
                      className="text-xs sm:text-sm font-semibold text-navy-900 hover:text-gold-600 transition"
                    >
                      {InformationData.email}
                    </a>
                  </div>
                </div>

              </div>

              {/* WhatsApp Assist */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg space-y-3">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <MessageSquare className="w-5 h-5" />
                  <span>Instant WhatsApp Loan Query</span>
                </div>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Prefer instant messaging? Chat directly with our loan manager on WhatsApp for fast pre-qualification.
                </p>
                <a
                  href={`https://wa.me/919182258090?text=Hi%20Vaishnavi%20Associates,%20I%20am%20interested%20in%20a%20loan%20consultation`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-emerald-800 text-xs font-bold hover:bg-emerald-50 transition"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

          {/* Office Map Section */}
          <div className="mt-20 rounded-3xl overflow-hidden border border-slate-200 shadow-luxury bg-white">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-navy-950">Visit Our Hyderabad Office</h3>
                <p className="text-xs text-slate-500">S.P.N Mansion 2, Jayabheri Park Road, Kompally</p>
              </div>
              <a
                href={InformationData.addressLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-gold-600 hover:text-gold-700 underline"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="w-full h-80 sm:h-96">
              <iframe
                src={InformationData.addressIframLink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vaishnavi Associates Office Location"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}