import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@src/components/breadcrumb";
import BankPartners from "@src/components/home/BankPartners";
import { Sparkles, ShieldCheck, CheckCircle2, Award, Phone, ArrowRight, BarChart3, TrendingUp, Landmark } from "lucide-react";
import { InformationData } from "@src/constant";

export const metadata: Metadata = {
  title: "Strategic Financial Advisory | Vaishnavi Associates Hyderabad",
  description: "CMA data preparation, bank debt syndication, TEV studies, and working capital advisory by Vaishnavi Associates.",
};

export default function FinancialAdvisoryPage() {
  const pillars = [
    {
      title: "Bank Debt Syndication",
      desc: "Structured debt proposals from ₹5 Crore to ₹100+ Crore with public and private sector banks.",
      icon: <Landmark className="w-6 h-6 text-gold-500" />,
    },
    {
      title: "CMA Data & Project Reports",
      desc: "Comprehensive credit monitoring arrangement (CMA) models complying with RBI bank risk guidelines.",
      icon: <BarChart3 className="w-6 h-6 text-gold-500" />,
    },
    {
      title: "TEV & Viability Studies",
      desc: "Techno-Economic Viability reports vetted by approved chartered engineers and financial analysts.",
      icon: <TrendingUp className="w-6 h-6 text-gold-500" />,
    },
    {
      title: "Working Capital Optimization",
      desc: "Cash credit, overdraft limit enhancement, and non-fund based limits (LC / BG) management.",
      icon: <Award className="w-6 h-6 text-gold-500" />,
    },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <section
        style={{
          background: "linear-gradient(180deg, #061527 0%, #0B2545 60%, #061527 100%)",
        }}
        className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 text-white overflow-hidden"
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="mainContainer relative z-10">
          <div className="mb-6">
            <Breadcrumb route="/financial-advisory" name="Financial Advisory" />
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C59B27]/40 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Institutional Financial Advisory</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight text-white">
              Strategic Debt Syndication & <span className="gold-gradient-text">Capital Advisory</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Empowering manufacturers, infrastructure developers, and corporate enterprises across Telangana & Andhra Pradesh with institutional debt structuring and multi-bank syndication.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/contact-us"
                style={{
                  background: "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
                  color: "#061527",
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base shadow-gold-glow hover:brightness-110 transition-all text-center"
              >
                Schedule Executive Review
              </Link>
              <a
                href={`tel:${InformationData.contactNumber}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center text-sm sm:text-base"
              >
                Call: {InformationData.contactNumber}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="mainContainer">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy-950">
              Our Core Advisory Pillars
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Structured finance solutions designed to accelerate growth and optimize capital costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-gold-400 hover:shadow-luxury transition-all duration-300 flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy-950 flex items-center justify-center shrink-0 shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-950 mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BankPartners />
    </div>
  );
}
