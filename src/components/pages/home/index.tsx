"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeBanner from "@src/components/homeBanner";
import BankPartners from "@src/components/home/BankPartners";
import Technologies from "@src/components/technologies";
import EmiCalculator from "@src/components/calculator/EmiCalculator";
import Features from "@src/components/features";
import WhyChooseUs from "@src/components/whyChooseUs";
import WhoWeServe from "@src/components/home/WhoWeServe";
import { Star, Quote, ArrowRight, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";
import { InformationData } from "@src/constant";

const testimonials = [
  {
    name: "Rajeshwar Rao",
    designation: "Managing Director",
    company: "Sri Krishna Infra Projects, Hyderabad",
    amount: "₹3.5 Crore Business Loan",
    rating: 5,
    text: "Vaishnavi Associates secured our working capital expansion loan in just 5 working days when our primary bank had kept the file pending for 2 months. Their multi-bank strategy and documentation speed is genuinely peerless.",
  },
  {
    name: "Dr. Sunitha Reddy",
    designation: "Consultant Physician",
    company: "Kompally, Secunderabad",
    amount: "₹85 Lakh Home Loan",
    rating: 5,
    text: "We wanted a home loan with the absolute lowest interest rate and zero prepayment penalties. Vaishnavi Associates compared 4 banks, coordinated all doorstep paperwork, and got us 8.40% interest. Truly professional service!",
  },
  {
    name: "P. Venkat Ramana",
    designation: "Proprietor",
    company: "VR Agro Industries, Medchal",
    amount: "₹1.8 Crore Machinery Loan + Trade License",
    rating: 5,
    text: "They handled everything under one roof: our machinery financing sanction, government CGTMSE subsidy guidance, and municipal trade licensing renewal. Saved us weeks of running between offices.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* 1. Hero Section */}
      <HomeBanner />

      {/* 2. Partner Banks Showcase */}
      <BankPartners />

      {/* 3. Core Specializations (Loans, Real Estate, Registrations) */}
      <Technologies />

      {/* 4. Interactive Live EMI Calculator */}
      <EmiCalculator />

      {/* 5. 4-Step Effortless Process & Product Tags */}
      <Features />

      {/* 6. Why Choose Vaishnavi Associates */}
      <WhyChooseUs />

      {/* 7. Who We Serve */}
      <WhoWeServe />

      {/* 8. Client Reviews & Testimonials Section */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="mainContainer">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-700 text-xs sm:text-sm font-bold mb-4">
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <span>Verified Client Success</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight leading-tight">
              Trusted by Businesses & Homeowners Across <span className="gold-gradient-text">Telangana</span>
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg">
              Hear directly from entrepreneurs, professionals, and families who trusted us with their financing and real estate milestones.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-8 bg-slate-50/70 border border-slate-200/80 shadow-sm hover:shadow-luxury hover:border-gold-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-navy-900/5 text-navy-900 border border-navy-900/10">
                      {item.amount}
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                    "{item.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-950 text-gold-400 font-bold flex items-center justify-center text-sm shadow-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-navy-950">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.designation}, {item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section
        style={{ background: "linear-gradient(135deg, #061527 0%, #0B2545 50%, #061527 100%)" }}
        className="py-16 sm:py-20 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mainContainer relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Pre-Approved Financial Assessment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight">
            Ready to Accelerate Your <span className="gold-gradient-text">Loan Approval</span>?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Connect directly with senior loan executives. Get eligibility verification, bank interest comparisons, and doorstep document pickup.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact-us"
              style={{
                background: "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
                color: "#061527",
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-extrabold shadow-gold-glow hover:brightness-110 transition-all duration-300 text-sm sm:text-base"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${InformationData.contactNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call: {InformationData.contactNumber}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}