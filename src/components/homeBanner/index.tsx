import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Coins,
  FileCheck,
  CheckCircle2,
  Percent,
  Calculator,
  Award,
  Sparkles
} from "lucide-react";
import { Logos } from "@src/constant";

export default function HomeBanner() {
  const heroFeatures = [
    {
      title: "Loan & Financial Solutions",
      icon: <Coins className="w-5 h-5 text-gold-400" />,
      tag: "Multi-Bank Options",
      benefit: "Business, Home, LAP & Project financing with top banks",
      link: "/loans",
    },
    {
      title: "CIBIL & Credit Services",
      icon: <ShieldCheck className="w-5 h-5 text-gold-400" />,
      tag: "Score Analysis",
      benefit: "Credit profile analysis, dispute resolution & score recovery",
      link: "/cibil",
    },
    {
      title: "Accounting & Taxation",
      icon: <FileCheck className="w-5 h-5 text-gold-400" />,
      tag: "100% Compliant",
      benefit: "GST, ITR, TDS filings, bookkeeping & audit assistance",
      link: "/accounting",
    },
    {
      title: "Demat & Trading Services",
      icon: <Building2 className="w-5 h-5 text-gold-400" />,
      tag: "Wealth & Markets",
      benefit: "Seamless account opening & coordinated investment support",
      link: "/demat",
    },
    {
      title: "Corporate Banking & Legal",
      icon: <Award className="w-5 h-5 text-gold-400" />,
      tag: "End-to-End",
      benefit: "Company registration, trade licenses & legal coordination",
      link: "/corporate-banking",
    },
    {
      title: "Digital Marketing Services",
      icon: <Sparkles className="w-5 h-5 text-gold-400" />,
      tag: "Business Growth",
      benefit: "SEO, branding, web development & digital presence",
      link: "/digital-marketing",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #061527 0%, #0B2545 60%, #061527 100%)",
      }}
      className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 overflow-hidden text-white"
    >
      {/* Background Lighting Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="mainContainer relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-[#C59B27]/40 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Financial • Accounting • Corporate • Digital Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
              Your Trusted Partner for{" "}
              <span className="gold-gradient-text">Financial & Business Solutions</span>
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              At Vaishnavi Associates, we provide professional financial, accounting, taxation, corporate, investment and digital solutions for individuals, entrepreneurs, businesses and corporates. Our goal is to simplify complex requirements through professional guidance, transparent communication and coordinated assistance.
            </p>

            {/* 6 Core Solutions List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left max-w-xl mx-auto lg:mx-0">
              {[
                "Loan & Financial Solutions",
                "CIBIL & Credit Services",
                "Accounting & Taxation Services",
                "Demat & Trading Services",
                "Corporate Banking & Legal Services",
                "Digital Marketing Services",
              ].map((service, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact-us"
                style={{
                  background: "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
                  color: "#061527",
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-extrabold shadow-gold-glow hover:brightness-110 transition-all duration-300 group text-sm sm:text-base"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 text-sm sm:text-base"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Explore Solutions</span>
              </Link>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Interactive Floating Card */}
            <div
              style={{
                backgroundColor: "rgba(11, 37, 69, 0.85)",
                borderColor: "rgba(197, 155, 39, 0.4)",
              }}
              className="relative rounded-3xl border backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-6 text-white"
            >
              
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400 font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white">
                      Vaishnavi Advantage
                    </h3>
                    <p className="text-xs text-slate-300">
                      Fast-track your financial sanction
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  99% Approval
                </span>
              </div>

              {/* Service Pillars List */}
              <div className="space-y-3">
                {heroFeatures.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    className="block p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span className="font-bold text-sm text-white group-hover:text-gold-400 transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gold-300">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 pl-7">
                      {item.benefit}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Bottom Live Metric */}
              <div
                style={{ backgroundColor: "rgba(6, 21, 39, 0.9)" }}
                className="pt-2 flex items-center justify-between text-xs p-4 rounded-xl border border-white/10"
              >
                <div>
                  <span className="text-slate-400 block text-[11px]">Cumulative Sanction</span>
                  <span className="text-base font-extrabold text-gold-400">₹250+ Crore</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 block text-[11px]">Active Borrowers</span>
                  <span className="text-base font-extrabold text-white">5,000+ Happy</span>
                </div>
              </div>

            </div>

            {/* Floating 3D Badge (Bottom Left) */}
            <div
              style={{
                backgroundColor: "rgba(6, 21, 39, 0.95)",
                borderColor: "rgba(197, 155, 39, 0.5)",
              }}
              className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 border rounded-2xl p-4 shadow-2xl backdrop-blur-md z-20"
            >
              <div
                style={{ background: "linear-gradient(135deg, #DFB758, #C59B27)" }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-navy-950 font-black"
              >
                <Percent className="w-5 h-5 text-navy-950" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Starting from</span>
                <span className="text-lg font-extrabold text-gold-400">8.40% p.a.</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Statistics Banner */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-2xl sm:text-4xl font-extrabold font-display gold-gradient-text block">
              ₹250+ Cr
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium">
              Loan Volume Disbursed
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-4xl font-extrabold font-display gold-gradient-text block">
              30+ Banks
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium">
              Direct Lending Network
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-4xl font-extrabold font-display gold-gradient-text block">
              5,000+
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium">
              Satisfied Clients
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-4xl font-extrabold font-display gold-gradient-text block">
              99%
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium">
              Sanction Success Rate
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}